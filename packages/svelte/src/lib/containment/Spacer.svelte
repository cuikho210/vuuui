<script lang="ts">
	import '@vuuui/styles/components/containment/spacer.scss'
	import type { Property } from 'csstype'
	import type { Snippet } from 'svelte'

	let {
		children,
		gap,
		wrap,
		justify,
		align,
		direction
	}: {
		children: Snippet
		gap?: Property.Gap
		wrap?: Property.FlexWrap
		justify?: Property.JustifyContent
		align?: Property.AlignItems
		direction?: Property.FlexDirection
	} = $props()
</script>

<div
	class="vuuui-spacer"
	style:gap
	style:flex-wrap={wrap}
	style:justify-content={justify}
	style:align-items={align}
	style:flex-direction={direction}
>
	{@render children()}
</div>
