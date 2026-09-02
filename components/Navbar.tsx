"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { REDIRECT_URLS } from "@/app/lib/config/urls";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const setNavHeight = () => {
      document.documentElement.style.setProperty("--nav-height", `${nav.offsetHeight}px`);
    };

    setNavHeight();
    const observer = new ResizeObserver(setNavHeight);
    observer.observe(nav);
    return () => observer.disconnect();
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-white">
      <div className="bg-[#2B3AC7] h-10 flex items-center justify-center px-5 py-10 md:py-0">
        <h1 className="text-white font-semibold tracking-tight text-sm text-center">🎉 3 meses gratis al contratar el plan anual - <Link href="#pricing" className="underline">aprovecha la promo</Link></h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/logo_pos_atienda.png"
              alt="Logo POS Atienda"
              width={300}
              height={300}
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl font-bold tracking-tight">
              POS <span className="text-[#2B3AC7]">Atienda</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm  hover:text-slate-500 transition-colors"
            >
              Funciones
            </a>
            <a
              href="#hardware"
              className="text-sm hover:text-slate-500 transition-colors"
            >
              Hardware
            </a>
            <a
              href="#pricing"
              className="text-sm hover:text-slate-500 transition-colors"
            >
              Precios
            </a>
            <a
              href="#testimonials"
              className="text-sm hover:text-slate-500 transition-colors"
            >
              Testimonios
            </a>
            <a
              href="#faq"
              className="text-sm hover:text-slate-500 transition-colors"
            >
              FAQ
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={REDIRECT_URLS.LOGIN}
              className="text-sm font-bold text-[#2B3AC7] hover:text-slate-500 px-4 py-2 rounded-xl transition-colors"
            >
              Iniciar sesión
            </a>
            <a
              href={REDIRECT_URLS.SIGNUP}
              className="text-sm bg-[#2B3AC7] hover:bg-indigo-500 text-white font-medium px-5 py-2 rounded-xl transition-colors"
            >
              Prueba gratis
            </a>
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
        <div className="md:hidden bg-white backdrop-blur-xl border-t border-white/10 px-4 py-4 space-y-1">
          <a
            href="#features"
            className="block hover:text-white py-2.5 text-sm"
            onClick={() => setIsOpen(false)}
          >
            Funciones
          </a>
          <a
            href="#hardware"
            className="block hover:text-white py-2.5 text-sm"
            onClick={() => setIsOpen(false)}
          >
            Hardware
          </a>
          <a
            href="#pricing"
            className="block hover:text-white py-2.5 text-sm"
            onClick={() => setIsOpen(false)}
          >
            Precios
          </a>
          <a
            href="#testimonials"
            className="block  hover:text-white py-2.5 text-sm"
            onClick={() => setIsOpen(false)}
          >
            Testimonios
          </a>
          <a
            href="#faq"
            className="block  hover:text-white py-2.5 text-sm"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </a>
          <div className="pt-3 flex flex-col gap-2">
            <a
              href={REDIRECT_URLS.LOGIN}
              className="block w-full text-sm text-[#2B3AC7] border border-white/10 px-4 py-2.5 rounded-xl hover:bg-white/5 transition-colors text-center"
            >
              Iniciar sesión
            </a>
            <a
              href={REDIRECT_URLS.SIGNUP}
              className="block w-full text-sm bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-4 py-2.5 rounded-xl transition-colors text-center"
            >
              Crear cuenta
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
