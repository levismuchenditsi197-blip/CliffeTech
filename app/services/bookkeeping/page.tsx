import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  CheckCircle,
  ArrowRight,
  FileSpreadsheet,
  Receipt,
  Building2,
  PiggyBank,
  RefreshCcw,
  BarChart3,
} from "lucide-react";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Bookkeeping Services Kenya | Professional Bookkeeping for SMEs & Businesses",
  description: "Professional bookkeeping services in Kenya. We provide accurate financial record keeping, accounts receivable/payable, bank reconciliations, and monthly bookkeeping for SMEs, NGOs, and growing businesses.",
  keywords: "Bookkeeping Services Kenya, Bookkeeping Nairobi, SME Bookkeeping, Accounts Receivable Kenya, Bank Reconciliation Kenya, Financial Record Keeping",
  openGraph: {
    title: "Bookkeeping Services Kenya | CliffeTech Accounting Solutions",
    description: "Professional bookkeeping services in Kenya. Accurate financial records for your business.",
    url: "https://cliffetech.co.ke/services/bookkeeping",
  },
  alternates: {
    canonical: "https://cliffetech.co.ke/services/bookkeeping",
  },
};

const services = [
  {
    icon: FileSpreadsheet,
    title: "Monthly Bookkeeping",
    description: "Regular maintenance of your financial records to ensure accurate and up-to-date books.",
  },
  {
    icon: Receipt,
    title: "Accounts Receivable",
    description: "Track customer invoices, payments received, and outstanding balances.",
  },
  {
    icon: Building2,
    title: "Accounts Payable",
    description: "Manage supplier bills, payment schedules, and vendor relationships.",
  },
  {
    icon: RefreshCcw,
    title: "Bank Reconciliations",
    description: "Monthly reconciliation of bank statements with your accounting records.",
  },
  {
    icon: PiggyBank,
    title: "Financial Record Maintenance",
    description: "Organized and accurate maintenance of all financial documents.",
  },
  {
    icon: BarChart3,
    title: "Monthly Reports",
    description: "Regular financial reports including trial balance and ledger summaries.",
  },
];

const benefits = [
  "Save time and focus on growing your business",
  "Accurate financial records for better decision making",
  "Compliance ready records for tax filing",
  "Reduced errors and financial discrepancies",
  "Professional financial documentation",
  "Cost-effective alternative to in-house staff",
];

const industries = [
  "Small and Medium Enterprises",
  "Startups and Growing Businesses",
  "NGOs and Non-Profit Organizations",
  "Law Firms and Professional Services",
  "Retail and Wholesale Businesses",
  "Construction Companies",
  "Healthcare Providers",
  "Manufacturing Companies",
];

export default function BookkeepingServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Bookkeeping Services Kenya',
            description: 'Professional bookkeeping services including monthly bookkeeping, accounts receivable, accounts payable, and bank reconciliations.',
            provider: {
              '@type': 'LocalBusiness',
              name: 'CliffeTech Accounting Solutions',
            },
            areaServed: {
              '@type': 'Country',
              name: 'Kenya',
            },
            serviceType: ['Bookkeeping', 'Financial Record Keeping', 'Bank Reconciliation'],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-6">
              Accounting Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bookkeeping Services in Kenya
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Accurate, reliable, and affordable bookkeeping services for SMEs, NGOs, and growing businesses across Kenya. Keep your financial records organized and compliance-ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-900 mb-4">Our Bookkeeping Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
              Comprehensive Bookkeeping Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We handle all aspects of your bookkeeping so you can focus on running your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-slate-50 border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-blue-900 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-950 mb-3">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-green-100 text-green-700 mb-4">Benefits</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
                Why Outsource Your Bookkeeping?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Outsourcing your bookkeeping to CliffeTech provides you with professional expertise, cost savings, and peace of mind knowing your financial records are in capable hands.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
              <BookOpen className="h-16 w-16 text-orange-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Professional Bookkeeping You Can Trust</h3>
              <p className="text-blue-100 mb-6">
                Our experienced bookkeepers ensure your financial records are accurate, organized, and ready for tax season or audits anytime.
              </p>
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link href="/contact">Book Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-orange-100 text-orange-700 mb-4">Industries We Serve</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
              Bookkeeping Services for Every Industry
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-4 text-center">
                <span className="text-slate-700">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 mb-4">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
              How Our Bookkeeping Service Works
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Initial Assessment", desc: "We review your current bookkeeping setup and requirements." },
              { step: "2", title: "Setup & Integration", desc: "We set up your chart of accounts and integrate with your systems." },
              { step: "3", title: "Ongoing Bookkeeping", desc: "We maintain your records monthly or as per your schedule." },
              { step: "4", title: "Reporting & Insights", desc: "You receive regular reports and financial insights." },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-blue-950 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Why should I outsource bookkeeping?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Outsourcing bookkeeping saves time, reduces errors, ensures compliance, provides access to professional expertise, and is often more cost-effective than hiring in-house staff.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How often do you update my books?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'We offer daily, weekly, or monthly bookkeeping services depending on your business needs and transaction volume.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Do you provide bookkeeping for NGOs?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, we provide specialized bookkeeping services for NGOs and non-profit organizations, including donor reporting and fund accounting.',
                    },
                  },
                ],
              }),
            }}
          />
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-900 mb-4">FAQ</Badge>
            <h2 className="text-3xl font-bold text-blue-950 mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold text-blue-950 mb-2">Why should I outsource bookkeeping?</h3>
              <p className="text-slate-600">Outsourcing bookkeeping saves time, reduces errors, ensures compliance, provides access to professional expertise, and is often more cost-effective than hiring in-house staff.</p>
            </div>
            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold text-blue-950 mb-2">How often do you update my books?</h3>
              <p className="text-slate-600">We offer daily, weekly, or monthly bookkeeping services depending on your business needs and transaction volume.</p>
            </div>
            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold text-blue-950 mb-2">Do you provide bookkeeping for NGOs?</h3>
              <p className="text-slate-600">Yes, we provide specialized bookkeeping services for NGOs and non-profit organizations, including donor reporting and fund accounting.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
