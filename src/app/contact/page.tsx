"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Clock, ExternalLink } from "lucide-react";

export default function ContactPage() {
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
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-tyken-golden mx-auto rounded-full mb-8" />
          <p className="text-xl text-tyken-tan/90 max-w-2xl mx-auto leading-relaxed">
            We look forward to hearing from you! Let&apos;s start a conversation about 
            how we can help you succeed.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div 
            className="bg-tyken-cream/5 backdrop-blur-sm border border-tyken-medium/30 rounded-2xl p-8 md:p-10"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-tyken-cream mb-8">
              Get in Touch
            </h2>

            <div className="space-y-6">
              {/* Seth Sigel */}
              <div className="pb-6 border-b border-tyken-medium/30">
                <h3 className="text-lg font-semibold text-tyken-cream mb-1">
                  Seth Sigel
                </h3>
                <p className="text-tyken-tan/70 text-sm mb-4">President & Founder</p>
                
                <div className="space-y-3">
                  <a 
                    href="tel:+12068513894"
                    className="flex items-center gap-3 text-tyken-tan hover:text-tyken-cream transition-colors group"
                  >
                    <div className="w-10 h-10 bg-tyken-golden/20 group-hover:bg-tyken-golden/30 rounded-lg flex items-center justify-center transition-colors">
                      <Phone size={18} className="text-tyken-golden" />
                    </div>
                    <span>+1 206.851.3894</span>
                  </a>
                  
                  <a 
                    href="mailto:seth@tykengroup.com"
                    className="flex items-center gap-3 text-tyken-tan hover:text-tyken-cream transition-colors group"
                  >
                    <div className="w-10 h-10 bg-tyken-golden/20 group-hover:bg-tyken-golden/30 rounded-lg flex items-center justify-center transition-colors">
                      <Mail size={18} className="text-tyken-golden" />
                    </div>
                    <span>seth@tykengroup.com</span>
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/sethsigel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-tyken-tan hover:text-tyken-cream transition-colors group"
                  >
                    <div className="w-10 h-10 bg-tyken-golden/20 group-hover:bg-tyken-golden/30 rounded-lg flex items-center justify-center transition-colors">
                      <Linkedin size={18} className="text-tyken-golden" />
                    </div>
                    <span className="flex items-center gap-1">
                      LinkedIn Profile
                      <ExternalLink size={14} className="opacity-50" />
                    </span>
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="pb-6 border-b border-tyken-medium/30">
                <h3 className="text-lg font-semibold text-tyken-cream mb-4">
                  Location
                </h3>
                <div className="flex items-start gap-3 text-tyken-tan">
                  <div className="w-10 h-10 bg-tyken-golden/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-tyken-golden" />
                  </div>
                  <div>
                    <p>Woodinville, WA</p>
                    <p className="text-tyken-tan/60 text-sm mt-1">
                      Greater Seattle Area, Puget Sound
                    </p>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div>
                <h3 className="text-lg font-semibold text-tyken-cream mb-4">
                  Availability
                </h3>
                <div className="flex items-start gap-3 text-tyken-tan">
                  <div className="w-10 h-10 bg-tyken-golden/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-tyken-golden" />
                  </div>
                  <div>
                    <p>Tours available by appointment</p>
                    <p className="text-tyken-tan/60 text-sm mt-1">
                      Contact us to schedule a visit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Main CTA */}
            <div className="bg-tyken-golden/20 border border-tyken-golden/30 rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl font-bold text-tyken-cream mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-tyken-tan/80 mb-6 leading-relaxed">
                Whether you&apos;re a business looking for top talent or a professional 
                seeking your next opportunity, we&apos;re here to help.
              </p>
              <a 
                href="mailto:seth@tykengroup.com"
                className="inline-flex items-center justify-center w-full gap-2 px-8 py-4 bg-tyken-golden hover:bg-tyken-medium font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl" style={{ color: '#eae4ce' }}
              >
                <Mail size={20} />
                Send an Email
              </a>
            </div>

            {/* Partner Company */}
            <div className="bg-tyken-cream/5 backdrop-blur-sm border border-tyken-medium/30 rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-tyken-cream mb-4">
                Partner Company
              </h3>
              <p className="text-tyken-tan/80 mb-4 leading-relaxed">
                Visit our partner company West 500 Partners to learn more about 
                both organizations and how we can serve your needs.
              </p>
              <a 
                href="https://west500partners.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-tyken-light-golden hover:text-tyken-golden font-medium transition-colors"
              >
                Visit West 500 Partners
                <ExternalLink size={16} />
              </a>
            </div>

            {/* Company LinkedIn */}
            <div className="bg-tyken-cream/5 backdrop-blur-sm border border-tyken-medium/30 rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-tyken-cream mb-4">
                Follow Us
              </h3>
              <p className="text-tyken-tan/80 mb-4 leading-relaxed">
                Stay connected and see the latest opportunities on our LinkedIn page.
              </p>
              <a 
                href="https://www.linkedin.com/company/the-tyken-group/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-tyken-light-golden hover:text-tyken-golden font-medium transition-colors"
              >
                <Linkedin size={18} />
                The Tyken Group on LinkedIn
                <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Message */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-lg text-tyken-tan/80 max-w-2xl mx-auto">
            Find out what it is like to get world-class service, and let us help you 
            concentrate on doing what you do best.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
