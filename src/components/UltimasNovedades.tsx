import { motion } from "motion/react";
import { fadeInUp, staggerContainer, viewportOnce } from "../lib/motion";
import { newsTech, newsFormacion, newsResultados, newsInvestigacion } from "../lib/images";
import SparkleIcon from "./icons/SparkleIcon";

const news = [
  {
    title: "Nueva tecnología de mapeo satelital para agricultura de precisión",
    body: "Implementamos sistemas de monitoreo en tiempo real que transforman la gestión del campo.",
    img: newsTech,
  },
  {
    title: "Workshops sobre manejo integrado de plagas",
    body: "Formación práctica para productores sobre las mejores prácticas del sector.",
    img: newsFormacion,
  },
  {
    title: "Récord de rendimiento en campaña 2025/26",
    body: "Los productores que utilizaron nuestra plataforma superaron las expectativas proyectadas.",
    img: newsResultados,
  },
  {
    title: "Nuevas variedades adaptadas al cambio climático",
    body: "Genética de última generación diseñada para maximizar estabilidad y performance.",
    img: newsInvestigacion,
  },
];

export default function UltimasNovedades() {
  return (
    <section
      id="novedades"
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
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-semibold tracking-tight"
            >
              Últimas novedades
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-3 text-ink-900/70 font-light text-lg max-w-xl"
            >
              Mantenete actualizado con las innovaciones del sector.
            </motion.p>
          </div>

          <motion.a
            variants={fadeInUp}
            href="#"
            whileHover={{ x: 4 }}
            className="text-brand-600 font-medium tracking-wider text-sm"
          >
            VER TODAS →
          </motion.a>
        </div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {news.map((n) => (
            <motion.article
              key={n.title}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_40px_-20px_rgba(7,13,33,0.25)]">
                <motion.img
                  src={n.img}
                  alt=""
                  className="absolute inset-0 size-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent" />

                {/* Big white sparkle, top-right */}
                <SparkleIcon className="absolute top-4 right-4 size-10 text-white drop-shadow-md" />
              </div>

              <h3 className="mt-5 font-medium text-[17px] leading-snug">
                {n.title}
              </h3>
              <p className="mt-2 text-ink-900/65 font-light text-[15px] leading-relaxed">
                {n.body}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
