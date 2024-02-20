import TextButtonBase from "./_TextButtonBase";
import type { TextButtonProps } from "./TextButton";
import "./OutlinedButton.scss";

export const OutlinedButton = (props: TextButtonProps) => {
	return <TextButtonBase
		icon={props.icon}
		defaultClassName="btn-outlined"
		className={props.className}
		disabled={props.disabled}
		title={props.title}
		children={props.children}
		onClick={props.onClick}
	/>
}

export default OutlinedButton;
