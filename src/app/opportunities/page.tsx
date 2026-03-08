"use client";

import { motion } from "framer-motion";
import { Sparkles, Users, TrendingUp, Shield, ArrowRight } from "lucide-react";
import { PageHero, Button, Section, SectionHeader } from "@/components/ui";
import { siteConfig } from "@/lib/constants";

const benefits = [
  {
    icon: TrendingUp,
    title: "Better Compensation",
    description: "We can pay you more and provide better benefits than traditional arrangements."
  },
  {
    icon: Users,
    title: "Winning Team",
    description: "Join a network of the most well-rounded, talented, and productive professionals."
  },
  {
    icon: Shield,
    title: "Career Support",
    description: "We'll put you in position to succeed with ongoing support and guidance."
  },
  {
    icon: Sparkles,
    title: "Better Balance",
    description: "Find a better place, a better opportunity, and a better work-life balance."
  }
];

export default function OpportunitiesPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Opportunities"
        subtitle="At The Tyken Group, our opportunities change on a daily basis. One thing, however, that never changes is our refusal to settle for mediocrity."
      />

      <Section>
        <motion.div 
          className="bg-tyken-cream/5 backdrop-blur-sm border border-tyken-medium/30 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-tyken-cream mb-6">
              We&apos;re Looking for Exceptional Talent
            </h2>
            <p className="text-lg text-tyken-tan/80 mb-4 leading-relaxed">
              We work only with the most well-rounded, most talented, and most productive 
              professionals. If that&apos;s you — <strong className="text-tyken-cream">no matter what it is you do</strong> — we want to talk with you.
            </p>
            <p className="text-tyken-tan/80 leading-relaxed">
              Whether you&apos;re a project manager, software developer, technical writer, 
              tester, designer, marketing specialist, executive, salesperson, or 
              administrative professional — if you bring excellence to everything you do, 
              we have opportunities waiting for you.
            </p>
          </div>
        </motion.div>
      </Section>

      <Section background="muted">
        <SectionHeader title="Why Work With Us" />
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-tyken-cream/5 backdrop-blur-sm border border-tyken-medium/30 rounded-xl p-6 flex gap-4 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-tyken-golden/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-6 h-6 text-tyken-golden" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-tyken-cream mb-2">{benefit.title}</h3>
                <p className="text-tyken-tan/80 leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
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
          <h2 className="text-2xl font-bold text-tyken-cream mb-4">
            Interested in Joining Our Team?
          </h2>
          <p className="text-tyken-tan/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            If you are interested in joining a winning team and you&apos;d like to find out 
            what we&apos;re looking for, contact Seth for more information about current 
            opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={`mailto:${siteConfig.contact.email}`} external>
              Email Seth Directly
              <ArrowRight size={20} />
            </Button>
            <Button href="/contact" variant="outline">Contact Page</Button>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
