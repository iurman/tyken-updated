import Link from "next/link";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/leadership", label: "Leadership" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-tyken-dark/80 border-t border-tyken-medium/30 mt-auto">
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-tyken-cream mb-4">
              {siteConfig.name}
            </h3>
            <p className="text-tyken-tan/80 text-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <p className="text-tyken-tan/60 text-sm mt-4">
              Partner company:{" "}
              <a 
                href={siteConfig.partner.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-tyken-light-golden hover:text-tyken-golden"
              >
                {siteConfig.partner.name}
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-tyken-cream mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="text-sm text-tyken-tan/80 hover:text-tyken-cream transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-tyken-cream mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a 
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 text-sm text-tyken-tan/80 hover:text-tyken-cream transition-colors"
              >
                <Mail size={16} className="text-tyken-light-golden" />
                {siteConfig.contact.email}
              </a>
              <a 
                href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
                className="flex items-center gap-2 text-sm text-tyken-tan/80 hover:text-tyken-cream transition-colors"
              >
                <Phone size={16} className="text-tyken-light-golden" />
                {siteConfig.contact.phone}
              </a>
              <div className="flex items-center gap-2 text-sm text-tyken-tan/80">
                <MapPin size={16} className="text-tyken-light-golden" />
                {siteConfig.contact.location}
              </div>
              <a 
                href={siteConfig.social.linkedin}
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
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
