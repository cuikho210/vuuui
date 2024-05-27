// @ts-ignore
import { model } from '../../directives'
import type { TextInputComponent } from '.'
import '@vuuui/styles/components/inputs/text_input.scss'

export const TextInput: TextInputComponent = (props) => {

	return <div class='vuuui-text-input'>
		<input {...props} use:model={props.model} />
		<div class='vuuui-icon'>{props.icon}</div>
		<div class='vuuui-placeholder'>{props.placeholder}</div>
	</div>
}
