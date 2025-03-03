<script setup lang="ts">
import '@vuuui/styles/components/inputs/slider.scss'

interface SliderProps {
  modelValue?: number
  min?: number
  max?: number
  step?: number
}

defineProps<SliderProps>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

function onInput(e: Event) {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', Number(target.value))
}
</script>

<template>
  <div class="vuuui-slider-wrapper">
    <input
      type="range"
      class="vuuui-slider"
      v-bind="{ min, max, step }"
      :style="{
        '--val': modelValue || 50,
        '--min': min || 0,
        '--max': max || 100,
      }"
      :value="modelValue"
      @input="onInput"
    />
  </div>
</template>
