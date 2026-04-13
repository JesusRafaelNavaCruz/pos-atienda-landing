"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="text-xl font-bold text-indigo-400 tracking-tight">
            POS Atienda
          </span>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              Características
            </a>
            <a
              href="#pricing"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              Precios
            </a>
            <a
              href="#contact"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              Contacto
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm text-slate-300 hover:text-white px-4 py-2 rounded-xl transition-colors">
              Iniciar sesión
            </button>
            <button className="text-sm bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-5 py-2 rounded-xl transition-colors">
              Crear cuenta
            </button>
          </div>

          <button
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10 px-4 py-4 space-y-1">
          <a
            href="#features"
            className="block text-slate-300 hover:text-white py-2.5 text-sm"
            onClick={() => setIsOpen(false)}
          >
            Características
          </a>
          <a
            href="#pricing"
            className="block text-slate-300 hover:text-white py-2.5 text-sm"
            onClick={() => setIsOpen(false)}
          >
            Precios
          </a>
          <a
            href="#contact"
            className="block text-slate-300 hover:text-white py-2.5 text-sm"
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </a>
          <div className="pt-3 flex flex-col gap-2">
            <button className="w-full text-sm text-slate-300 border border-white/10 px-4 py-2.5 rounded-xl hover:bg-white/5 transition-colors">
              Iniciar sesión
            </button>
            <button className="w-full text-sm bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-4 py-2.5 rounded-xl transition-colors">
              Crear cuenta
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
