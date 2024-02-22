import "./Badge.scss";

export interface BadgeProps {
	children?: any,
}

export const Badge = (props: BadgeProps) => {

	return <div className="badge">
		{props.children}
	</div>;
}

export default Badge;
