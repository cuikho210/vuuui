<script setup lang="ts">
import {
  ref,
  useTemplateRef,
  onMounted,
  onBeforeUnmount,
  watch,
  computed,
} from 'vue'
import '@vuuui/styles/components/inputs/slider.scss'

interface SliderProps {
  modelValue?: number
  min?: number
  max?: number
  step?: number
}

const props = defineProps<SliderProps>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const sliderRef = useTemplateRef<HTMLDivElement>('sliderRef')
const knobBodyRef = useTemplateRef<HTMLDivElement>('knobBodyRef')

const percent = ref(0)
const knobActive = ref(false)
const beforeClientX = ref<number | null>(null)

const range = computed(() => {
  const min = Number(props.min) || 0
  const max = Number(props.max) || 100
  return { min, max, range: max - min }
})

const validatePercent = (value: number) => Math.max(0, Math.min(100, value))

const updateModelValue = (percentValue: number) => {
  const { min, range: rangeValue } = range.value
  const modelValue = Math.round((percentValue / 100) * rangeValue + min)
  emit('update:modelValue', modelValue)
}

const onDragging = (clientX: number) => {
  if (!knobActive.value || !sliderRef.value) return

  if (!beforeClientX.value) {
    beforeClientX.value = clientX
    return
  }

  const positionDiff = clientX - beforeClientX.value
  const percentDiff = Math.round(
    (positionDiff / sliderRef.value.clientWidth) * 100,
  )
  const newPercent = validatePercent(percent.value + percentDiff)

  beforeClientX.value = clientX
  percent.value = newPercent
  updateModelValue(newPercent)
}

const onDragStart = () => {
  knobActive.value = true
}

const onDragEnd = () => {
  knobActive.value = false
  beforeClientX.value = null
}

const handleUpdateLocalPercent = (newValue: number | undefined) => {
  if (!newValue || knobActive.value) return

  const { min, range: rangeValue } = range.value
  percent.value = validatePercent(((newValue - min) / rangeValue) * 100)
}

const handleDraggingMouse = (event: MouseEvent) => onDragging(event.clientX)
const handleDraggingTouch = (event: TouchEvent) =>
  onDragging(event.touches[0].clientX)

watch(() => props.modelValue, handleUpdateLocalPercent)

onMounted(() => {
  handleUpdateLocalPercent(props.modelValue)

  const knob = knobBodyRef.value
  if (!knob) return console.error('knobBodyRef is null')

  knob.addEventListener('mousedown', onDragStart)
  knob.addEventListener('touchstart', onDragStart)

  window.addEventListener('mouseup', onDragEnd)
  window.addEventListener('touchend', onDragEnd)
  window.addEventListener('mousemove', handleDraggingMouse)
  window.addEventListener('touchmove', handleDraggingTouch)
})

onBeforeUnmount(() => {
  const knob = knobBodyRef.value
  if (knob) {
    knob.removeEventListener('mousedown', onDragStart)
    knob.removeEventListener('touchstart', onDragStart)
  }

  window.removeEventListener('mouseup', onDragEnd)
  window.removeEventListener('touchend', onDragEnd)
  window.removeEventListener('mousemove', handleDraggingMouse)
  window.removeEventListener('touchmove', handleDraggingTouch)
})
</script>

<template>
  <div class="vuuui-slider-wrapper">
    <div class="vuuui-slider" ref="sliderRef">
      <div class="vuuui-slider-filler" :style="{ width: percent + '%' }" />
      <div class="vuuui-slider-knob" :style="{ left: percent + '%' }">
        <div
          :class="['vuuui-knob-body', { 'vuuui-active': knobActive }]"
          ref="knobBodyRef"
        >
          <div class="vuuui-knob-main" />
          <div class="vuuui-knob-outline" />
        </div>
      </div>
    </div>
  </div>
</template>
