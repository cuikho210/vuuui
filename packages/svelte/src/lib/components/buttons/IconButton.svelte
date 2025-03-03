<script lang="ts">
	import ButtonBase from './ButtonBase.svelte'
	import { DuckSpinner } from '../index.js'
	import type { ButtonBaseProps } from './types.d.ts'
	import '@vuuui/styles/components/buttons/icon_button.scss'

	let { children, ...stuff }: ButtonBaseProps = $props()
</script>

{#snippet baseChildren()}
	<div class="vuuui-body" style:visibility={stuff.loading ? 'hidden' : 'initial'}>
		{@render children()}
	</div>

	{#if stuff.loading}
		<div class="vuuui-spinner">
			<DuckSpinner />
		</div>
	{/if}
{/snippet}

<ButtonBase children={baseChildren} {...stuff} class="vuuui-icon-button"></ButtonBase>
