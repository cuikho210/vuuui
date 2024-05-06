import { TextButtonBase } from "./TextButtonBase"
import type { TextButtonComponent } from "."
import "@vuuui/styles/components/buttons/text_button.scss"

export const TextButton: TextButtonComponent = (props) => {
	return <TextButtonBase
		defaultClassName="vuuui-text-button"
		{...props}
	/>
}
