import { createMemo } from 'solid-js'
import { Container } from '../../'
import type { DialogComponent } from "."
import '@vuuui/styles/components/overlay/dialog.scss'
import type { Accessor, Setter } from 'solid-js'

export const Dialog: DialogComponent = props => {
	let open: Accessor<boolean> = () => false
	let setOpen: Setter<boolean> = () => {}
	if (props.model) [open, setOpen] = props.model

	const className = createMemo(() => {
		let className = 'vuuui-dialog '
		if (props.class) className += props.class
		return className
	})

	const close = () => setOpen(false)
	const backdropClose = () => {
		if (props.backdropClose) close()
	}

	return <dialog
		{...props}
		open={open()}
		title=""
		class={className()}
		tabindex='-1'
	>
		<div class='vuuui-backdrop' onClick={backdropClose}></div>
		<Container class='vuuui-body'>
			<div class='vuuui-title'>
				<div class='vuuui-title-left'>
					<div class='vuuui-button-slot'>
						{props.action}
					</div>
					<span class='vuuui-title-content'> {props.title} </span>
				</div>

				<div class='vuuui-button-slot'>
					{props.closeButton}
				</div>
			</div>
			
			<div class='vuuui-content'>
				{props.children}
			</div>
		</Container>
	</dialog>
}
