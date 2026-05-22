import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Github, Linkedin } from "lucide-react";
import { portfolio } from "../../data/portfolio";

export function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString() ?? "";
    const email = formData.get("email")?.toString() ?? "";
    const message = formData.get("message")?.toString() ?? "";
    const subject = encodeURIComponent(`Message portfolio de ${name}`);
    const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${portfolio.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="space-y-6">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.35em] text-[var(--accent)]">Contact</p>
        <h2 className="text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">Restons en contact</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid gap-6"
      >
        <div className="rounded-[1rem] border border-[var(--border)] bg-[var(--card)] p-5 shadow-soft backdrop-blur-xl sm:p-6">
          <div className="rounded-[1rem] border border-[var(--border)] bg-[var(--card-strong)] p-4 sm:p-5 shadow-glow">
            <p className="text-[var(--foreground)] font-medium">Demande rapide</p>
            <p className="mt-3 text-[var(--muted)] leading-7">{portfolio.contact.message}</p>
          </div>

          <div className="mt-8 space-y-5">
            <div className="rounded-[1rem] border border-[var(--border)] bg-[var(--card-strong)] p-4 sm:p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-[var(--accent)]/10 text-[var(--accent)]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">Email</p>
                  <a
                    href={`mailto:${portfolio.contact.email}`}
                    className="mt-1 block text-base font-medium text-[var(--foreground)] transition hover:text-[var(--accent)]"
                  >
                    {portfolio.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[1rem] border border-[var(--border)] bg-[var(--card)] p-4 sm:p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">Réseaux</p>
              <div className="mt-4 grid gap-3">
                {portfolio.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center gap-2 rounded-[1rem] border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    {social.label === "GitHub" ? <Github className="h-4 w-4" /> : <Linkedin className="h-4 w-4" />}
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="rounded-[1rem] border border-[var(--border)] bg-[var(--card)] p-5 shadow-soft backdrop-blur-xl sm:p-6"
        >
          <div className="grid gap-4">
            <label className="space-y-2 text-sm text-[var(--muted)]">
              Nom
              <input
                name="name"
                type="text"
                required
                placeholder="Ton nom"
                className="w-full rounded-[1rem] border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20"
              />
            </label>

            <label className="space-y-2 text-sm text-[var(--muted)]">
              Adresse email
              <input
                name="email"
                type="email"
                required
                placeholder="exemple@domaine.com"
                className="w-full rounded-[1rem] border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20"
              />
            </label>

            <label className="space-y-2 text-sm text-[var(--muted)]">
              Message
              <textarea
                name="message"
                rows={6}
                required
                placeholder="Parle-moi de ton projet"
                className="w-full rounded-[1rem] border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--accent)]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/30 sm:w-auto"
          >
            Envoyer le message
            <Send className="h-4 w-4" />
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
}
