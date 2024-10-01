import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
  state: () => {
    return {
      activeNavbar: 0,
    }
  },
  actions: {
    setActiveNavbar(index: number) {
      this.activeNavbar = index
    },
  },
})
