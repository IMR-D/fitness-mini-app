// src/modules/telegram/useTelegramWebApp.ts
import { computed, onMounted } from 'vue';
import { useTelegramStore } from '../store/useTelegramStore';

export function useTelegramWebApp() {
  const store = useTelegramStore();
  const tg = window.Telegram?.WebApp;

  onMounted(() => {
    if (!tg) return;
    store.initFromWebApp(tg);
  });

  const user = computed(() => store.user);
  const theme = computed(() => store.themeParams);

  const showAlert = (message: string) => {
    tg?.showAlert(message);
  };

  return {
    tg,
    user,
    theme,
    showAlert,
  };
}