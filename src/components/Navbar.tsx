import { motion } from "motion/react";
import SparkleIcon from "./icons/SparkleIcon";

const links = [
  { label: "NOSOTROS", href: "#quienes-somos" },
  { label: "PRODUCTOS", href: "#productos" },
  { label: "SERVICIOS", href: "#rendimiento" },
  { label: "NOVEDADES", href: "#novedades" },
  { label: "CONTACTO", href: "#contacto" },
];

export type NavTheme = "light" | "dark";

interface NavbarProps {
  /**
   * Kept for backwards-compat; the design uses a single white pill across
   * every section so this prop is currently a no-op.
   */
  theme?: NavTheme;
}

export default function Navbar(_: NavbarProps = {}) {
  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none"
    >
      <div className="pointer-events-auto flex items-center gap-3 md:gap-6 rounded-full bg-white/95 backdrop-blur-md border border-brand-200/40 shadow-[0_10px_30px_-12px_rgba(7,13,33,0.22)] px-5 md:px-6 py-2.5 w-full max-w-6xl">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 pl-1 pr-2 shrink-0">
          <img src="/anbau.png" alt="AnBau" className="h-9 w-auto" />
        </a>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-7 lg:gap-9 ml-4 flex-1 justify-center">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[12.5px] tracking-[0.14em] font-medium text-[color:var(--color-ink-900)]/85 hover:text-brand-600 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Sparkle CTA — 4-point AnBau brand sparkle, green */}
        <motion.a
          href="#contacto"
          whileHover={{ scale: 1.1, rotate: 25 }}
          whileTap={{ scale: 0.95 }}
          className="ml-auto md:ml-0 flex items-center justify-center size-9 rounded-full text-brand-500 shrink-0"
          aria-label="Contacto"
        >
          <SparkleIcon className="size-7" />
        </motion.a>
      </div>
    </motion.nav>
  );
}
