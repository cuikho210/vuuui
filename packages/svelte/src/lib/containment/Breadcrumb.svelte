<script lang="ts">
	import '@vuuui/styles/components/containment/breadcrumb.scss'
	import type { Snippet } from 'svelte'

	let { children }: { children: Snippet } = $props()
</script>

<div class="vuuui-breadcrumb">
	{@render children()}
</div>
