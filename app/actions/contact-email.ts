"use server";

import { Resend } from "resend";
import { contactSchema } from "../lib/validations/contact";
import { ZodError } from "zod";
import { CONFIG } from "@/app/lib/config";

const resend = new Resend(CONFIG.RESEND_API_KEY);

export type ContactFormState = {
  success: boolean;
  message?: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  submittedData?: {
    name: string;
    email: string;
    message: string;
  };
};

export async function sendContactEmail(
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  let validateData;
  try {
    validateData = contactSchema.parse(rawData);
  } catch (error) {
    if (error instanceof ZodError) {
      // Retornar errores específicos para mostrar al usuario
      const errors = error.flatten().fieldErrors;
      return {
        success: false,
        errors: errors, // <-- Enviamos los errores específicos
        message: "Por favor, corrige los errores en el formulario",
      };
    }
    return {
      success: false,
      message: "Error de validación inesperado",
    };
  }

  try {

    // Email de confirmación de envio
    await resend.emails.send({
      from: "No-Reply <no-reply@pos-atienda.com>",
      to: validateData.email,
      subject: "¡Gracias por contactarnos!",
      template: {
        id: CONFIG.RESEND_TEMPLATE_ID_CONTACT!,
      },
    });

    // Email de notificación Admin
    await resend.emails.send({
      from: "No-Reply <no-reply@pos-atienda.com>",
      to: CONFIG.RESEND_ADMIN_EMAIL!,
      subject: "Nuevo contacto",
      html: `
        <h2>Nuevo contacto</h2>
        <p><strong>Nombre:</strong> ${validateData.name}</p>
        <p><strong>Email:</strong> ${validateData.email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${validateData.message}</p>
      `,
    });

    return {
      success: true,
      message: "Mensaje enviado correctamente",
    };
  } catch (error) {
    console.error("Error al enviar email:", error);
    return {
      success: false,
      message: "Error al enviar el mensaje. Por favor, intenta de nuevo.",
    };
  }
}
