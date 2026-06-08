"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "¿Necesito internet para usar POS Atienda?",
    a: "Sí, POS Atienda requiere conexión a internet para sincronizar datos en tiempo real. En caso de una pérdida momentánea de conexión, el sistema continúa registrando ventas localmente y sincroniza automáticamente cuando se restablece la conexión.",
  },
  {
    q: "¿Cuánto tarda la configuración inicial?",
    a: "La configuración básica toma menos de 30 minutos. Nuestro equipo te ayuda con la importación de tu inventario existente desde Excel o CSV.",
  },
  {
    q: "¿Puedo cambiar de plan en cualquier momento?",
    a: "¡Sí! Puedes subir o bajar de plan cuando lo necesites directamente desde tu panel de administración. El cambio es inmediato y solo pagarás la diferencia: calculamos el costo de manera justa según los días que te queden en tu mes o ciclo actual de facturación.",
  },
  {
    q: "¿Hay un periodo de prueba gratuita?",
    a: "Ofrecemos 14 días de prueba gratuita sin necesidad de tarjeta de crédito. Tendrás acceso completo a todas las funciones del plan Pro para que evalúes si POS Atienda es lo que tu tienda necesita.",
  },
  {
    q: "¿Mis datos están seguros?",
    a: "Toda la información se almacena con encriptación de extremo a extremo y con respaldo automático diario en la nube. Cumplimos con la Ley Federal de Protección de Datos Personales en México (LFPDPPP) y nunca compartimos tu información con terceros sin tu consentimiento.",
  },
  {
    q: "¿En qué dispositivos funciona?",
    a: "POS Atienda funciona en cualquier dispositivo con navegador web moderno: computadoras, tablets y smartphones. No requiere instalar software adicional. También es compatible con impresoras térmicas y lectores de código de barras.",
  },
  {
    q: "¿Qué métodos de pago acepta el sistema?",
    a: "Por el momento, POS Atienda permite el registro de ventas exclusivamente en efectivo. Los pagos con tarjeta, transferencias SPEI y CoDi estarán disponibles próximamente como una característica exclusiva para los planes Pro y Enterprise.",
  },
  {
    q: "¿Tienen soporte en español?",
    a: "Sí, todo nuestro equipo de soporte es hispanohablante. Atendemos por chat, email y WhatsApp de lunes a sábado de 8 AM a 8 PM (hora del Centro de México). El plan Enterprise incluye soporte prioritario 24/7.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
      className="border border-white/10 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-200 group"
        aria-expanded={open}
      >
        <span className="text-white font-medium text-sm sm:text-base pr-4 leading-snug">
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:border-white/40 transition-colors duration-200"
          aria-hidden="true"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 pt-1 text-slate-400 text-sm leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="text-slate-500 text-sm uppercase tracking-widest mb-3 font-medium">
            Preguntas frecuentes
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Todo lo que necesitas saber
          </h2>
          <p className="text-slate-400 text-lg">
            ¿Tienes más dudas? Escríbenos y te respondemos en menos de 24 horas.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
