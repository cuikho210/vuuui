<script setup lang="ts">
import '@vuuui/styles/components/misc/gap.scss'
defineProps<{
  size?: string
}>()
</script>

<template>
  <div class="vuuui-gap" :style="{ width: size }"></div>
</template>
