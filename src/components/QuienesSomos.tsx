import { useState } from "react";
import { motion } from "motion/react";
import { fadeInUp, scaleIn, staggerContainer, viewportOnce } from "../lib/motion";
import { videoInstitucional } from "../lib/images";

const tabs = [
  {
    key: "nosotros",
    label: "NOSOTROS",
    body: (
      <>
        <p className="mb-4">
          <span className="font-semibold">AnBau</span> es un equipo de profesionales que conecta tecnología, conocimiento y cercanía para potenciar cada decisión en el campo. Trabajamos junto a Bayer para ofrecer insumos de máxima calidad, respaldados por asesoramiento técnico real, antes, durante y después de cada campaña.
        </p>
        <p>
          Creemos en una nueva forma de hacer agro: más precisa, más transparente y enfocada en resultados concretos.{" "}
          <span className="font-semibold">Cultivamos innovación para que cada productor crezca con confianza.</span>
        </p>
      </>
    ),
  },
  {
    key: "historia",
    label: "HISTORIA",
    body: (
      <p>
        Nacimos en el sudeste bonaerense con una vocación clara: acompañar al productor con soluciones concretas. Décadas de experiencia combinando el conocimiento de campo con la mejor tecnología agrícola disponible.
      </p>
    ),
  },
  {
    key: "mision",
    label: "MISIÓN",
    body: (
      <p>
        Potenciar la productividad del agro argentino a través de un asesoramiento técnico cercano, productos de calidad y decisiones basadas en datos. Queremos que cada hectárea exprese su máximo potencial.
      </p>
    ),
  },
];

export default function QuienesSomos() {
  const [active, setActive] = useState("nosotros");
  const current = tabs.find((t) => t.key === active)!;

  return (
    <section
      id="quienes-somos"
      data-nav-theme="light"
      className="relative bg-[color:var(--color-surface-200)] py-24 md:py-32"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto max-w-7xl px-6 lg:px-12 grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
      >
        {/* Left: copy */}
        <div>
          {/* Segmented tabs */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-1 p-1 rounded-full bg-white shadow-[0_4px_14px_rgba(7,13,33,0.06)] border border-black/5"
          >
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`relative px-5 py-2 text-xs tracking-wider font-medium rounded-full transition-colors ${
                  active === t.key ? "text-white" : "text-ink-900/70 hover:text-ink-900"
                }`}
              >
                {active === t.key && (
                  <motion.span
                    layoutId="quienes-tab-pill"
                    className="absolute inset-0 rounded-full bg-brand-500"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
                <span className="relative">{t.label}</span>
              </button>
            ))}
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="mt-8 text-4xl md:text-5xl font-semibold tracking-tight"
          >
            Quienes somos
          </motion.h2>

          <motion.div
            key={current.key}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mt-6 text-lg text-ink-900/75 font-light leading-relaxed max-w-xl"
          >
            {current.body}
          </motion.div>
        </div>

        {/* Right: video / image card */}
        <motion.div
          variants={scaleIn}
          className="relative aspect-[4/3] md:aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_30px_60px_-20px_rgba(7,13,33,0.35)] border border-white/60"
        >
          <img
            src={videoInstitucional}
            alt="Campo al atardecer"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/50 to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.3 }}
            className="absolute bottom-6 left-6 flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg"
          >
            <img src="/anbau.png" alt="AnBau" className="h-7 w-auto" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
