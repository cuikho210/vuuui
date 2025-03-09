<script lang="ts">
	import '@vuuui/styles/components/containment/card.scss'
	import type { HTMLAttributes } from 'svelte/elements'

	interface CardProps extends HTMLAttributes<HTMLElement> {
		xs?: boolean
		sm?: boolean
		md?: boolean
		fluid?: boolean
	}

	let { children, xs, sm, md, fluid, ...rest }: CardProps = $props()
</script>

<section
	{...rest}
	class="vuuui-card {rest.class}"
	data-xs={xs}
	data-sm={sm}
	data-md={md}
	data-fluid={fluid}
>
	{#if children}
		{@render children()}
	{/if}
</section>
