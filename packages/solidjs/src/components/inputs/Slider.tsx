import {
  createMemo,
  createSignal,
  createRenderEffect,
  onCleanup,
} from 'solid-js'
import type { SliderComponent } from './types'
import '@vuuui/styles/components/inputs/slider.scss'

export const Slider: SliderComponent = (props) => {
  const [model, setModel] = props.model || []
  const [percent, setPercent] = createSignal(0)
  const [knobActive, setKnobActive] = createSignal(false)

  let sliderBarRef: HTMLDivElement | undefined
  let beforeClientX: number | null = null

  const className = createMemo<string>(
    () => 'vuuui-slider-wrapper ' + (props.class || ''),
  )

  const getRange = () => ({
    min: Number(props.min) || 0,
    max: Number(props.max) || 100,
    range: (Number(props.max) || 100) - (Number(props.min) || 0),
  })

  const validatePercent = (value: number) => Math.max(0, Math.min(100, value))

  const setModelValue = (percentValue: number) => {
    if (!setModel) return
    const { min, range } = getRange()
    setModel(Math.round((percentValue / 100) * range + min))
  }

  const onSliderRef = (sliderBar: HTMLDivElement) => {
    sliderBarRef = sliderBar
  }

  const onKnobBodyRef = (knob: HTMLDivElement) => {
    const onDragging = (clientX: number) => {
      if (!knobActive() || !sliderBarRef) return

      if (beforeClientX == null) {
        beforeClientX = clientX
        return
      }

      const positionDiff = clientX - beforeClientX
      const percentDiff = Math.round(
        (positionDiff / sliderBarRef.clientWidth) * 100,
      )
      const newPercent = validatePercent(percent() + percentDiff)

      beforeClientX = clientX
      setPercent(newPercent)
      setModelValue(newPercent)
    }

    const onDragStart = () => setKnobActive(true)
    const onDragEnd = () => {
      setKnobActive(false)
      beforeClientX = null
    }

    knob.onmousedown = onDragStart
    knob.ontouchstart = onDragStart

    const mouseupHandler = () => onDragEnd()
    const mousemoveHandler = (event: MouseEvent) => onDragging(event.clientX)
    const touchmoveHandler = (event: TouchEvent) =>
      onDragging(event.touches[0].clientX)

    window.addEventListener('mouseup', mouseupHandler)
    window.addEventListener('touchend', mouseupHandler)
    window.addEventListener('mousemove', mousemoveHandler)
    window.addEventListener('touchmove', touchmoveHandler)

    onCleanup(() => {
      window.removeEventListener('mouseup', mouseupHandler)
      window.removeEventListener('touchend', mouseupHandler)
      window.removeEventListener('mousemove', mousemoveHandler)
      window.removeEventListener('touchmove', touchmoveHandler)
    })
  }

  createRenderEffect(() => {
    if (!model || knobActive()) return
    const { min, range } = getRange()
    setPercent(validatePercent(((model() - min) / range) * 100))
  })

  return (
    <div {...props} class={className()}>
      <div class="vuuui-slider" ref={onSliderRef}>
        <div class="vuuui-slider-filler" style={{ width: `${percent()}%` }} />
        <div class="vuuui-slider-knob" style={{ left: `${percent()}%` }}>
          <div
            class={`vuuui-knob-body${knobActive() ? ' vuuui-active' : ''}`}
            ref={onKnobBodyRef}
          >
            <div class="vuuui-knob-main" />
            <div class="vuuui-knob-outline" />
          </div>
        </div>
      </div>
    </div>
  )
}
