import { motion } from "framer-motion";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "solid" | "outline" | "ghost";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonProps = BaseProps &
  ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>) |
  ({} & ButtonHTMLAttributes<HTMLButtonElement>);

const variantStyles: Record<ButtonVariant, string> = {
  solid: "bg-orange-500 text-slate-950 hover:bg-orange-400 focus-visible:ring-orange-300/60",
  outline: "border border-white/15 text-slate-100 hover:border-orange-300/40 hover:text-orange-300 focus-visible:ring-orange-300/30",
  ghost: "bg-white/5 text-slate-100 hover:bg-white/10 focus-visible:ring-orange-300/30",
};

export function Button({
  children,
  variant = "solid",
  className = "",
  href,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-shadow duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-950/40";

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ y: -2 }}
        className={`${base} ${variantStyles[variant]} ${className}`}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      whileHover={{ y: -2 }}
      className={`${base} ${variantStyles[variant]} ${className}`}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </motion.button>
  );
}
