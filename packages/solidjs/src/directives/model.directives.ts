import { createRenderEffect } from 'solid-js'
import { type JSX, type Signal } from 'solid-js'

declare module 'solid-js' {
  namespace JSX {
    interface Directives {
      model: Signal<string>
    }
  }
}

export const model = (
  el: Element,
  accessor: JSX.Accessor<Signal<string> | undefined>,
) => {
  const signal = accessor()
  if (!signal)
    return console.info('Abort using model because signal is undefined')
  const [value, setValue] = signal

  createRenderEffect(() => ((el as HTMLInputElement).value = value()))
  el.addEventListener('input', (e) => {
    const newValue = (e.target as HTMLInputElement).value
    setValue(newValue)
  })
}
