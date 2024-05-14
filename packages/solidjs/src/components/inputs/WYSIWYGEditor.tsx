import { createEffect, createMemo } from 'solid-js'

import { createTiptapEditor, useEditorHTML } from 'solid-tiptap'
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

import { IconButton } from '../'
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
} from 'solidjs-remixicon'

import type { WYSIWYGEditorComponent } from './types'
import '@vuuui/styles/components/inputs/wysiwyg_editor.scss'
import '@vuuui/styles/tiptap.scss'

const MainMenu = () => <div class='vuuui-main-menu'>
	<IconButton
	><RiBold /></IconButton>

	<IconButton
	><RiItalic /></IconButton>

	<IconButton
	><RiStrikethrough /></IconButton>

	<IconButton
	><RiUnderline /></IconButton>

	<IconButton
	><RiCodeLine /></IconButton>

	<div class='vuuui-divider' />

	<IconButton
	><RiH1 /></IconButton>

	<IconButton
	><RiH2 /></IconButton>

	<IconButton
	><RiH3 /></IconButton>

	<div class='vuuui-divider' />

	<IconButton
	><RiDoubleQuotesR /></IconButton>

	<IconButton
	><RiCodeBoxLine /></IconButton>

	<div class='vuuui-divider' />

	<IconButton
	><RiListUnordered /></IconButton>

	<IconButton
	><RiListOrdered /></IconButton>

	<IconButton
	><RiListCheck3 /></IconButton>

	<div class='vuuui-divider' />

	<IconButton
	><RiTableLine /></IconButton>

	<IconButton
	><RiLink /></IconButton>

	<IconButton
	><RiImageLine /></IconButton>

	<IconButton
	><RiSeparator /></IconButton>

	<IconButton
	><RiEmotionLine /></IconButton>

	<div class='vuuui-divider' />

	<IconButton
	><RiArrowGoBackLine /></IconButton>

	<IconButton
	><RiArrowGoForwardLine /></IconButton>
</div>

export const WYSIWYGEditor: WYSIWYGEditorComponent = props => {
	const className = createMemo(() => `vuuui-wysiwyg-editor ${props.class || ''}`)

	const onRef = (ref: HTMLDivElement) => {
		const editor = createTiptapEditor(() => ({
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
		}))

		if (!editor) return console.error('[WYSIWYGEditor] Cannot create editor')

		const html = useEditorHTML(editor)
		createEffect(() => {
			if (props.onModel) props.onModel(html() || '')
		})
	}

	return <div {...props} class={className()} onChange={undefined}>
		<MainMenu />
		<div ref={onRef} />
	</div>
}
