<script setup lang="ts">
import '@vuuui/styles/components/containment/avatar.scss'

interface Props {
  src: string
  alt?: string
  size?: string
}

withDefaults(defineProps<Props>(), {
  alt: '',
  size: '64px',
})
</script>
m g
<template>
  <img class="vuuui-avatar" :style="{ width: size }" :src="src" :alt="alt" />
</template>
