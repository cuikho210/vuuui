import TextButtonBase from "./_TextButtonBase";
import "./TextButton.scss";

export interface TextButtonProps {
	icon?: JSX.Element,
	className?: string,
	disabled?: boolean,
	title?: string,
	children?: any,
	onClick?(): void,
}

export const TextButton = (props: TextButtonProps) => {
	return <TextButtonBase
		icon={props.icon}
		defaultClassName="btn-text"
		className={props.className}
		disabled={props.disabled}
		title={props.title}
		children={props.children}
		onClick={props.onClick}
	/>
}

export default TextButton;
