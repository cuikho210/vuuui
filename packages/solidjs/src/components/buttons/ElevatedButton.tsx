import { TextButtonBase } from "./TextButtonBase";
import type { TextButtonComponent } from ".";
import "@vuuui/styles/components/buttons/elevated_button.scss";

export const ElevatedButton: TextButtonComponent = (props) => {
	return <TextButtonBase
		defaultClassName="vuuui-elevated-button"
		{...props}
	/>
}
