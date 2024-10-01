import { createMemo, Show } from 'solid-js'
import { ButtonBase } from './ButtonBase'
import { DuckSpinner } from '../..'
import type { TextButtonBaseComponent } from '.'
import type { JSX } from 'solid-js'

export const TextButtonBase: TextButtonBaseComponent = (props) => {
  const bodyStyle = createMemo(() => {
    if (props.loading)
      return {
        visibility: 'hidden',
      } as JSX.CSSProperties

    return undefined
  })

  const iconEl = <span class="vuuui-icon">{props.icon}</span>

  return (
    <ButtonBase {...props}>
      <div class="vuuui-body" style={bodyStyle()}>
        {props.icon && iconEl}
        <span class="vuuui-content">{props.children}</span>
      </div>

      <Show when={props.loading}>
        <div class="vuuui-spinner">
          <DuckSpinner />
        </div>
      </Show>
    </ButtonBase>
  )
}
