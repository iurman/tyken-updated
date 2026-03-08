"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Clock, ExternalLink } from "lucide-react";
import { PageHero, Button, Section } from "@/components/ui";
import { siteConfig } from "@/lib/constants";

const contactMethods = [
  { 
    icon: Phone, 
    label: siteConfig.contact.phone, 
    href: `tel:${siteConfig.contact.phone.replace(/\D/g, '')}` 
  },
  { 
    icon: Mail, 
    label: siteConfig.contact.email, 
    href: `mailto:${siteConfig.contact.email}` 
  },
  { 
    icon: Linkedin, 
    label: "LinkedIn Profile", 
    href: siteConfig.social.linkedinPersonal,
    external: true 
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Contact Us"
        subtitle="We look forward to hearing from you! Let's start a conversation about how we can help you succeed."
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div 
            className="bg-tyken-cream/5 backdrop-blur-sm border border-tyken-medium/30 rounded-2xl p-8 md:p-10"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-tyken-cream mb-8">Get in Touch</h2>

            <div className="space-y-6">
              <div className="pb-6 border-b border-tyken-medium/30">
                <h3 className="text-lg font-semibold text-tyken-cream mb-1">Seth Sigel</h3>
                <p className="text-tyken-tan/80 text-sm mb-4">President & Founder</p>
                
                <div className="space-y-3">
                  {contactMethods.map((method, index) => (
                    <a 
                      key={index}
                      href={method.href}
                      target={method.external ? "_blank" : undefined}
                      rel={method.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 text-tyken-tan hover:text-tyken-cream transition-colors group"
                    >
                      <div className="w-10 h-10 bg-tyken-golden/20 group-hover:bg-tyken-golden/30 rounded-lg flex items-center justify-center transition-colors">
                        <method.icon size={18} className="text-tyken-golden" />
                      </div>
                      <span className="flex items-center gap-1">
                        {method.label}
                        {method.external && <ExternalLink size={14} className="opacity-50" />}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="pb-6 border-b border-tyken-medium/30">
                <h3 className="text-lg font-semibold text-tyken-cream mb-4">Location</h3>
                <div className="flex items-start gap-3 text-tyken-tan">
                  <div className="w-10 h-10 bg-tyken-golden/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-tyken-golden" />
                  </div>
                  <div>
                    <p>{siteConfig.contact.location}</p>
                    <p className="text-tyken-tan/60 text-sm mt-1">{siteConfig.contact.region}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-tyken-cream mb-4">Availability</h3>
                <div className="flex items-start gap-3 text-tyken-tan">
                  <div className="w-10 h-10 bg-tyken-golden/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-tyken-golden" />
                  </div>
                  <div>
                    <p>Tours available by appointment</p>
                    <p className="text-tyken-tan/60 text-sm mt-1">Contact us to schedule a visit</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-tyken-golden/20 border border-tyken-golden/30 rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl font-bold text-tyken-cream mb-4">Ready to Get Started?</h2>
              <p className="text-tyken-tan/80 mb-6 leading-relaxed">
                Whether you&apos;re a business looking for top talent or a professional 
                seeking your next opportunity, we&apos;re here to help.
              </p>
              <Button href={`mailto:${siteConfig.contact.email}`} external fullWidth>
                <Mail size={20} />
                Send an Email
              </Button>
            </div>

            <div className="bg-tyken-cream/5 backdrop-blur-sm border border-tyken-medium/30 rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-tyken-cream mb-4">Partner Company</h3>
              <p className="text-tyken-tan/80 mb-4 leading-relaxed">
                Visit our partner company {siteConfig.partner.name} to learn more about 
                both organizations and how we can serve your needs.
              </p>
              <a 
                href={siteConfig.partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-tyken-light-golden hover:text-tyken-golden font-medium transition-colors"
              >
                Visit {siteConfig.partner.name}
                <ExternalLink size={16} />
              </a>
            </div>

            <div className="bg-tyken-cream/5 backdrop-blur-sm border border-tyken-medium/30 rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-tyken-cream mb-4">Follow Us</h3>
              <p className="text-tyken-tan/80 mb-4 leading-relaxed">
                Stay connected and see the latest opportunities on our LinkedIn page.
              </p>
              <a 
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-tyken-light-golden hover:text-tyken-golden font-medium transition-colors"
              >
                <Linkedin size={18} />
                {siteConfig.name} on LinkedIn
                <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section>
        <motion.p 
          className="text-lg text-tyken-tan/80 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Find out what it is like to get world-class service, and let us help you 
          concentrate on doing what you do best.
        </motion.p>
      </Section>
    </div>
  );
}
