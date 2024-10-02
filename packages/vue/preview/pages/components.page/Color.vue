<script setup lang="ts">
interface ColorProps {
  color: string
  size?: string
}

withDefaults(defineProps<ColorProps>(), {
  size: '4rem',
})
</script>

<template>
  <div
    :style="{
      'background-color': color,
      'border-radius': 'var(--vuuui-radius)',
      width: size,
      height: size,
    }"
  ></div>
</template>
