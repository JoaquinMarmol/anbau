import { motion } from "motion/react";
import { fadeInUp, staggerContainer, viewportOnce } from "../lib/motion";
import { bgFooter } from "../lib/images";
import { whatsappLink } from "../lib/contact";

const empresaLinks = ["Nosotros", "Equipo", "Novedades", "Carrera"];
const contactoItems = [
  "anbausudeste@gmail.com",
  "2262",
  "Nechochea, Buenos Aires – Argentina",
];

export default function Footer() {
  return (
    <section
      id="contacto"
      data-nav-theme="dark"
      className="relative bg-[color:var(--color-ink-900)] text-white"
    >
      {/* CTA panel — corn field bg, dark overlay */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={bgFooter}
            alt=""
            className="size-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/80 via-ink-900/88 to-ink-900" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 pt-28 md:pt-36 pb-24 md:pb-28"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-[56px] font-semibold tracking-tight leading-[1.1] max-w-3xl"
          >
            Transformá tu campo con<br />
            decisiones inteligentes
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-white/75 font-light text-lg max-w-2xl leading-relaxed"
          >
            Sumate a la red de productores que ya optimizan sus rendimientos
            con tecnología, datos y conocimiento aplicado. El futuro de la
            agricultura empieza hoy.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={whatsappLink("Hola AnBau, quería hablar con un experto.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-primary"
            >
              HABLÁ CON UN EXPERTO
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer columns */}
      <div className="relative bg-[color:var(--color-ink-900)] border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/anbau.png"
                alt="AnBau"
                className="h-10 brightness-0 invert"
              />
            </div>
            <p className="mt-5 text-white/65 font-light max-w-sm leading-relaxed text-[15px]">
              Innovación agrícola aplicada a cada hectárea. Maximizamos
              rendimientos mediante tecnología, datos y decisiones
              inteligentes.
            </p>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold tracking-wider text-sm text-white">
              Empresa
            </h4>
            <ul className="mt-5 space-y-3">
              {empresaLinks.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-white/65 hover:text-white transition-colors text-[15px] font-light"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold tracking-wider text-sm text-white">
              Contacto
            </h4>
            <ul className="mt-5 space-y-3">
              {contactoItems.map((item, i) => (
                <li
                  key={i}
                  className="text-white/65 text-[15px] font-light leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Green gradient strip */}
        <div className="h-3 w-full bg-gradient-to-r from-brand-700 via-brand-400 to-brand-200" />
      </div>
    </section>
  );
}
