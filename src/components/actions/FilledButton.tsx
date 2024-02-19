import Button from "./Button";
import "./FilledButton.scss";

interface FilledButtonProps {
	icon?: JSX.Element,
	className?: string,
	disabled?: boolean,
	title?: string,
	children?: any,
	onClick?(): void,
}

const FilledButton = (props: FilledButtonProps) => {

	return <Button
		defaultClassName="btn-filled"
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

export default FilledButton;
