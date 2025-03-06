<script lang="ts">
	import '@vuuui/styles/components/inputs/text_input.scss'
	import type { Snippet } from 'svelte'
	import type { HTMLInputAttributes } from 'svelte/elements'

	interface TextInputProps extends HTMLInputAttributes {
		icon?: Snippet
	}

	let { icon, value = $bindable(), placeholder, ...stuff }: TextInputProps = $props()
</script>

<div class="vuuui-text-input">
	<input bind:value {placeholder} {...stuff} />

	<div class="vuuui-icon">
		{#if icon}
			{@render icon()}
		{/if}
	</div>

	<div class="vuuui-placeholder">{placeholder}</div>
</div>
