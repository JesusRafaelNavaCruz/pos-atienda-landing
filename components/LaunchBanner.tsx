"use client";

import { useState, useEffect, useActionState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { joinWaitlist, type WaitlistState } from "@/app/actions/waitlist";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(target: Date): TimeLeft {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  const formatted = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative w-16 sm:w-20 h-16 sm:h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={formatted}
            className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {formatted}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-slate-500 text-xs uppercase tracking-widest">{label}</span>
    </div>
  );
}

const initialState: WaitlistState = { success: false };

interface LaunchBannerProps {
  launchDate: string;
}

export default function LaunchBanner({ launchDate }: LaunchBannerProps) {
  const target = new Date(launchDate);

  // Avoid hydration mismatch: start null, populate after mount
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [state, formAction, isPending] = useActionState(joinWaitlist, initialState);

  useEffect(() => {
    setTimeLeft(getTimeLeft(target));
    const id = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const launched = timeLeft !== null && Object.values(timeLeft).every((v) => v === 0);

  if (launched) return null;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-white/5">
      <div className="max-w-3xl mx-auto text-center">

        {/* Label */}
        <motion.div
          className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          <span className="text-indigo-300 text-xs font-semibold uppercase tracking-widest">
            Pre-lanzamiento
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          POS Atienda llega pronto
        </motion.h2>
        <motion.p
          className="text-slate-400 text-lg mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Únete a la lista de espera y obtén acceso anticipado con{" "}
          <span className="text-white font-semibold">3 meses gratis</span>.
        </motion.p>

        {/* Countdown */}
        <motion.div
          className="flex items-center justify-center gap-3 sm:gap-5 mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {timeLeft !== null ? (
            <>
              <CountdownUnit value={timeLeft.days} label="días" />
              <span className="text-slate-600 text-2xl font-light mb-4">:</span>
              <CountdownUnit value={timeLeft.hours} label="horas" />
              <span className="text-slate-600 text-2xl font-light mb-4">:</span>
              <CountdownUnit value={timeLeft.minutes} label="min" />
              <span className="text-slate-600 text-2xl font-light mb-4">:</span>
              <CountdownUnit value={timeLeft.seconds} label="seg" />
            </>
          ) : (
            // Skeleton while mounting
            <>
              {["días", "horas", "min", "seg"].map((label, i) => (
                <div key={label} className="flex flex-col items-center gap-1.5">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-2xl bg-white/5 border border-white/10 animate-pulse" />
                  <span className="text-slate-500 text-xs uppercase tracking-widest">{label}</span>
                  {i < 3 && <span className="sr-only">:</span>}
                </div>
              ))}
            </>
          )}
        </motion.div>

        {/* Waitlist form */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {state.success ? (
              <motion.div
                key="success"
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                <div className="w-12 h-12 rounded-full bg-green-500/15 border border-green-500/25 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white font-semibold">¡Ya estás en la lista!</p>
                <p className="text-slate-400 text-sm">Te avisaremos cuando abramos el acceso anticipado.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                action={formAction}
                className="flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="tu@correo.com"
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-indigo-500/60 focus:bg-white/[0.07] transition-colors duration-200"
                />
                <motion.button
                  type="submit"
                  disabled={isPending}
                  whileHover={isPending ? {} : { scale: 1.02 }}
                  whileTap={isPending ? {} : { scale: 0.97 }}
                  className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-3.5 rounded-2xl text-sm transition-colors duration-200 whitespace-nowrap flex items-center justify-center gap-2"
                >
                  {isPending ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Guardando…
                    </>
                  ) : (
                    "Quiero acceso anticipado"
                  )}
                </motion.button>
                {state.error && (
                  <p className="text-red-400 text-xs text-center sm:col-span-2">{state.error}</p>
                )}
              </motion.form>
            )}
          </AnimatePresence>

          {(state.message && !state.success) && (
            <p className="text-red-400 text-xs text-center mt-3">{state.message}</p>
          )}

          <p className="text-slate-600 text-xs mt-4">
            Sin spam. Solo te avisamos cuando esté listo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
