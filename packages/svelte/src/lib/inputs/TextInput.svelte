<script lang="ts">
	import '@vuuui/styles/components/inputs/text_input.scss'
	import { Snippet } from 'svelte'

	let {
		icon,
		value = $bindable(),
		placeholder
	}: {
		icon?: Snippet
		value?: string
		placeholder?: string
	} = $props()
</script>

<div class="vuuui-text-input">
	<input bind:value {placeholder} />

	<div class="vuuui-icon">
		{#if icon}
			{@render icon()}
		{/if}
	</div>

	<div class="vuuui-placeholder">{placeholder}</div>
</div>
