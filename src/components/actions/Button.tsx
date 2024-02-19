
interface ButtonProps {
	defaultClassName: string,
	className?: string,
	disabled?: boolean,
	children?: any,
	title?: string,
	onClick?(): void,
}

const Button = (props: ButtonProps) => {
	let className = props.defaultClassName || "";
	if (props.className) className += " " + props.className;

	let onClick = props.onClick;
	if (props.disabled) onClick = () => {};
	
	return <button
		className={className}
		onClick={onClick}
		title={props.title}
	> {props.children} </button>;
}

export default Button;
