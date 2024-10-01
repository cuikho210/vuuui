<script setup lang="ts">
import { defineProps } from 'vue'
import TextButtonBase from './TextButtonBase.vue'
import '@vuuui/styles/components/buttons/filled_button.scss'
import type { ButtonBaseProps } from './types.d.ts'

defineProps<ButtonBaseProps>()
</script>

<template>
  <TextButtonBase v-bind="$props" class="vuuui-filled-button">
    <template #icon>
      <slot name="icon"></slot>
    </template>

    <template #default>
      <slot></slot>
    </template>
  </TextButtonBase>
</template>
