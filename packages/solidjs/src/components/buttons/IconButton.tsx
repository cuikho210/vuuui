import { createMemo, Show } from "solid-js"
import { ButtonBase } from "./ButtonBase"
import { DuckSpinner } from "../misc"
import type { IconButtonComponent } from "."
import type { JSX } from 'solid-js'
import "@vuuui/styles/components/buttons/icon_button.scss"

export const IconButton: IconButtonComponent = (props) => {
	const bodyStyle = createMemo(() => {
		if (props.loading) return {
			visibility: 'hidden',
		} as JSX.CSSProperties

		return undefined;
	})

	const className = createMemo(() => 'vuuui-icon-button ' + (props.class || ''))

	return <ButtonBase {...props} class={className()}>
		<div class="vuuui-body" style={bodyStyle()}>
			{props.children}
		</div>

		<Show when={props.loading}>
			<div class='vuuui-spinner'><DuckSpinner /></div>
		</Show>
	</ButtonBase>
}
