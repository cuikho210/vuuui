<script setup lang="ts">
import '@vuuui/styles/components/layout/spacer.scss'
import type { Property } from 'csstype'

interface SpacerProps {
  gap?: Property.Gap
  wrap?: Property.FlexWrap
  justify?: Property.JustifyContent
  align?: Property.AlignItems
  direction?: Property.FlexDirection
}

defineProps<SpacerProps>()
</script>

<template>
  <div
    :style="{
      gap: gap,
      justifyContent: justify,
      alignItems: align,
      flexWrap: wrap,
      flexDirection: direction,
    }"
    class="vuuui-spacer"
  >
    <slot></slot>
  </div>
</template>
