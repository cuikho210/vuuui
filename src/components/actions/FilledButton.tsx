import TextButtonBase from "./_TextButtonBase";
import type { TextButtonProps } from "./TextButton";
import "./FilledButton.scss";

export const FilledButton = (props: TextButtonProps) => {
	return <TextButtonBase
		icon={props.icon}
		defaultClassName="btn-filled"
		className={props.className}
		disabled={props.disabled}
		loading={props.loading}
		title={props.title}
		children={props.children}
		onClick={props.onClick}
	/>
}

export default FilledButton;
