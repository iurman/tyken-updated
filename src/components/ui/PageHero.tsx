"use client";

import { motion } from "framer-motion";
import { basePath } from "@/lib/constants";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  highlight?: string;
}

export function PageHero({ title, subtitle, highlight }: PageHeroProps) {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20 bg-repeat-x bg-top"
        style={{ backgroundImage: `url('${basePath}/images/img2.jpg')` }}
      />
      <div className="relative container-main">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tyken-cream mb-6 leading-tight">
            {title}
            {highlight && (
              <span className="block text-tyken-light-golden mt-2">{highlight}</span>
            )}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-tyken-tan/90 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
