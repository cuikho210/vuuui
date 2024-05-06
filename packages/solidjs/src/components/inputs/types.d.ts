import { JSX, Component } from "solid-js"

// TextInput
export interface TextInputProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
	icon?: JSX.Element
}
export type TextInputComponent = Component<TextInputProps>
