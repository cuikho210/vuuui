<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements'
	import type { Snippet } from 'svelte'
	import '@vuuui/styles/components/navigation/app_bar.scss'

	interface AppBarProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
		leading?: Snippet
		title?: Snippet
		actions?: Snippet
	}

	let { leading, title, actions, ...rest }: AppBarProps = $props()
</script>

<section {...rest} class="vuuui-app-bar {rest.class}">
	<div class="vuuui-app-bar-section-left">
		<div class="vuuui-app-bar-leading">
			{#if leading}
				{@render leading()}
			{/if}
		</div>

		<div class="vuuui-app-bar-title">
			{#if title}
				{@render title()}
			{/if}
		</div>
	</div>

	<div class="vuuui-app-bar-actions">
		{#if actions}
			{@render actions()}
		{/if}
	</div>
</section>
