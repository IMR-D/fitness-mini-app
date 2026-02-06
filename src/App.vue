<script setup>
import { computed } from 'vue';
import { useTelegramWebApp } from './modules/telegram/composables/useTelegramWebApp';
import ManageExercises from './modules/exercise/features/ManageExercises.vue';

const { user, theme, showAlert } = useTelegramWebApp();

const displayName = computed(() => {
  if (!user.value) return 'атлет';
  return user.value.first_name || user.value.username || 'атлет';
});

const handleHello = () => {
  showAlert('Это мини-приложение для тренировок внутри Telegram');
};
</script>

<template>
  <main
    class="app"
    :style="{
      backgroundColor: theme?.bg_color || '#111',
      color: theme?.text_color || '#fff',
    }"
  >
    <header class="app__header">
      <h1 class="app__title">
        Привет, {{ displayName }}!
      </h1>
      <button
        type="button"
        class="app__button"
        @click="handleHello"
      >
        Сказать привет через Telegram
      </button>
    </header>

    <section class="app__content">
      <ManageExercises />
    </section>
  </main>
</template>

<style scoped>
.app {
  min-height: 100vh;
  padding: 16px;
  box-sizing: border-box;
}

.app__header {
  margin-bottom: 16px;
}

.app__title {
  margin-bottom: 8px;
}

.app__button {
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
}
</style>