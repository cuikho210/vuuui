import { createMemo } from "solid-js"
import type { JSX } from "solid-js"
import type { SpacerComponent } from './'
import "@vuuui/styles/components/buttons/elevated_button.scss"
import '@vuuui/styles/components/layout/spacer.scss'

export const Spacer: SpacerComponent = (props) => {
	const style = createMemo(() => {
		return {
			gap: props.gap,
			"flex-wrap": props.wrap,
			"justify-content": props.justify,
			"align-items": props.align,
		} as JSX.CSSProperties;
	});

	const className = createMemo(() => {
		let className = 'vuuui-spacer ';
		if (props.class) className += props.class;
		return className;
	});
	
	return <div
		style={style()}
		class={className()}
		{...props}
	/>
}
