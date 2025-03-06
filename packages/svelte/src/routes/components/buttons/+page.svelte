<script lang="ts">
	import {
		ElevatedButton,
		FilledButton,
		Gap,
		IconButton,
		OutlinedButton,
		Spacer,
		TextButton
	} from '$lib/index.js'
	import RiHeartLine from '~icons/ri/heart-line'
	import RiHeart2Line from '~icons/ri/heart-2-line'
	import RiHeart3Line from '~icons/ri/heart-3-line'
	import RiHeartsLine from '~icons/ri/hearts-line'
	import RiFlowerLine from '~icons/ri/flower-line'
	import RiLoaderLine from '~icons/ri/loader-line'
	import RiToggleLine from '~icons/ri/toggle-line'

	let disabled = $state(true)
	let loading = $state(true)
	let active = $state(true)
</script>

<section>
	<h2>Buttons</h2>
	<Gap />

	<Spacer>
		<ElevatedButton>Normal</ElevatedButton>
		<ElevatedButton {disabled}>Disabled</ElevatedButton>
		<ElevatedButton {active} disabled>Active</ElevatedButton>
		<ElevatedButton>
			{#snippet icon()}
				<RiHeartLine />
			{/snippet}
			Icon
		</ElevatedButton>
		<ElevatedButton {loading}>Loading</ElevatedButton>
	</Spacer>
	<Gap />

	<Spacer>
		<FilledButton>Normal</FilledButton>
		<FilledButton {disabled}>Disabled</FilledButton>
		<FilledButton {active} disabled>Active</FilledButton>
		<FilledButton>
			{#snippet icon()}
				<RiHeart2Line />
			{/snippet}
			Icon
		</FilledButton>
		<FilledButton {loading}>Loading</FilledButton>
	</Spacer>
	<Gap />

	<Spacer>
		<TextButton>Normal</TextButton>
		<TextButton {disabled}>Disabled</TextButton>
		<TextButton {active} disabled>Active</TextButton>
		<TextButton>
			{#snippet icon()}
				<RiHeart3Line />
			{/snippet}
			Icon
		</TextButton>
		<TextButton {loading}>Loading</TextButton>
	</Spacer>
	<Gap />

	<Spacer>
		<OutlinedButton>Normal</OutlinedButton>
		<OutlinedButton {disabled}>Disabled</OutlinedButton>
		<OutlinedButton {active} disabled>Active</OutlinedButton>
		<OutlinedButton>
			{#snippet icon()}
				<RiHeartsLine />
			{/snippet}
			Icon
		</OutlinedButton>
		<OutlinedButton {loading}>Loading</OutlinedButton>
	</Spacer>
	<Gap />

	<Spacer>
		<IconButton onclick={() => (disabled = !disabled)} title="Toggle disabled">
			<RiToggleLine font-size="1.4rem" />
		</IconButton>

		<IconButton onclick={() => (loading = !loading)} title="Toggle loading" {disabled}>
			<RiLoaderLine font-size="1.4rem" />
		</IconButton>

		<IconButton onclick={() => (active = !active)} title="Toggle active" {active}>
			<RiFlowerLine font-size="1.4rem" />
		</IconButton>

		<IconButton {disabled}>
			<RiHeart2Line font-size="1.4rem" />
		</IconButton>

		<IconButton {loading}>
			<RiHeart3Line font-size="1.4rem" />
		</IconButton>
	</Spacer>
	<Gap />
</section>
