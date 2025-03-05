<script lang="ts">
	import '@vuuui/styles/components/inputs/file_input.scss'
	import type { Snippet } from 'svelte'
	import type { HTMLInputAttributes } from 'svelte/elements'

	interface FileInputProps extends HTMLInputAttributes {
		icon?: Snippet
		files?: FileList
	}

	let { icon, files = $bindable(), placeholder, ...stuff }: FileInputProps = $props()
</script>

<label class="vuuui-file-input">
	<input type="file" bind:files {placeholder} {...stuff} />

	<div class="vuuui-icon">
		{#if icon}
			{@render icon()}
		{/if}
	</div>

	<div class="vuuui-placeholder">
		{placeholder}
	</div>
</label>
