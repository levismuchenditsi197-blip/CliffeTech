import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

const services = [
  { name: "Bookkeeping Services", href: "/services/bookkeeping" },
  { name: "Tax Filing & Compliance", href: "/services/tax-filing" },
  { name: "Payroll Management", href: "/services/payroll" },
  { name: "Financial Reporting", href: "/services/financial-reporting" },
  { name: "Business Advisory", href: "/services/business-advisory" },
  { name: "Zoho Books Services", href: "/services/zoho-books" },
];

const industries = [
  { name: "Law Firms", href: "/industries/law-firms" },
  { name: "NGOs", href: "/industries/ngos" },
  { name: "Retail Businesses", href: "/industries/retail" },
  { name: "Construction Companies", href: "/industries/construction" },
  { name: "Healthcare Providers", href: "/industries/healthcare" },
  { name: "Manufacturing", href: "/industries/manufacturing" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CT</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight">CliffeTech</span>
                <span className="text-xs text-slate-400 leading-tight">Accounting Solutions</span>
              </div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Trusted accounting and business advisory partner for startups, SMEs, NGOs, and growing businesses across Kenya.
            </p>
            <div className="flex gap-4">
              <a href={CONTACT_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={CONTACT_INFO.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href={CONTACT_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={CONTACT_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-slate-300 hover:text-orange-400 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-300 hover:text-orange-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mt-8 mb-6">Industries</h3>
            <ul className="space-y-3">
              {industries.map((industry) => (
                <li key={industry.href}>
                  <Link href={industry.href} className="text-slate-300 hover:text-orange-400 transition-colors">
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300">{CONTACT_INFO.address.display}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone.link}`} className="text-slate-300 hover:text-orange-400 transition-colors">
                  {CONTACT_INFO.phone.display}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-300 hover:text-orange-400 transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300">Mon - Fri: {CONTACT_INFO.hours.weekdays}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} CliffeTech Accounting Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-slate-400 hover:text-orange-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-orange-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
