import z from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
    .max(100, { message: "El nombre no puede exceder los 100 caracteres" })
    .regex(/^[a-zA-ZáéíóúñÁÉÍÓÚÑ\s]+$/, {
      message: "El nombre solo puede contener letras y espacios",
    }),
  email: z
    .string()
    .email({ message: "Debes ingresar un correo electrónico válido" })
    .min(5, { message: "El correo electrónico es demasiado corto" })
    .max(255, { message: "El correo electrónico es demasiado largo" }),
  message: z
    .string()
    .min(10, { message: "El mensaje debe tener al menos 10 caracteres" })
    .max(2000, { message: "El mensaje no puede exceder los 2000 caracteres" })
    .refine((text) => !/(https?:\/\/[^\s]+)/.test(text), {
      message: "No se permiten URLs en el mensaje",
    }),
});

export type ContactFormData = z.infer<typeof contactSchema>;

