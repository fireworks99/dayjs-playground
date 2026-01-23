import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    sidebarOpened: true,
    isMobile: false
  }),
  actions: {
    toggleSidebar() {
      this.sidebarOpened = !this.sidebarOpened;
    },
    closeSidebar() {
      this.sidebarOpened = false;
    },
    setIsMobile(val: boolean) {
      this.isMobile = val;
      !val && (this.sidebarOpened = true);
    }
  }
})
