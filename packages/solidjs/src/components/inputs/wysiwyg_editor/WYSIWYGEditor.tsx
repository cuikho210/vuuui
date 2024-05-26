import {
	createEffect,
	createMemo,
	createSignal,
	Show,
} from 'solid-js'

import { createEditorTransaction, createTiptapEditor, useEditorHTML } from 'solid-tiptap'
import StarterKit from '@tiptap/starter-kit'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import Table from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import { WYSIWYGEditorTableMenu } from './WYSIWYGEditorTableMenu'
import { WYSIWYGEditorInsertLink } from './WYSIWYGEditorInsertLink'

import { IconButton } from '../..'
import {
	RiBold, RiItalic,
	RiStrikethrough, RiUnderline,
	RiCodeLine,
	RiH1, RiH2, RiH3,
	RiDoubleQuotesR,
	RiCodeBoxLine,
	RiListUnordered, RiListOrdered,
	RiListCheck3,
	RiTableLine,
	RiLink,
	RiImageLine,
	RiSeparator,
	RiEmotionLine,
	RiArrowGoBackLine,
	RiArrowGoForwardLine,
	RiLinkUnlink,
} from 'solidjs-remixicon'

import type { Accessor, Setter } from 'solid-js'
import type { Editor } from '@tiptap/core'
import type { WYSIWYGEditorComponent } from './types'
import '@vuuui/styles/components/inputs/wysiwyg_editor.scss'
import '@vuuui/styles/tiptap.scss'

export const WYSIWYGEditor: WYSIWYGEditorComponent = props => {
	const className = createMemo(() => `vuuui-wysiwyg-editor ${props.class || ''}`)
	const [editorCreated, setEditorCreated] = createSignal(false)

	let editor: Accessor<Editor | undefined> = () => undefined

	// Active status
	const [bold, setBold] = createSignal(false)
	const [italic, setItalic] = createSignal(false)
	const [strikeline, setStrikeline] = createSignal(false)
	const [underline, setUnderline] = createSignal(false)
	const [inlineCode, setInlineCode] = createSignal(false)
	const [heading1, setHeading1] = createSignal(false)
	const [heading2, setHeading2] = createSignal(false)
	const [heading3, setHeading3] = createSignal(false)
	const [blockquote, setBlockquote] = createSignal(false)
	const [codeBlock, setCodeBlock] = createSignal(false)
	const [bulletList, setBulletList] = createSignal(false)
	const [orderedList, setOrderedList] = createSignal(false)
	const [taskList, setTaskList] = createSignal(false)
	const [link, setLink] = createSignal(false)
	const [isSelectionEmpty, setIsSelectionEmpty] = createSignal(false)

	const [undo, setUndo] = createSignal(false)
	const [redo, setRedo] = createSignal(false)

	const [tableActive, setTableActive] = createSignal(false)
	const [canMergeCell, setCanMergeCell] = createSignal(false)
	const [canSplitCell, setCanSplitCell] = createSignal(false)

	const [insertLinkOpen, setInsertLinkOpen] = createSignal(false)

	const onRef = (ref: HTMLDivElement) => {
		editor = createTiptapEditor(() => ({
			element: ref,
			extensions: [
				StarterKit,
				TaskItem, TaskList,
				Table.configure({ resizable: true }),
				TableHeader, TableRow, TableCell,
				Underline,
				Link.configure({ protocols: ['mailto', 'tel'], openOnClick: false }),
				Image.configure({ inline: true }),
			],
			content: props.initContent,
			onSelectionUpdate(props) {
				setTableActive(props.editor.isActive('table'))
			},
		}))

		setEditorCreated(true)

		const html = useEditorHTML(editor)
		createEffect(() => {
			if (props.onModel) props.onModel(html() || '')
		})

		bindActiveState(editor, setBold, 'bold')
		bindActiveState(editor, setItalic, 'italic')
		bindActiveState(editor, setStrikeline, 'strike')
		bindActiveState(editor, setUnderline, 'underline')
		bindActiveState(editor, setInlineCode, 'code')
		bindActiveState(editor, setHeading1, 'heading', { level: 1 })
		bindActiveState(editor, setHeading2, 'heading', { level: 2 })
		bindActiveState(editor, setHeading3, 'heading', { level: 3 })
		bindActiveState(editor, setBlockquote, 'blockquote')
		bindActiveState(editor, setCodeBlock, 'codeBlock')
		bindActiveState(editor, setBulletList, 'bulletList')
		bindActiveState(editor, setOrderedList, 'orderedList')
		bindActiveState(editor, setTaskList, 'taskList')
		bindActiveState(editor, setLink, 'link')

		bindUndoState(editor, setUndo)
		bindRedoState(editor, setRedo)
		bindSelectionState(editor, setIsSelectionEmpty)

		bindCanMergeCellState(editor, setCanMergeCell)
		bindCanSplitCellState(editor, setCanSplitCell)
	}

	return <div {...props} class={className()} >
		<Show when={editorCreated()}>
			<div class='vuuui-editor-main-menu'>
				<IconButton
					active={bold()}
					onClick={() => editor()?.chain().focus().toggleBold().run()}
					title='Bold'
				><RiBold /></IconButton>

				<IconButton
					active={italic()}
					onClick={() => editor()?.chain().focus().toggleItalic().run()}
					title='Italic'
				><RiItalic /></IconButton>

				<IconButton
					active={strikeline()}
					onClick={() => editor()?.chain().focus().toggleStrike().run()}
					title='Strikeline'
				><RiStrikethrough /></IconButton>

				<IconButton
					active={underline()}
					onClick={() => editor()?.chain().focus().toggleUnderline().run()}
					title='Underline'
				><RiUnderline /></IconButton>

				<IconButton
					active={inlineCode()}
					onClick={() => editor()?.chain().focus().toggleCode().run()}
					title='Inline code'
				><RiCodeLine /></IconButton>

				<div class='vuuui-divider' />

				<IconButton
					active={heading1()}
					onClick={() => editor()?.chain().focus().toggleHeading({level: 1}).run()}
					title='Heading 1'
				><RiH1 /></IconButton>

				<IconButton
					active={heading2()}
					onClick={() => editor()?.chain().focus().toggleHeading({level: 2}).run()}
					title='Heading 2'
				><RiH2 /></IconButton>

				<IconButton
					active={heading3()}
					onClick={() => editor()?.chain().focus().toggleHeading({level: 3}).run()}
					title='Heading 3'
				><RiH3 /></IconButton>

				<div class='vuuui-divider' />

				<IconButton
					active={blockquote()}
					onClick={() => editor()?.chain().focus().toggleBlockquote().run()}
					title='Blockquote'
				><RiDoubleQuotesR /></IconButton>

				<IconButton
					active={codeBlock()}
					onClick={() => editor()?.chain().focus().toggleCodeBlock().run()}
					title='Code block'
				><RiCodeBoxLine /></IconButton>

				<div class='vuuui-divider' />

				<IconButton
					active={bulletList()}
					onClick={() => editor()?.chain().focus().toggleBulletList().run()}
					title='Insert list'
				><RiListUnordered /></IconButton>

				<IconButton
					active={orderedList()}
					onClick={() => editor()?.chain().focus().toggleOrderedList().run()}
					title='Insert ordered list'
				><RiListOrdered /></IconButton>

				<IconButton
					active={taskList()}
					onClick={() => editor()?.chain().focus().toggleTaskList().run()}
					title='Insert check list'
				><RiListCheck3 /></IconButton>

				<div class='vuuui-divider' />

				<IconButton
					onClick={() => editor()?.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}
					title='Insert table'
				><RiTableLine /></IconButton>

				<IconButton
					disabled={isSelectionEmpty() && !link()}
					onClick={() => setInsertLinkOpen(true)}
					title='Link'
				><RiLink /></IconButton>

				<IconButton
					disabled={!link()}
					onClick={() => editor()?.chain().focus().extendMarkRange("link").unsetLink().run()}
					title='Unlink'
				><RiLinkUnlink /></IconButton>

				<IconButton
					title='Insert image'
				><RiImageLine /></IconButton>

				<IconButton
					onClick={() => editor()?.chain().focus().setHorizontalRule().run()}
					title='Insert divider'
				><RiSeparator /></IconButton>

				<IconButton
					title='Insert emoji'
				><RiEmotionLine /></IconButton>

				<div class='vuuui-divider' />

				<IconButton
					disabled={!undo()}
					onClick={() => editor()?.commands.undo()}
					title='Undo'
				><RiArrowGoBackLine /></IconButton>

				<IconButton
					disabled={!redo()}
					onClick={() => editor()?.commands.redo()}
					title='Redo'
				><RiArrowGoForwardLine /></IconButton>
			</div>

			<WYSIWYGEditorTableMenu
				editor={editor}
				visible={tableActive()}
				canMergeCell={canMergeCell()}
				canSplitCell={canSplitCell()}
			/>

			<WYSIWYGEditorInsertLink
				editor={editor}
				modal={[insertLinkOpen, setInsertLinkOpen]}
			/>
		</Show>

		<div ref={onRef} />
	</div>
}

function bindActiveState(
	editor: Accessor<Editor | undefined>,
	setter: Setter<boolean>,
	key: string,
	options?: {},
) {
	const isActive = createEditorTransaction(editor, editor => editor?.isActive(key, options))
	createEffect(() => setter(isActive() ?? false))
}

function bindUndoState(
	editor: Accessor<Editor | undefined>,
	setter: Setter<boolean>,
) {
	const state = createEditorTransaction(editor, editor => editor?.can().undo())
	createEffect(() => setter(state() ?? false))
}

function bindRedoState(
	editor: Accessor<Editor | undefined>,
	setter: Setter<boolean>,
) {
	const state = createEditorTransaction(editor, editor => editor?.can().redo())
	createEffect(() => setter(state() ?? false))
}

function bindCanMergeCellState(
	editor: Accessor<Editor | undefined>,
	setter: Setter<boolean>,
) {
	const state = createEditorTransaction(editor, editor => editor?.can().mergeCells())
	createEffect(() => setter(state() ?? false))
}

function bindCanSplitCellState(
	editor: Accessor<Editor | undefined>,
	setter: Setter<boolean>,
) {
	const state = createEditorTransaction(editor, editor => editor?.can().splitCell())
	createEffect(() => setter(state() ?? false))
}

function bindSelectionState(
	editor: Accessor<Editor | undefined>,
	setter: Setter<boolean>,
) {
	const state = createEditorTransaction(editor, editor => editor?.state.selection.empty)
	createEffect(() => setter(state() ?? false))
}
