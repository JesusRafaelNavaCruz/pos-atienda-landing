"use client";

import { Store } from "lucide-react";
import Image from "next/image";
import { REDIRECT_URLS } from "@/app/lib/config/urls";


export default function Hero() {
  return (
    <section
      className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#FAF9F5EB] to-[#EDF2FA] px-6 pb-16 md:px-16 lg:px-24"
      style={{ paddingTop: "calc(var(--nav-height, 105px) + 3.5rem)" }}
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Columna 1 */}
        <div className="flex flex-col space-y-6 max-w-xl">
          <div className="inline-flex items-center space-x-2 bg-[#E2E9F8] text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full w-fit">
            <Store className="w-4 h-4" />
            <span>Hecho para todo tipo de negocios y tiendas.</span>
          </div>
          <h1 className="text-5xl font-extrabold text-[#0D2149] tracking-tight leading-tight">El Punto de Venta más rápido para tu negocio, punto.</h1>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            <span className="font-bold">POS Atienda</span> es el sistema de punto de venta pensado para simplificar tu vida. Se instala en segundos desde tu navegador y es tan fácil de usar que cualquiera puede cobrar. Ideal para cualquier tipo de negocio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href={REDIRECT_URLS.SIGNUP}
              className="bg-[#2B44CE] hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-colors text-center"
            >
              Empieza Gratis
            </a>
            <a href={REDIRECT_URLS.SIGNUP} className="bg-white hover:bg-slate-50 text-[#0B1E43] font-medium px-8 py-4 rounded-xl border border-slate-200 shadow-sm transition-colors text-center">
              Descubre Cómo Funciona
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 text-sm text-slate-500 font-medium">
            <div className="flex items-center space-x-1.5">
              <span className="text-slate-400">✓</span>
              <span>Cero configuraciones complejas.</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="text-slate-400">✓</span>
              <span>Tecnología al alcance de tu mano.</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="text-slate-400">✓</span>
              <span>Soporte por WhatsApp.</span>
            </div>
          </div>
        </div>

        {/* Columna 2 */}
        <div className="w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-2xl bg-[#091A3E] p-4 rounded-[2.5rem] shadow-2xl shadow-blue-900/20">
            <Image 
              src="https://res.cloudinary.com/duoryqcbt/image/upload/v1784520654/Captura_de_pantalla_2026-07-19_221025_hazphv.png" 
              alt="Dashboard POS Atienda"
              width={1920}
              height={1080} 
              className="w-full h-auto rounded-2xl"
              priority
            />
          </div>
        </div> 

      </div>
    </section>
  );
}





