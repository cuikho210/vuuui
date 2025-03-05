<script lang="ts">
	import '@vuuui/styles/components/inputs/switch.scss'
	import type { HTMLInputAttributes } from 'svelte/elements'

	let { checked = $bindable(), placeholder, ...stuff }: HTMLInputAttributes = $props()
</script>

<label class="vuuui-switch">
	<input type="checkbox" bind:checked {...stuff} />

	<div class="vuuui-switch-button">
		<div class="vuuui-switch-dot"></div>
	</div>

	{placeholder}
</label>
