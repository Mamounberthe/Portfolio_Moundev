import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "../ui/ThemeToggle";

const links = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleHash = () => setActiveSection(window.location.hash || "#hero");
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const menuAriaProps = {
    "aria-label": "Basculer le menu",
    "aria-expanded": open,
  };

  return (
    <header className={`sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-2xl transition-all duration-300 ${scrolled ? "shadow-[0_28px_80px_rgba(0,0,0,0.18)]" : ""}`}>
      <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <a href="#hero" className="flex items-center gap-3 text-lg font-semibold text-[var(--text-primary)] transition hover:text-[var(--accent-orange)]">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-[var(--accent)]/10 text-[var(--accent)] shadow-glow">
            M
          </span>
          <span className="hidden sm:inline">Mamoun</span>
          <span className="text-[var(--accent-orange)]">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition ${activeSection === link.href ? "text-[var(--accent)]" : "text-[var(--text-muted)] hover:text-[var(--accent)]"}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle compact />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] transition duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/25"
            onClick={() => setOpen((current) => !current)}
            {...menuAriaProps}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-slate-950/30 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: reduceMotion ? 0 : 0.25, ease: "easeOut" }}
              className="fixed inset-x-4 top-[76px] z-50 rounded-[2rem] border border-[var(--border)] bg-[var(--card)]/95 p-5 shadow-[0_40px_120px_rgba(0,0,0,0.22)] backdrop-blur-3xl md:hidden"
            >
              <div className="grid gap-3">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-3xl border border-transparent px-4 py-4 text-base font-semibold transition ${activeSection === link.href ? "bg-[var(--accent)]/10 text-[var(--accent)] shadow-[0_20px_70px_rgba(255,122,24,0.12)]" : "text-[var(--foreground)] hover:bg-white/5"}`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between gap-3 rounded-3xl border border-[var(--border)] bg-[var(--card-strong)]/70 px-4 py-3 text-sm text-[var(--muted)]">
                <span className="uppercase tracking-[0.32em]">Menu premium</span>
                <button
                  type="button"
                  className="rounded-full bg-[var(--accent)]/10 px-4 py-2 text-sm font-semibold text-[var(--accent)] transition hover:bg-[var(--accent)]/15"
                  onClick={() => setOpen(false)}
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
