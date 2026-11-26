"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
  { name: "Startups", href: "/industries/startups" },
  { name: "Professional Services", href: "/industries/professional-services" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="bg-blue-950 text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href={`tel:${CONTACT_INFO.phone.link}`} className="flex items-center gap-2 hover:text-orange-400 transition-colors">
              <Phone className="h-4 w-4" />
              <span>{CONTACT_INFO.phone.display}</span>
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:text-orange-400 transition-colors">
              <Mail className="h-4 w-4" />
              <span>{CONTACT_INFO.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span>{CONTACT_INFO.address.short}</span>
          </div>
        </div>
      </div>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CT</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-blue-950 leading-tight">CliffeTech</span>
                <span className="text-xs text-slate-500 leading-tight">Accounting Solutions</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              <Link href="/" className="text-slate-700 hover:text-blue-900 font-medium transition-colors">
                Home
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-slate-700 hover:text-blue-900 font-medium transition-colors outline-none">
                  Services <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white border border-slate-200 shadow-lg">
                  {services.map((service) => (
                    <DropdownMenuItem key={service.href} asChild>
                      <Link href={service.href} className="cursor-pointer">
                        {service.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-slate-700 hover:text-blue-900 font-medium transition-colors outline-none">
                  Industries <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white border border-slate-200 shadow-lg">
                  {industries.map((industry) => (
                    <DropdownMenuItem key={industry.href} asChild>
                      <Link href={industry.href} className="cursor-pointer">
                        {industry.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/about" className="text-slate-700 hover:text-blue-900 font-medium transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-slate-700 hover:text-blue-900 font-medium transition-colors">
                Contact
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <Button asChild variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
                <Link href="/contact">Book Consultation</Link>
              </Button>
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                <a href={`https://wa.me/${CONTACT_INFO.phone.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>

            <button
              className="lg:hidden p-2 text-slate-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-slate-200">
              <div className="flex flex-col gap-4">
                <Link href="/" className="text-slate-700 hover:text-blue-900 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </Link>
                <div className="flex flex-col gap-2 pl-4">
                  <span className="text-sm font-semibold text-slate-500">Services</span>
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="text-slate-600 hover:text-blue-900 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-2 pl-4">
                  <span className="text-sm font-semibold text-slate-500">Industries</span>
                  {industries.map((industry) => (
                    <Link
                      key={industry.href}
                      href={industry.href}
                      className="text-slate-600 hover:text-blue-900 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {industry.name}
                    </Link>
                  ))}
                </div>
                <Link href="/about" className="text-slate-700 hover:text-blue-900 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </Link>
                <Link href="/contact" className="text-slate-700 hover:text-blue-900 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </Link>
                <div className="flex flex-col gap-2 pt-4 border-t border-slate-200">
                  <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                    <Link href="/contact">Book Consultation</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
