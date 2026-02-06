// src/modules/exercise/domain/exercise.mapper.ts
import type { Exercise } from './exercise.types';
import { ExerciseDtoSchema, type ExerciseDto } from './exercise.dto';

// внешний DTO → доменный тип Exercise
export function mapExerciseDtoToDomain(dto: ExerciseDto): Exercise {
  const parsed = ExerciseDtoSchema.parse(dto); // валидация структуры

  return {
    id: parsed.id,
    name: parsed.name.trim(),
    description: parsed.description.trim(),
    muscleGroupId: parsed.muscleGroupId,
  };
}