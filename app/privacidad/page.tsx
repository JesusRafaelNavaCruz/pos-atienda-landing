import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description:
    "Conoce cómo POS Atienda recopila, usa y protege tu información personal conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.",
};

const sections = [
  {
    id: "responsable",
    title: "1. Responsable del tratamiento",
    content: `POS Atienda (en adelante "POS Atienda", "nosotros" o "la empresa") es responsable del tratamiento de los datos personales que usted nos proporcione. Nuestra razón social, domicilio y datos de contacto se encuentran disponibles enviando un correo a privacidad@pos-atienda.com.`,
  },
  {
    id: "datos",
    title: "2. Datos personales que recabamos",
    content: `Recabamos los siguientes datos personales: nombre completo, correo electrónico, número de teléfono, nombre del negocio, RFC o CURP (solo para facturación), datos de pago (procesados directamente por nuestros proveedores de pago certificados) y datos de uso del sistema (logs de actividad, dispositivos y dirección IP).`,
  },
  {
    id: "finalidades",
    title: "3. Finalidades del tratamiento",
    content: `Sus datos son utilizados para: (a) crear y administrar su cuenta de usuario; (b) proveer los servicios contratados; (c) procesar pagos y emitir facturas; (d) enviar comunicaciones sobre el servicio, actualizaciones o cambios en los términos; (e) ofrecer soporte técnico; y (f) mejorar nuestros productos mediante análisis estadístico anónimo. No usaremos sus datos para fines distintos a los aquí descritos sin su consentimiento previo.`,
  },
  {
    id: "transferencias",
    title: "4. Transferencias de datos personales",
    content: `Sus datos podrán ser compartidos con: proveedores de procesamiento de pagos (Stripe, Conekta o similares, certificados PCI-DSS), servicios de infraestructura en la nube (AWS o equivalentes), servicios de correo transaccional, y autoridades competentes cuando así lo exija la ley. En ningún caso venderemos su información a terceros.`,
  },
  {
    id: "arco",
    title: "5. Derechos ARCO",
    content: `Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales (derechos ARCO). Para ejercer cualquiera de estos derechos, envíe una solicitud a privacidad@pos-atienda.com con su nombre completo, descripción del derecho que desea ejercer y copia de una identificación oficial. Daremos respuesta en un plazo máximo de 20 días hábiles.`,
  },
  {
    id: "cookies",
    title: "6. Uso de cookies y tecnologías similares",
    content: `Nuestro sitio web utiliza cookies propias y de terceros para mejorar su experiencia de navegación, analizar el tráfico (Google Analytics) y recordar sus preferencias. Puede desactivar las cookies desde la configuración de su navegador, aunque esto podría afectar algunas funcionalidades del sitio.`,
  },
  {
    id: "seguridad",
    title: "7. Seguridad de los datos",
    content: `Implementamos medidas técnicas y organizativas para proteger sus datos contra acceso no autorizado, pérdida o destrucción, incluyendo cifrado en tránsito (TLS) y en reposo, acceso restringido por roles, respaldos automáticos diarios y monitoreo continuo de seguridad.`,
  },
  {
    id: "cambios",
    title: "8. Cambios a este aviso",
    content: `Nos reservamos el derecho de modificar este Aviso de Privacidad en cualquier momento. Cualquier cambio será notificado a través de nuestro sitio web o mediante correo electrónico. El uso continuado del servicio después de la notificación implica la aceptación de los cambios.`,
  },
  {
    id: "contacto",
    title: "9. Contacto",
    content: `Para cualquier consulta relacionada con este Aviso de Privacidad, puede contactarnos en: privacidad@pos-atienda.com. También puede escribirnos a través del formulario de contacto disponible en nuestro sitio web.`,
  },
];

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-white/10 py-4 px-4 sm:px-6 lg:px-8 sticky top-0 bg-slate-950/90 backdrop-blur-xl z-40">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/logo_pos_atienda.png"
              alt="POS Atienda"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
            <span className="text-white font-semibold text-base group-hover:text-slate-200 transition-colors">
              POS Atienda
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-slate-400 hover:text-white text-sm transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto lg:grid lg:grid-cols-[220px_1fr] lg:gap-16">
          {/* Sidebar nav */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="text-xs uppercase tracking-widest text-slate-500 font-medium mb-4">
                Contenido
              </p>
              <nav className="flex flex-col gap-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="text-sm text-slate-400 hover:text-white py-1 transition-colors duration-150 truncate"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <article>
            <header className="mb-12">
              <p className="text-indigo-400 text-sm font-medium mb-2">Legal</p>
              <h1 className="text-4xl font-bold text-white mb-4">
                Aviso de Privacidad
              </h1>
              <p className="text-slate-400">
                Última actualización: junio de 2026
              </p>
              <p className="mt-4 text-slate-300 leading-relaxed">
                En POS Atienda valoramos y respetamos su privacidad. Este aviso describe cómo
                recopilamos, usamos y protegemos su información personal, de conformidad con la{" "}
                <strong className="text-white">
                  Ley Federal de Protección de Datos Personales en Posesión de los Particulares
                </strong>{" "}
                (LFPDPPP) y su Reglamento.
              </p>
            </header>

            <div className="space-y-10">
              {sections.map((s) => (
                <section key={s.id} id={s.id} className="scroll-mt-24">
                  <h2 className="text-xl font-semibold text-white mb-3">{s.title}</h2>
                  <p className="text-slate-400 leading-relaxed">{s.content}</p>
                </section>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <p className="text-slate-500 text-sm">
                © 2026 POS Atienda. Todos los derechos reservados.
              </p>
              <Link
                href="/terminos"
                className="text-indigo-400 hover:text-indigo-300 text-sm transition-colors"
              >
                Ver Términos y Condiciones →
              </Link>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
