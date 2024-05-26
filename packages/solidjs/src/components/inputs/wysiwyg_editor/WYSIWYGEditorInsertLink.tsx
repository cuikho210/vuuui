import { createSignal, createEffect } from 'solid-js'
import { RiCheckLine, RiLink } from 'solidjs-remixicon'
import { Dialog, Spacer, TextInput, ElevatedButton } from '../..'
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
		const editor = props.editor()
		if (!url() || !editor) return
		
		editor
			.chain()
			.focus()
			.extendMarkRange('link')
			.setLink({ href: url() })
			.run()

		setOpen(false)
	}

	return <Dialog
		backdropClose
		open={open()}
		close={() => setOpen(false)}
		icon={<RiLink />}
		title='Insert link'
	>
		<Spacer justify='flex-end'>
			<TextInput
				icon={<RiLink />}
				placeholder='URL'
				model={[url, setUrl]}
			/>

			<ElevatedButton
				icon={<RiCheckLine />}
				onClick={setLink}
			>Set</ElevatedButton>
		</Spacer>
	</Dialog>
}
