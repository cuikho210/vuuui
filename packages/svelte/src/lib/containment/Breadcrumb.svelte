<script lang="ts">
	import '@vuuui/styles/components/containment/breadcrumb.scss'
	import type { HTMLAttributes } from 'svelte/elements'

	let { children, ...rest }: HTMLAttributes<HTMLDivElement> = $props()
</script>

<div {...rest} class="vuuui-breadcrumb {rest.class}">
	{#if children}
		{@render children()}
	{/if}
</div>
