<script lang="ts">
	import RiEmotionHappyLine from '~icons/ri/emotion-happy-line'
	import RiCloseLine from '~icons/ri/close-line'
	import { Spacer, ElevatedButton, Dialog, IconButton } from '$lib/index.js'

	let dialog1Open = $state(false)
	let dialog2Open = $state(false)
	let dialog3Open = $state(false)
</script>

<section>
	<h2>Overlay</h2>
	<br />

	<Spacer>
		<ElevatedButton onclick={() => (dialog1Open = true)}>
			{#snippet icon()}
				<RiEmotionHappyLine />
			{/snippet}
			Open dialog
		</ElevatedButton>

		<ElevatedButton onclick={() => (dialog3Open = true)}>
			{#snippet icon()}
				<RiEmotionHappyLine />
			{/snippet}
			Open dialog 3
		</ElevatedButton>

		<Dialog bind:open={dialog1Open} backdropClose xs>
			{#snippet btnAction()}{/snippet}

			{#snippet btnClose()}
				<IconButton onclick={() => (dialog1Open = false)}>
					<RiCloseLine />
				</IconButton>
			{/snippet}

			{#snippet title()}
				This is a very very very very very very very very loooong title
			{/snippet}

			<p>This is the content ahihi</p>
			<br />

			<ElevatedButton onclick={() => (dialog2Open = true)}>Open dialog 2</ElevatedButton>

			<Dialog bind:open={dialog2Open} backdropClose sm>
				{#snippet btnAction()}{/snippet}

				{#snippet btnClose()}
					<IconButton onclick={() => (dialog2Open = false)}>
						<RiCloseLine />
					</IconButton>
				{/snippet}

				{#snippet title()}
					This is a very very very very very very very very loooong title
				{/snippet}

				<p><i> Trẻ con sa mạc truyền tai nhau bài đồng dao: </i></p>
				<p>Xương rồng đơm lá đơm hoa</p>
				<p>Nước đong đầy trên cao nguyên đá</p>
				<p>Là ngày hoàng đế trở về nhà</p>
				<br />

				<p><i>Desert children pass on a nursery rhyme:</i></p>
				<p>Cactus sprouts leaves and flowers</p>
				<p>Water fills up on the rocky plateau</p>
				<p>It's the day the emperor returns home</p>
			</Dialog>
		</Dialog>

		<Dialog bind:open={dialog3Open} backdropClose sm fluid>
			{#snippet btnAction()}{/snippet}

			{#snippet btnClose()}
				<IconButton onclick={() => (dialog3Open = false)}>
					<RiCloseLine />
				</IconButton>
			{/snippet}

			{#snippet title()}
				Ahihi
			{/snippet}

			<p>This is the content ahihi</p>
		</Dialog>
	</Spacer>
</section>
