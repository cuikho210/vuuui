import type { ReactNode } from "react";
import "./Badge.scss";

export interface BadgeProps {
	children?: ReactNode,
}

export const Badge = (props: BadgeProps) => {

	return <div className="badge">
		{props.children}
	</div>;
}

export default Badge;
