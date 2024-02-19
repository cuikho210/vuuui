import Button from "./Button";
import "./TextButton.scss";

interface TextButtonProps {
	icon?: JSX.Element,
	className?: string,
	disabled?: boolean,
	title?: string,
	children?: any,
	onClick?(): void,
}

const TextButton = (props: TextButtonProps) => {

	return <Button
		defaultClassName="btn-text"
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

export default TextButton;
