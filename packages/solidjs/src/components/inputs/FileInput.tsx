import type { FileInputComponent } from '.'
import '@vuuui/styles/components/inputs/file_input.scss'

export const FileInput: FileInputComponent = (props) => {
	const [files, setFiles] = props.model || [];

	const onRef = (el: HTMLInputElement) => {
		el.addEventListener('change', () => {
			if (setFiles) setFiles(el.files)
			if (files) console.log(files())
		})
	}

	return <label class='vuuui-file-input'>
		<input {...props} type='file' ref={onRef} />
		<div class='vuuui-icon'>{props.icon}</div>
		<div class='vuuui-placeholder'>{props.placeholder}</div>
	</label>
}
