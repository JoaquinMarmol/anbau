import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import SparkleIcon from "./icons/SparkleIcon";
import { whatsappLink } from "../lib/contact";

const WHATSAPP = whatsappLink();

const links = [
  { label: "NOSOTROS", href: "#quienes-somos", external: false },
  { label: "PRODUCTOS", href: "#productos", external: false },
  { label: "SERVICIOS", href: "#rendimiento", external: false },
  { label: "NOVEDADES", href: "#novedades", external: false },
  { label: "CONTACTO", href: WHATSAPP, external: true },
];

export type NavTheme = "light" | "dark";

function useActiveNavTheme(): NavTheme {
  const [theme, setTheme] = useState<NavTheme>("dark");

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-nav-theme]")
    );
    if (sections.length === 0) return;

    const compute = () => {
      const baseline = 80;
      let current: NavTheme = (sections[0].dataset.navTheme as NavTheme) ?? "dark";
      for (const el of sections) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= baseline && rect.bottom > baseline) {
          current = (el.dataset.navTheme as NavTheme) ?? current;
          break;
        }
      }
      setTheme(current);
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  return theme;
}

export default function Navbar() {
  const theme = useActiveNavTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const isDark = theme === "dark";

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none"
      >
        <motion.div
          animate={{
            backgroundColor: isDark
              ? "rgba(8, 35, 16, 0.55)"
              : "rgba(255, 255, 255, 0.95)",
            borderColor: isDark
              ? "rgba(255, 255, 255, 0.18)"
              : "rgba(156, 210, 167, 0.4)",
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="pointer-events-auto flex items-center gap-3 md:gap-6 rounded-full backdrop-blur-md border shadow-[0_10px_30px_-12px_rgba(7,13,33,0.22)] px-5 md:px-6 py-2.5 w-full max-w-6xl"
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 pl-1 pr-2 shrink-0"
          >
            <img
              src="/anbau.png"
              alt="AnBau"
              className={`h-9 w-auto transition-[filter] duration-300 ${
                isDark ? "brightness-0 invert" : ""
              }`}
            />
          </a>

          {/* Desktop links — right-aligned */}
          <ul className="hidden md:flex items-center gap-7 lg:gap-9 ml-auto">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener noreferrer" : undefined}
                  className={`text-[12.5px] tracking-[0.14em] font-medium transition-colors ${
                    isDark
                      ? "text-white/85 hover:text-white"
                      : "text-[color:var(--color-ink-900)]/85 hover:text-brand-600"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Sparkle — desktop: WhatsApp · mobile: toggle drawer */}
          <motion.a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 25 }}
            whileTap={{ scale: 0.95 }}
            className={`hidden md:flex items-center justify-center size-9 rounded-full shrink-0 transition-colors ${
              isDark ? "text-brand-200" : "text-brand-500"
            }`}
            aria-label="Contactanos por WhatsApp"
          >
            <SparkleIcon className="size-7" />
          </motion.a>

          <motion.button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            whileTap={{ scale: 0.92 }}
            animate={{ rotate: menuOpen ? 90 : 0 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.35 }}
            className={`md:hidden ml-auto flex items-center justify-center size-9 rounded-full shrink-0 transition-colors ${
              isDark ? "text-brand-200" : "text-brand-500"
            }`}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            <SparkleIcon className="size-7" />
          </motion.button>
        </motion.div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 z-40 bg-[color:var(--color-brand-600)]"
          >
            <motion.ul
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ delay: 0.05, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="pt-28 px-8 flex flex-col"
            >
              {links.map((l) => (
                <li key={l.label} className="border-b border-white/40">
                  <a
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener noreferrer" : undefined}
                    onClick={() => setMenuOpen(false)}
                    className="block py-5 text-right text-white text-sm tracking-[0.2em] font-medium"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
