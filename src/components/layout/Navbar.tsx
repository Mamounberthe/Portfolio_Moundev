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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeMenu = () => setOpen(false);
    window.addEventListener("hashchange", closeMenu);
    return () => window.removeEventListener("hashchange", closeMenu);
  }, []);

  const menuAriaProps = {
    "aria-label": "Basculer le menu",
    "aria-expanded": open,
  };

  return (
    <header className={`sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--surface)] backdrop-blur-xl transition-all duration-300 ${scrolled ? "shadow-[0_28px_80px_rgba(0,0,0,0.18)]" : ""}`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6">
        <a href="#hero" className="text-lg font-semibold text-[var(--text-primary)]">
          Mamoun<span className="text-[var(--accent-orange)]">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--text-muted)] transition hover:text-[var(--accent-orange)]"
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
            className="inline-flex items-center justify-center rounded-full border border-[var(--border)] p-2 text-[var(--text-muted)] transition hover:text-[var(--accent-orange)]"
            onClick={() => setOpen(!open)}
            {...menuAriaProps}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[var(--border)] bg-[var(--surface)] py-4 md:hidden">
          <div className="container mx-auto flex flex-col gap-3 px-4 sm:px-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm text-[var(--text-primary)] transition hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
