import { TextButtonBase } from "./TextButtonBase"
import type { TextButtonComponent } from "."
import "@vuuui/styles/components/buttons/outlined_button.scss"

export const OutlinedButton: TextButtonComponent = (props) => {
	return <TextButtonBase
		defaultClassName="vuuui-outlined-button"
		{...props}
	/>
}
