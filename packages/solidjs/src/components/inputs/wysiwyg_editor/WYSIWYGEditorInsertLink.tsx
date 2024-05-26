import { createSignal, createEffect } from 'solid-js'
import { RiCheckLine, RiLink } from 'solidjs-remixicon'
import { Dialog, Spacer, TextInput, TextButton } from '../..'
import type { WYSIWYGEditorInsertLinkComponent } from './types'

export const WYSIWYGEditorInsertLink: WYSIWYGEditorInsertLinkComponent = props => {
	const [open, setOpen] = props.modal
	const [url, setUrl] = createSignal('')

	createEffect(() => {
		if (open()) {
			setUrl(props.editor()?.getAttributes('link').href || '')
		}
	})

	const setLink = () => {
		const value = url().trim();
		const editor = props.editor()
		if (!value || !editor) return
		
		editor
			.chain()
			.focus()
			.extendMarkRange('link')
			.setLink({ href: value, target: '_blank' })
			.run()

		setOpen(false)
	}

	const SetLinkButton = <TextButton
		icon={<RiCheckLine />}
		onClick={setLink}
	>Set</TextButton>

	return <Dialog
		backdropClose
		open={open()}
		close={() => setOpen(false)}
		title='Insert link'
		action={SetLinkButton}
	>
		<Spacer justify='flex-end'>
			<TextInput
				icon={<RiLink />}
				placeholder='URL'
				model={[url, setUrl]}
			/>
		</Spacer>
	</Dialog>
}
