import Button from "./Button";
import type { JSX } from "react";
import "./IconButton.scss";

interface IconButtonProps {
	icon: JSX.Element,
	className?: string,
	disabled?: boolean,
	loading?: boolean,
	title?: string,
	onClick?(): void,
}

const IconButton = (props: IconButtonProps) => {
	return <Button
		defaultClassName="btn-icon"
		className={props.className}
		onClick={props.onClick}
		disabled={props.disabled}
		loading={props.loading}
		title={props.title}
	>
		{props.icon}
	</Button>;
}

export default IconButton;
