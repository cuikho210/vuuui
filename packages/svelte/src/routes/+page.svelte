<script lang="ts">
	import '@vuuui/styles/vuuui.scss'
	import '$lib/index.scss'

	import { Container, Gap, Spacer, TextButton } from '$lib/index.js'
</script>

<Container md>
	<h1>VuuUI</h1>
	<Gap />

	<Spacer>
		<a href="/components">
			<TextButton>Components</TextButton>
		</a>
	</Spacer>
</Container>
