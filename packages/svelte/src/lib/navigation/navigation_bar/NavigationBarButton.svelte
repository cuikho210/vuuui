<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements'
	import type { Snippet } from 'svelte'
	import '@vuuui/styles/components/navigation/navigation_bar/navigation_bar_button.scss'

	interface NavigationBarButtonProps extends HTMLAnchorAttributes {
		icon: Snippet
		iconActive: Snippet
		active?: boolean
	}

	let { active, icon, iconActive, children, ...rest }: NavigationBarButtonProps = $props()
</script>

<a {...rest} class="vuuui-navigation-bar-button {rest.class}" data-active={active}>
	<div class="vuuui-icon">
		{#if active}
			{@render iconActive()}
		{:else}
			{@render icon()}
		{/if}
	</div>

	{#if children}
		{@render children()}
	{/if}
</a>
