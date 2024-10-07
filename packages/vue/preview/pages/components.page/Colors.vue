<script setup lang="ts">
import { Spacer, Card } from '../../../src'
import Color from './Color.vue'
</script>

<template>
  <Card xs>
    <h2>Colors</h2>
    <br />

    <Spacer justify="center">
      <div>
        <small>
          <i>Primary</i>
        </small>
        <Spacer wrap="nowrap">
          <Color color="var(--vuuui-color-primary--text)" />
          <Color color="var(--vuuui-color-primary--dark)" />
          <Color color="var(--vuuui-color-primary)" />
          <Color color="var(--vuuui-color-primary--light)" />
          <Color color="var(--vuuui-color-primary--lighter)" />
        </Spacer>
      </div>

      <div>
        <small>
          <i>Alternative</i>
        </small>
        <Spacer wrap="nowrap">
          <Color color="var(--vuuui-color-alt--text)" />
          <Color color="var(--vuuui-color-alt--dark)" />
          <Color color="var(--vuuui-color-alt)" />
          <Color color="var(--vuuui-color-alt--light)" />
          <Color color="var(--vuuui-color-alt--lighter)" />
        </Spacer>
      </div>

      <div>
        <small>
          <i>Text</i>
        </small>
        <Spacer wrap="nowrap">
          <Color color="var(--vuuui-color-text)" />
          <Color color="var(--vuuui-color-text-info)" />
          <Color color="var(--vuuui-color-text-success)" />
          <Color color="var(--vuuui-color-text-warning)" />
          <Color color="var(--vuuui-color-text-danger)" />
        </Spacer>
      </div>

      <div>
        <small>
          <i>Background</i>
        </small>
        <Spacer wrap="nowrap">
          <Color color="var(--vuuui-color-bg)" />
          <Color color="var(--vuuui-color-bg-info)" />
          <Color color="var(--vuuui-color-bg-success)" />
          <Color color="var(--vuuui-color-bg-warning)" />
          <Color color="var(--vuuui-color-bg-danger)" />
        </Spacer>
      </div>
    </Spacer>
  </Card>
</template>
