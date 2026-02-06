<template>
  <section class="exercise-manage" aria-labelledby="exercise-manage-title">
    <h1 id="exercise-manage-title" class="exercise-manage__title">
      Каталог упражнений
    </h1>

    <p v-if="isLoading" class="exercise-manage__status">Загрузка...</p>

    <p v-else-if="error" class="exercise-manage__status" role="alert">
      Ошибка: {{ error }}
    </p>

    <ul v-else class="exercise-manage__list" aria-label="Список упражнений">
      <li
        v-for="exercise in items"
        :key="exercise.id"
        class="exercise-manage__item"
      >
        <article class="exercise-manage__card">
          <h2 class="exercise-manage__name">
            {{ exercise.name }}
          </h2>
          <p class="exercise-manage__description">
            {{ exercise.description }}
          </p>
          <p class="exercise-manage__group">
            Мышечная группа: {{ exercise.muscleGroupId }}
          </p>
        </article>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useExerciseStore } from "../store/useExerciseStore";

const store = useExerciseStore();
const { items, isLoading, error } = storeToRefs(store);

onMounted(() => {
  if (!items.value.length) {
    store.loadAll();
  }
});
</script>

<style scoped lang="scss">
.exercise-manage {
  &__title {
    margin-bottom: 12px;
  }

  &__status {
    margin-top: 8px;
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__item {
    padding: 8px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  &__card {
    display: block;
  }

  &__name {
    font-weight: 600;
    margin-bottom: 4px;
  }

  &__description {
    font-size: 13px;
    margin-bottom: 4px;
    opacity: 0.85;
  }

  &__group {
    font-size: 12px;
    opacity: 0.7;
  }
}
</style>
