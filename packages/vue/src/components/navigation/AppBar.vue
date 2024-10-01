<script setup lang="ts">
import '@vuuui/styles/components/navigation/app_bar.scss'
</script>

<template>
  <section class="vuuui-app-bar">
    <div class="vuuui-app-bar-section-left">
      <div class="vuuui-app-bar-leading">
        <slot name="leading" />
      </div>

      <div class="vuuui-app-bar-title">
        <slot name="title" />
      </div>
    </div>

    <div class="vuuui-app-bar-actions">
      <slot name="actions"></slot>
    </div>
  </section>
</template>
