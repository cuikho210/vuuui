import Button from "./Button";
import type { JSX } from "react";
import "./ElevatedButton.scss";

interface ElevatedButtonProps {
	icon?: JSX.Element,
	label?: string,
	className?: string,
	disabled?: boolean,
	title?: string,
	onClick?(): void,
}

const ElevatedButton = (props: ElevatedButtonProps) => {
	return <Button
		defaultClassName="btn-elevated"
		className={props.className}
		onClick={props.onClick}
		disabled={props.disabled}
		title={props.title}
	>
		<div className="body">
			{ props.icon &&
				<span className="icon">
					{props.icon}
				</span>
			}
			{props.label}
		</div>
	</Button>;
}

export default ElevatedButton;
