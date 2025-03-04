<script setup lang="ts">
import '@vuuui/styles/components/containment/card.scss'

defineProps<{
  xs?: boolean
  sm?: boolean
  md?: boolean
  fluid?: boolean
}>()
</script>

<template>
  <section
    class="vuuui-card"
    :data-xs="xs"
    :data-sm="sm"
    :data-md="md"
    :data-fluid="fluid"
  >
    <slot></slot>
  </section>
</template>
