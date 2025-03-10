<script lang="ts">
	import ButtonBase from './ButtonBase.svelte'
	import { DuckSpinner } from '../index.js'
	import type { ButtonBaseProps } from './types.d.ts'
	import '@vuuui/styles/components/buttons/icon_button.scss'

	let { children, ...rest }: ButtonBaseProps = $props()
</script>

{#snippet baseChildren()}
	<div class="vuuui-body" style:visibility={rest.loading ? 'hidden' : 'initial'}>
		{@render children()}
	</div>

	{#if rest.loading}
		<div class="vuuui-spinner">
			<DuckSpinner />
		</div>
	{/if}
{/snippet}

<ButtonBase children={baseChildren} {...rest} class="vuuui-icon-button {rest.class}"></ButtonBase>
