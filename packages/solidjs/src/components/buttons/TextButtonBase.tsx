import { type JSX, createMemo } from 'solid-js'
import { ButtonBase } from './ButtonBase'
import { DuckSpinner } from '../..'
import type { TextButtonBaseComponent } from '.'

export const TextButtonBase: TextButtonBaseComponent = (props) => {
	const bodyStyle = createMemo(() => {
		if (props.loading) return {
			visibility: 'hidden',
		} as JSX.CSSProperties

		return undefined;
	})

	const iconEl = <span class='vuuui-icon'>{props.icon}</span>
	const spinnerEl = <div class='vuuui-spinner'><DuckSpinner /></div>

	return <ButtonBase {...props}>
		<div class='vuuui-body' style={bodyStyle()}>
			{props.icon && iconEl}
			<span class='vuuui-content'>{props.children}</span>
		</div>

		{props.loading && spinnerEl}
	</ButtonBase>
}
