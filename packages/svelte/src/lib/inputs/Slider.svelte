<script lang="ts">
	import '@vuuui/styles/components/inputs/slider.scss'
	import type { HTMLInputAttributes } from 'svelte/elements'

	let { value = $bindable(), ...stuff }: HTMLInputAttributes = $props()
</script>

<div class="vuuui-slider-wrapper">
	<input
		type="range"
		class="vuuui-slider"
		bind:value
		style:--val={value || 0}
		style:--min={stuff.min || 0}
		style:--max={stuff.max || 100}
		{...stuff}
	/>
</div>
