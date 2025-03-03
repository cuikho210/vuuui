<script setup lang="ts">
import '@vuuui/styles/components/containment/card.scss'

defineProps<{
  xs?: boolean
  sm?: boolean
  md?: boolean
}>()
</script>

<template>
  <section class="vuuui-card" v-bind="{ xs, sm, md }">
    <slot></slot>
  </section>
</template>
