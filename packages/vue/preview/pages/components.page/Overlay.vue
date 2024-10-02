<script setup lang="ts">
import { ref } from 'vue'
import { RiEmotionHappyLine, RiCloseLine } from '@remixicon/vue'
import {
  Spacer,
  ElevatedButton,
  Dialog,
  TextButton,
  IconButton,
} from '../../../src'

const dialogOpen = ref(false)

const openDialog = () => {
  dialogOpen.value = true
}

const closeDialog = () => {
  dialogOpen.value = false
}
</script>

<template>
  <section>
    <h2>Overlay</h2>
    <br />

    <Spacer>
      <ElevatedButton @click="openDialog">
        <template #icon>
          <RiEmotionHappyLine />
        </template>
        Open dialog
      </ElevatedButton>

      <Dialog v-model="dialogOpen" backdrop-close>
        <template #btnAction> </template>

        <template #btnClose>
          <IconButton @click="closeDialog">
            <RiCloseLine />
          </IconButton>
        </template>

        <template #title>
          This is a very very very very very very very very loooong title
        </template>

        <template #default> Test dialog ahihi </template>
      </Dialog>
    </Spacer>
  </section>
</template>
