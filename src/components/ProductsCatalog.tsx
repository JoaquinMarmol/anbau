import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Search,
  X,
  ChevronDown,
  Sprout,
  Droplets,
  Shield,
  Bug,
  Leaf,
  Beaker,
} from "lucide-react";
import { categorias, productos, type Categoria, type Producto } from "../data/products";
import { fadeInUp, staggerContainer, viewportOnce } from "../lib/motion";
import SparkleIcon from "./icons/SparkleIcon";
import { whatsappLink } from "../lib/contact";
import {
  cropHibridos,
  cropHerbicidas,
  cropFungicidas,
  cropInsecticidas,
  cropTerapicos,
  cropCoadyuvante,
} from "../lib/images";

const iconByCategory: Record<string, typeof Sprout> = {
  hibrido: Sprout,
  herbicida: Droplets,
  fungicida: Shield,
  insecticida: Bug,
  terapico: Leaf,
  coadyuvante: Beaker,
};

const imageByCategory: Record<string, string> = {
  hibrido: cropHibridos,
  herbicida: cropHerbicidas,
  fungicida: cropFungicidas,
  insecticida: cropInsecticidas,
  terapico: cropTerapicos,
  coadyuvante: cropCoadyuvante,
};

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

interface CategoryCardProps {
  cat: Categoria;
  active: boolean;
  onClick: () => void;
}

function CategoryCard({ cat, active, onClick }: CategoryCardProps) {
  const img = imageByCategory[cat.id];
  return (
    <motion.button
      type="button"
      onClick={onClick}
      variants={fadeInUp}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      className="group relative text-left aspect-[3/4] rounded-3xl overflow-hidden transition-all"
      style={{
        boxShadow: active
          ? `0 22px 50px -18px ${cat.color}99, 0 0 0 3px ${cat.color}`
          : "0 14px 30px -16px rgba(7,13,33,0.3)",
      }}
      aria-pressed={active}
    >
      {/* Background image */}
      <motion.img
        src={img}
        alt=""
        className="absolute inset-0 size-full object-cover"
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Color tint overlay (uses category color) */}
      <div
        className="absolute inset-0 transition-opacity"
        style={{
          background: `linear-gradient(180deg, ${cat.color}30 0%, ${cat.color}55 55%, ${cat.color}99 100%)`,
          opacity: active ? 0.85 : 0.7,
        }}
      />

      {/* Bottom dark fade for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

      {/* Sparkle top-right — white brand sparkle */}
      <div className="absolute top-3 right-3 text-white drop-shadow-md">
        <SparkleIcon className="size-7" />
      </div>

      {/* Label */}
      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 flex flex-col gap-2">
        <h3 className="text-white font-bold text-[15px] md:text-[17px] leading-tight tracking-wide uppercase drop-shadow">
          {cat.label}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-[10px] tracking-[0.16em] text-white/85 uppercase">
            {active ? "Cerrar" : "Ver productos"}
          </span>
          <motion.span
            initial={false}
            animate={{ rotate: active ? 180 : 0 }}
            className="size-7 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center text-white"
          >
            <ChevronDown className="size-4" />
          </motion.span>
        </div>
      </div>
    </motion.button>
  );
}

interface ProductRowProps {
  prod: Producto;
  expanded: boolean;
  onToggle: () => void;
  color: string;
}

function ProductRow({ prod, expanded, onToggle, color }: ProductRowProps) {
  return (
    <motion.li
      className="rounded-2xl bg-white border border-black/5 overflow-hidden"
      style={{
        boxShadow: expanded
          ? `0 14px 30px -16px ${color}66, inset 0 0 0 1px ${color}40`
          : "0 4px 12px -8px rgba(7,13,33,0.15)",
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-start md:items-center gap-4 px-4 md:px-5 py-4 text-left"
      >
        {/* Color dot */}
        <span
          className="mt-1 md:mt-0 shrink-0 size-2.5 rounded-full"
          style={{ backgroundColor: color }}
        />

        <div className="flex-1 min-w-0 grid md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1.2fr)] gap-1 md:gap-4 items-baseline">
          <p className="font-semibold text-ink-900 text-[15px] truncate">
            {prod.nombre}
          </p>
          <p className="text-sm text-ink-500/90 truncate">{prod.cultivo}</p>
          <p className="text-sm text-ink-500/80 truncate">{prod.objetivo}</p>
        </div>

        <motion.span
          initial={false}
          animate={{ rotate: expanded ? 180 : 0 }}
          className="shrink-0 size-7 rounded-full bg-[color:var(--color-surface-100)] flex items-center justify-center text-ink-500"
        >
          <ChevronDown className="size-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div
              className="px-5 md:px-6 pb-5 pt-1 grid md:grid-cols-[1fr_auto] gap-6 border-t"
              style={{ borderColor: `${color}30` }}
            >
              <p className="text-ink-700 leading-relaxed text-[15px]">
                {prod.descripcion}
              </p>
              {prod.dosis && (
                <div
                  className="md:min-w-[220px] rounded-xl p-4"
                  style={{ backgroundColor: `${color}12` }}
                >
                  <p
                    className="text-[10px] tracking-[0.18em] font-medium"
                    style={{ color }}
                  >
                    DOSIS
                  </p>
                  <p className="mt-1 text-ink-900 text-sm font-medium leading-snug">
                    {prod.dosis}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}

export default function ProductsCatalog() {
  const [activeCategoria, setActiveCategoria] = useState<string | null>(null);
  const [expandedProducto, setExpandedProducto] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const cat = activeCategoria
    ? categorias.find((c) => c.id === activeCategoria) ?? null
    : null;

  const handleSelectCategoria = (id: string) => {
    if (activeCategoria === id) {
      // Toggle off
      setActiveCategoria(null);
      setExpandedProducto(null);
      setQuery("");
      return;
    }
    setActiveCategoria(id);
    setExpandedProducto(null);
    setQuery("");
  };

  const closePanel = () => {
    setActiveCategoria(null);
    setExpandedProducto(null);
    setQuery("");
  };

  const filtered = useMemo(() => {
    if (!cat) return [];
    const list = productos.filter((p) => p.categoria === cat.id);
    const q = normalize(query.trim());
    if (!q) return list;
    return list.filter(
      (p) =>
        normalize(p.nombre).includes(q) ||
        normalize(p.cultivo).includes(q) ||
        normalize(p.objetivo).includes(q),
    );
  }, [cat, query]);

  return (
    <section
      id="productos"
      data-nav-theme="light"
      className="relative bg-[color:var(--color-surface-100)] py-24 md:py-28 overflow-hidden"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mx-auto max-w-7xl px-6 lg:px-12"
      >
        {/* Heading */}
        <div className="text-center mb-12 md:mb-14">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-semibold tracking-tight"
          >
            Nuestros Productos
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 max-w-2xl mx-auto text-ink-900/70 font-light text-lg"
          >
            Soluciones diseñadas para cada etapa del ciclo productivo, respaldadas por tecnología y conocimiento agronómico.
          </motion.p>
        </div>

        {/* Category cards grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4"
        >
          {categorias.map((c) => (
            <CategoryCard
              key={c.id}
              cat={c}
              active={activeCategoria === c.id}
              onClick={() => handleSelectCategoria(c.id)}
            />
          ))}
        </motion.div>

        {/* Pushdown panel — switching categories updates content in place; AnimatePresence only handles open/close */}
        <AnimatePresence initial={false}>
          {cat && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: 24 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div
                className="rounded-3xl bg-white border-2 shadow-[0_30px_60px_-30px_rgba(7,13,33,0.25)] overflow-hidden"
                style={{ borderColor: `${cat.color}55` }}
              >
                {/* Panel header */}
                <div
                  className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 px-5 md:px-7 py-4 md:py-5 border-b"
                  style={{
                    backgroundColor: `${cat.color}10`,
                    borderColor: `${cat.color}25`,
                  }}
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <span
                      className="size-9 rounded-lg flex items-center justify-center text-white shrink-0"
                      style={{ backgroundColor: cat.color }}
                    >
                      {(() => {
                        const Icon = iconByCategory[cat.id] ?? Sprout;
                        return <Icon className="size-5" strokeWidth={1.8} />;
                      })()}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[10px] tracking-[0.18em] font-medium text-ink-500">
                        CATEGORÍA
                      </p>
                      <h3 className="font-semibold text-lg md:text-xl truncate">
                        {cat.label}
                      </h3>
                    </div>
                  </div>

                  {/* Search */}
                  <div
                    className="flex items-center gap-2 bg-white rounded-full pl-4 pr-2 py-2 border w-full md:w-auto md:min-w-[300px]"
                    style={{ borderColor: `${cat.color}33` }}
                  >
                    <Search className="size-4 text-ink-500" />
                    <input
                      type="search"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Buscar por nombre, cultivo u objetivo…"
                      className="flex-1 bg-transparent outline-none text-sm placeholder:text-ink-500/50"
                    />
                    {query && (
                      <button
                        type="button"
                        onClick={() => setQuery("")}
                        className="size-6 rounded-full hover:bg-[color:var(--color-surface-100)] flex items-center justify-center text-ink-500"
                        aria-label="Limpiar búsqueda"
                      >
                        <X className="size-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Close */}
                  <motion.button
                    type="button"
                    onClick={closePanel}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="size-10 rounded-full bg-white border flex items-center justify-center text-ink-700 shrink-0"
                    style={{ borderColor: `${cat.color}33` }}
                    aria-label="Cerrar panel"
                  >
                    <X className="size-5" />
                  </motion.button>
                </div>

                {/* Product list (internal scroll) */}
                <div className="max-h-[60vh] md:max-h-[520px] overflow-y-auto px-3 md:px-5 py-4 md:py-5">
                  {filtered.length === 0 ? (
                    <div className="text-center py-14 text-ink-500">
                      <p className="font-medium">Sin resultados</p>
                      <p className="text-sm mt-1">
                        Probá otro término o limpiá la búsqueda.
                      </p>
                    </div>
                  ) : (
                    <ul className="flex flex-col gap-2.5">
                      {filtered.map((p) => (
                        <ProductRow
                          key={p.id}
                          prod={p}
                          color={cat.color}
                          expanded={expandedProducto === p.id}
                          onToggle={() =>
                            setExpandedProducto((cur) =>
                              cur === p.id ? null : p.id,
                            )
                          }
                        />
                      ))}
                    </ul>
                  )}
                </div>

                {/* Counter footer */}
                <div
                  className="px-5 md:px-7 py-3 text-xs text-ink-500 border-t flex items-center justify-between"
                  style={{ borderColor: `${cat.color}25` }}
                >
                  <span>
                    {filtered.length}{" "}
                    {filtered.length === 1 ? "producto" : "productos"}
                  </span>
                  <span className="hidden sm:inline tracking-widest uppercase opacity-70">
                    Click en un producto para ver detalle
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bridge — always visible below cards/panel */}
        <motion.div
          variants={fadeInUp}
          className="mt-10 md:mt-12 pt-6 border-t border-brand-500/30 flex flex-col md:flex-row gap-5 md:items-center md:justify-between"
        >
          <div>
            <p className="font-semibold text-brand-700">¿Tenés dudas?</p>
            <p className="text-ink-700 text-[15px] mt-0.5 max-w-xl">
              Nuestro equipo técnico te acompaña en cada decisión. Desde el
              diagnóstico hasta la cosecha.
            </p>
          </div>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={whatsappLink("Hola AnBau, quería consultar con un asesor.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill-primary uppercase tracking-wider shrink-0"
          >
            Consultá con un asesor
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
