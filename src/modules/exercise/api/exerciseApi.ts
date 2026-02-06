// src/modules/exercise/api/exerciseApi.ts
import type { Exercise } from '../domain/exercise.types';
import type { ExerciseDto } from '../domain/exercise.dto';
import { mapExerciseDtoToDomain } from '../domain/exercise.mapper';

const MOCK_EXERCISES: ExerciseDto[] = [
  {
    id: 'ex-1',
    name: 'Жим лёжа',
    description: 'Базовое упражнение на грудные мышцы.',
    muscleGroupId: 'chest',
  },
  {
    id: 'ex-2',
    name: 'Приседания со штангой',
    description: 'Базовое упражнение на ноги и ягодицы.',
    muscleGroupId: 'legs',
  },
  {
    id: 'ex-3',
    name: 'Подтягивания',
    description: 'Упражнение на спину и бицепс.',
    muscleGroupId: 'back',
  },
];

// Сейчас вместо реального fetch просто возвращаем моковые данные
export async function fetchExercises(): Promise<Exercise[]> {
  // эмуляция сетевой задержки
  await new Promise((r) => setTimeout(r, 300));

  return MOCK_EXERCISES.map(mapExerciseDtoToDomain);
}