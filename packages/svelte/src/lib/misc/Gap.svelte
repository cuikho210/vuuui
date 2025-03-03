<script lang="ts">
	import '@vuuui/styles/components/misc/gap.scss'
	let { size }: { size?: string } = $props()
</script>

<div class="vuuui-gap" style:height={size}></div>
