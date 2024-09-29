import { Router, Route } from '@solidjs/router'

import { Home } from './pages/home'
import { Components } from './pages/components'
import { About } from './pages/about'
import type { Component } from 'solid-js'

export interface RoutesProps {
	layout: Component<any>
}

export const Routes = (props: RoutesProps) => <Router root={props.layout}>
	<Route path='/' component={Home} />
	<Route path='/components' component={Components} />
	<Route path='/about' component={About} />
</Router>
