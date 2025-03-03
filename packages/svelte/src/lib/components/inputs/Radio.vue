<script setup lang="ts">
import '@vuuui/styles/components/inputs/radio_input.scss'

interface RadioProps {
  placeholder?: string
}

defineProps<RadioProps>()
</script>

<template>
  <label class="vuuui-radio">
    <input v-bind="$attrs" type="radio" />

    <div class="vuuui-icon">
      <div class="vuuui-checkmark">
        <span>&#10004;</span>
      </div>
    </div>

    {{ placeholder }}
  </label>
</template>
