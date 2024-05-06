import type { JSX, Component } from "solid-js"

export interface DialogProps extends JSX.DialogHtmlAttributes<HTMLDialogElement> {
	icon?: JSX.Element
	close?(): void
	backdropClose?: boolean
}
export type DialogComponent = Component<DialogProps>
