"use client";

import { motion } from "framer-motion";
import { Building2, Target, Handshake, Award } from "lucide-react";
import { PageHero, Button, Section, SectionHeader, IconCard } from "@/components/ui";

const values = [
  {
    icon: Target,
    title: "Simplicity",
    description: "We keep things simple. Clear communication, straightforward processes, and honest relationships."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "A commitment to excellence in everything we do, from candidate selection to client service."
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "We function as true partners with our clients, invested in their success as much as our own."
  },
  {
    icon: Building2,
    title: "Results",
    description: "We provide the right people, at the right time, who can do the right thing. Right away."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="About Us"
        subtitle="We understand the pressures that growing businesses face, and we'll work carefully to understand your needs and your goals."
      />

      <Section>
        <motion.div 
          className="bg-tyken-cream/5 backdrop-blur-sm border border-tyken-medium/30 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-tyken-cream mb-6">Our Story</h2>
              <p className="text-tyken-tan/80 mb-4 leading-relaxed">
                In 2006, the Tyken Group was established to meet the needs of Puget Sound&apos;s 
                emerging businesses. We are excruciatingly selective with our consultants and 
                our candidates, and we work only with those organizations who share our values.
              </p>
              <p className="text-tyken-tan/80 mb-4 leading-relaxed">
                A commitment to excellence in everything we do, and a relentless pursuit of 
                customer satisfaction — these are the principles that guide every relationship 
                we build.
              </p>
              <p className="text-tyken-tan/80 leading-relaxed">
                We function as partners with our clients and we&apos;re focused on efficiency 
                and results.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl md:text-8xl font-bold text-tyken-golden mb-2">2006</div>
                <div className="text-tyken-tan/80 text-lg">Established in the Puget Sound</div>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      <Section background="muted">
        <SectionHeader title="Our Values" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <IconCard 
              key={index} 
              icon={value.icon} 
              title={value.title} 
              description={value.description}
              delay={0.1 * index}
            />
          ))}
        </div>
      </Section>

      <Section background="accent">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-tyken-cream mb-6">Our Mission</h2>
          <p className="text-xl text-tyken-tan/90 max-w-3xl mx-auto leading-relaxed mb-8">
            We know that every day that passes without the support you need means money 
            and opportunity lost. We provide the right people, at the right time, who can 
            do the right thing.
          </p>
          <Button href="/contact">Get World-Class Service</Button>
        </motion.div>
      </Section>
    </div>
  );
}
