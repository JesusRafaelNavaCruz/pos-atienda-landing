import { Star } from "lucide-react";

export interface Testimonial {
  slug: string;
  author: string;
  quote: string;
  business: string;
  location: string;
  initials: string;
  color: string;
}

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="bg-[#EDF2FA] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-140">
          <span className="font-extrabold uppercase tracking-widest text-[#2B3AC7]">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D2149] mb-4">
            Comerciantes como tú ya atienden mejor
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.slug}
              className="bg-white border border-[#E2E8F3] rounded-2xl p-6 flex flex-col gap-4 hover:border-indigo-500/20 transition-colors duration-300"
            >
              <div className="flex gap-1 mb-1" aria-label="5 estrellas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-indigo-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-[#0D2149] text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-[#E2E8F3]">
                <div
                  className={`w-9 h-9 rounded-full bg-linear-to-br ${t.color} flex items-center justify-center text-[#0D2149] text-xs font-bold shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-[#0D2149] text-sm font-medium">{t.author}</p>
                  <p className="text-[#8A96B5] text-xs">
                    {t.business} · {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
