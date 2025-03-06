<script lang="ts">
	import '@vuuui/styles/vuuui.scss'
	import '../index.scss'

	import { Container } from '$lib/index.js'

	let { children } = $props()
</script>

<Container md>
	{@render children()}
</Container>
