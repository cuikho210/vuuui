<script setup lang="ts">
import { watch, onBeforeUnmount } from 'vue'
import { Container } from '../../'
import '@vuuui/styles/components/overlay/dialog.scss'
import '@vuuui/styles/transition.scss'

interface DialogProps {
  modelValue?: boolean
  backdropClose?: boolean
  xs?: boolean
  sm?: boolean
  md?: boolean
  fluid?: boolean
}

const props = defineProps<DialogProps>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

onBeforeUnmount(() => {
  unsetBodyOverflowHidden()
})

watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue) setBodyOverflowHidden()
    else unsetBodyOverflowHidden()
  },
)

const backdropClose = () => {
  if (!props.backdropClose) return
  emit('update:modelValue', false)
}

function setBodyOverflowHidden() {
  document.body.style.overflow = 'hidden'
}

function unsetBodyOverflowHidden() {
  document.body.style.overflow = ''
}
</script>

<template>
  <dialog :open="modelValue" title="" class="vuuui-dialog" tabindex="-1">
    <div class="vuuui-backdrop" @click="backdropClose"></div>

    <Transition name="vuuui-fade-up">
      <Container
        v-bind="{ xs, sm, md, fluid }"
        class="vuuui-body"
        v-if="modelValue"
      >
        <div class="vuuui-title">
          <div class="vuuui-title-left">
            <div class="vuuui-button-slot">
              <slot name="btnAction" />
            </div>

            <span class="vuuui-title-content">
              <slot name="title" />
            </span>
          </div>

          <div class="vuuui-button-slot">
            <slot name="btnClose" />
          </div>
        </div>

        <div class="vuuui-content">
          <slot></slot>
        </div>
      </Container>
    </Transition>
  </dialog>
</template>
