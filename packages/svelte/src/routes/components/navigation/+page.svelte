<script lang="ts">
	import RiHomeLine from '~icons/ri/home-line'
	import RiHomeFill from '~icons/ri/home-fill'
	import RiCollageLine from '~icons/ri/collage-line'
	import RiCollageFill from '~icons/ri/collage-fill'
	import RiCupLine from '~icons/ri/cup-line'
	import RiCupFill from '~icons/ri/cup-fill'
	import RiArrowLeftSLine from '~icons/ri/arrow-left-s-line'
	import RiHeartLine from '~icons/ri/heart-line'
	import RiShieldUserLine from '~icons/ri/shield-user-line'
	import RiSettingsLine from '~icons/ri/settings-line'
	import {
		NavigationBarButton,
		NavigationBar,
		AppBar,
		IconButton,
		LinearProgressIndicator
	} from '$lib/index.js'
	import './style.scss'

	const links = [
		{
			icon: RiHomeLine,
			iconActive: RiHomeFill,
			label: 'Home',
			path: '/'
		},
		{
			icon: RiCollageLine,
			iconActive: RiCollageFill,
			label: 'Components',
			path: '/components'
		},
		{
			icon: RiCupLine,
			iconActive: RiCupFill,
			label: 'About',
			path: '/about'
		}
	]

	let activeIndex = $state(0)
	let pageTitle = $state(links[0].label)
</script>

<div class="app-navigation">
	<NavigationBar class="vuuui-navbar">
		{#each links as link, i (i)}
			<NavigationBarButton active={activeIndex == i}>
				{#snippet icon()}
					<link.icon font-size="1rem" />
				{/snippet}

				{#snippet iconActive()}
					<link.iconActive font-size="1rem" />
				{/snippet}

				{link.label}
			</NavigationBarButton>
		{/each}
	</NavigationBar>
</div>

<div class="app-bar">
	<AppBar class="vuuui-appbar">
		{#snippet leading()}
			<IconButton>
				<RiArrowLeftSLine />
			</IconButton>
		{/snippet}

		{#snippet title()}
			{pageTitle}
		{/snippet}

		{#snippet actions()}
			<IconButton><RiHeartLine /></IconButton>
			<IconButton><RiShieldUserLine /></IconButton>
			<IconButton><RiSettingsLine /></IconButton>
		{/snippet}
	</AppBar>
	<LinearProgressIndicator />
</div>

<div class="app-body">Ahihi body</div>
