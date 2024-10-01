<script setup lang="ts">
import { computed } from 'vue'
import '@vuuui/styles/components/layout/container.scss'

interface ContainerProps {
  xs?: boolean
  sm?: boolean
  md?: boolean
}

defineProps<ContainerProps>()
</script>

<template>
  <section class="vuuui-container" v-bind="{ xs, sm, md }">
    <slot></slot>
  </section>
</template>
