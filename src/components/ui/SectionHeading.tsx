type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className = "" }: SectionHeadingProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      <p className="text-sm uppercase tracking-[0.35em] text-[var(--accent)]">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">{title}</h2>
      {description ? <p className="max-w-2xl text-[var(--muted)]">{description}</p> : null}
    </div>
  );
}
