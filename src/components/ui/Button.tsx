import Link from "next/link";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  external?: boolean;
  fullWidth?: boolean;
}

const variants = {
  primary: "bg-tyken-golden hover:bg-tyken-medium text-tyken-cream font-bold shadow-lg hover:shadow-xl",
  secondary: "bg-white hover:bg-tyken-cream text-neutral-900 font-bold",
  outline: "border-2 border-white text-white font-bold hover:bg-white hover:text-neutral-900",
};

export function Button({ 
  children, 
  href, 
  onClick, 
  variant = "primary", 
  className = "",
  external = false,
  fullWidth = false,
}: ButtonProps) {
  const baseStyles = `inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg transition-all duration-300 hover:-translate-y-0.5 ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={baseStyles}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseStyles}>
      {children}
    </button>
  );
}
