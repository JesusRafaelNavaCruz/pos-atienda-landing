"use client";

import { motion, type Variants } from "framer-motion";

const testimonials = [
  {
    quote:
      "Desde que usamos POS Atienda el cierre de caja ya no tarda una hora. Ahora son 5 minutos y con todo cuadrado.",
    author: "María García",
    business: "Tienda La Esperanza",
    location: "CDMX, México",
    initials: "MG",
    color: "from-indigo-500 to-purple-500",
  },
  {
    quote:
      "El inventario automático fue un cambio total. Ya no se me acaba la mercancía sin darme cuenta. Recomendadísimo.",
    author: "Carlos Mendoza",
    business: "Mini Super El Buen Precio",
    location: "Monterrey, México",
    initials: "CM",
    color: "from-purple-500 to-pink-500",
  },
  {
    quote:
      "Lo instalé el mismo día y en una hora ya estaba cobrando. Facilísimo para alguien como yo que no sabe mucho de tecnología.",
    author: "Ana López",
    business: "Abarrotes San José",
    location: "Guadalajara, México",
    initials: "AL",
    color: "from-blue-500 to-indigo-500",
  },
  {
    quote:
      "Los reportes de ventas me ayudan a saber qué productos vendo más. Ahora compro mejor y gano más en cada semana.",
    author: "Roberto Jiménez",
    business: "Tienda La Central",
    location: "Bogotá, Colombia",
    initials: "RJ",
    color: "from-teal-500 to-indigo-500",
  },
  {
    quote:
      "Mis vendedoras aprendieron a usar la caja en menos de una hora. La pantalla táctil hace todo muy intuitivo.",
    author: "Claudia Torres",
    business: "Mini Market El Vecino",
    location: "Lima, Perú",
    initials: "CT",
    color: "from-indigo-500 to-cyan-500",
  },
  {
    quote:
      "Antes usaba una libreta para todo. Ahora tengo el historial de clientes, deudas y ventas del mes en un solo lugar.",
    author: "Miguel Ángel Reyes",
    business: "Abarrotes La Familia",
    location: "Querétaro, México",
    initials: "MR",
    color: "from-violet-500 to-indigo-500",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const gridVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

export default function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Cientos de tiendas en LATAM ya confían en POS Atienda para su
            operación diaria.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.author}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:border-indigo-500/20 transition-colors duration-300"
            >
              <div className="flex gap-1 mb-1" aria-label="5 estrellas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-indigo-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                <div
                  className={`w-9 h-9 rounded-full bg-linear-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{t.author}</p>
                  <p className="text-slate-500 text-xs">
                    {t.business} · {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
