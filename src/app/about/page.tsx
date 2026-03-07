"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, Target, Handshake, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-tyken-cream mb-6">
            About Us
          </h1>
          <div className="w-24 h-1 bg-tyken-golden mx-auto rounded-full mb-8" />
          <p className="text-xl text-tyken-tan/90 max-w-3xl mx-auto leading-relaxed">
            We understand the pressures that growing businesses face, and we&apos;ll work 
            carefully to understand your needs and your goals.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div 
          className="bg-tyken-cream/5 backdrop-blur-sm border border-tyken-medium/30 rounded-2xl p-8 md:p-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-tyken-cream mb-6">
                Our Story
              </h2>
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
                <div className="text-7xl md:text-8xl font-bold text-tyken-golden mb-2">
                  2006
                </div>
                <div className="text-tyken-tan/80 text-lg">
                  Established in the Puget Sound
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-tyken-cream text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
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
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-tyken-cream/5 backdrop-blur-sm border border-tyken-medium/30 rounded-xl p-6 text-center card-hover"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-tyken-golden/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-tyken-golden" />
                </div>
                <h3 className="text-lg font-semibold text-tyken-cream mb-2">
                  {value.title}
                </h3>
                <p className="text-tyken-tan/70 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div 
          className="mt-16 text-center bg-tyken-medium/20 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-tyken-cream mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-tyken-tan/90 max-w-3xl mx-auto leading-relaxed mb-8">
            We know that every day that passes without the support you need means money 
            and opportunity lost. We provide the right people, at the right time, who can 
            do the right thing.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-tyken-golden hover:bg-tyken-medium font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5" style={{ color: '#eae4ce' }}
          >
            Get World-Class Service
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
