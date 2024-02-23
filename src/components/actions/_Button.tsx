import type { ReactNode } from "react";

interface ButtonProps {
	defaultClassName: string,
	className?: string,
	disabled?: boolean,
	loading?: boolean,
	children?: ReactNode,
	title?: string,
	onClick?(): void,
}

const Button = (props: ButtonProps) => {
	const disabled = props.disabled || props.loading;

	let className = props.defaultClassName || "";
	if (props.className) className += " " + props.className;

	let onClick = props.onClick;
	if (disabled) onClick = () => {};
	
	return <button
		className={className}
		onClick={onClick}
		title={props.title}
		disabled={disabled}
	> {props.children} </button>;
}

export default Button;
