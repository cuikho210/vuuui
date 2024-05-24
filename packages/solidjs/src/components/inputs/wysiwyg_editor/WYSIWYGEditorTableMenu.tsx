import {
	RiInsertColumnLeft,
	RiInsertColumnRight,
	RiDeleteColumn,
	RiInsertRowTop,
	RiInsertRowBottom,
	RiDeleteRow,
	RiHeading,
	RiMergeCellsHorizontal,
	RiSplitCellsHorizontal,
	RiDeleteBin7Line,
} from 'solidjs-remixicon'
import {
	IconButton,
} from '../..'
import type { WYSIWYGEditorTableMenuComponent } from './types'

export const WYSIWYGEditorTableMenu: WYSIWYGEditorTableMenuComponent = props => {

	return <div data-visible={props.visible} class='vuuui-editor-sub-menu'>
		<IconButton
			onClick={() => props.editor()?.chain().focus().addColumnBefore().run()}
		><RiInsertColumnLeft /></IconButton>

		<IconButton
			onClick={() => props.editor()?.chain().focus().addColumnAfter().run()}
		><RiInsertColumnRight /></IconButton>

		<IconButton
			onClick={() => props.editor()?.chain().focus().deleteColumn().run()}
		><RiDeleteColumn /></IconButton>

		<div class='vuuui-divider' />

		<IconButton
			onClick={() => props.editor()?.chain().focus().addRowBefore().run()}
		><RiInsertRowTop /></IconButton>

		<IconButton
			onClick={() => props.editor()?.chain().focus().addRowAfter().run()}
		><RiInsertRowBottom /></IconButton>

		<IconButton
			onClick={() => props.editor()?.chain().focus().deleteRow().run()}
		><RiDeleteRow /></IconButton>

		<div class='vuuui-divider' />

		<IconButton
			onClick={() => props.editor()?.chain().focus().toggleHeaderCell().run()}
		><RiHeading /></IconButton>

		<div class='vuuui-divider' />

		<IconButton
			onClick={() => props.editor()?.chain().focus().mergeCells().run()}
			disabled={!props.canMergeCell}
		><RiMergeCellsHorizontal /></IconButton>

		<IconButton
			onClick={() => props.editor()?.chain().focus().splitCell().run()}
			disabled={!props.canSplitCell}
		><RiSplitCellsHorizontal /></IconButton>

		<div class='vuuui-divider' />

		<IconButton
			onClick={() => props.editor()?.chain().focus().deleteTable().run()}
		><RiDeleteBin7Line /></IconButton>
	</div>
}
