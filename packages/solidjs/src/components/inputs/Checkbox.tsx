
import type { CheckboxComponent } from './types'
import '@vuuui/styles/components/inputs/checkbox.scss'

export const Checkbox: CheckboxComponent = props => {

	return <label class='vuuui-checkbox'>
		<input {...props} type='checkbox' />

		<div class='vuuui-icon'>
			<div class='vuuui-checkmark'>
				<span>&#10004</span>
			</div>
		</div>

		{props.placeholder}
	</label>
}
