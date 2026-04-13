"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="relative rounded-3xl overflow-hidden bg-linear-to-br from-indigo-600/20 to-purple-700/15 border border-indigo-500/25 backdrop-blur-xl px-8 py-16 sm:px-16 sm:py-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div
            className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-600/25 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-700/20 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            >
              Empieza a vender mejor hoy
            </motion.h2>
            <motion.p
              className="text-slate-300 text-lg mb-10 max-w-lg mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            >
              Únete a cientos de tiendas en LATAM que ya controlan sus ventas
              con POS Atienda.
            </motion.p>
            <motion.button
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-10 py-4 rounded-2xl transition-colors duration-200 hover:shadow-xl hover:shadow-indigo-500/30 text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Crear mi cuenta gratis
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
