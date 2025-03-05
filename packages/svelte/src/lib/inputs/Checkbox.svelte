<script lang="ts">
	import '@vuuui/styles/components/inputs/checkbox_input.scss'
	import type { HTMLInputAttributes } from 'svelte/elements'

	let { checked = $bindable(false), placeholder, ...stuff }: HTMLInputAttributes = $props()
</script>

<label class="vuuui-checkbox">
	<input type="checkbox" bind:checked {...stuff} />

	<div class="vuuui-icon">
		<div class="vuuui-checkmark">
			<span>&#10004;</span>
		</div>
	</div>

	{placeholder}
</label>
