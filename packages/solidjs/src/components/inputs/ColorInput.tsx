import { model } from '../../directives'
import type { TextInputComponent } from '.'
import '@vuuui/styles/components/inputs/color_input.scss'

export const ColorInput: TextInputComponent = (props) => {

	return <label class='vuuui-color-input'>
		<input {...props} type='color' use:model={props.model} />
		<div class='vuuui-icon'>{props.icon}</div>
		<div class='vuuui-placeholder'>{props.placeholder}</div>
	</label>
}
