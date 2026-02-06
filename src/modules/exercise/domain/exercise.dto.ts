// src/modules/exercise/domain/exercise.dto.ts
import { z } from 'zod';

export const ExerciseDtoSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  muscleGroupId: z.string(),
});

export type ExerciseDto = z.infer<typeof ExerciseDtoSchema>;