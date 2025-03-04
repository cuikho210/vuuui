<script setup lang="ts">
import '@vuuui/styles/components/containment/container.scss'

interface ContainerProps {
  xs?: boolean
  sm?: boolean
  md?: boolean
  fluid?: boolean
}

defineProps<ContainerProps>()
</script>

<template>
  <section
    class="vuuui-container"
    :data-xs="xs"
    :data-sm="sm"
    :data-md="md"
    :data-fluid="fluid"
  >
    <slot></slot>
  </section>
</template>
