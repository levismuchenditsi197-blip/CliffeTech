"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  FileText,
  Users,
  BarChart3,
  Lightbulb,
  Cloud,
  CheckCircle,
  TrendingUp,
  Shield,
  Clock,
  HeadphonesIcon,
  MapPin,
  Zap,
  Award,
  ArrowRight,
  Calculator,
  CreditCard,
  PieChart,
  Briefcase,
  Building,
  Heart,
  Stethoscope,
  Factory,
  Rocket,
  Scale,
  ChevronRight,
} from "lucide-react";
import { CTASection } from "@/components/cta-section";

const services = [
  {
    icon: BookOpen,
    title: "Bookkeeping Services",
    description: "Maintain accurate financial records and keep your business finances organized.",
    href: "/services/bookkeeping",
    color: "bg-blue-500",
  },
  {
    icon: FileText,
    title: "Tax Filing & Compliance",
    description: "Ensure timely tax filing and compliance with Kenyan tax regulations.",
    href: "/services/tax-filing",
    color: "bg-orange-500",
  },
  {
    icon: Users,
    title: "Payroll Management",
    description: "Accurate payroll processing, statutory deductions, and reporting.",
    href: "/services/payroll",
    color: "bg-green-500",
  },
  {
    icon: BarChart3,
    title: "Financial Reporting",
    description: "Clear financial reports for informed business decisions.",
    href: "/services/financial-reporting",
    color: "bg-purple-500",
  },
  {
    icon: Lightbulb,
    title: "Business Advisory",
    description: "Strategic guidance to improve profitability and growth.",
    href: "/services/business-advisory",
    color: "bg-amber-500",
  },
  {
    icon: Cloud,
    title: "Zoho Books Services",
    description: "Implementation, migration, training, and accounting automation.",
    href: "/services/zoho-books",
    color: "bg-cyan-500",
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Experienced Professionals",
    description: "Our team brings years of accounting and advisory expertise.",
  },
  {
    icon: Zap,
    title: "Technology-Driven Solutions",
    description: "Modern cloud accounting solutions for streamlined operations.",
  },
  {
    icon: MapPin,
    title: "Local Kenyan Expertise",
    description: "Deep understanding of Kenyan tax laws and business environment.",
  },
  {
    icon: HeadphonesIcon,
    title: "Personalized Support",
    description: "Dedicated account managers for personalized business support.",
  },
  {
    icon: Shield,
    title: "Compliance-Focused",
    description: "Stay compliant with KRA and all regulatory requirements.",
  },
  {
    icon: Cloud,
    title: "Cloud Accounting Specialists",
    description: "Certified Zoho Books partners and implementation experts.",
  },
  {
    icon: Clock,
    title: "Reliable & Timely Service",
    description: "Consistent delivery of accurate work on schedule.",
  },
  {
    icon: TrendingUp,
    title: "Affordable SME Packages",
    description: "Flexible pricing designed for growing businesses.",
  },
];

const stats = [
  { value: "200+", label: "Clients Served" },
  { value: "6+", label: "Years Experience" },
  { value: "50+", label: "Zoho Migrations" },
  { value: "99%", label: "Client Satisfaction" },
];

const industries = [
  { icon: Scale, name: "Law Firms", href: "/industries/law-firms" },
  { icon: Heart, name: "NGOs", href: "/industries/ngos" },
  { icon: Building, name: "Retail Businesses", href: "/industries/retail" },
  { icon: Briefcase, name: "Construction", href: "/industries/construction" },
  { icon: Stethoscope, name: "Healthcare", href: "/industries/healthcare" },
  { icon: Factory, name: "Manufacturing", href: "/industries/manufacturing" },
  { icon: Rocket, name: "Startups", href: "/industries/startups" },
  { icon: PieChart, name: "Professional Services", href: "/industries/professional-services" },
];

const faqs = [
  {
    question: "Why should I outsource bookkeeping for my business?",
    answer: "Outsourcing bookkeeping saves time, reduces errors, ensures compliance, provides access to professional expertise, and is often more cost-effective than hiring in-house staff.",
  },
  {
    question: "What accounting services does my business need?",
    answer: "Most businesses need bookkeeping, tax filing, payroll management, and financial reporting. The specific needs depend on your business size, industry, and growth stage.",
  },
  {
    question: "How often should financial reports be prepared?",
    answer: "Monthly management reports are recommended for most businesses. Annual reports are required for tax purposes. Quarterly reviews are beneficial for growing businesses.",
  },
  {
    question: "What is Zoho Books and why should I consider it?",
    answer: "Zoho Books is a cloud-based accounting software that automates invoicing, expense tracking, inventory management, and reporting. It's affordable and ideal for Kenyan SMEs.",
  },
];

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 to-blue-900/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-6 text-sm px-4 py-1">
                Trusted by 200+ Kenyan Businesses
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Accounting, Tax, Payroll & Zoho Books Solutions for{" "}
                <span className="text-orange-400">Growing Businesses</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Helping Kenyan businesses stay compliant, improve financial visibility, automate accounting processes, and make better business decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6">
                  <Link href="/contact">
                    Book a Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-6">
                  <Link href="/contact">Request Business Assessment</Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-blue-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>No Hidden Fees</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-6 text-center">
                    <Calculator className="h-10 w-10 text-orange-400 mx-auto mb-3" />
                    <p className="text-blue-100 text-sm">Tax Filing</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 text-center">
                    <CreditCard className="h-10 w-10 text-orange-400 mx-auto mb-3" />
                    <p className="text-blue-100 text-sm">Payroll</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 text-center">
                    <BarChart3 className="h-10 w-10 text-orange-400 mx-auto mb-3" />
                    <p className="text-blue-100 text-sm">Reporting</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 text-center">
                    <Cloud className="h-10 w-10 text-orange-400 mx-auto mb-3" />
                    <p className="text-blue-100 text-sm">Cloud Accounting</p>
                  </div>
                </div>
                <div className="mt-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-4 text-center">
                  <p className="font-semibold">Zoho Books Certified Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-blue-900">{stat.value}</p>
                <p className="text-slate-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-900 mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
              Comprehensive Accounting Solutions for Your Business
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From bookkeeping to cloud accounting implementation, we provide end-to-end financial services tailored to your needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={service.href} className="group">
                <Card className="h-full bg-white border-slate-200 hover:shadow-xl hover:border-orange-300 transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-950 mb-3 group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-4">{service.description}</p>
                    <div className="flex items-center text-orange-500 font-medium">
                      <span>Learn More</span>
                      <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-orange-100 text-orange-700 mb-4">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
                Your Trusted Partner for Accounting Excellence
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We combine traditional accounting expertise with modern technology to help Kenyan businesses streamline operations and improve financial decision-making.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {whyChooseUs.slice(0, 6).map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-blue-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-950">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">What Sets Us Apart</h3>
              <ul className="space-y-4">
                {whyChooseUs.slice(6).map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium">{item.title}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8 bg-orange-500 hover:bg-orange-600 text-white">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-green-100 text-green-700 mb-4">Industries We Serve</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
              Tailored Solutions for Every Industry
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We understand that different industries have unique accounting needs. Our specialized services cater to your specific requirements.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Link key={index} href={industry.href} className="group">
                <div className="bg-white rounded-xl p-6 text-center border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-100 transition-colors">
                    <industry.icon className="h-7 w-7 text-blue-900 group-hover:text-orange-600 transition-colors" />
                  </div>
                  <h3 className="font-semibold text-blue-950">{industry.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-purple-100 text-purple-700 mb-4">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span className="font-semibold text-blue-950">{faq.question}</span>
                  <ChevronRight className={`h-5 w-5 text-slate-500 transition-transform ${activeFaq === index ? 'rotate-90' : ''}`} />
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-slate-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
              <Link href="/faq">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
