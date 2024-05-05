import { JSX, Component } from "solid-js";

// ButtonBase
export interface ButtonBaseProps extends JSX.HTMLAttributes<HTMLButtonElement> {
	defaultClassName?: string
	loading?: boolean
	disabled?: boolean
}
export type ButtonBaseComponent = Component<ButtonBaseProps>

// TextButtonBase
export interface TextButtonBaseProps extends ButtonBaseProps {
	icon?: JSX.Element,
}
export type TextButtonBaseComponent = Component<TextButtonBaseProps>

// TextButton
export type TextButtonProps = Omit<TextButtonBaseProps, "defaultClassName">
export type TextButtonComponent = Component<TextButtonProps>

// IconButton
export type IconButtonProps = Omit<ButtonBaseProps, "defaultClassName">
export type IconButtonComponent = Component<IconButtonProps>
