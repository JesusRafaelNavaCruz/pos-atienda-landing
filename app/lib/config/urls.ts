// NEXT_PUBLIC_: estos valores se usan en botones de Client Components,
// así que Next.js los inyecta en el bundle del navegador en build time.
export const REDIRECT_URLS = {
  LOGIN: process.env.NEXT_PUBLIC_URL_TO_LOGIN ?? "#",
  SIGNUP: process.env.NEXT_PUBLIC_URL_TO_SIGNUP ?? "#",
  CHECKOUT: process.env.NEXT_PUBLIC_URL_TO_CHECKOUT ?? "#",
};
