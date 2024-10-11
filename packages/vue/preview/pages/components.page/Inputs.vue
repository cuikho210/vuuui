<script setup lang="ts">
import { ref } from 'vue'
import { RiSketching, RiPaletteLine, RiFileLine } from '@remixicon/vue'
import {
  Spacer,
  TextInput,
  ColorInput,
  FileInput,
  Checkbox,
  Radio,
  Slider,
  Switch,
} from '../../../src'

const files = ref<File | undefined>(undefined)
const sliderValue = ref(20)
</script>

<template>
  <section>
    <h2>Inputs</h2>
    <br />

    <p>Common</p>
    <br />
    <Spacer>
      <TextInput placeholder="Text input">
        <RiSketching />
      </TextInput>

      <ColorInput placeholder="Color input">
        <RiPaletteLine />
      </ColorInput>

      <FileInput v-model="files" placeholder="File input">
        <RiFileLine />
      </FileInput>
    </Spacer>
    <br />

    <p>Checkbox</p>
    <br />
    <Checkbox placeholder="Ahihi" />
    <Checkbox placeholder="Ahaha" />
    <br />

    <p>Radio</p>
    <br />
    <Radio placeholder="Ahihi" name="test-radio" />
    <Radio placeholder="Ahaha" name="test-radio" />
    <br />

    <p>Slider {{ sliderValue }}</p>
    <br />
    <Slider :min="15" :max="50" v-model="sliderValue" />
    <br />
    <Slider :min="15" :max="100" :step="5" v-model="sliderValue" />
    <br />

    <p>Switch</p>
    <br />
    <Switch placeholder="Sasa" />
    <Switch placeholder="Lily" />
    <br />
  </section>
</template>
