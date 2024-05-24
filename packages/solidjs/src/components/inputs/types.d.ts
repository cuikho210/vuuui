import { Editor } from "@tiptap/core"
import { Accessor } from "solid-js"
import { JSX, Component, Signal } from "solid-js"

// TextInput
export interface TextInputProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
	icon?: JSX.Element
	model?: Signal<string>
}
export type TextInputComponent = Component<TextInputProps>

