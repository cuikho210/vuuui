<script setup lang="ts">
import '@vuuui/styles/components/inputs/checkbox_input.scss'

interface CheckboxProps {
  modelValue?: boolean
  placeholder?: string
}

defineProps<CheckboxProps>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const onInputChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.checked)
}
</script>

<template>
  <label class="vuuui-checkbox">
    <input
      v-bind="$attrs"
      type="checkbox"
      :checked="modelValue"
      @input="onInputChange"
    />

    <div class="vuuui-icon">
      <div class="vuuui-checkmark">
        <span>&#10004;</span>
      </div>
    </div>

    {{ placeholder }}
  </label>
</template>
