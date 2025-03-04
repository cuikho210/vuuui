<script lang="ts">
	import '@vuuui/styles/components/containment/container.scss'
	import type { Snippet } from 'svelte'

	let {
		children,
		xs,
		sm,
		md,
		fluid
	}: {
		children: Snippet
		xs?: boolean
		sm?: boolean
		md?: boolean
		fluid?: boolean
	} = $props()
</script>

<section class="vuuui-container" data-xs={xs} data-sm={sm} data-md={md} data-fluid={fluid}>
	{@render children()}
</section>
