import { motion } from "motion/react";
import { fadeInUp, scaleIn, staggerContainer, viewportOnce } from "../lib/motion";
import { ricePlantSunset } from "../lib/images";
import { whatsappLink } from "../lib/contact";

const stats = [
  { value: "2026", label: "Año de fundación", sub: "Innovando desde el primer día" },
  { value: "+15", label: "Años de trayectoria", sub: "Experiencia consolidada" },
];

export default function OperaDesdeSoloLugar() {
  return (
    <section
      id="plataforma"
      data-nav-theme="light"
      className="relative bg-[color:var(--color-surface-200)] py-24 md:py-32"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto max-w-7xl px-6 lg:px-12"
      >
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={whatsappLink("Hola AnBau, quiero unirme a la red de productores.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-primary"
              >
                UNITE
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-ghost"
              >
                CONTACTANOS
              </motion.a>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight"
            >
              Operá desde un solo lugar
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-5 text-ink-900/75 font-light text-lg leading-relaxed max-w-xl"
            >
              Nuestra plataforma integra datos agronómicos, financieros y
              operativos para que tomes decisiones más rápidas e informadas.
              Todo el ecosistema productivo al alcance de tu mano.
            </motion.p>
          </div>

          {/* Right image */}
          <motion.div
            variants={scaleIn}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_30px_60px_-25px_rgba(7,13,33,0.35)]"
          >
            <img
              src={ricePlantSunset}
              alt="Cultivo al atardecer"
              className="size-full object-cover"
            />
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          variants={staggerContainer}
          className="mt-20 md:mt-24 grid grid-cols-2 gap-8 md:gap-16 max-w-2xl"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeInUp}>
              <p className="font-semibold text-5xl md:text-6xl text-brand-500 leading-none">
                {s.value}
              </p>
              <p className="mt-3 font-semibold text-ink-900 text-[15px]">
                {s.label}
              </p>
              <p className="mt-0.5 text-ink-700/80 text-sm">{s.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
