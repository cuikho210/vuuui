<script setup lang="ts">
import ButtonBase from './ButtonBase.vue'
import { DuckSpinner } from '../misc'
import type { ButtonBaseProps } from './types.d'
import '@vuuui/styles/components/buttons/icon_button.scss'

defineProps<ButtonBaseProps>()
</script>

<template>
  <ButtonBase v-bind="$props" class="vuuui-icon-button">
    <div
      class="vuuui-body"
      :style="{ visibility: loading ? 'hidden' : 'initial' }"
    >
      <slot></slot>
    </div>

    <div v-if="loading" class="vuuui-spinner">
      <DuckSpinner />
    </div>
  </ButtonBase>
</template>
