const BASE_URL = "https://pos-atienda.com";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "POS Atienda",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description:
    "Sistema de punto de venta moderno para tiendas de abarrotes y conveniencia en LATAM.",
  areaServed: ["MX", "CO", "PE", "AR", "CL"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: "Spanish",
  },
};

const software = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "POS Atienda",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: BASE_URL,
  description:
    "Sistema de punto de venta moderno para tiendas de abarrotes. Controla ventas, inventario y clientes desde un solo lugar.",
  screenshot: `${BASE_URL}/og-image.png`,
  featureList: [
    "Ventas rápidas con código de barras",
    "Control de inventario automático",
    "Gestión de clientes y proveedores",
    "Reportes en tiempo real",
    "Compatible con pantallas táctiles",
    "Configuración en minutos",
  ],
  offers: [
    {
      "@type": "Offer",
      name: "Starter",
      price: "199",
      priceCurrency: "MXN",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "199",
        priceCurrency: "MXN",
        unitText: "MONTH",
      },
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "399",
      priceCurrency: "MXN",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "399",
        priceCurrency: "MXN",
        unitText: "MONTH",
      },
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "500",
    bestRating: "5",
    worstRating: "1",
  },
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "POS Atienda",
  url: BASE_URL,
  inLanguage: "es-MX",
  description:
    "Sistema POS moderno para tiendas de abarrotes y conveniencia en LATAM.",
};

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(software) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
