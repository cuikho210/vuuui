<script lang="ts">
	import '@vuuui/styles/components/inputs/color_input.scss'
	import { Snippet } from 'svelte'

	let {
		value = $bindable(),
		placeholder,
		icon
	}: {
		value?: string
		placeholder?: string
		icon?: Snippet
	} = $props()
</script>

<label class="vuuui-color-input">
	<input type="color" bind:value {placeholder} />

	<div class="vuuui-icon">
		{#if icon}
			{@render icon()}
		{/if}
	</div>
	<div class="vuuui-placeholder">{placeholder}</div>
</label>
