import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["res.cloudinary.com"],
  },
  // Permite probar el servidor de desarrollo desde otros dispositivos en la
  // red local (celular, tablet, laptop) — sin esto Next.js bloquea el bundle
  // de React para cualquier origen que no sea localhost.
  allowedDevOrigins: ["192.168.100.35"],
};

export default nextConfig;
