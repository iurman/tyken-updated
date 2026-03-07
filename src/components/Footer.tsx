import Link from "next/link";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-tyken-dark/80 border-t border-tyken-medium/30 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-tyken-cream mb-4">
              The Tyken Group
            </h3>
            <p className="text-tyken-tan/80 text-sm leading-relaxed">
              A full-service staffing and recruiting consultancy serving the Puget Sound 
              region since 2006. We connect exceptional talent with outstanding opportunities.
            </p>
            <p className="text-tyken-tan/60 text-sm mt-4">
              Partner company:{" "}
              <a 
                href="https://west500partners.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-tyken-light-golden hover:text-tyken-golden"
              >
                West 500 Partners
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-tyken-cream mb-4">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-tyken-tan/80 hover:text-tyken-cream transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm text-tyken-tan/80 hover:text-tyken-cream transition-colors">
                About Us
              </Link>
              <Link href="/leadership" className="text-sm text-tyken-tan/80 hover:text-tyken-cream transition-colors">
                Leadership
              </Link>
              <Link href="/opportunities" className="text-sm text-tyken-tan/80 hover:text-tyken-cream transition-colors">
                Opportunities
              </Link>
              <Link href="/contact" className="text-sm text-tyken-tan/80 hover:text-tyken-cream transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-tyken-cream mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              <a 
                href="mailto:seth@tykengroup.com" 
                className="flex items-center gap-2 text-sm text-tyken-tan/80 hover:text-tyken-cream transition-colors"
              >
                <Mail size={16} className="text-tyken-light-golden" />
                seth@tykengroup.com
              </a>
              <a 
                href="tel:+12068513894" 
                className="flex items-center gap-2 text-sm text-tyken-tan/80 hover:text-tyken-cream transition-colors"
              >
                <Phone size={16} className="text-tyken-light-golden" />
                +1 206.851.3894
              </a>
              <div className="flex items-center gap-2 text-sm text-tyken-tan/80">
                <MapPin size={16} className="text-tyken-light-golden" />
                Woodinville, WA
              </div>
              <a 
                href="https://www.linkedin.com/company/the-tyken-group/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-tyken-tan/80 hover:text-tyken-cream transition-colors"
              >
                <Linkedin size={16} className="text-tyken-light-golden" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-tyken-medium/20 text-center">
          <p className="text-tyken-tan/60 text-sm">
            © {new Date().getFullYear()} The Tyken Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
