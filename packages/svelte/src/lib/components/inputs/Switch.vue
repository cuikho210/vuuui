<script setup lang="ts">
import '@vuuui/styles/components/inputs/switch.scss'

interface SwitchProps {
  modelValue?: boolean
  placeholder?: string
}

defineProps<SwitchProps>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const onInputChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.checked)
}
</script>

<template>
  <label class="vuuui-switch">
    <input
      v-bind="$attrs"
      type="checkbox"
      :checked="modelValue"
      @input="onInputChange"
    />

    <div class="vuuui-switch-button">
      <div class="vuuui-switch-dot" />
    </div>

    {{ placeholder }}
  </label>
</template>
