<script setup lang="ts">
import { defineProps } from 'vue'
import TextButtonBase from './TextButtonBase.vue'
import '@vuuui/styles/components/buttons/text_button.scss'
import type { ButtonBaseProps } from './types.d.ts'

defineProps<ButtonBaseProps>()
</script>

<template>
  <TextButtonBase v-bind="$props" class="vuuui-text-button">
    <template #icon v-if="$slots.icon">
      <slot name="icon" />
    </template>

    <template #default>
      <slot></slot>
    </template>
  </TextButtonBase>
</template>
