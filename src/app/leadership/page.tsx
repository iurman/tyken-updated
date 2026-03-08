"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, Quote } from "lucide-react";
import { PageHero, Button, Section, SectionHeader } from "@/components/ui";
import { siteConfig } from "@/lib/constants";

const testimonials = [
  {
    text: "Seth has provided contract management, leadership, conflict resolution, and guidance for a decade of my career. No matter the scenario, his advice taught me how to regain control, reset expectations, and grow relationships. Holidays, weekends, or middle of the night, he was always available and willing. Stepping up even for trivial requests. Remaining professional and calm, he cultured friendships and taught continuous improvement skills. Truly above and beyond any expectation or requirement.",
    author: "James P. Hutchinson"
  },
  {
    text: "Seth is great. He placed me twice and has always been genuinely personable, accommodating and honest. It's refreshing to work with an agent that's independent yet powerful and not part of a big bureaucracy.",
    author: "Marc Silber"
  }
];

const stats = [
  { value: "20+", label: "Years in Industry" },
  { value: "500+", label: "Professional Connections" },
];

export default function LeadershipPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Leadership"
        subtitle="Meet the team behind The Tyken Group"
      />

      <Section>
        <motion.div 
          className="bg-tyken-cream/5 backdrop-blur-sm border border-tyken-medium/30 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="text-tyken-golden text-sm font-medium mb-2 tracking-wide">
                PRESIDENT & FOUNDER
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-tyken-cream mb-6">Seth Sigel</h2>
              
              <div className="space-y-4 text-tyken-tan/80 leading-relaxed">
                <p>
                  Seth Sigel started the Tyken Group in 2006, determined to bring the highest 
                  levels of customer service to Puget Sound.
                </p>
                <p>
                  A graduate of the University of Connecticut, Seth began his career in sales 
                  in Boston and moved to Seattle in 1999. He was a district manager for payroll 
                  giant ADP and a regional sales manager for Monster.com before he began his 
                  own agency just outside of Seattle.
                </p>
                <p>
                  He believes in long-term business relationships built on trust and on action, 
                  and would love to hear from you.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <a 
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-tyken-golden/20 hover:bg-tyken-golden/30 text-tyken-cream rounded-lg transition-colors text-sm"
                >
                  <Phone size={16} />
                  {siteConfig.contact.phoneDisplay}
                </a>
                <a 
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-tyken-golden/20 hover:bg-tyken-golden/30 text-tyken-cream rounded-lg transition-colors text-sm"
                >
                  <Mail size={16} />
                  {siteConfig.contact.email}
                </a>
                <a 
                  href={siteConfig.social.linkedinPersonal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-tyken-golden/20 hover:bg-tyken-golden/30 text-tyken-cream rounded-lg transition-colors text-sm"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="space-y-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-tyken-dark/50 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-tyken-golden mb-2">{stat.value}</div>
                  <div className="text-tyken-tan/80 text-sm">{stat.label}</div>
                </div>
              ))}
              <div className="bg-tyken-dark/50 rounded-xl p-6">
                <div className="flex items-center gap-2 text-tyken-tan/80 text-sm">
                  <MapPin size={16} className="text-tyken-golden" />
                  {siteConfig.contact.location}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      <Section background="muted">
        <SectionHeader title="What People Say" />
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-tyken-cream/5 backdrop-blur-sm border border-tyken-medium/30 rounded-xl p-6 md:p-8 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-tyken-golden/20" />
              <p className="text-tyken-tan/80 leading-relaxed mb-6">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-tyken-golden/20 rounded-full flex items-center justify-center">
                  <span className="text-tyken-golden font-semibold">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-tyken-cream font-medium">{testimonial.author}</div>
                  <div className="text-tyken-tan/60 text-sm">via LinkedIn</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-tyken-tan/80 mb-6">
            Ready to connect with Seth and the Tyken Group team?
          </p>
          <Button href="/contact">Get in Touch</Button>
        </motion.div>
      </Section>
    </div>
  );
}
