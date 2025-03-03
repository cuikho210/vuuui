<script setup lang="ts">
import '@vuuui/styles/components/inputs/file_input.scss'

interface FileInputProps {
  modelValue?: File
  placeholder?: string
}

defineProps<FileInputProps>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: File): void
}>()

const onInputChange = (e: Event) => {
  const files =
    (<HTMLInputElement>e.target).files || (<DragEvent>e).dataTransfer?.files
  if (!files?.length) return

  emit('update:modelValue', files[0])
}
</script>

<template>
  <label class="vuuui-file-input">
    <input
      v-bind="$attrs"
      type="file"
      :placeholder="placeholder"
      @change="onInputChange"
    />

    <div class="vuuui-icon">
      <slot />
    </div>

    <div class="vuuui-placeholder">
      {{ modelValue?.name || placeholder }}
    </div>
  </label>
</template>
