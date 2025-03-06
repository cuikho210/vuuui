<script lang="ts">
	import TextButtonBase from './TextButtonBase.svelte'
	import type { TextButtonBaseProps } from './types.d.ts'
	import '@vuuui/styles/components/buttons/text_button.scss'

	let props: TextButtonBaseProps = $props()
</script>

<TextButtonBase {...props} class="vuuui-text-button" />
