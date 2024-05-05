import { type JSX, createMemo } from "solid-js"
import { ButtonBase } from "./ButtonBase"
import { DuckSpinner } from "../misc"
import type { IconButtonComponent } from "."
import "@vuuui/styles/components/buttons/icon_button.scss"

export const IconButton: IconButtonComponent = (props) => {
	const bodyStyle = createMemo(() => {
		if (props.loading) return {
			visibility: 'hidden',
		} as JSX.CSSProperties

		return undefined;
	})

	const className = createMemo(() => 'vuuui-icon-button ' + (props.class || ''))
	const spinnerEl = <div class='vuuui-spinner'><DuckSpinner /></div>

	return <ButtonBase class={className()} {...props}>
		<div class="vuuui-body" style={bodyStyle()}>
			{props.children}
		</div>

		{props.loading && spinnerEl}
	</ButtonBase>
}
