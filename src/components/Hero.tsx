import { motion } from "motion/react";
import { bgHomeFarm } from "../lib/images";

export default function Hero() {
  return (
    <section
      id="home"
      data-nav-theme="light"
      className="relative min-h-[100svh] overflow-hidden bg-[color:var(--color-brand-900)]"
    >
      {/* Background image with green gradient + soft highlight (photo stays visible) */}
      <div className="absolute inset-0">
        <img
          src={bgHomeFarm}
          alt=""
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-800/55 via-brand-500/55 to-brand-900/75" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 100% at 65% 45%, rgba(63,160,85,0.25) 0%, transparent 65%)",
          }}
        />
      </div>

      {/* AnBau plant logomark with sparkle on top —
          desktop: middle-right · mobile: bottom-right */}
      <img
        src="/isotipoblanco.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute z-[5] opacity-90 drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]
                   bottom-10 right-6 w-[150px]
                   md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:right-16 md:w-[340px]
                   lg:w-[420px]"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 pt-32 md:pt-48 pb-52 md:pb-28">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-semibold text-white text-[clamp(2.25rem,6.5vw,6rem)] leading-[1.02] tracking-tight"
          >
            Cultivamos<br />
            decisiones que<br />
            generan valor
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-6 md:mt-8 max-w-xl text-white/85 text-base md:text-lg font-light leading-relaxed"
          >
            Acompañamos al productor con soluciones agrícolas, asesoramiento
            técnico y tecnología aplicada en cada etapa del proceso productivo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#quienes-somos"
              className="btn-pill-primary w-[180px] sm:w-auto justify-center"
            >
              CONOCENOS
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#productos"
              className="btn-pill-primary w-[180px] sm:w-auto justify-center"
            >
              PRODUCTOS
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Green divider strip at the bottom (Figma "Banner Soporte Divisora") */}
      <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-brand-700 via-brand-400 to-brand-200" />
    </section>
  );
}
