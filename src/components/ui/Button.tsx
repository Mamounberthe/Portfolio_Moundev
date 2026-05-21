import { motion } from "framer-motion";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "solid" | "outline" | "ghost";

type AnchorButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type RegularButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = AnchorButtonProps | RegularButtonProps;

type AnchorProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "onDrag" | "onDragStart" | "onDragEnd" | "onDragEnter" | "onDragLeave" | "onDragOver" | "onDrop">;
type ButtonElementProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onDrag" | "onDragStart" | "onDragEnd" | "onDragEnter" | "onDragLeave" | "onDragOver" | "onDrop">;

const variantStyles: Record<ButtonVariant, string> = {
  solid: "bg-[var(--accent)] text-[var(--foreground)] hover:bg-[var(--accent)]/90 focus-visible:ring-[var(--accent)]/50",
  outline: "border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:ring-[var(--accent)]/30",
  ghost: "bg-[var(--card)] text-[var(--foreground)] hover:bg-[var(--card-soft)] focus-visible:ring-[var(--accent)]/30",
};

export function Button(props: ButtonProps) {
  const { children, variant = "solid", className = "" } = props as {
    children: ReactNode;
    variant?: ButtonVariant;
    className?: string;
  };

  const base =
    "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]";
  const variantClass = variantStyles[variant];

  if ("href" in props && props.href) {
    const { href, ...rest } = props as AnchorButtonProps;
    const anchorProps = rest as AnchorProps;
    return (
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
        <a href={href} className={`${base} ${variantClass} ${className}`} {...anchorProps}>
          {children}
        </a>
      </motion.div>
    );
  }

  const buttonProps = props as ButtonElementProps;
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
      <button type="button" className={`${base} ${variantClass} ${className}`} {...buttonProps}>
        {children}
      </button>
    </motion.div>
  );
}
