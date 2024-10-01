import { TextButtonBase } from './TextButtonBase'
import type { TextButtonComponent } from '.'
import '@vuuui/styles/components/buttons/filled_button.scss'

export const FilledButton: TextButtonComponent = (props) => {
  return <TextButtonBase defaultClassName="vuuui-filled-button" {...props} />
}
