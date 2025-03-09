<script lang="ts">
	import '@vuuui/styles/components/containment/spacer.scss'
	import type { Property } from 'csstype'
	import type { HTMLAttributes } from 'svelte/elements'

	interface SpacerProps extends HTMLAttributes<HTMLDivElement> {
		gap?: Property.Gap
		wrap?: Property.FlexWrap
		justify?: Property.JustifyContent
		align?: Property.AlignItems
		direction?: Property.FlexDirection
	}

	let { children, gap, wrap, justify, align, direction, ...rest }: SpacerProps = $props()
</script>

<div
	{...rest}
	class="vuuui-spacer {rest.class}"
	style:gap
	style:flex-wrap={wrap}
	style:justify-content={justify}
	style:align-items={align}
	style:flex-direction={direction}
>
	{#if children}
		{@render children()}
	{/if}
</div>
