import { z } from "zod";

export const questionSchema = z.object({
  id: z.number().nullable(),
  question: z.string(),
  code: z.string(),
  answers: z.array(z.string()),
  correctAnswer: z.number(),
  track: z.string(),
  userSelectedAnswer: z.number().optional(),
  isCorrectUserAnswer: z.boolean().optional(),
});

export type QuestionSchemaInfer = z.infer<typeof questionSchema>;
