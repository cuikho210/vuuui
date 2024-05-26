import type { JSX, Component } from "solid-js"

export interface DialogProps extends JSX.DialogHtmlAttributes<HTMLDialogElement> {
	close?(): void
	backdropClose?: boolean
	action?: JSX.Element
}
export type DialogComponent = Component<DialogProps>
