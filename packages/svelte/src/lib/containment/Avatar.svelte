<script lang="ts">
	import '@vuuui/styles/components/containment/avatar.scss'

	let {
		src,
		size = '64px',
		alt
	}: {
		src: string
		alt?: string
		size?: string
	} = $props()
</script>

<img class="vuuui-avatar" style:width={size} {src} {alt} />
