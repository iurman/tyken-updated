"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Seth has provided contract management, leadership, conflict resolution, and guidance for a decade of my career. No matter the scenario, his advice taught me how to regain control, reset expectations, and grow relationships. Holidays, weekends, or middle of the night, he was always available and willing. Stepping up even for trivial requests. Remaining professional and calm, he cultured friendships and taught continuous improvement skills. Truly above and beyond any expectation or requirement. My sincere thank you for everything Seth, I am honored to have been part of your team.",
    author: "James P. Hutchinson"
  },
  {
    text: "Seth is great. He placed me twice and has always been genuinely personable, accommodating and honest. It's refreshing to work with an agent that's independent yet powerful and not part of a big bureaucracy.",
    author: "Marc Silber"
  }
];

export default function LeadershipPage() {
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
            Leadership
          </h1>
          <div className="w-24 h-1 bg-tyken-golden mx-auto rounded-full" />
        </motion.div>

        {/* Seth Sigel Profile */}
        <motion.div 
          className="bg-tyken-cream/5 backdrop-blur-sm border border-tyken-medium/30 rounded-2xl p-8 md:p-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {/* Profile Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 text-tyken-golden text-sm font-medium mb-2">
                <span>PRESIDENT & FOUNDER</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-tyken-cream mb-6">
                Seth Sigel
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-tyken-tan/80 mb-4 leading-relaxed">
                  Seth Sigel started the Tyken Group in 2006, determined to bring the highest 
                  levels of customer service to Puget Sound.
                </p>
                <p className="text-tyken-tan/80 mb-4 leading-relaxed">
                  A graduate of the University of Connecticut, Seth began his career in sales 
                  in Boston and moved to Seattle in 1999. He was a district manager for payroll 
                  giant ADP and a regional sales manager for Monster.com before he began his 
                  own agency just outside of Seattle.
                </p>
                <p className="text-tyken-tan/80 mb-6 leading-relaxed">
                  He believes in long-term business relationships built on trust and on action, 
                  and would love to hear from you.
                </p>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 mt-8">
                <a 
                  href="tel:+12068513894"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-tyken-golden/20 hover:bg-tyken-golden/30 text-tyken-cream rounded-lg transition-colors"
                >
                  <Phone size={18} />
                  206.851.3894
                </a>
                <a 
                  href="mailto:seth@tykengroup.com"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-tyken-golden/20 hover:bg-tyken-golden/30 text-tyken-cream rounded-lg transition-colors"
                >
                  <Mail size={18} />
                  seth@tykengroup.com
                </a>
                <a 
                  href="https://www.linkedin.com/in/sethsigel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-tyken-golden/20 hover:bg-tyken-golden/30 text-tyken-cream rounded-lg transition-colors"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Stats/Highlights */}
            <div className="space-y-6">
              <div className="bg-tyken-dark/50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-tyken-golden mb-2">20+</div>
                <div className="text-tyken-tan/80 text-sm">Years in Industry</div>
              </div>
              <div className="bg-tyken-dark/50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-tyken-golden mb-2">500+</div>
                <div className="text-tyken-tan/80 text-sm">Professional Connections</div>
              </div>
              <div className="bg-tyken-dark/50 rounded-xl p-6">
                <div className="flex items-center gap-2 text-tyken-tan/80 text-sm">
                  <MapPin size={16} className="text-tyken-golden" />
                  Woodinville, Washington
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-tyken-cream text-center mb-12">
            What People Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-tyken-cream/5 backdrop-blur-sm border border-tyken-medium/30 rounded-xl p-6 md:p-8 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-tyken-golden/20" />
                <p className="text-tyken-tan/80 leading-relaxed mb-6 relative z-10">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-tyken-golden/20 rounded-full flex items-center justify-center">
                    <span className="text-tyken-golden font-semibold">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-tyken-cream font-medium">
                      {testimonial.author}
                    </div>
                    <div className="text-tyken-tan/60 text-sm">
                      via LinkedIn
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p className="text-lg text-tyken-tan/80 mb-6">
            Ready to connect with Seth and the Tyken Group team?
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-tyken-golden hover:bg-tyken-medium font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5" style={{ color: '#eae4ce' }}
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
