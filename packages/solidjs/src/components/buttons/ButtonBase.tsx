import { createMemo } from 'solid-js'
import type { ButtonBaseComponent } from '.'

export const ButtonBase: ButtonBaseComponent = (props) => {
	const isDisabled = createMemo(() => props.loading || props.disabled)

	const onClick = createMemo(() => {
		if (isDisabled()) return () => {}
		return props.onClick
	})

	const className = createMemo(() => {
		let className = props.defaultClassName || ''
		if (props.class) className += ' ' + props.class
		return className || undefined
	})

	return <button
		onClick={onClick()}
		disabled={isDisabled()}
		class={className()}
		{...props}
	/>
}
