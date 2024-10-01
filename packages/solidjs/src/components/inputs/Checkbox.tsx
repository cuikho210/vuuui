import { createRenderEffect } from 'solid-js'
import type { CheckboxComponent } from './types'
import '@vuuui/styles/components/inputs/checkbox_input.scss'

export const Checkbox: CheckboxComponent = (props) => {
  const [model, setModel] = props.model || []

  const onRef = (el: HTMLInputElement) => {
    createRenderEffect(() => {
      if (!model) return
      el.checked = model()
    })

    el.onchange = () => {
      if (!setModel) return
      setModel(el.checked)
    }
  }

  return (
    <label class="vuuui-checkbox">
      <input {...props} type="checkbox" ref={onRef} />

      <div class="vuuui-icon">
        <div class="vuuui-checkmark">
          <span>&#10004</span>
        </div>
      </div>

      {props.placeholder}
    </label>
  )
}
