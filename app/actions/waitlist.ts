"use server";

import { Resend } from "resend";
import { z } from "zod";
import { CONFIG } from "@/app/lib/config";

const resend = new Resend(CONFIG.RESEND_API_KEY);

const waitlistSchema = z.object({
  email: z.string().email("Ingresa un correo válido"),
});

export type WaitlistState = {
  success: boolean;
  message?: string;
  error?: string;
};

export async function joinWaitlist(
  prevState: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const raw = { email: formData.get("email") as string };

  const parsed = waitlistSchema.safeParse(raw);
  if (!parsed.success) {
    return { success: false, error: parsed.error.errors[0].message };
  }

  const { email } = parsed.data;

  try {
    await resend.emails.send({
      from: "No-Reply <no-reply@pos-atienda.com>",
      to: CONFIG.RESEND_ADMIN_EMAIL!,
      subject: "🎉 Nueva persona en lista de espera",
      html: `<h2>Nueva suscripción a lista de espera</h2><p><strong>Email:</strong> ${email}</p>`,
    });

    await resend.emails.send({
      from: "POS Atienda <no-reply@pos-atienda.com>",
      to: email,
      subject: "Ya estás en la lista — POS Atienda",
      html: `
        <h2>¡Ya estás en la lista!</h2>
        <p>Gracias por tu interés en POS Atienda. Te avisaremos en cuanto abramos el acceso anticipado.</p>
        <p>— El equipo de POS Atienda</p>
      `,
    });

    return { success: true };
  } catch (err) {
    console.error("Waitlist error:", err);
    return { success: false, message: "No pudimos registrarte. Intenta de nuevo." };
  }
}
