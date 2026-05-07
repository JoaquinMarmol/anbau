import { motion } from "motion/react";
import { fadeInUp, staggerContainer, viewportOnce } from "../lib/motion";

const products = [
  {
    title: "SEMILLAS",
    img: "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "HERBICIDAS",
    img: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "FUNGICIDAS",
    img: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "INSECTICIDAS",
    img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "TRATAMIENTO DE SEMILLAS",
    img: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function NuestrosProductos() {
  return (
    <section
      id="productos"
      className="relative bg-[color:var(--color-surface-100)] py-24 md:py-32 overflow-hidden"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto max-w-7xl px-6 lg:px-12"
      >
        <div className="text-center mb-14">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-semibold tracking-tight"
          >
            Nuestros Productos
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-5 max-w-2xl mx-auto text-ink-900/70 font-light text-lg"
          >
            Soluciones diseñadas para cada etapa del ciclo productivo,
            respaldadas por tecnología y conocimiento agronómico.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5"
        >
          {products.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", bounce: 0.3 }}
              className={`group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_20px_40px_-20px_rgba(7,13,33,0.35)] border border-white/60 ${
                i === 4 ? "col-span-2 md:col-span-3 lg:col-span-1" : ""
              }`}
            >
              <motion.img
                src={p.img}
                alt={p.title}
                className="absolute inset-0 size-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-900/30 to-transparent" />

              {/* Leaf badge */}
              <div className="absolute top-4 left-4 size-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md">
                <svg viewBox="0 0 24 24" fill="none" className="size-5 text-brand-600">
                  <path d="M12 3c-3 5-7 7-7 12a7 7 0 0014 0c0-5-4-7-7-12z" fill="currentColor" opacity="0.2" />
                  <path d="M12 3c-3 5-7 7-7 12a7 7 0 0014 0c0-5-4-7-7-12z" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-white font-semibold text-lg leading-tight tracking-wide">
                  {p.title}
                </h3>
                <div className="mt-3 h-px w-10 bg-white/60 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
