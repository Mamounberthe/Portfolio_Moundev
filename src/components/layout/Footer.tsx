export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] py-8 text-[var(--text-muted)] transition-colors duration-300">
      <div className="container mx-auto flex flex-col gap-3 px-4 text-sm sm:px-6 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Mamoun Berthe. Tous droits réservés.</p>
        <p>Portfolio moderne, responsive et professionnel.</p>
      </div>
    </footer>
  );
}
