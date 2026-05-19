import { useRef, useState } from "react";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer, viewportOnce } from "../lib/motion";
import {
  newsGarantiaCripton,
  newsCampanaFina,
  newsCapacitacionBayer,
} from "../lib/images";
import SparkleIcon from "./icons/SparkleIcon";

type NewsItem = {
  title: string;
  body: string;
  img: string;
  link?: string;
};

const news: NewsItem[] = [
  {
    title: "La garantía que respalda tu rendimiento",
    body: "Con Garantía Cripton Xpro, tu inversión en protección de maíz está asegurada. Aplicando Cripton Xpro + Optimizer sumás tecnología comprobada para potenciar el rendimiento frente a enfermedades, y la tranquilidad de contar con un programa que respalda cada decisión en tu campo.",
    img: newsGarantiaCripton,
    link: "https://www.agro.bayer.com.ar/garantia-cripton-xpro",
  },
  {
    title: "Lanzamiento Campaña Fina 2026",
    body: "En Anbau te acompañamos con condiciones excepcionales de financiación para que la Campaña Fina 2026 sea tu mejor inversión.",
    img: newsCampanaFina,
  },
  {
    title: "Capacitación Técnica Bayer",
    body: "Seguimos capacitándonos para brindarte lo mejor. Participamos de una Capacitación Técnica Bayer en La Aurora, Tres Arroyos, junto a colegas de la zona, profundizando en las últimas novedades y soluciones para el campo.",
    img: newsCapacitacionBayer,
  },
];

export default function UltimasNovedades() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const trackLeft = track.getBoundingClientRect().left;
    let nearest = 0;
    let nearestDistance = Infinity;
    Array.from(track.children).forEach((card, i) => {
      const distance = Math.abs(card.getBoundingClientRect().left - trackLeft);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearest = i;
      }
    });
    setActive(nearest);
  };

  const goToSlide = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i] as HTMLElement | undefined;
    if (!card) return;
    const left =
      card.getBoundingClientRect().left -
      track.getBoundingClientRect().left +
      track.scrollLeft;
    track.scrollTo({ left, behavior: "smooth" });
  };

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

        {/* Grilla en escritorio · carrusel deslizable en celular */}
        <motion.div
          ref={trackRef}
          onScroll={handleScroll}
          variants={staggerContainer}
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto sm:overflow-x-visible overflow-y-hidden sm:overflow-y-visible snap-x snap-mandatory sm:snap-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {news.map((n) => (
            <motion.article
              key={n.title}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="group w-[85%] shrink-0 snap-start sm:w-auto"
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

              {n.link && (
                <motion.a
                  href={n.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="mt-3 inline-block text-brand-600 font-medium tracking-wider text-sm"
                >
                  CONOCÉ MÁS →
                </motion.a>
              )}
            </motion.article>
          ))}
        </motion.div>

        {/* Indicadores del carrusel — solo en celular */}
        <div className="mt-8 flex justify-center gap-2.5 sm:hidden">
          {news.map((n, i) => (
            <button
              key={n.title}
              type="button"
              onClick={() => goToSlide(i)}
              aria-label={`Ver novedad ${i + 1}`}
              aria-current={i === active}
              className={`size-2.5 rounded-full transition-colors duration-300 ${
                i === active ? "bg-brand-600" : "bg-ink-900/20"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
