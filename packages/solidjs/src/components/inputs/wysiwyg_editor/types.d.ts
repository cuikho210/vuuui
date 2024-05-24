import type { Component, JSX } from "solid-js"

// WYSIWYGEditor
export interface WYSIWYGEditorProps extends JSX.HTMLAttributes<HTMLDivElement> {
	onModel?(html: string)
	initContent?: string
}
export type WYSIWYGEditorComponent = Component<WYSIWYGEditorProps>
