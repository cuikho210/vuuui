<script setup lang="ts">
import {
  RiHomeLine,
  RiHomeFill,
  RiCollageLine,
  RiCollageFill,
  RiCupLine,
  RiCupFill,
  RiArrowLeftSLine,
  RiHeartLine,
  RiShieldUserLine,
  RiSettingsLine,
} from '@remixicon/vue'
import { NavigationBarButton, NavigationBar, AppBar, IconButton } from '../src'
import { RouterView } from 'vue-router'

const links = [
  {
    icon: RiHomeLine,
    iconActive: RiHomeFill,
    label: 'Home',
    path: '/',
  },
  {
    icon: RiCollageLine,
    iconActive: RiCollageFill,
    label: 'Components',
    path: '/components',
  },
  {
    icon: RiCupLine,
    iconActive: RiCupFill,
    label: 'About',
    path: '/about',
  },
]
</script>

<template>
  <main class="section-app">
    <div class="app-navigation">
      <NavigationBar>
        <NavigationBarButton
          v-for="(link, i) in links"
          :key="i"
          :active="false"
          @click="$router.push(link.path)"
        >
          <template #icon>
            <component :is="link.icon" />
          </template>

          <template #iconActive>
            <component :is="link.iconActive" />
          </template>

          <template #default>
            {{ link.label }}
          </template>
        </NavigationBarButton>
      </NavigationBar>
    </div>

    <div class="app-main">
      <div class="app-bar">
        <AppBar>
          <template #leading>
            <IconButton>
              <RiArrowLeftSLine />
            </IconButton>
          </template>

          <template #title> Ahihi </template>

          <template #actions>
            <IconButton> <RiHeartLine /> </IconButton>
            <IconButton> <RiShieldUserLine /> </IconButton>
            <IconButton> <RiSettingsLine /> </IconButton>
          </template>
        </AppBar>
      </div>

      <div class="app-body">
        <RouterView />
      </div>
    </div>
  </main>
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
