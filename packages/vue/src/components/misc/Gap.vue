<script setup lang="ts">
defineProps<{
  size?: string
}>()
</script>

<template>
  <div
    class="vuuui-gap"
    :style="{ height: size || '1rem', width: size || '1rem' }"
  ></div>
</template>
