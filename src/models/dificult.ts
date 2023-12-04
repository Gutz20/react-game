import { z } from "zod";

export const dificultSchema = z.object({
  id: z.number().nullable(),
  name: z.string(),
  creationDate: z.date(),
});

export type DificultSchemaInfer = z.infer<typeof dificultSchema>;
