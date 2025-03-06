<script lang="ts">
	import RiSketching from '~icons/ri/sketching'
	import RiPaletteLine from '~icons/ri/palette-line'
	import RiFileLine from '~icons/ri/file-line'
	import {
		Spacer,
		TextInput,
		ColorInput,
		FileInput,
		Checkbox,
		Radio,
		Slider,
		Switch
	} from '$lib/index.js'

	let files = $state<FileList | undefined>(undefined)
	let firstFile = $derived(files ? files[0] : undefined)
	let sliderValue = $state(20)
</script>

<section>
	<h2>Inputs</h2>
	<br />

	<p>Common</p>
	<br />
	<Spacer>
		<TextInput placeholder="Text input">
			{#snippet icon()}
				<RiSketching />
			{/snippet}
		</TextInput>

		<ColorInput placeholder="Color input">
			{#snippet icon()}
				<RiPaletteLine />
			{/snippet}
		</ColorInput>

		<FileInput bind:files placeholder={firstFile ? firstFile.name : 'File input'}>
			{#snippet icon()}
				<RiFileLine />
			{/snippet}
		</FileInput>
	</Spacer>
	<br />

	<p>Checkbox</p>
	<br />
	<Checkbox placeholder="Ahihi" />
	<Checkbox placeholder="Ahaha" />
	<br />

	<p>Radio</p>
	<br />
	<Radio placeholder="Ahihi" name="test-radio" />
	<Radio placeholder="Ahaha" name="test-radio" />
	<br />

	<p>Slider {sliderValue}</p>
	<br />
	<Slider min={15} max={50} bind:value={sliderValue} />
	<br />
	<Slider min={15} max={100} step={5} bind:value={sliderValue} />
	<br />

	<p>Switch</p>
	<br />
	<Switch placeholder="Sasa" />
	<Switch placeholder="Lily" />
	<br />
</section>
