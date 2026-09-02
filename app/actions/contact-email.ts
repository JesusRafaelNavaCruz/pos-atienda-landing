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
    phone?: string[];
    message?: string[];
  };
  submittedData?: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
};

/**
 * Genera un folio único y legible para identificar la solicitud, con el
 * formato POS-YYMMDD-HHMM (fecha y hora de creación, huso horario CDMX).
 * No requiere un contador persistente: es único por minuto, no secuencial.
 */
function generateFolio(): string {
  const parts = new Intl.DateTimeFormat("es-MX", {
    timeZone: "America/Mexico_City",
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "00";
  const datePart = `${get("year")}${get("month")}${get("day")}`;
  const timePart = `${get("hour")}${get("minute")}`;

  return `POS-${datePart}-${timePart}`;
}

export async function sendContactEmail(
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
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
    const folio = generateFolio();
    const primerNombre = validateData.name.trim().split(/\s+/)[0];

    // Email de confirmación de envío
    // Variables disponibles en la plantilla de Resend (deben coincidir
    // exactamente con los placeholders {{variable}} definidos en el editor):
    //   folio        -> ej. POS-260902-1432
    //   nombre       -> nombre completo, ej. Jesus Rafael Nava Cruz
    //   primerNombre -> primer nombre, para el saludo ("¡Gracias por contactarnos, {{primerNombre}}!")
    //   correo       -> correo del remitente
    //   telefono     -> teléfono del remitente
    //   mensaje      -> mensaje enviado
    await resend.emails.send({
      from: "No-Reply <no-reply@pos-atienda.com>",
      to: validateData.email,
      subject: `¡Gracias por contactarnos! · Folio ${folio}`,
      template: {
        id: CONFIG.RESEND_TEMPLATE_ID_CONTACT!,
        variables: {
          folio,
          nombre: validateData.name,
          primerNombre,
          correo: validateData.email,
          telefono: validateData.phone,
          mensaje: validateData.message,
        },
      },
    });

    // Email de notificación Admin
    await resend.emails.send({
      from: "No-Reply <no-reply@pos-atienda.com>",
      to: CONFIG.RESEND_ADMIN_EMAIL!,
      subject: `Nuevo contacto · Folio ${folio}`,
      html: `
        <h2>Nuevo contacto</h2>
        <p><strong>Folio:</strong> ${folio}</p>
        <p><strong>Nombre:</strong> ${validateData.name}</p>
        <p><strong>Email:</strong> ${validateData.email}</p>
        <p><strong>Teléfono:</strong> ${validateData.phone}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${validateData.message}</p>
      `,
    });

    return {
      success: true,
      message: "Mensaje enviado correctamente",
      submittedData: validateData,
    };
  } catch (error) {
    console.error("Error al enviar email:", error);
    return {
      success: false,
      message: "Error al enviar el mensaje. Por favor, intenta de nuevo.",
    };
  }
}
