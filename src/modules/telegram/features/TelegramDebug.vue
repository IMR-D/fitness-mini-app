<script setup lang="ts">
import { useTelegramWebApp } from '../composables/useTelegramWebApp';

const { user, theme, showAlert } = useTelegramWebApp();

const handleClick = () => {
  showAlert('Работаю внутри Telegram WebApp');
};
</script>

<template>
  <main class="telegram-debug">
    <section class="telegram-debug__card" aria-label="Информация о Telegram пользователе">
      <h1 class="telegram-debug__title">
        Telegram Mini App
      </h1>

      <p class="telegram-debug__text">
        <span class="telegram-debug__label">Пользователь:</span>
        <span v-if="user">
          {{ user.first_name }} {{ user.last_name || '' }} (@{{ user.username || '—' }})
        </span>
        <span v-else>
          Не в Telegram WebApp (или initData ещё не пришли)
        </span>
      </p>

      <p class="telegram-debug__text">
        <span class="telegram-debug__label">Тема:</span>
        <span v-if="theme">
          текст: {{ theme.text_color || 'default' }},
          фон: {{ theme.bg_color || 'default' }}
        </span>
        <span v-else>
          Тема не инициализирована
        </span>
      </p>

      <button
        class="telegram-debug__button"
        type="button"
        @click="handleClick"
      >
        Показать alert в Telegram
      </button>
    </section>
  </main>
</template>

<style scoped>
/* потом перенесёшь в scss по своим правилам BEM, сейчас — как минимальный пример */
.telegram-debug {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.telegram-debug__card {
  width: 100%;
  max-width: 420px;
  padding: 16px;
  border-radius: 12px;
  background-color: #ffffff;
}

.telegram-debug__title {
  margin-bottom: 12px;
  font-size: 20px;
}

.telegram-debug__text {
  margin-bottom: 8px;
}

.telegram-debug__label {
  font-weight: 600;
  margin-right: 4px;
}

.telegram-debug__button {
  margin-top: 16px;
  width: 100%;
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  background-color: #2ea6ff;
  color: #fff;
  font-weight: 600;
}
</style>