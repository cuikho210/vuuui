<script setup lang="ts">
import { defineProps } from 'vue'
import ButtonBase from './ButtonBase.vue'
import { DuckSpinner } from '../..'
import type { ButtonBaseProps } from './types.d.ts'

defineProps<ButtonBaseProps>()
</script>

<template>
  <ButtonBase v-bind="$props">
    <div class="vuuui-body" v-show="!loading">
      <span v-if="$slots.icon" class="vuuui-icon">
        <slot name="icon" />
      </span>

      <span class="vuuui-content">
        <slot />
      </span>
    </div>

    <div v-show="loading" class="vuuui-spinner">
      <DuckSpinner />
    </div>
  </ButtonBase>
</template>
