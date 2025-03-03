<script setup lang="ts">
import '@vuuui/styles/components/inputs/color_input.scss'

interface ColorInputProps {
  modelValue?: string
  placeholder?: string
}

defineProps<ColorInputProps>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const onInputChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <label class="vuuui-color-input">
    <input
      v-bind="$attrs"
      type="color"
      :value="modelValue"
      :placeholder="placeholder"
      @input="onInputChange"
    />

    <div class="vuuui-icon"><slot /></div>
    <div class="vuuui-placeholder">{{ placeholder }}</div>
  </label>
</template>
