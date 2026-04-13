"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$199",
    period: "/mes",
    description: "Ideal para comenzar",
    features: ["1 caja", "Inventario", "Reportes básicos"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$399",
    period: "/mes",
    description: "El más popular",
    features: ["Cajas ilimitadas", "Clientes", "Reportes avanzados"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Para negocios grandes",
    features: ["Multi-sucursal", "API", "Soporte prioritario"],
    highlighted: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Planes simples y transparentes
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Sin sorpresas ni costos ocultos. Elige el plan que mejor se adapte
            a tu negocio.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              whileHover={
                plan.highlighted
                  ? { scale: 1.07, transition: { duration: 0.2 } }
                  : { scale: 1.03, transition: { duration: 0.2 } }
              }
              className={`relative rounded-3xl p-8 backdrop-blur-xl ${
                plan.highlighted
                  ? "bg-indigo-600/15 border-2 border-indigo-500/50 shadow-2xl shadow-indigo-500/15 md:scale-105"
                  : "bg-white/5 border border-white/10"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="bg-indigo-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                    Más popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-base font-semibold mb-1 ${
                    plan.highlighted ? "text-indigo-300" : "text-slate-300"
                  }`}
                >
                  {plan.name}
                </h3>
                <p className="text-slate-500 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8 flex items-end gap-1">
                <span className="text-4xl font-bold text-white">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-slate-400 text-sm mb-1">
                    {plan.period}
                  </span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-slate-300 text-sm"
                  >
                    <svg
                      className="w-4 h-4 text-indigo-400 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                whileTap={{ scale: 0.97 }}
                className={`w-full py-3 rounded-2xl font-semibold text-sm transition-colors duration-200 ${
                  plan.highlighted
                    ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                    : "bg-white/10 hover:bg-white/15 text-white border border-white/10"
                }`}
              >
                Elegir plan
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
