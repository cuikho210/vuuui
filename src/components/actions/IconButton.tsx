import Button from "./_Button";
import { DuckSpinner } from "..";
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

export const IconButton = (props: IconButtonProps) => {
	let icon = props.icon;
	if (props.loading) icon = <DuckSpinner />;

	return <Button
		defaultClassName="btn-icon"
		className={props.className}
		onClick={props.onClick}
		disabled={props.disabled}
		loading={props.loading}
		title={props.title}
	>
		{icon}
	</Button>;
}

export default IconButton;
