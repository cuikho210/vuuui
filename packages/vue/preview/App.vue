<script setup lang="ts">
import { ref } from 'vue'
import { RiHeartLine, RiFileLine, RiPaletteLine } from '@remixicon/vue'
import {
  Container,
  Spacer,
  TextInput,
  FileInput,
  ColorInput,
  Checkbox,
  Radio,
  Slider,
  Switch,
} from '../src'

const file = ref<File | undefined>(undefined)
const checked = ref(true)
const switched = ref(true)
const sliderValue = ref(11)
</script>

<template>
  <Container>
    <Spacer direction="column">
      <Checkbox placeholder="display file input" v-model="checked" />

      <Switch v-model="switched" placeholder="Display color input" />

      <Radio name="radio" placeholder="ahihi radio 1" />
      <Radio name="radio" placeholder="ahihi radio 2" />
      <Radio name="radio" placeholder="ahihi radio 3" />

      <TextInput placeholder="ahihi text" required><RiHeartLine /></TextInput>

      <FileInput v-if="checked" placeholder="ahihi file" required v-model="file"
        ><RiFileLine
      /></FileInput>

      <ColorInput placeholder="ahihi color" required v-if="switched"
        ><RiPaletteLine
      /></ColorInput>
    </Spacer>
    <br />

    <div>
      {{ sliderValue }}

      <Slider :min="0" :max="25" v-model="sliderValue" />
      <br />

      <Slider :min="8" :max="32" v-model="sliderValue" />
    </div>
    <br />
  </Container>
</template>

<style scoped lang="scss">
@import '@vuuui/styles/vuuui.scss';

.section-app {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column-reverse;
  width: 100%;
  height: 100%;

  @media screen and (min-width: map-get($break-point, break-xs)) {
    flex-direction: row;
  }

  .app-navigation {
    flex: 0;
  }

  .app-main {
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-y: auto;

    .app-bar {
      position: sticky;
      top: 0;
      z-index: 50;
    }
  }
}
</style>
