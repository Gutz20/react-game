import { z } from "zod";

export const formLoginSchema = z.object({
  username: z.string().min(3, { message: "El usuario debe ser mayor de 3" }),
  password: z.string().min(6, { message: "Minimo 6 digitos" }),
});

export type FormSchemaLogin = z.infer<typeof formLoginSchema>;

export const formRegisterSchema = z.object({
  username: z
    .string()
    .min(3, { message: "El usuario debe tener más de 3 letras" }),
  email: z.string().email(),
  password: z.string().min(6, { message: "Minimo 6 digitos" }),
  repeatPassword: z.string().min(6, { message: "Minimo 6 digitos" }),
});

export type FormSchemaRegister = z.infer<typeof formRegisterSchema>;

export const formParentalSchema = z.object({
  usuario: z.string(),
  alias: z.string(),
  edad: z.number().max(15).min(3),
  tiempo: z.number().max(3600).min(180),
});

export type FormSchemaParental = z.infer<typeof formParentalSchema>;

export const formAliasSchema = z.object({
  alias: z.string(),
});

export type FormSchemaAlias = z.infer<typeof formAliasSchema>;

export const formTimeSchema = z.object({
  time: z.number(),
});

export type FormSchemaTime = z.infer<typeof formTimeSchema>;
