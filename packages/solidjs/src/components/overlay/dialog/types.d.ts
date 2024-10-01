import { JSX, Component, Signal } from 'solid-js'

export interface DialogProps
  extends JSX.DialogHtmlAttributes<HTMLDialogElement> {
  model?: Signal<boolean>
  backdropClose?: boolean
  action?: JSX.Element
  closeButton?: JSX.Element
}
export type DialogComponent = Component<DialogProps>
