import { z } from "zod";

export const formLoginSchema = z.object({
  username: z
    .string()
    .min(3, { message: "El usuario debe tener más de 3 letras" }),
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
