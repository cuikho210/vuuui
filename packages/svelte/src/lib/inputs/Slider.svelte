<script lang="ts">
	import '@vuuui/styles/components/inputs/slider.scss'

	let {
		value = $bindable(),
		min,
		max,
		step
	}: {
		value?: number
		min?: number
		max?: number
		step?: number
	} = $props()
</script>

<div class="vuuui-slider-wrapper">
	<input
		type="range"
		class="vuuui-slider"
		bind:value
		{min}
		{max}
		{step}
		style:--val={value || 0}
		style:--min={min || 0}
		style:--max={max || 100}
	/>
</div>
