<script setup lang="ts">
import { DuckSpinner, Spacer } from '../../../src'
</script>

<template>
  <section>
    <h2>Spinner</h2>
    <br />

    <Spacer>
      <DuckSpinner />
      <DuckSpinner :size="32" />
      <DuckSpinner :size="64" thin />
    </Spacer>
  </section>
</template>
