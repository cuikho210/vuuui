import TextButtonBase from "./_TextButtonBase";
import type { ReactNode } from "react";
import "./TextButton.scss";

export interface TextButtonProps {
	icon?: JSX.Element,
	className?: string,
	disabled?: boolean,
	loading?: boolean,
	title?: string,
	children?: ReactNode,
	onClick?(): void,
}

export const TextButton = (props: TextButtonProps) => {
	return <TextButtonBase
		icon={props.icon}
		defaultClassName="vuuui-btn-text"
		className={props.className}
		disabled={props.disabled}
		loading={props.loading}
		title={props.title}
		children={props.children}
		onClick={props.onClick}
	/>
}

export default TextButton;
