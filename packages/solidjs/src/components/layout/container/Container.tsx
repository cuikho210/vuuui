import { createMemo } from 'solid-js'
import type { ContainerComponent } from '.'
import '@vuuui/styles/components/layout/container.scss'

export const Container: ContainerComponent = (props) => {
	const className = createMemo(() => {
		let className = 'vuuui-container '

		if (props.xs) className += 'vuuui-container-xs'
		if (props.sm) className += 'vuuui-container-sm'
		if (props.md) className += 'vuuui-container-md'
		if (props.class) className += props.class
		return className
	})
	
	return <section
		{...props}
		class={className()}
	/>
}
