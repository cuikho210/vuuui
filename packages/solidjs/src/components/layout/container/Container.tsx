import { createMemo } from 'solid-js'
import type { ContainerComponent } from './index.d'
import '@vuuui/styles/components/layout/container.scss'

export const Container: ContainerComponent = (props) => {
	const className = createMemo(() => {
		let className = 'vuuui-container'

		if (props.xs) return className + ' vuuui-container-xs'
		if (props.sm) return className + ' vuuui-container-sm'
		if (props.md) return className + ' vuuui-container-md'
		return className
	})
	
	return <section
		class={className()}
		{...props}
	/>
}
