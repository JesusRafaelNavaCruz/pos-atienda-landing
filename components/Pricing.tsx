"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { REDIRECT_URLS } from "@/app/lib/config/urls";

type BillingPeriod = "monthly" | "annual";

const plans = [
  {
    name: "Starter",
    title: "Básico",
    monthly: 199,
    annual: 159,
    description: "Ideal para comenzar",
    features: ["1 caja", "Inventario hasta 1,000 productos", "Reportes básicos"],
    highlighted: false,
  },
  {
    name: "Pro",
    title: "Pro",
    monthly: 399,
    annual: 319,
    description: "El más popular",
    features: ["Hasta 5 cajas", "Clientes y crédito", "Reportes avanzados", "Proveedores"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    title: "Multi-sucursal",
    monthly: 499,
    annual: 439,
    description: "Para negocios grandes",
    features: ["Multi-sucursal", "API y webhooks", "Soporte prioritario 24/7"],
    highlighted: false,
  },
];


// ─────────────────────────────────────────────────────────────────────────────

export default function Pricing() {
  const [period, setPeriod] = useState<BillingPeriod>("annual");

  return (
    <section id="pricing" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="uppercase text-sm text-[#2B3AC7] tracking-wider font-extrabold">precios</span>
          <h2 className="text-[40px] sm:text-4xl lg:text-5xl font-bold text-[#0D2149] mb-4">
            Un plan a la medida de tu tienda
          </h2>
        </div>

        {/* Billing period toggle */}
        <div className="flex justify-center mb-12">
          <div className="relative flex items-center bg-[#EDF2FA] border border-[#E2E8F3] rounded-full p-1 gap-1">
            <button
              onClick={() => setPeriod("monthly")}
              className={`relative z-10 px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                period === "monthly" ? "text-white bg-[#2B3AC7]" : "text-[#46527A]"
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setPeriod("annual")}
              className={`relative z-10 flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                period === "annual" ? "text-white bg-[#2B3AC7]" : "text-[#46527A]"
              }`}
            >
              Anual · ahorra 20%
            </button>
          </div>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {plans.map((plan) => {
            const price = period === "monthly" ? plan.monthly : plan.annual;
            const isEnterprise = plan.name === "Enterprise";
            const ctaHref = isEnterprise
              ? "#contact"
              : `${REDIRECT_URLS.CHECKOUT}?plan=${plan.name.toLowerCase()}&period=${period}`;

            return (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-8 ${
                  plan.highlighted
                    ? "bg-[#0D2149] border-2 border-indigo-500/50 shadow-2xl shadow-indigo-500/15 md:scale-105"
                    : "bg-white border border-[#E2E8F3]"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="bg-[#2B3AC7] text-white text-xs font-extrabold uppercase px-4 py-1.5 rounded-full">
                      Más popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className={`text-base font-semibold mb-1 ${
                      plan.highlighted ? "text-white" : "text-[#0D2149]"
                    }`}
                  >
                    {plan.title}
                  </h3>
                </div>

                <div className="mb-8">
                  <div className="flex items-end gap-1">
                    <span className={`text-4xl font-bold ${
                      plan.highlighted ? "text-white" : "text-[#0D2149]"
                    }`}>
                      ${price}
                    </span>
                    <span className="text-[#93A3C9] text-sm mb-1">/mes {period === "annual" && ("· pago anual")}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-center gap-3 text-sm ${
                        plan.highlighted ? "text-[#C6D2EA]" : "text-[#46527A]"
                      }`}
                    >
                      <Check className="w-5 h-5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={ctaHref}
                  className={`block w-full py-3 rounded-2xl font-semibold text-sm text-center transition-colors duration-200 ${
                    plan.highlighted
                      ? "bg-[#2B3AC7] text-white"
                      : "hover:bg-[#EDF2FA] text-[#2B3AC7] border border-[#2B3AC7]"
                  }`}
                >
                   {isEnterprise ? "Hablar con ventas" : `Elegir ${plan.title}`}
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
