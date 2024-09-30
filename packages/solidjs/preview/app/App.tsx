import { For } from 'solid-js'
import {
  RiArrowLeftSLine,
	RiCollageFill, RiCollageLine, RiCupFill, RiCupLine,
	RiHeartLine,
	RiHomeFill, RiHomeLine,
  RiSettingsLine,
  RiShieldUserLine,
} from 'solidjs-remixicon'
import { useNavigate } from '@solidjs/router'
import { NavigationBar, NavigationBarButton, AppBar, IconButton } from '../../src'
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
		<div class='app-navigation'>
			<Navigates />
		</div>

		<div class='app-main'>
      <div class='app-bar'>
        <AppBar
          leading={<IconButton><RiArrowLeftSLine /></IconButton>}
          title='Ahihi'
          actions={[
            <IconButton><RiHeartLine /></IconButton>,
            <IconButton><RiShieldUserLine /></IconButton>,
            <IconButton><RiSettingsLine /></IconButton>,
          ]}
        />
      </div>

  		<div class='app-body'>
  			{props.children}
			</div>
		</div>
	</main>
}

export const App = () => <Routes layout={Layout} />
