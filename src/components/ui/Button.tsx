import Link from "next/link";
import { type ReactNode, type CSSProperties } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  external?: boolean;
  fullWidth?: boolean;
}

const variantStyles: Record<string, { className: string; style?: CSSProperties }> = {
  primary: { 
    className: "bg-tyken-golden hover:bg-tyken-medium font-bold shadow-lg hover:shadow-xl",
    style: { color: '#eae4ce' }
  },
  secondary: { 
    className: "bg-white hover:bg-tyken-cream text-neutral-900 font-bold" 
  },
  outline: { 
    className: "border-2 border-white text-white font-bold hover:bg-white hover:text-neutral-900" 
  },
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
  const { className: variantClass, style } = variantStyles[variant];
  const baseStyles = `inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg transition-all duration-300 hover:-translate-y-0.5 ${variantClass} ${fullWidth ? "w-full" : ""} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={baseStyles} style={style}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={baseStyles} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseStyles} style={style}>
      {children}
    </button>
  );
}
