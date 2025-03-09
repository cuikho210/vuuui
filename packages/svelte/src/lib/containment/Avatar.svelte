<script lang="ts">
	import '@vuuui/styles/components/containment/avatar.scss'
	import type { HTMLImgAttributes } from 'svelte/elements'

	interface AvatarProps extends HTMLImgAttributes {
		size: string | number
	}

	let { size = '64px', ...rest }: AvatarProps = $props()
</script>

<img {...rest} class="vuuui-avatar {rest.class}" style:width={size} />
