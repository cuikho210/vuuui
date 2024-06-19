import { createMemo } from 'solid-js'
import type { NavigationBarButtonComponent } from './'
import '@vuuui/styles/components/navigation/navigation_bar/navigation_bar_button.scss';

export const NavigationBarButton: NavigationBarButtonComponent = (props) => {
	const icon = createMemo(() => {
		if (props.active && props.iconActive) return props.iconActive
		return props.icon
	})

	const className = createMemo(() =>
		'vuuui-navigation-bar-button ' + (props.class || '')
	)

	return <button {...props} class={className()}>
		<div class='vuuui-icon'> {icon()} </div>
		{props.children}
	</button>
}
