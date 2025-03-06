<script lang="ts">
	import ButtonBase from './ButtonBase.svelte'
	import { DuckSpinner } from '../index.js'
	import type { TextButtonBaseProps } from './types.d.ts'

	let { children, loading, icon, ...stuff }: TextButtonBaseProps = $props()
</script>

{#snippet baseChildren()}
	<div class="vuuui-body" style:visibility={loading ? 'hidden' : 'initial'}>
		{#if icon}
			<span class="vuuui-icon">
				{@render icon()}
			</span>
		{/if}

		<span class="vuuui-content">
			{@render children()}
		</span>
	</div>

	{#if loading}
		<div class="vuuui-spinner">
			<DuckSpinner />
		</div>
	{/if}
{/snippet}

<ButtonBase children={baseChildren} {loading} {...stuff}></ButtonBase>
