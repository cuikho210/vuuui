<script lang="ts">
	import '@vuuui/styles/components/inputs/switch.scss'

	let {
		checked = $bindable(),
		placeholder
	}: {
		checked?: boolean
		placeholder?: string
	} = $props()
</script>

<label class="vuuui-switch">
	<input type="checkbox" bind:checked />

	<div class="vuuui-switch-button">
		<div class="vuuui-switch-dot"></div>
	</div>

	{placeholder}
</label>
