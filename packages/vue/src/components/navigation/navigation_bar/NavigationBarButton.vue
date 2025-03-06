<script setup lang="ts">
import '@vuuui/styles/components/navigation/navigation_bar/navigation_bar_button.scss'

interface NavigationBarButtonProps {
  active?: boolean
}

defineProps<NavigationBarButtonProps>()
</script>

<template>
  <button class="vuuui-navigation-bar-button" :data-active="active">
    <div class="vuuui-icon">
      <slot v-if="active" name="iconActive" />
      <slot v-else name="icon" />
    </div>

    <slot />
  </button>
</template>
