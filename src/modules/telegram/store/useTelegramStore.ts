// src/modules/telegram/store/useTelegramStore.ts
import { defineStore } from 'pinia';

export const useTelegramStore = defineStore('telegram', {
  state: () => ({
    inited: false,
    initDataUnsafe: null as TelegramWebAppInitDataUnsafe | null,
    themeParams: null as TelegramWebAppThemeParams | null,
  }),
  getters: {
    user: (state) => state.initDataUnsafe?.user ?? null,
  },
  actions: {
    initFromWebApp(webApp: TelegramWebApp) {
      if (this.inited) return;

      webApp.ready();
      this.initDataUnsafe = webApp.initDataUnsafe;
      this.themeParams = webApp.themeParams;
      this.inited = true;
    },
  },
});