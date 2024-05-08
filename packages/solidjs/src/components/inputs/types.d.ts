import { JSX, Component } from "solid-js"

// TextInput
export interface TextInputProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
	icon?: JSX.Element
}
export type TextInputComponent = Component<TextInputProps>

// WYSIWYGEditor
export interface WYSIWYGEditorProps extends JSX.HTMLAttributes<HTMLDivElement> {
	
}
export type WYSIWYGEditorComponent = Component<WYSIWYGEditorProps>
