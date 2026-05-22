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
    <>
      <header className={`sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-2xl transition-all duration-300 ${scrolled ? "shadow-[0_28px_80px_rgba(0,0,0,0.18)]" : ""}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 sm:px-6">
          <a href="#hero" className="flex items-center gap-3 text-lg font-semibold text-[var(--foreground)] transition hover:text-[var(--accent)]">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-[1rem] bg-[var(--accent)]/10 text-[var(--accent)] shadow-glow">
              M
            </span>
            <span className="hidden sm:inline">Mamoun</span>
            <span className="text-[var(--accent)]">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <nav className="flex items-center gap-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition ${activeSection === link.href ? "text-[var(--accent)]" : "text-[var(--muted)] hover:text-[var(--accent)]"}`}
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
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] transition duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/25"
              onClick={() => setOpen((current) => !current)}
              {...menuAriaProps}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-[var(--surface)]/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 32 }}
              transition={{ duration: reduceMotion ? 0.15 : 0.25, ease: "easeOut" }}
              className="fixed inset-x-0 bottom-0 z-50 mx-0 h-[min(60vh,420px)] overflow-hidden rounded-t-[1.25rem] border border-[var(--border)] bg-[var(--card)] p-5 shadow-[0_-20px_80px_rgba(0,0,0,0.22)] backdrop-blur-3xl md:hidden"
            >
              <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-[var(--border)]/70" />
              <div className="grid gap-3 overflow-y-auto pb-1">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`w-full rounded-[1rem] border border-transparent px-4 py-4 text-base font-semibold transition ${activeSection === link.href ? "bg-[var(--accent)]/10 text-[var(--accent)]" : "text-[var(--foreground)] hover:bg-[var(--surface)]/80"}`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between gap-3 rounded-[1rem] border border-[var(--border)] bg-[var(--card-strong)]/70 px-4 py-3 text-sm text-[var(--muted)]">
                <span className="uppercase tracking-[0.32em]">Menu</span>
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
    </>
  );
}
