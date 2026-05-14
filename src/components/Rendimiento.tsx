import { motion } from "motion/react";
import { FlaskConical, TrendingUp, ShieldCheck, BarChart3 } from "lucide-react";
import { fadeInUp, staggerContainer, viewportOnce } from "../lib/motion";
import { bgRendimiento } from "../lib/images";

const features = [
  {
    Icon: FlaskConical,
    title: "Análisis de suelos",
    body: "Diagnóstico preciso para decisiones fundamentadas en datos reales.",
  },
  {
    Icon: TrendingUp,
    title: "Optimización de rindes",
    body: "Estrategias personalizadas para maximizar cada hectárea.",
  },
  {
    Icon: ShieldCheck,
    title: "Protección de cultivos",
    body: "Monitoreo y prevención con tecnología de última generación.",
  },
  {
    Icon: BarChart3,
    title: "Inteligencia de datos",
    body: "Información procesable para adelantarte a cada temporada.",
  },
];

export default function Rendimiento() {
  return (
    <section
      id="rendimiento"
      data-nav-theme="dark"
      className="relative bg-[color:var(--color-brand-800)] py-28 md:py-40 overflow-hidden"
    >
      {/* Background layers — Rendimiento.png already carries the green tint */}
      <div className="absolute inset-0">
        <img
          src={bgRendimiento}
          alt=""
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/55 via-brand-800/35 to-brand-900/70" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-center text-white font-semibold text-[clamp(2rem,4.5vw,4rem)] leading-[1.1] tracking-tight drop-shadow"
        >
          El rendimiento empieza mucho<br />
          antes de la siembra
        </motion.h2>

        {/* Decorative divider line */}
        <motion.div
          variants={fadeInUp}
          className="mx-auto mt-6 h-px w-56 bg-gradient-to-r from-transparent via-brand-200 to-transparent"
        />

        <motion.p
          variants={fadeInUp}
          className="mt-6 text-center text-white/80 font-light max-w-2xl mx-auto"
        >
          Soluciones integrales que acompañan cada decisión, desde el
          diagnóstico hasta la cosecha.
        </motion.p>

        {/* Glass cards */}
        <motion.div
          variants={staggerContainer}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
        >
          {features.map(({ Icon, title, body }) => (
            <motion.div
              key={title}
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
              className="glass-card rounded-3xl p-7 min-h-[300px] flex flex-col"
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.08 }}
                transition={{ type: "spring", bounce: 0.4 }}
                className="size-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center"
              >
                <Icon className="size-7 text-white" strokeWidth={1.6} />
              </motion.div>

              <h3 className="mt-6 text-white text-xl font-semibold tracking-tight drop-shadow">
                {title}
              </h3>
              <p className="mt-3 text-white/80 font-light leading-relaxed text-[15px]">
                {body}
              </p>

              <div className="mt-auto pt-6 flex items-center text-white/70 text-xs tracking-widest">
                <span>SABER MÁS</span>
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
