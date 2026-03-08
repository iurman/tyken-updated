import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "default" | "muted" | "accent";
}

const backgrounds = {
  default: "",
  muted: "bg-tyken-dark/50",
  accent: "bg-tyken-medium/20",
};

export function Section({ children, className = "", background = "default" }: SectionProps) {
  return (
    <section className={`py-16 md:py-20 ${backgrounds[background]} ${className}`}>
      <div className="container-main">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  centered?: boolean;
}

export function SectionHeader({ title, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-tyken-cream">{title}</h2>
      {centered && <div className="w-24 h-1 bg-tyken-golden mx-auto mt-4 rounded-full" />}
    </div>
  );
}
