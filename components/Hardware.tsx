import React from "react";
import { Card, CardDescription, CardTitle } from "./Card";
import Image from "next/image";

const hardwares = [
    {
        imgUrl: "https://res.cloudinary.com/duoryqcbt/image/upload/v1784831833/impresora-termica_rouc3x.png",
        title: "Impresoras térmicas",
        description: "Imprime tickets al instante. Compatible con la mayoría de impresoras térmicas de tickets (58mm y 80mm) con conexión USB, Bluetooth o red."
    },
    {
        imgUrl: "https://res.cloudinary.com/duoryqcbt/image/upload/v1784831832/bar-codes_njeuwc.png",
        title: "Lector de código de barras",
        description: "Escanea productos sin demoras. Funciona con cualquier lector estándar (1D o 2D/QR) inalámbrico o alámbrico tipo 'Plug & Play'"
    },
    {
        imgUrl: "https://res.cloudinary.com/duoryqcbt/image/upload/v1784831832/pos-terminal_vzyz0d.png",
        title: "Terminal de pago y básculas",
        description: "Vincula tu terminal bancaria o lector de tarjetas preferido para cobrar, y conecta tu báscula digital para vender a granel sin errores."
    }
]
export default function Hardware() {
  return (
    <section id="hardware" className="bg-[#EDF2FA] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-140">
          <span className="font-extrabold uppercase tracking-widest text-[#2B3AC7]">
            HARDWARE COMPATIBLE
          </span>
          <h2 className="font-extrabold tracking-tight text-[#0D2149] text-5xl">
            Usa el equipo que ya tienes. Sin gastar de más.
          </h2>
          <p className="text-[#46527A] text-lg tracking-tight">
            POS Atienda se conecta fácilmente a tus periféricos actuales por USB o Bluetooth. No necesitas comprar equipo nuevo ni pagar licencias de hardware costosas para empezar a vender.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
            {hardwares.map((hardware, index) => (
                <Card key={index}>
                    <div className="relative overflow-hidden rounded-2xl">
                        <Image
                            src={hardware.imgUrl}
                            className="object-cover"
                            alt={hardware.title}
                            width={1920}
                            height={1080}
                        />
                    </div>
                    <div className="pt-5">
                        <CardTitle>{hardware.title}</CardTitle>
                        <CardDescription>{hardware.description}</CardDescription>
                    </div>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
