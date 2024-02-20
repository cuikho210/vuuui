import Button from "./_Button";
import "./TextButton.scss";

interface TextButtonBaseProps {
	icon?: JSX.Element,
	defaultClassName: string,
	className?: string,
	disabled?: boolean,
	title?: string,
	children?: any,
	onClick?(): void,
}

const TextButtonBase = (props: TextButtonBaseProps) => {

	return <Button
		defaultClassName={props.defaultClassName}
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

export default TextButtonBase;
