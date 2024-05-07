import { createMemo } from 'solid-js'
import { Container, IconButton } from '../../'
import type { DialogComponent } from "."
import '@vuuui/styles/components/overlay/dialog.scss'
import {RiCloseLine} from 'solidjs-remixicon'

export const Dialog: DialogComponent = props => {
	const className = createMemo(() => {
		let className = 'vuuui-dialog '
		if (props.class) className += props.class
		return className
	})

	const backdropClose = () => {
		console.log("[Dialog onClose] Backdrop clicked")
		if (props.backdropClose && props.close) props.close()
	}

	return <dialog
		{...props}
		title=""
		class={className()}
	>
		<div class='vuuui-backdrop' onClick={backdropClose}></div>
		<Container class='vuuui-body'>
			<div class='vuuui-title'>
				<div class='vuuui-left'>
					{props.icon}
					<span class='vuuui-title-content'> {props.title} </span>
				</div>

				<IconButton
					class='vuuui-btn'
					onClick={props.close}
				><RiCloseLine /></IconButton>
			</div>
			<div class='vuuui-content'>
				{props.children}
			</div>
		</Container>
	</dialog>
}
