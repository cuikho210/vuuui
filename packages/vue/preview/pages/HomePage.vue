<script setup lang="ts">
import { useLayoutStore } from '../layout.store'
import { Container } from '../../src'

const layout = useLayoutStore()
layout.setActiveNavbar(0)
layout.setAppTitle('Home')
</script>

<template>
  <Container md>
    <h1>VuuUI</h1>
    <br />
    <p>
      My UI library, created for my personal use, draws inspiration from Flutter
      and other top UI libraries. It is built with SCSS and TypeScript,
      providing powerful customization capabilities and optimized performance.
      With support for multiple themes, you can easily switch the appearance of
      your application to match your preferences.
    </p>
    <br />
    <p>
      This library will be initially developed for SolidJS and Vue, with support
      for other frameworks considered based on my mood. This is the tool I
      designed to turn my ideas into reality quickly and easily.
    </p>
    <br />
    <p style="text-align: right">
      <i>-- ChatGPT --</i>
    </p>
  </Container>
</template>
