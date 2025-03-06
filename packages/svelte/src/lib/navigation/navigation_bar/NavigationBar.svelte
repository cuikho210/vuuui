<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements'
	import '@vuuui/styles/components/navigation/navigation_bar/navigation_bar.scss'

	let { children, ...rest }: HTMLAttributes<HTMLElement> = $props()
</script>

<section {...rest} class="vuuui-navigation-bar {rest.class}">
	{#if children}
		{@render children()}
	{/if}
</section>
