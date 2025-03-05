<script lang="ts">
	import '@vuuui/styles/components/inputs/radio_input.scss'

	let {
		placeholder,
		value,
		group = $bindable()
	}: {
		placeholder?: string
		value?: string
		group?: string
	} = $props()
</script>

<label class="vuuui-radio">
	<input type="radio" {value} bind:group />

	<div class="vuuui-icon">
		<div class="vuuui-checkmark">
			<span>&#10004;</span>
		</div>
	</div>

	{placeholder}
</label>
