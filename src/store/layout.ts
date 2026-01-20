import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    isMobile: false
  }),
  actions: {
    setIsMobile(val: boolean) {
      this.isMobile = val;
    }
  }
})
