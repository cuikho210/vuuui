<script setup lang="ts">
import { useLayoutStore } from '../layout.store'

const layout = useLayoutStore()
layout.setActiveNavbar(2)
</script>

<template>About</template>
