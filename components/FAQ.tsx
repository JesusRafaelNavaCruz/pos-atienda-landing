"use client";

import { useState } from "react";
import Link from "next/link";

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
  }
];

function FAQItem({ faq }: { faq: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#E2E8F3] rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-[#F4F7FC] transition-colors duration-200 group"
        aria-expanded={open}
      >
        <span className="text-[#0D2149] font-medium text-sm sm:text-base pr-4 leading-snug">
          {faq.q}
        </span>
        <span
          className={`shrink-0 w-6 h-6 rounded-full border border-[#E2E8F3] flex items-center justify-center text-[#46527A] transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      {open && (
        <div className="bg-[#F4F7FC]">
          <p className="px-6 pb-5 pt-1 text-[#46527A] text-sm leading-relaxed">
            {faq.a}
          </p>
        </div>
      )}
    </div>
  );
}
const WHATSAPP_MESSAGE = "Hola, me interesa POS Atienda. ¿Pueden darme más información?";

interface WhatsAppButtonProps {
  phoneNumber: string;
}

export default function FAQ({ phoneNumber }: WhatsAppButtonProps) {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  return (
    <section id="faq" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="mb-14 max-w-140">
          <span className="font-extrabold uppercase tracking-widest text-[#2B3AC7] text-[14px]">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2149] mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-[#46527A] text-lg">
            ¿Tienes otra duda? Escríbenos por <Link href={url} className="text-[#2B3AC7]">WhatsApp</Link> y te contestamos en minutos.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
