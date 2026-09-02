import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Lee los Términos y Condiciones de uso del servicio POS Atienda, incluyendo planes, facturación, uso aceptable y limitación de responsabilidad.",
};

const sections = [
  {
    id: "definiciones",
    title: "1. Definiciones",
    content: `En estos Términos, "Servicio" se refiere a la plataforma de punto de venta POS Atienda accesible en pos-atienda.com y sus subdominios; "Usuario" o "usted" es la persona física o moral que contrata el Servicio; "Plan" es la modalidad de suscripción elegida (Starter, Pro o Enterprise); "Contenido" son todos los datos que el Usuario carga o genera dentro del Servicio.`,
  },
  {
    id: "aceptacion",
    title: "2. Aceptación de los términos",
    content: `Al crear una cuenta, acceder al Servicio o hacer clic en "Aceptar", usted confirma que ha leído, entendido y aceptado estos Términos y Condiciones, así como nuestro Aviso de Privacidad. Si actúa en nombre de una empresa, garantiza que tiene autoridad para vincularla con estos Términos. Si no está de acuerdo, no utilice el Servicio.`,
  },
  {
    id: "descripcion",
    title: "3. Descripción del servicio",
    content: `POS Atienda es un sistema de punto de venta en la nube diseñado para tiendas de abarrotes, conveniencia y retail en LATAM. El Servicio incluye módulos de ventas, inventario, clientes, proveedores y reportes, con acceso vía navegador web desde cualquier dispositivo. Las características específicas disponibles dependen del Plan contratado.`,
  },
  {
    id: "cuenta",
    title: "4. Registro y cuenta de usuario",
    content: `Para usar el Servicio debe crear una cuenta con información verídica y mantenerla actualizada. Es su responsabilidad mantener la confidencialidad de sus credenciales de acceso y notificarnos de inmediato ante cualquier uso no autorizado. No puede transferir su cuenta a terceros. Nos reservamos el derecho de rechazar el registro o cancelar cuentas a nuestra discreción.`,
  },
  {
    id: "facturacion",
    title: "5. Planes y facturación",
    content: `El Servicio se ofrece bajo suscripción mensual o anual prepagada. Los precios se muestran en pesos mexicanos (MXN) e incluyen IVA donde aplique. El cobro se realiza de forma automática al inicio de cada ciclo de facturación. Si el pago falla, tendrá un periodo de gracia de 7 días antes de que el Servicio sea suspendido. No realizamos reembolsos por periodos parciales, salvo lo que establezca la ley aplicable.`,
  },
  {
    id: "uso-aceptable",
    title: "6. Uso aceptable del servicio",
    content: `Usted se compromete a usar el Servicio únicamente para fines lícitos y acordes a estos Términos. Está prohibido: (a) revender o sublicenciar el Servicio; (b) intentar acceder a sistemas o datos de otros usuarios; (c) realizar ingeniería inversa del software; (d) usar el Servicio para actividades ilegales, fraudulentas o que violen derechos de terceros; (e) sobrecargar intencionalmente la infraestructura del Servicio.`,
  },
  {
    id: "propiedad",
    title: "7. Propiedad intelectual",
    content: `POS Atienda y todos sus componentes (código, diseño, marcas, logotipos, documentación) son propiedad exclusiva de la empresa o sus licenciantes. El Servicio se otorga bajo licencia de uso limitado, no exclusiva e intransferible. Usted conserva la propiedad de todo el Contenido que cargue en el Servicio; al hacerlo, nos otorga una licencia para procesarlo con el único fin de prestar el Servicio.`,
  },
  {
    id: "responsabilidad",
    title: "8. Limitación de responsabilidad",
    content: `El Servicio se proporciona "tal cual" y "según disponibilidad". POS Atienda no garantiza que el Servicio sea ininterrumpido, libre de errores o seguro en todo momento. En ningún caso seremos responsables por daños indirectos, incidentales o consecuentes. Nuestra responsabilidad total frente al Usuario no excederá el monto pagado por el Servicio en los últimos tres meses anteriores al evento que origina la reclamación.`,
  },
  {
    id: "privacidad",
    title: "9. Privacidad",
    content: `El tratamiento de sus datos personales se rige por nuestro Aviso de Privacidad, disponible en pos-atienda.com/privacidad. Al aceptar estos Términos, también acepta las prácticas de privacidad descritas en dicho aviso.`,
  },
  {
    id: "cancelacion",
    title: "10. Suspensión y cancelación",
    content: `Usted puede cancelar su suscripción en cualquier momento desde el panel de administración. La cancelación surtirá efecto al final del ciclo de facturación en curso. POS Atienda puede suspender o cancelar su cuenta de forma inmediata si incumple estos Términos, sin responsabilidad alguna de nuestra parte. Tras la cancelación, conservaremos su Contenido durante 30 días, transcurridos los cuales podrá ser eliminado de forma permanente.`,
  },
  {
    id: "cambios",
    title: "11. Cambios al servicio y a estos términos",
    content: `Nos reservamos el derecho de modificar el Servicio o estos Términos en cualquier momento. Los cambios materiales serán notificados con al menos 15 días de anticipación por correo electrónico o mediante aviso en el panel de administración. El uso continuado del Servicio después de la notificación constituye la aceptación de los nuevos Términos.`,
  },
  {
    id: "ley",
    title: "12. Ley aplicable y jurisdicción",
    content: `Estos Términos se rigen por las leyes de los Estados Unidos Mexicanos. Para cualquier controversia derivada de los mismos, las partes se someten a la jurisdicción de los tribunales competentes de la Ciudad de México, renunciando expresamente a cualquier otro fuero que pudiera corresponderles por razón de su domicilio presente o futuro.`,
  },
  {
    id: "contacto",
    title: "13. Contacto",
    content: `Si tiene preguntas sobre estos Términos y Condiciones, contáctenos en: legal@pos-atienda.com o a través del formulario de contacto en nuestro sitio web.`,
  },
];

export default function TerminosPage() {
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
                Términos y Condiciones
              </h1>
              <p className="text-slate-400">
                Última actualización: junio de 2026
              </p>
              <p className="mt-4 text-slate-300 leading-relaxed">
                Estos Términos y Condiciones regulan el acceso y uso del servicio POS Atienda.
                Al usar nuestra plataforma, usted acepta estos términos en su totalidad. Le
                recomendamos leerlos detenidamente antes de comenzar a usar el Servicio.
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
                href="/privacidad"
                className="text-indigo-400 hover:text-indigo-300 text-sm transition-colors"
              >
                Ver Aviso de Privacidad →
              </Link>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
