export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60 py-8 text-slate-400">
      <div className="container mx-auto flex flex-col gap-3 px-4 text-sm sm:px-6 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Mamoun Berthe. Tous droits réservés.</p>
        <p>Portfolio moderne, responsive et professionnel.</p>
      </div>
    </footer>
  );
}
