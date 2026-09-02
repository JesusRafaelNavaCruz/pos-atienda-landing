"use client";

import { Card, CardDescription, CardIcon, CardTitle } from "./Card";
import { Barcode, ChartLine, HeartHandshake, Store, UserStar, Warehouse } from "lucide-react";

const features = [
  {
    icon: (
      <Barcode className="w-6 h-6" />
    ),
    title: "Conecta escáner, impresora y báscula",
    description: "Olvídate de configuraciones difíciles. Conecta tus periféricos directo a tu computadora, pesa tus productos a granel en tiempo real y vende en segundos.",
  },
  {
    icon: (
      <Store className="w-6 h-6" />
    ),
    title: "Acepta tarjetas con tu terminal",
    description: "No dejes ir ninguna venta. Vincula tu terminal de pago al sistema y cobra con tarjeta de crédito o débito de forma rápida, segura y sin complicaciones.",
  },
  {
    icon: (
      <Warehouse className="w-6 h-6" />
    ),
    title: "Inventario que se cuida solo",
    description: "Cada venta descuenta existencias en tiempo real. El sistema te avisa cuando un producto se va a agotar y te ayuda a armar la lista de pedido para tus proveedores.",
  },
  {
    icon: (
      <ChartLine className="w-6 h-6" />
    ),
    title: "Métricas que sí entiendes",
    description: "Entérate de qué se vende más, a qué hora y cuál es tu margen de ganancia real. Monitorea los números de tu negocio desde donde estés",
  },
  {
    icon: (
      <UserStar className="w-6 h-6" />
    ),
    title: "Gestión de clientes sin libretas",
    description: "Lleva el registro de tus clientes, consulta sus saldos pendientes o cuentas por cobrar de forma digital, rápida y sin errores de dedo.",
  },
  {
    icon: (
      <HeartHandshake className="w-6 h-6" />
    ),
    title: "Premia a tus clientes de siempre",
    description: "Crea tu propio programa de puntos o recompensas. Motiva a tus compradores a regresar una y otra vez ofreciéndoles beneficios exclusivos por su fidelidad.",
  },
];


export default function Features() {
  return (
    <section id="features" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-140">
          <span className="font-extrabold uppercase tracking-widest text-[#2B3AC7]">Funciones</span>
          <h2 className="font-extrabold tracking-tight text-[#0D2149] text-5xl">Todo lo que tu mostrador necesita</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
          {features.map((feat, index) => (
            <Card variant="surface" key={index}>
              <CardIcon>
                {feat.icon}
              </CardIcon>
              <CardTitle>{feat.title}</CardTitle>
              <CardDescription>{feat.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
