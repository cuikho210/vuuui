<script lang="ts">
	import '@vuuui/styles/components/inputs/file_input.scss'
	import { Snippet } from 'svelte'

	let {
		icon,
		files,
		placeholder
	}: {
		icon?: Snippet
		files?: FileList
		placeholder?: string
	} = $props()
</script>

<label class="vuuui-file-input">
	<input type="file" bind:files {placeholder} />

	<div class="vuuui-icon">
		{#if icon}
			{@render icon()}
		{/if}
	</div>

	<div class="vuuui-placeholder">
		{placeholder}
	</div>
</label>
