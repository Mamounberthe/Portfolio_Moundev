import { FormEvent } from "react";
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
        <p className="text-sm uppercase tracking-[0.35em] text-orange-300">Contact</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Restons en contact</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="rounded-[2rem] border border-white/10 bg-surface-950/90 p-8 shadow-soft backdrop-blur-xl">
          <p className="text-slate-300 leading-8">{portfolio.contact.message}</p>

          <div className="mt-10 space-y-5">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-orange-500/10 text-orange-300">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-orange-300">Email</p>
                  <a
                    href={`mailto:${portfolio.contact.email}`}
                    className="mt-1 block text-base font-medium text-white transition hover:text-orange-300"
                  >
                    {portfolio.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-orange-300">Réseaux</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {portfolio.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 transition hover:border-orange-300 hover:text-orange-300"
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
          className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur-xl"
        >
          <div className="grid gap-5">
            <label className="space-y-2 text-sm text-slate-300">
              Nom
              <input
                name="name"
                type="text"
                required
                placeholder="Ton nom"
                className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-300/20"
              />
            </label>

            <label className="space-y-2 text-sm text-slate-300">
              Adresse email
              <input
                name="email"
                type="email"
                required
                placeholder="exemple@domaine.com"
                className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-300/20"
              />
            </label>

            <label className="space-y-2 text-sm text-slate-300">
              Message
              <textarea
                name="message"
                rows={6}
                required
                placeholder="Parle-moi de ton projet"
                className="w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-300/20"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
          >
            Envoyer le message
            <Send className="h-4 w-4" />
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
}
