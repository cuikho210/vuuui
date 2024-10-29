<script setup lang="ts">
import {
  RiHeartLine,
  RiHeart2Line,
  RiHeart3Line,
  RiHeartsLine,
  RiToggleLine,
  RiLoaderLine,
  RiFlowerLine,
} from '@remixicon/vue'
import {
  Spacer,
  ElevatedButton,
  FilledButton,
  TextButton,
  OutlinedButton,
  IconButton,
  Gap,
} from '../../../src'
import { ref } from 'vue'

const disabled = ref(true)
const loading = ref(true)
const active = ref(true)
</script>

<template>
  <section>
    <h2>Buttons</h2>
    <Gap />

    <Spacer>
      <ElevatedButton>Normal</ElevatedButton>
      <ElevatedButton :disabled="disabled">Disabled</ElevatedButton>
      <ElevatedButton :active="active" disabled> Active </ElevatedButton>
      <ElevatedButton>
        <template #icon><RiHeartLine /></template>
        Icon
      </ElevatedButton>
      <ElevatedButton :loading="loading">Loading</ElevatedButton>
    </Spacer>
    <Gap />

    <Spacer>
      <FilledButton>Normal</FilledButton>
      <FilledButton :disabled="disabled">Disabled</FilledButton>
      <FilledButton :active="active" disabled> Active </FilledButton>
      <FilledButton>
        <template #icon><RiHeart2Line /></template>
        Icon
      </FilledButton>
      <FilledButton :loading="loading">Loading</FilledButton>
    </Spacer>
    <Gap />

    <Spacer>
      <TextButton>Normal</TextButton>
      <TextButton :disabled="disabled">Disabled</TextButton>
      <TextButton :active="active" disabled> Active </TextButton>
      <TextButton>
        <template #icon><RiHeart3Line /></template>
        Icon
      </TextButton>
      <TextButton :loading="loading">Loading</TextButton>
    </Spacer>
    <Gap />

    <Spacer>
      <OutlinedButton>Normal</OutlinedButton>
      <OutlinedButton :disabled="disabled">Disabled</OutlinedButton>
      <OutlinedButton :active="active" disabled> Active </OutlinedButton>
      <OutlinedButton>
        <template #icon><RiHeartsLine /></template>
        Icon
      </OutlinedButton>
      <OutlinedButton :loading="loading">Loading</OutlinedButton>
    </Spacer>
    <Gap />

    <Spacer>
      <IconButton @click="disabled = !disabled" title="Toggle disabled">
        <RiToggleLine size="2rem" />
      </IconButton>

      <IconButton
        @click="loading = !loading"
        title="Toggle loading"
        :disabled="disabled"
      >
        <RiLoaderLine size="2rem" />
      </IconButton>

      <IconButton
        @click="active = !active"
        title="Toggle active"
        :active="active"
      >
        <RiFlowerLine size="2rem" />
      </IconButton>

      <IconButton :disabled="disabled">
        <RiHeart2Line size="2rem" />
      </IconButton>
      <IconButton :loading="loading">
        <RiHeart3Line size="2rem" />
      </IconButton>
    </Spacer>
    <Gap />
  </section>
</template>
