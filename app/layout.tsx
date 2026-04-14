import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "./structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://pos-atienda.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "POS Atienda | El Sistema POS moderno para tiendas de abarrotes",
    template: "%s | POS Atienda",
  },

  description:
    "POS Atienda es un sistema de punto de venta moderno para tiendas de abarrotes y conveniencia. Controla ventas, inventario y clientes desde un solo lugar. Rápido, intuitivo y listo para pantallas táctiles.",

  keywords: [
    "POS",
    "Sistema POS",
    "Punto de venta",
    "POS México",
    "POS LATAM",
    "POS tiendas de abarrotes",
    "POS retail",
    "Software punto de venta",
    "Inventario tienda",
    "Caja registradora software",
    "Sistema de ventas",
    "Control de inventario",
    "Software tienda conveniencia",
  ],

  authors: [{ name: "POS Atienda", url: BASE_URL }],
  creator: "POS Atienda",
  publisher: "POS Atienda",
  applicationName: "POS Atienda",
  category: "Business Software",

  alternates: {
    canonical: "/",
    languages: {
      "es-MX": "/",
    },
  },

  openGraph: {
    title: "POS Atienda | Sistema POS para tiendas de abarrotes",
    description:
      "Vende más rápido, controla tu inventario y administra tu tienda desde cualquier lugar. El POS moderno para LATAM.",
    url: BASE_URL,
    siteName: "POS Atienda",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "POS Atienda — Sistema de punto de venta para tiendas de abarrotes",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "POS Atienda | Sistema POS para tiendas de abarrotes",
    description:
      "Vende más rápido, controla tu inventario y administra tu tienda. El POS moderno para LATAM.",
    images: ["/og-image.png"],
    creator: "@posatienda",
    site: "@posatienda",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  // Uncomment and fill in once verified:
  // verification: {
  //   google: "your-google-site-verification-token",
  //   yandex: "your-yandex-verification-token",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-slate-950 text-white">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
