import TextButtonBase from "./_TextButtonBase";
import type { TextButtonProps } from "./TextButton";
import "./ElevatedButton.scss";

export const ElevatedButton = (props: TextButtonProps) => {
	return <TextButtonBase
		icon={props.icon}
		defaultClassName="btn-elevated"
		className={props.className}
		disabled={props.disabled}
		loading={props.loading}
		title={props.title}
		children={props.children}
		onClick={props.onClick}
	/>
}

export default ElevatedButton;
