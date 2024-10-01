<script setup lang="ts">
import '@vuuui/styles/components/inputs/text_input.scss'

interface TextInputProps {
  modelValue?: string
  placeholder?: string
}

defineProps<TextInputProps>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const onInputChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="vuuui-text-input">
    <input
      v-bind="$attrs"
      :value="modelValue"
      @input="onInputChange"
      :placeholder="placeholder"
    />

    <div class="vuuui-icon">
      <slot />
    </div>

    <div class="vuuui-placeholder">{{ placeholder }}</div>
  </div>
</template>
