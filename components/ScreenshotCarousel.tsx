"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    id: "dashboard",
    title: "Dashboard en tiempo real",
    description: "Visualiza ventas, ganancias y alertas de stock al instante. Todo lo que necesitas para arrancar el día.",
    image: "/assets/stagging.pos-atienda.com_app_dashboard.png",
    alt: "Dashboard de POS Atienda con métricas de ventas y transacciones recientes",
  },
  {
    id: "inventory",
    title: "Control de Inventario",
    description: "Registra productos con código de barras, precio, costo y stock. Recibe alertas automáticas cuando hay piezas agotadas.",
    image: "/assets/stagging.pos-atienda.com_app_products.png",
    alt: "Vista de inventario de POS Atienda con lista de productos, precios y niveles de stock",
  },
  {
    id: "suppliers",
    title: "Gestión de Proveedores",
    description: "Ten todos tus proveedores con datos de contacto, RFC y productos asociados en un solo lugar.",
    image: "/assets/stagging.pos-atienda.com_app_suppliers.png",
    alt: "Vista de proveedores de POS Atienda con lista de contactos y datos fiscales",
  },
];

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 48 : -48,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -48 : 48,
    opacity: 0,
    transition: { duration: 0.28, ease: [0.4, 0, 1, 1] },
  }),
};

export default function ScreenshotCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current],
  );

  const prev = useCallback(() => {
    const idx = (current - 1 + slides.length) % slides.length;
    setDirection(-1);
    setCurrent(idx);
  }, [current]);

  const next = useCallback(() => {
    const idx = (current + 1) % slides.length;
    setDirection(1);
    setCurrent(idx);
  }, [current]);

  return (
    <motion.div
      className="mt-20"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="text-center mb-10">
        <p className="text-slate-500 text-sm uppercase tracking-widest mb-2 font-medium">
          Ve la app en acción
        </p>
        <h3 className="text-2xl sm:text-3xl font-bold text-white">
          Diseñada para trabajar contigo
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Text + controls */}
        <div className="lg:w-72 shrink-0 text-center lg:text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <h4 className="text-xl font-bold text-white mb-3">
                {slides[current].title}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                {slides[current].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Dot indicators */}
          <div className="flex items-center gap-2 mt-8 justify-center lg:justify-start">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Ir a pantalla ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 h-2 bg-indigo-500"
                    : "w-2 h-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Arrow buttons */}
          <div className="flex items-center gap-3 mt-5 justify-center lg:justify-start">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Siguiente"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Screenshot frame */}
        <div className="flex-1 w-full min-w-0">
          <div className="bg-slate-900 rounded-2xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden">
            {/* Browser chrome */}
            <div className="bg-slate-800 border-b border-white/5 px-4 py-2.5 flex items-center gap-2 shrink-0">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
              </div>
              <div className="flex-1 mx-3 bg-white/5 rounded-md px-3 py-1">
                <span className="text-slate-500 text-xs">app.pos-atienda.com</span>
              </div>
            </div>

            {/* Screenshot image area */}
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "955 / 420" }}>
              <AnimatePresence custom={direction} mode="popLayout">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 cursor-grab active:cursor-grabbing"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.08}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -40) next();
                    else if (info.offset.x > 40) prev();
                  }}
                >
                  <Image
                    src={slides[current].image}
                    alt={slides[current].alt}
                    fill
                    className="object-cover object-top"
                    priority={current === 0}
                    draggable={false}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
