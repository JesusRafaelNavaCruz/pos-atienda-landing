import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },

  collections: {
    testimonials: collection({
      label: 'Testimoniales',
      slugField: 'author',
      path: 'content/testimonials/*',
      schema: {
        author: fields.slug({ name: { label: 'Nombre del autor' } }),
        quote: fields.text({ label: 'Testimonio', multiline: true }),
        business: fields.text({ label: 'Negocio / Tienda' }),
        location: fields.text({ label: 'Ciudad, País' }),
        initials: fields.text({ label: 'Iniciales (2 letras)' }),
        color: fields.select({
          label: 'Color del avatar',
          options: [
            { label: 'Índigo → Violeta', value: 'from-indigo-500 to-purple-500' },
            { label: 'Violeta → Rosa', value: 'from-purple-500 to-pink-500' },
            { label: 'Azul → Índigo', value: 'from-blue-500 to-indigo-500' },
            { label: 'Verde → Índigo', value: 'from-teal-500 to-indigo-500' },
            { label: 'Índigo → Cian', value: 'from-indigo-500 to-cyan-500' },
            { label: 'Violeta → Índigo', value: 'from-violet-500 to-indigo-500' },
          ],
          defaultValue: 'from-indigo-500 to-purple-500',
        }),
      },
    }),
  },

  singletons: {
    siteSettings: singleton({
      label: 'Configuración del sitio',
      path: 'content/siteSettings',
      schema: {
        whatsappNumber: fields.text({
          label: 'Número de WhatsApp',
          description: 'Con código de país, sin + ni espacios. Ej: 527681022729',
        }),
        launchDate: fields.text({
          label: 'Fecha de lanzamiento',
          description: 'Formato ISO 8601 con zona horaria. Ej: 2026-09-01T00:00:00-06:00',
        }),
        facebookUrl: fields.text({ label: 'URL de Facebook' }),
        instagramUrl: fields.text({ label: 'URL de Instagram' }),
        linkedinUrl: fields.text({ label: 'URL de LinkedIn' }),
        xUrl: fields.text({ label: 'URL de X (Twitter)' }),
      },
    }),
  },
});
