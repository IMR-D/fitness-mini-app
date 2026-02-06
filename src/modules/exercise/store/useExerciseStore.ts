// src/modules/exercise/store/useExerciseStore.ts
import { defineStore } from 'pinia';
import type { Exercise } from '../domain/exercise.types';
import { fetchExercises } from '../api/exerciseApi';

export const useExerciseStore = defineStore('exercise', {
  state: () => ({
    items: [] as Exercise[],
    isLoading: false,
    error: null as string | null,
  }),

  actions: {
    async loadAll() {
      if (this.isLoading) return;

      this.isLoading = true;
      this.error = null;

      try {
        this.items = await fetchExercises();
      } catch (e: any) {
        this.error = e?.message ?? 'Неизвестная ошибка';
      } finally {
        this.isLoading = false;
      }
    },
  },
});