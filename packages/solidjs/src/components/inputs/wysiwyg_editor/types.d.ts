import { Editor } from "@tiptap/core"
import { Component, JSX, Accessor } from "solid-js"

// WYSIWYGEditor
export interface WYSIWYGEditorProps extends JSX.HTMLAttributes<HTMLDivElement> {
	onModel?(html: string)
	initContent?: string
}
export type WYSIWYGEditorComponent = Component<WYSIWYGEditorProps>

// WYSIWYGEditorTableMenu
export interface WYSIWYGEditorTableMenuProps {
	editor: Accessor<Editor | undefined>
	visible?: boolean
	canMergeCell?: boolean
	canSplitCell?: boolean
}
export type WYSIWYGEditorTableMenuComponent = Component<WYSIWYGEditorTableMenuProps>
