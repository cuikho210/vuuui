<script lang="ts">
	import '@vuuui/styles/components/inputs/color_input.scss'
	import type { Snippet } from 'svelte'
	import type { HTMLInputAttributes } from 'svelte/elements'

	interface ColorInputProps extends HTMLInputAttributes {
		icon?: Snippet
	}

	let { value = $bindable(), placeholder, icon, ...stuff }: ColorInputProps = $props()
</script>

<label class="vuuui-color-input">
	<input type="color" bind:value {placeholder} {...stuff} />

	<div class="vuuui-icon">
		{#if icon}
			{@render icon()}
		{/if}
	</div>
	<div class="vuuui-placeholder">{placeholder}</div>
</label>
