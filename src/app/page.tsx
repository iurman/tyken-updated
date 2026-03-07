"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, Briefcase, Target, CheckCircle } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/images/img2.jpg')",
            backgroundRepeat: "repeat-x",
            backgroundPosition: "top"
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tyken-cream mb-6 leading-tight">
              The Tyken Group
              <span className="block text-tyken-light-golden mt-2">
                / West 500 Partners
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-tyken-tan/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              The fight for top talent has never been more intense — and your business 
              depends on identifying and acquiring the most talented and versatile resources.
            </p>
            <p className="text-lg text-tyken-tan/80 max-w-2xl mx-auto mb-10">
              <strong className="text-tyken-cream">The Tyken Group/West 500 Partners can help.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-tyken-golden hover:bg-tyken-medium font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                style={{ color: '#eae4ce' }}
              >
                Contact Us
                <ArrowRight size={20} />
              </Link>
              <Link 
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-tyken-tan/40 hover:border-tyken-cream text-tyken-cream font-semibold rounded-lg transition-all duration-300 hover:bg-tyken-medium/20"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-tyken-dark/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-tyken-cream mb-4">
              How We Can Help
            </h2>
            <div className="w-24 h-1 bg-tyken-golden mx-auto rounded-full" />
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
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
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-tyken-cream/5 backdrop-blur-sm border border-tyken-medium/30 rounded-xl p-8 card-hover"
                variants={fadeInUp}
              >
                <div className="w-14 h-14 bg-tyken-golden/20 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-tyken-golden" />
                </div>
                <h3 className="text-xl font-semibold text-tyken-cream mb-4">
                  {item.title}
                </h3>
                <p className="text-tyken-tan/80 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-tyken-cream mb-6">
                The Resources to Bring Top Talent to You
              </h2>
              <p className="text-lg text-tyken-tan/80 mb-8 leading-relaxed">
                Whether you need a skilled project manager to guide a 6-month effort to 
                completion, a passionate software developer to fill a permanent role on 
                your team, or a fearless salesperson to help get you to your goals — we can help.
              </p>
              <ul className="space-y-4">
                {[
                  "Technical Writers & Testers",
                  "Designers & Developers", 
                  "Marketing Specialists",
                  "Executives & Salespeople",
                  "Administrative Support",
                  "Project Managers"
                ].map((service, index) => (
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
              <h3 className="text-2xl font-semibold text-tyken-cream mb-6">
                World-Class Service
              </h3>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-tyken-medium/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-tyken-cream mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-tyken-tan/80 mb-8 max-w-2xl mx-auto">
              Whether you&apos;re looking for exceptional talent or your next career opportunity, 
              we&apos;re here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/opportunities"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-neutral-900 font-bold rounded-lg transition-all duration-300 hover:bg-tyken-cream hover:-translate-y-0.5"
              >
                View Opportunities
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-lg transition-all duration-300 hover:bg-white hover:text-neutral-900"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
