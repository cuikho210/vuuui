<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements'
	import '@vuuui/styles/components/containment/container.scss'

	interface ContainerProps extends HTMLAttributes<HTMLElement> {
		xs?: boolean
		sm?: boolean
		md?: boolean
		fluid?: boolean
	}

	let { children, xs, sm, md, fluid, ...rest }: ContainerProps = $props()
</script>

<section
	{...rest}
	data-xs={xs}
	data-sm={sm}
	data-md={md}
	data-fluid={fluid}
	class="vuuui-container {rest.class}"
>
	{#if children}
		{@render children()}
	{/if}
</section>
