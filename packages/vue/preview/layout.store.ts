import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
  state: () => {
    return {
      activeNavbar: 0,
      appTitle: 'VuuUI',
    }
  },
  actions: {
    setActiveNavbar(index: number) {
      this.activeNavbar = index
    },
    setAppTitle(title: string) {
      this.appTitle = title
    },
  },
})
