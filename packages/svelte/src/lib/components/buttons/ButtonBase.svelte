<script lang="ts">
	import type { ButtonBaseProps } from './types.js'
	let { children, disabled, loading, active, ...stuff }: ButtonBaseProps = $props()
</script>

<button disabled={loading || disabled} data-active={active} {...stuff}>
	{@render children()}
</button>
