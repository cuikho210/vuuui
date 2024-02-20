import Button from "./_Button";
import { DuckSpinner } from "..";
import "./TextButton.scss";

interface TextButtonBaseProps {
	icon?: JSX.Element,
	defaultClassName: string,
	className?: string,
	disabled?: boolean,
	loading?: boolean,
	title?: string,
	children?: any,
	onClick?(): void,
}

const TextButtonBase = (props: TextButtonBaseProps) => {
	let icon = props.icon;
	if (props.loading) icon = <DuckSpinner />;

	return <Button
		defaultClassName={props.defaultClassName}
		className={props.className}
		onClick={props.onClick}
		disabled={props.disabled}
		loading={props.loading}
		title={props.title}
	>
		<div className="body">
			{ icon &&
				<span className="icon">
					{icon}
				</span>
			}
			{props.children}
		</div>
	</Button>;
}

export default TextButtonBase;
