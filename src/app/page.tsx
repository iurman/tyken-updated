"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, Briefcase, Target, CheckCircle } from "lucide-react";
import { PageHero, Button, Section, SectionHeader } from "@/components/ui";

const valueProps = [
  {
    icon: Briefcase,
    title: "For Hiring Managers",
    description: "Every day that passes without the support you need means money and opportunity lost. We provide the right people, at the right time, who can do the right thing. Right away."
  },
  {
    icon: Users,
    title: "For Professionals",
    description: "Looking for a better place, a better opportunity, a better balance? We can pay you more, provide better benefits, and put you in position to succeed."
  },
  {
    icon: Target,
    title: "Our Approach",
    description: "At the Tyken Group, our goal is to keep things simple. We understand the pressures growing businesses face and work carefully to understand your needs and goals."
  }
];

const services = [
  "Technical Writers & Testers",
  "Designers & Developers", 
  "Marketing Specialists",
  "Executives & Salespeople",
  "Administrative Support",
  "Project Managers"
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="The Tyken Group"
        highlight="/ West 500 Partners"
        subtitle="The fight for top talent has never been more intense — and your business depends on identifying and acquiring the most talented and versatile resources."
      />

      <div className="container-main text-center -mt-12 mb-8 relative z-10">
        <p className="text-lg text-tyken-tan/80 mb-8">
          <strong className="text-tyken-cream">The Tyken Group/West 500 Partners can help.</strong>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact">
            Contact Us
            <ArrowRight size={20} />
          </Button>
          <Button href="/about" variant="outline">
            Learn More
          </Button>
        </div>
      </div>

      <Section background="muted">
        <SectionHeader title="How We Can Help" />
        <div className="grid md:grid-cols-3 gap-8">
          {valueProps.map((item, index) => (
            <motion.div
              key={index}
              className="bg-tyken-cream/5 backdrop-blur-sm border border-tyken-medium/30 rounded-xl p-8 card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-tyken-golden/20 rounded-lg flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-tyken-golden" />
              </div>
              <h3 className="text-xl font-semibold text-tyken-cream mb-4">{item.title}</h3>
              <p className="text-tyken-tan/80 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-tyken-cream mb-6">
              The Resources to Bring Top Talent to You
            </h2>
            <p className="text-lg text-tyken-tan/80 mb-8 leading-relaxed">
              Whether you need a skilled project manager to guide a 6-month effort to 
              completion, a passionate software developer to fill a permanent role on 
              your team, or a fearless salesperson to help get you to your goals — we can help.
            </p>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center gap-3 text-tyken-tan"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-tyken-golden flex-shrink-0" />
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-tyken-cream/5 backdrop-blur-sm border border-tyken-medium/30 rounded-2xl p-8 md:p-10"
          >
            <h3 className="text-2xl font-semibold text-tyken-cream mb-6">World-Class Service</h3>
            <p className="text-tyken-tan/80 mb-6 leading-relaxed">
              Find out what it is like to get world-class service, and let us help 
              you concentrate on doing what you do best.
            </p>
            <p className="text-tyken-tan/80 mb-8 leading-relaxed">
              Visit our partner company{" "}
              <a 
                href="https://west500partners.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-tyken-light-golden hover:text-tyken-golden underline underline-offset-2"
              >
                West 500 Partners
              </a>
              {" "}to learn more about both companies.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 text-tyken-golden hover:text-tyken-cream font-semibold transition-colors"
            >
              Contact The Tyken Group Today
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </Section>

      <Section background="accent">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-tyken-cream mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-tyken-tan/80 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re looking for exceptional talent or your next career opportunity, 
            we&apos;re here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/opportunities">View Opportunities</Button>
            <Button href="/contact" variant="outline">Get in Touch</Button>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
