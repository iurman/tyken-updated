"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
  delay?: number;
}

export function Card({ children, className = "", animate = false, delay = 0 }: CardProps) {
  const baseStyles = "bg-tyken-cream/5 backdrop-blur-sm border border-tyken-medium/30 rounded-2xl";
  
  if (animate) {
    return (
      <motion.div 
        className={`${baseStyles} ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={`${baseStyles} ${className}`}>{children}</div>;
}

interface IconCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay?: number;
}

export function IconCard({ icon: Icon, title, description, delay = 0 }: IconCardProps) {
  return (
    <motion.div
      className="bg-tyken-cream/5 backdrop-blur-sm border border-tyken-medium/30 rounded-xl p-6 card-hover"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="w-12 h-12 bg-tyken-golden/20 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-tyken-golden" />
      </div>
      <h3 className="text-lg font-semibold text-tyken-cream mb-2">{title}</h3>
      <p className="text-tyken-tan/80 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
