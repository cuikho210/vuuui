import type { RadioComponent } from './types'
import '@vuuui/styles/components/inputs/radio_input.scss'

export const Radio: RadioComponent = (props) => {
  return (
    <label class="vuuui-radio">
      <input {...props} type="radio" />

      <div class="vuuui-icon">
        <div class="vuuui-checkmark">
          <span>&#10004</span>
        </div>
      </div>

      {props.placeholder}
    </label>
  )
}
