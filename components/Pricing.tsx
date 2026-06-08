"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

type BillingPeriod = "monthly" | "annual";

const plans = [
  {
    name: "Starter",
    monthly: 199,
    annual: 159,
    description: "Ideal para comenzar",
    features: ["1 caja", "Inventario hasta 1,000 productos", "Reportes básicos"],
    highlighted: false,
  },
  {
    name: "Pro",
    monthly: 399,
    annual: 319,
    description: "El más popular",
    features: ["Hasta 5 cajas", "Clientes y crédito", "Reportes avanzados", "Proveedores"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    monthly: null,
    annual: null,
    description: "Para negocios grandes",
    features: ["Multi-sucursal", "API y webhooks", "Soporte prioritario 24/7"],
    highlighted: false,
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const gridVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

// ─── Comparison table ────────────────────────────────────────────────────────

type CellValue = boolean | string;

interface ComparisonFeature {
  label: string;
  starter: CellValue;
  pro: CellValue;
  enterprise: CellValue;
}

const comparisonData: { category: string; features: ComparisonFeature[] }[] = [
  {
    category: "Operación",
    features: [
      { label: "Cajas registradoras",     starter: "1",            pro: "Hasta 5",      enterprise: "Ilimitadas" },
      { label: "Productos en inventario", starter: "Hasta 1,000",  pro: "Ilimitados",   enterprise: "Ilimitados" },
      { label: "Ventas y corte de caja",  starter: true,           pro: true,           enterprise: true },
      { label: "Alertas de stock bajo",   starter: true,           pro: true,           enterprise: true },
    ],
  },
  {
    category: "Reportes",
    features: [
      { label: "Dashboard en tiempo real", starter: true,       pro: true,        enterprise: true },
      { label: "Reporte de ventas",        starter: "Básico",   pro: "Avanzado",  enterprise: "Completo" },
      { label: "Exportar a Excel / PDF",   starter: false,      pro: true,        enterprise: true },
    ],
  },
  {
    category: "Clientes y proveedores",
    features: [
      { label: "Gestión de clientes",    starter: false, pro: true, enterprise: true },
      { label: "Crédito y deudas",       starter: false, pro: true, enterprise: true },
      { label: "Gestión de proveedores", starter: false, pro: true, enterprise: true },
    ],
  },
  {
    category: "Escala y soporte",
    features: [
      { label: "Multi-sucursal",      starter: false,   pro: false,      enterprise: true },
      { label: "Acceso a API",        starter: false,   pro: false,      enterprise: true },
      { label: "Integraciones",       starter: false,   pro: "Básicas",  enterprise: "Avanzadas" },
      { label: "Soporte",             starter: "Email", pro: "Chat y email", enterprise: "Prioritario 24/7" },
    ],
  },
];

function ComparisonCell({ value, highlight }: { value: CellValue; highlight: boolean }) {
  const base = `px-4 py-3.5 text-center align-middle${highlight ? " bg-indigo-600/5" : ""}`;
  if (value === true) {
    return (
      <td className={base}>
        <svg className="w-4 h-4 text-indigo-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </td>
    );
  }
  if (value === false) {
    return (
      <td className={base}>
        <span className="text-slate-700 text-base leading-none select-none">—</span>
      </td>
    );
  }
  return (
    <td className={`${base} text-sm${highlight ? " text-indigo-200" : " text-slate-300"}`}>
      {value}
    </td>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

export default function Pricing() {
  const [period, setPeriod] = useState<BillingPeriod>("annual");

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-10"
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

        {/* Billing period toggle */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
        >
          <div className="relative flex items-center bg-white/5 border border-white/10 rounded-full p-1 gap-1">
            <button
              onClick={() => setPeriod("monthly")}
              className={`relative z-10 px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                period === "monthly" ? "text-white" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {period === "monthly" && (
                <motion.span
                  layoutId="period-pill"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                />
              )}
              Mensual
            </button>
            <button
              onClick={() => setPeriod("annual")}
              className={`relative z-10 flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                period === "annual" ? "text-white" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {period === "annual" && (
                <motion.span
                  layoutId="period-pill"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                />
              )}
              Anual
              <span className="relative bg-indigo-500/20 text-indigo-300 text-xs px-2 py-0.5 rounded-full border border-indigo-500/30">
                Ahorra 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Plan cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {plans.map((plan) => {
            const price = period === "monthly" ? plan.monthly : plan.annual;

            return (
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

                <div className="mb-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${plan.name}-${period}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                    >
                      {price !== null ? (
                        <>
                          <div className="flex items-end gap-1">
                            {period === "annual" && plan.monthly !== null && (
                              <span className="text-slate-600 text-lg line-through mb-1">
                                ${plan.monthly}
                              </span>
                            )}
                            <span className="text-4xl font-bold text-white">
                              ${price}
                            </span>
                            <span className="text-slate-400 text-sm mb-1">/mes</span>
                          </div>
                          {period === "annual" && (
                            <p className="text-slate-500 text-xs mt-1">
                              Facturado anualmente
                            </p>
                          )}
                        </>
                      ) : (
                        <div className="flex items-end gap-1">
                          <span className="text-4xl font-bold text-white">Custom</span>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
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
            );
          })}
        </motion.div>

        {/* Comparison table */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="text-center mb-8">
            <p className="text-slate-500 text-sm uppercase tracking-widest mb-2 font-medium">
              Desglose completo
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              ¿Qué incluye cada plan?
            </h3>
          </div>

          <p className="text-center text-slate-600 text-xs mb-4 sm:hidden">
            Desliza para ver la tabla completa →
          </p>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-900/50">
            <table className="w-full border-collapse text-sm min-w-130">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left px-5 py-4 text-slate-400 font-medium w-[40%]">
                    Característica
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      className={`px-4 py-4 text-center font-semibold w-[20%] ${
                        plan.highlighted
                          ? "text-indigo-300 bg-indigo-600/5"
                          : "text-slate-300"
                      }`}
                    >
                      {plan.name}
                      {plan.highlighted && (
                        <span className="block text-xs font-normal text-indigo-400/60 mt-0.5">
                          Más popular
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonData.flatMap((cat, catIdx) => [
                  <tr key={`cat-${catIdx}`} className="border-t border-white/5">
                    <td
                      colSpan={4}
                      className="px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-slate-500 bg-white/[0.018]"
                    >
                      {cat.category}
                    </td>
                  </tr>,
                  ...cat.features.map((feat, featIdx) => (
                    <tr
                      key={`feat-${catIdx}-${featIdx}`}
                      className="border-t border-white/5 hover:bg-white/1.5 transition-colors duration-150"
                    >
                      <td className="px-5 py-3.5 text-slate-300">{feat.label}</td>
                      <ComparisonCell value={feat.starter} highlight={false} />
                      <ComparisonCell value={feat.pro} highlight={true} />
                      <ComparisonCell value={feat.enterprise} highlight={false} />
                    </tr>
                  )),
                ])}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
