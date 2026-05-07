import { motion } from "motion/react";
import { bgHomeFarm } from "../lib/images";

export default function Hero() {
  return (
    <section
      id="home"
      data-nav-theme="dark"
      className="relative min-h-[100svh] overflow-hidden bg-[color:var(--color-brand-900)]"
    >
      {/* Background image with gradient + overlay */}
      <div className="absolute inset-0">
        <img
          src={bgHomeFarm}
          alt=""
          className="size-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-800/90 to-brand-950/95" />
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.15), transparent 60%)",
          }}
        />
      </div>

      {/* AnBau plant logomark with sparkle on top — right side */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        viewBox="0 0 320 420"
        className="hidden md:block absolute right-[6%] lg:right-[12%] top-1/2 -translate-y-1/2 w-[280px] lg:w-[360px] text-white drop-shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
        aria-hidden
      >
        <g fill="currentColor">
          {/* 4-point sparkle on top */}
          <path d="M160 0 L170 56 L226 66 L170 76 L160 132 L150 76 L94 66 L150 56 Z" />

          {/* Three tear-drop leaves originating from bottom anchor (160, 320) */}
          {/* Center leaf — vertical */}
          <ellipse cx="160" cy="240" rx="32" ry="90" />

          {/* Left leaf — rotated */}
          <ellipse
            cx="160"
            cy="240"
            rx="32"
            ry="90"
            transform="rotate(-38 160 320)"
          />

          {/* Right leaf — rotated */}
          <ellipse
            cx="160"
            cy="240"
            rx="32"
            ry="90"
            transform="rotate(38 160 320)"
          />

          {/* Stem */}
          <rect x="152" y="320" width="16" height="98" rx="4" />
        </g>
      </motion.svg>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 pt-40 md:pt-48 pb-28">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-semibold text-white text-[clamp(2.5rem,6.5vw,6rem)] leading-[1.02] tracking-tight"
          >
            Cultivamos<br />
            decisiones que<br />
            generan valor
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-8 max-w-xl text-white/85 text-lg font-light leading-relaxed"
          >
            Acompañamos al productor con soluciones agrícolas, asesoramiento
            técnico y tecnología aplicada en cada etapa del proceso productivo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#quienes-somos"
              className="btn-pill-primary"
            >
              CONOCENOS
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#productos"
              className="btn-pill border border-brand-300/60 text-white bg-white/5 hover:bg-white/10"
            >
              PRODUCTOS
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom fade into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[color:var(--color-surface-200)]" />
    </section>
  );
}
