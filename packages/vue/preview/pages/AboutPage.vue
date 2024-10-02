<script setup lang="ts">
import { useLayoutStore } from '../layout.store'
import { Container } from '../../src'

const layout = useLayoutStore()
layout.setActiveNavbar(2)
layout.setAppTitle('About')
</script>

<template>
  <Container md>
    <h2>VuuUI</h2>
    <p>
      <a href="https://github.com/cuikho210/vuuui">
        https://github.com/cuikho210/vuuui
      </a>
    </p>
    <br />
    <p>
      <a href="https://github.com/cuikho210">Cuikho210</a>
    </p>
    <p>tonykms210@gmail.com</p>
  </Container>
</template>
