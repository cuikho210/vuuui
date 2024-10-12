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
import {
  NavigationBarButton,
  NavigationBar,
  AppBar,
  IconButton,
  LinearProgressIndicator,
} from '../src'
import { RouterView } from 'vue-router'
import { useLayoutStore } from './layout.store'

const layout = useLayoutStore()

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
  <div class="app-navigation">
    <NavigationBar class="vuuui-navbar">
      <NavigationBarButton
        v-for="(link, i) in links"
        :key="i"
        :active="layout.activeNavbar == i"
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

  <div class="app-bar">
    <AppBar class="vuuui-appbar">
      <template #leading>
        <IconButton>
          <RiArrowLeftSLine />
        </IconButton>
      </template>

      <template #title> {{ layout.appTitle }} </template>

      <template #actions>
        <IconButton> <RiHeartLine /> </IconButton>
        <IconButton> <RiShieldUserLine /> </IconButton>
        <IconButton> <RiSettingsLine /> </IconButton>
      </template>
    </AppBar>
    <LinearProgressIndicator />
  </div>

  <div class="app-body">
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
@import '@vuuui/styles/vuuui.scss';

.app-navigation {
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 50;
  width: 100%;
}

.app-bar {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 51;
  width: 100%;
}

.app-body {
  margin-top: var(--appbar-height);
  margin-bottom: var(--navbar-mobile-height);
}

.vuuui-navbar {
  height: var(--navbar-mobile-height);
}

.vuuui-appbar {
  height: var(--appbar-height);
}

@media screen and (min-width: map-get($break-point, break-xs)) {
  .app-navigation {
    width: auto;
    height: 100%;
  }

  .app-body {
    margin-bottom: 0;
  }

  .app-body,
  .app-bar {
    margin-left: var(--navbar-desktop-width);
  }

  .app-bar {
    width: calc(100% - var(--navbar-desktop-width));
  }

  .vuuui-navbar {
    width: var(--navbar-desktop-width);
    height: 100%;
  }
}
</style>
