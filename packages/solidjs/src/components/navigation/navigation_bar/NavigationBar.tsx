import { createMemo } from 'solid-js'
import type { NavigationBarComponent } from './types'
import '@vuuui/styles/components/navigation/navigation_bar/navigation_bar.scss'

export const NavigationBar: NavigationBarComponent = props => {
	const className = createMemo(() => {
		let c = 'vuuui-navigation-bar '
		if (props.class) c += props.class
		return c
	})

	return <section
		{...props}
		class={className()}
	/>
}
