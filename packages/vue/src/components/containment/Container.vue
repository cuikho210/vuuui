<script setup lang="ts">
import '@vuuui/styles/components/containment/container.scss'

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
