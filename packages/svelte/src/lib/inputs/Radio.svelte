<script lang="ts">
	import '@vuuui/styles/components/inputs/radio_input.scss'
	import type { HTMLInputAttributes } from 'svelte/elements'

	interface RadioProps extends HTMLInputAttributes {
		group?: string
	}

	let { placeholder, value, group = $bindable(), ...stuff }: RadioProps = $props()
</script>

<label class="vuuui-radio">
	<input type="radio" {value} bind:group {...stuff} />

	<div class="vuuui-icon">
		<div class="vuuui-checkmark">
			<span>&#10004;</span>
		</div>
	</div>

	{placeholder}
</label>
