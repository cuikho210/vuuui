<script setup lang="ts">
import { useLayoutStore } from '../../layout.store'
import { Container } from '../../../src'
import Colors from './Colors.vue'
import Spinner from './Spinner.vue'
import Buttons from './Buttons.vue'
import Inputs from './Inputs.vue'
import Overlay from './Overlay.vue'
import Avatar from './Avatar.vue'

const layout = useLayoutStore()
layout.setActiveNavbar(1)
layout.setAppTitle('Components Components Components Components')
</script>

<template>
  <Container sm>
    <Colors /><br />
    <Spinner /><br />
    <Avatar /><br />
    <Buttons /><br />
    <Inputs /><br />
    <Overlay /><br />
  </Container>
</template>
