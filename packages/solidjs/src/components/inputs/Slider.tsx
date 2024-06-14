import { createMemo, createSignal, createRenderEffect } from 'solid-js'
import type { SliderComponent } from './types'
import '@vuuui/styles/components/inputs/slider.scss'

export const Slider: SliderComponent = props => {
	const [model, setModel] = props.model || []
	const [percent, setPercent] = createSignal(0)
	const [knobActive, setKnobActive] = createSignal(false)

	let sliderBarRef: HTMLDivElement | undefined
	let beforeClientX: number | null = null

	const className = createMemo<string>(() => {
		return 'vuuui-slider-wrapper ' + (props.class || '')
	})

	const getRange = () => {
		const min = Number(props.min) || 0
		const max = Number(props.max) || 100
		const range = max - min

		return {min, max, range}
	}

	const validatePercent = (value: number) => {
		if (value > 100) value = 100
		if (value < 0) value = 0
		return value
	}

	const setModelValue = (percentValue: number) => {
		if (!setModel) return

		const { min, range } = getRange()
		const modelValue = Math.round((percentValue / 100 * range) + min)
		setModel(modelValue)
	}

	const onSliderRef = (sliderBar: HTMLDivElement) => {
		sliderBarRef = sliderBar
	}

	const onKnobBodyRef = (knob: HTMLDivElement) => {
		const onDragging = (clientX: number) => {
			if (!knobActive()) return console.log('[knob dragging] rejected by isKnobActive equal false')
			if (!sliderBarRef) return console.log('[knob dragging] rejected by sliderBarRef is undefined')

			if (beforeClientX == null) {
				beforeClientX = clientX
				return
			}

			const positionDiff = clientX - beforeClientX
			const percentDiff = Math.round(positionDiff / sliderBarRef.clientWidth * 100)
			const newPercent = validatePercent(percent() + percentDiff)

			beforeClientX = clientX
			setPercent(newPercent)
			setModelValue(newPercent)
		}

		const onDragStart = () => {
			setKnobActive(true)
		}

		const onDragEnd = () => {
			setKnobActive(false)
			beforeClientX = null
		}

		knob.onmousedown = () => onDragStart()
		knob.ontouchstart = () => onDragStart()

		window.addEventListener('mouseup', () => onDragEnd())
		window.addEventListener('touchend', () => onDragEnd())

		window.addEventListener('mousemove', event => onDragging(event.clientX))
		window.addEventListener('touchmove', event => onDragging(event.touches[0].clientX))
	}

	createRenderEffect(() => {
		if (!model) return
		if (knobActive()) return

		const { min, range } = getRange()
		const percentValue = validatePercent((model() - min) / range * 100)
		setPercent(percentValue)
	})

	return <div {...props} class={className()}>
		<div class='vuuui-slider' ref={onSliderRef}>
			<div class='vuuui-slider-filler' style={{ width: percent() + '%' }} />
			<div class='vuuui-slider-knob' style={{ left: percent() + '%' }}>
				<div
					class={'vuuui-knob-body' + (knobActive() ? ' vuuui-active' : '')}
					ref={onKnobBodyRef}
				>
					<div class='vuuui-knob-main' />
					<div class='vuuui-knob-outline' />
				</div>
			</div>
		</div>
	</div>
}
