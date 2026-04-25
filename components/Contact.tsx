"use client";

import { useActionState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sendContactEmail, type ContactFormState } from "@/app/actions/contact-email";

const initialState: ContactFormState = {
  success: false,
};

const inputClass =
  "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-indigo-500/60 focus:bg-white/[0.07] transition-colors duration-200";

export default function Contact() {

  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(
    sendContactEmail,
    initialState,
  )

  // Reset form
  useEffect(() => {

    if (state.success) {
      formRef.current?.reset()
    }

  }, [state.success])

return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            ¿Tienes alguna pregunta?
          </h2>
          <p className="text-slate-400 text-lg">
            Escríbenos y te respondemos en menos de 24 horas.
          </p>
        </motion.div>

        <motion.div
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <AnimatePresence mode="wait">
            {state.success ? (
              <motion.div
                key="success"
                className="flex flex-col items-center justify-center gap-4 py-10 text-center"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-16 h-16 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-semibold">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-slate-400 text-sm max-w-xs">
                  Gracias por contactarnos. Te responderemos pronto en{" "}
                  <span className="text-indigo-400">
                    {state.submittedData?.email}
                  </span>
                  .
                </p>
                <button
                  onClick={() => {
                    // Esto forzará un reset del estado de ActionState
                    // notar que useActionState no tiene una forma directa de resetear
                    window.location.reload(); // Recarga simple
                  }}
                  className="mt-2 text-sm text-slate-500 hover:text-slate-300 transition-colors underline underline-offset-2"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                action={formAction}
                ref={formRef}
                className="space-y-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Mostrar errores generales */}
                {state.message && !state.success && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3">
                    <p className="text-red-400 text-sm text-center">
                      {state.message}
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-slate-400 text-xs font-medium uppercase tracking-wider"
                    >
                      Nombre *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Tu nombre"
                      className={`${inputClass} ${
                        state.errors?.name ? "border-red-500/50" : ""
                      }`}
                      aria-describedby="name-error"
                    />
                    {state.errors?.name && (
                      <p id="name-error" className="text-red-400 text-xs mt-1">
                        {state.errors.name[0]}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-slate-400 text-xs font-medium uppercase tracking-wider"
                    >
                      Correo *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="tu@correo.com"
                      className={`${inputClass} ${
                        state.errors?.email ? "border-red-500/50" : ""
                      }`}
                      aria-describedby="email-error"
                    />
                    {state.errors?.email && (
                      <p id="email-error" className="text-red-400 text-xs mt-1">
                        {state.errors.email[0]}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-slate-400 text-xs font-medium uppercase tracking-wider"
                  >
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="¿En qué podemos ayudarte?"
                    className={`${inputClass} resize-none ${
                      state.errors?.message ? "border-red-500/50" : ""
                    }`}
                    aria-describedby="message-error"
                  />
                  {state.errors?.message && (
                    <p id="message-error" className="text-red-400 text-xs mt-1">
                      {state.errors.message[0]}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isPending}
                  whileHover={isPending ? {} : { scale: 1.02 }}
                  whileTap={isPending ? {} : { scale: 0.98 }}
                  className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-2xl transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
                >
                  {isPending ? (
                    <>
                      <svg
                        className="w-4 h-4 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Enviando…
                    </>
                  ) : (
                    "Enviar mensaje"
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
