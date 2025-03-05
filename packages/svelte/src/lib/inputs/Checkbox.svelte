<script lang="ts">
	import '@vuuui/styles/components/inputs/checkbox_input.scss'

	let {
		checked = $bindable(false),
		placeholder
	}: {
		checked?: boolean
		placeholder?: string
	} = $props()
</script>

<label class="vuuui-checkbox">
	<input type="checkbox" bind:checked />

	<div class="vuuui-icon">
		<div class="vuuui-checkmark">
			<span>&#10004;</span>
		</div>
	</div>

	{placeholder}
</label>
