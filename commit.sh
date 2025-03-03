#!/usr/bin/bash

cd "$(dirname "$0")"

provider="mistral"
commit_msg=""

function load_provider_config() {
    case $provider in
        "huggingface")
            MODEL="Qwen/Qwen2.5-Coder-32B-Instruct"
            API_URL="https://api-inference.huggingface.co/models/$MODEL/v1/chat/completions"
            AUTH_HEADER="Authorization: Bearer $HF_TOKEN"
            ;;
        "openai")
            MODEL="o3-mini"
            API_URL="https://api.openai.com/v1/chat/completions"
            AUTH_HEADER="Authorization: Bearer $OPENAI_API_KEY"
            ;;
        "gemini")
            MODEL="gemini-2.0-flash"
            API_URL="https://generativelanguage.googleapis.com/v1beta/models/$MODEL:generateContent"
            AUTH_HEADER="x-goog-api-key: $GEMINI_API_KEY"
            ;;
        "openrouter")
            MODEL="deepseek/deepseek-r1:free"
            API_URL="https://openrouter.ai/api/v1/chat/completions"
            AUTH_HEADER="Authorization: Bearer $OPENROUTER_API_KEY"
            ;;
        "mistral")
            MODEL="pixtral-large-2411"
            API_URL="https://api.mistral.ai/v1/chat/completions"
            AUTH_HEADER="Authorization: Bearer $MISTRAL_API_KEY"
            ;;
        *)
            echo "Invalid provider. Use 'huggingface', 'openai', 'gemini', 'mistral' or 'openrouter'"
            exit 1
            ;;
    esac
}

function parse_args() {
    while [[ "$#" -gt 0 ]]; do
        case $1 in
            -p|--provider) provider="$2"; shift ;;
            -m|--message) commit_msg="$2"; shift ;;
            *) echo "Unknown parameter: $1"; exit 1 ;;
        esac
        shift
    done
}

function get_git_diff() {
    local diff=$(git diff --cached -- . ':(exclude)**/*.lock' ':(exclude)**/*.lockb' | tr -d '\000-\037' | jq -Rs .)
    if [ -z "$diff" ]; then
        echo "No staged changes to commit."
        exit 1
    fi
    echo "$diff"
}

function get_commit_message() {
    local git_diff=$1
    local user_msg="${commit_msg:-""}"
    local json_input=$(jq -n \
        --arg diff "$git_diff" \
        --arg msg "$user_msg" \
        '"Git diff:\n```\n" + $diff + "\n```\nUser message:\n```\n" + $msg + "\n```\n"')

    local response

    if [ "$provider" = "gemini" ]; then
        response=$(call_gemini_api "$json_input")
    else
        response=$(call_default_api "$json_input")
    fi

    local commit_msg=$(extract_commit_message "$response")
    validate_commit_message "$commit_msg" "$response"

    echo "$commit_msg" | sed 's/^"//;s/"$//'
}

function call_gemini_api() {
    local user_msg=$1

    curl -s "$API_URL" \
        -H "$AUTH_HEADER" \
        -H "Content-Type: application/json" \
        -d "{
            \"contents\": [
                {\"role\": \"user\", \"parts\": [{\"text\": ${user_msg}}]}
            ],
            \"systemInstruction\": {
                \"role\": \"user\",
                \"parts\": [{\"text\": ${system_message}}]
            }
        }"
}

function call_default_api() {
    local user_msg=$1

    curl -s "$API_URL" \
        -X "POST" \
        -H "$AUTH_HEADER" \
        -H "Content-Type: application/json" \
        -H "x-use-cache: false" \
        -d "{
            \"model\": \"$MODEL\",
            \"messages\": [
                {\"role\": \"system\", \"content\": ${system_message}},
                {\"role\": \"user\", \"content\": ${user_msg}}
            ]
        }"
}

function extract_commit_message() {
    local response=$1
    if [ "$provider" = "gemini" ]; then
        echo "$response" | jq -r '.candidates[0].content.parts[0].text'
    else
        echo "$response" | jq -r '.choices[0].message.content' 2>/dev/null
    fi
}

function validate_commit_message() {
    local commit_msg=$1
    local response=$2
    if [ -z "$commit_msg" ] || [ "$commit_msg" = "null" ]; then
        echo "Error: Empty or null commit message. Full response:" >&2
        echo "$response" >&2
        exit 1
    fi
}

function main() {
    parse_args "$@"
    load_provider_config

    local git_diff=$(get_git_diff)

    while true; do
        local commit_msg=$(get_commit_message "$git_diff")
        echo "Suggested commit message:"
        echo "$commit_msg"

        read -p "Do you accept this commit message? (y/n): " confirm
        case $confirm in
            [Yy]*)
                git commit -S -m "$commit_msg"
                exit 0
                ;;
            [Nn]*) echo "Retrying..." ;;
            *) echo "Please answer y or n." ;;
        esac
    done
}

system_message=$(cat <<'EOF' | jq -Rs .
Generate a concise git commit message following Conventional Commits format:
<type>(<scope>): <description>

Types:
- feat: A new feature
- fix: A bug fix
- docs: Documentation only changes
- style: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- refactor: A code change that neither fixes a bug nor adds a feature
- test: Adding missing tests or correcting existing tests
- chore: Changes to the build process or auxiliary tools/libraries
- perf: A code change that improves performance
- ci: Changes to CI configuration files and scripts
- build: Changes that affect the build system or external dependencies

Rules:
- Use present tense
- No period at end
- Include scope when relevant
- Keep it brief but clear
- Start with lowercase
- Add BREAKING CHANGE: prefix if needed
- Include the scope/module name in parentheses when applicable
- Can include a longer description body after the first line if necessary
- Combine both automated analysis and user message into final commit message
- Return ONLY the commit message without any additional text or formatting.

Examples:
```
feat(auth): implement jwt authentication

- Add token generation and validation
- Include refresh token flow
- Setup token blacklist mechanism
```

```
fix(api): handle undefined user response
```

```
BREAKING CHANGE: feat(db): migrate to postgres v15

- Update connection pooling config
- Add new indices for performance
- Remove deprecated functions
```

```
chore(deps): bump node from 16.14.1 to 18.0.0
```
EOF
)

main "$@"
