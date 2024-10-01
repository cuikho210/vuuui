<script setup lang="ts">
import { useLayoutStore } from '../layout.store'

const layout = useLayoutStore()
layout.setActiveNavbar(0)
</script>

<template>Home</template>
