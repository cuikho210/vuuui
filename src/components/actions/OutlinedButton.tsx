import Button from "./Button";
import "./OutlinedButton.scss";

interface OutlinedButtonProps {
	icon?: JSX.Element,
	className?: string,
	disabled?: boolean,
	title?: string,
	children?: any,
	onClick?(): void,
}

const OutlinedButton = (props: OutlinedButtonProps) => {

	return <Button
		defaultClassName="btn-outlined"
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
			{props.children}
		</div>
	</Button>;
}

export default OutlinedButton;
