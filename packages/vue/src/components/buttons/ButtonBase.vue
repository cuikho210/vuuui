<script setup lang="ts">
import { computed, defineProps } from 'vue'
import type { ButtonBaseProps } from './types.d.ts'

const props = defineProps<ButtonBaseProps>()
const isDisabled = computed(() => props.loading || props.disabled)
</script>

<template>
  <button
    :disabled="isDisabled"
    :active="active"
  >
    <slot />
  </button>
</template>
