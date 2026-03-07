"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Users, TrendingUp, Shield, ArrowRight } from "lucide-react";

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
            Opportunities
          </h1>
          <div className="w-24 h-1 bg-tyken-golden mx-auto rounded-full mb-8" />
          <p className="text-xl text-tyken-tan/90 max-w-3xl mx-auto leading-relaxed">
            At The Tyken Group, our opportunities change on a daily basis. One thing, 
            however, that never changes is our refusal to settle for mediocrity.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          className="bg-tyken-cream/5 backdrop-blur-sm border border-tyken-medium/30 rounded-2xl p-8 md:p-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-tyken-cream mb-6">
              We&apos;re Looking for Exceptional Talent
            </h2>
            <p className="text-lg text-tyken-tan/80 mb-6 leading-relaxed">
              We work only with the most well-rounded, most talented, and most productive 
              professionals. If that&apos;s you — <strong className="text-tyken-cream">no matter what it is you do</strong> — we want to talk with you.
            </p>
            <p className="text-tyken-tan/80 mb-8 leading-relaxed">
              Whether you&apos;re a project manager, software developer, technical writer, 
              tester, designer, marketing specialist, executive, salesperson, or 
              administrative professional — if you bring excellence to everything you do, 
              we have opportunities waiting for you.
            </p>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-tyken-cream text-center mb-12">
            Why Work With Us
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-tyken-cream/5 backdrop-blur-sm border border-tyken-medium/30 rounded-xl p-6 flex gap-4 card-hover"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-tyken-golden/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-tyken-golden" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-tyken-cream mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-tyken-tan/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Openings Notice */}
        <motion.div 
          className="mt-16 bg-tyken-medium/20 rounded-2xl p-8 md:p-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
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
            <a 
              href="mailto:seth@tykengroup.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-tyken-golden hover:bg-tyken-medium font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5" style={{ color: '#eae4ce' }}
            >
              Email Seth Directly
              <ArrowRight size={20} />
            </a>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-lg transition-all duration-300 hover:bg-white hover:text-neutral-900"
            >
              Contact Page
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
