import { For } from 'solid-js'
import {
	RiCollageFill, RiCollageLine, RiCupFill, RiCupLine,
	RiHomeFill, RiHomeLine,
} from 'solidjs-remixicon'
import { useNavigate } from '@solidjs/router'
import { NavigationBar, NavigationBarButton } from '../../src'
import { Routes } from '../Routes'
import { layoutStore } from '../stores/layout.store'
import './App.scss'

const Navigates = () => {
	const navigate = useNavigate()

	const links = [
		{
			icon: <RiHomeLine />,
			iconActive: <RiHomeFill />,
			label: 'Home',
			path: '/',
		},
		{
			icon: <RiCollageLine />,
			iconActive: <RiCollageFill />,
			label: 'Components',
			path: '/components',
		},
		{
			icon: <RiCupLine />,
			iconActive: <RiCupFill />,
			label: 'About',
			path: '/about',
		},
	]

	return <NavigationBar>
		<For each={links}>{(link, i) =>
			<NavigationBarButton
				icon={link.icon}
				iconActive={link.iconActive}
				active={layoutStore.activeNavbar == i()}
				onClick={() => navigate(link.path)}
			>{link.label}</NavigationBarButton>
		}</For>
	</NavigationBar>
}

const Layout = (props: { children: any }) => {
	return <main class='section-app'>
		<div class='app-bar'>
			<Navigates />
		</div>

		<div class='app-body'>
			{props.children}
		</div>
	</main>
}

export const App = () => <Routes layout={Layout} />
