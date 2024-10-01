import { createRenderEffect } from 'solid-js'
import type { CheckboxComponent } from './types'
import '@vuuui/styles/components/inputs/switch.scss'

export const Switch: CheckboxComponent = (props) => {
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
    <label class="vuuui-switch">
      <input {...props} type="checkbox" ref={onRef} />

      <div class="vuuui-switch-button">
        <div class="vuuui-switch-dot" />
      </div>

      {props.placeholder}
    </label>
  )
}
