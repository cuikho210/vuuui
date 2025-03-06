<script lang="ts">
	import { Container } from '../index.js'
	import { untrack, onMount, type Snippet } from 'svelte'
	import type { HTMLDialogAttributes } from 'svelte/elements'
	import { fade } from 'svelte/transition'
	import '@vuuui/styles/components/overlay/dialog.scss'
	import '@vuuui/styles/transition.scss'

	interface DialogProps extends Omit<HTMLDialogAttributes, 'title'> {
		open?: boolean
		backdropClose?: boolean
		xs?: boolean
		sm?: boolean
		md?: boolean
		fluid?: boolean
		title?: Snippet
		btnAction?: Snippet
		btnClose?: Snippet
		children?: Snippet
	}

	let {
		open = $bindable(),
		backdropClose = false,
		xs,
		sm,
		md,
		fluid,
		title,
		btnAction,
		btnClose,
		children,
		...stuff
	}: DialogProps = $props()

	let openLevel = $state(0)
	$effect(() => {
		if (open) untrack(() => (openLevel += 1))
		else untrack(() => (openLevel -= 1))

		untrack(() => {
			if (openLevel > 0) {
				increDataDialogLevel()
				openLevel = 1
			} else if (openLevel == 0) {
				decreDataDialogLevel()
			} else {
				openLevel = 0
			}
		})
	})

	onMount(() => {
		return () => {
			if (openLevel > 0) decreDataDialogLevel()
		}
	})

	function handleBackdropClick() {
		if (!backdropClose) return
		open = false
	}

	function increDataDialogLevel() {
		let level = Number(document.body.getAttribute('data-vuuui-dialog-level')) || 0
		if (level > 0) {
			document.body.setAttribute('data-vuuui-dialog-level', String(level + 1))
		} else {
			document.body.setAttribute('data-vuuui-dialog-level', '1')
		}
	}

	function decreDataDialogLevel() {
		let level = Number(document.body.getAttribute('data-vuuui-dialog-level')) || 0
		if (level > 1) {
			level -= 1
			document.body.setAttribute('data-vuuui-dialog-level', String(level))
		} else {
			document.body.removeAttribute('data-vuuui-dialog-level')
		}
	}
</script>

<dialog title="" class="vuuui-dialog" tabindex="-1" {open} {...stuff}>
	<button aria-label="Dialog backdrop" class="vuuui-backdrop" onclick={handleBackdropClick}
	></button>

	{#if open}
		<Container {xs} {sm} {md} {fluid} class="vuuui-body">
			<div class="vuuui-title">
				<div class="vuuui-title-left">
					<div class="vuuui-button-slot">
						{#if btnAction}
							{@render btnAction()}
						{/if}
					</div>

					<span class="vuuui-title-content">
						{#if title}
							{@render title()}
						{/if}
					</span>
				</div>

				<div class="vuuui-button-slot">
					{#if btnClose}
						{@render btnClose()}
					{/if}
				</div>
			</div>

			<div class="vuuui-content">
				{#if children}
					{@render children()}
				{/if}
			</div>
		</Container>
	{/if}
</dialog>
