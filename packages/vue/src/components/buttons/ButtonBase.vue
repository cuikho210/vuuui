<script setup lang="ts">
import { computed, defineProps } from 'vue'
import type { ButtonBaseProps } from './types.d.ts'

const props = defineProps<ButtonBaseProps>()

const emit = defineEmits<{
  (e: 'click'): void
}>()

const isDisabled = computed(() => props.loading || props.disabled)

const handleClick = () => {
  if (!isDisabled.value) {
    emit('click')
  }
}
</script>

<template>
  <button
    v-bind="$attrs"
    :disabled="isDisabled"
    :active="active"
    @click="handleClick"
  >
    <slot />
  </button>
</template>
