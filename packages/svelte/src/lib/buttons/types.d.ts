import { Snippet } from 'svelte'
import { HTMLButtonAttributes } from 'svelte/elements'

export interface ButtonBaseProps extends HTMLButtonAttributes {
	loading?: boolean
	disabled?: boolean
	active?: boolean
	children: Snippet
}

export interface TextButtonBaseProps extends ButtonBaseProps {
	icon?: Snippet
}
