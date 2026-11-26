import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  CheckCircle,
  ArrowRight,
  Calculator,
  Building,
  FileCheck,
  Search,
  Shield,
  Calendar,
} from "lucide-react";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Tax Filing & Compliance Services Kenya | KRA Tax Consultants",
  description: "Professional tax filing and compliance services in Kenya. VAT returns, corporate tax, PAYE, tax planning, and KRA compliance support. Stay compliant with Kenyan tax regulations.",
  keywords: "Tax Filing Kenya, Tax Consultants Kenya, KRA Compliance, VAT Returns Kenya, Corporate Tax Kenya, PAYE Returns Kenya, Tax Planning Kenya",
  openGraph: {
    title: "Tax Filing & Compliance Services Kenya | CliffeTech Accounting Solutions",
    description: "Professional tax filing and compliance services. Stay compliant with KRA regulations.",
    url: "https://cliffetech.co.ke/services/tax-filing",
  },
  alternates: {
    canonical: "https://cliffetech.co.ke/services/tax-filing",
  },
};

const services = [
  {
    icon: Calculator,
    title: "VAT Returns",
    description: "Accurate preparation and timely filing of VAT returns to KRA.",
  },
  {
    icon: Building,
    title: "Corporate Tax",
    description: "Corporate income tax computation and filing for your business.",
  },
  {
    icon: FileText,
    title: "PAYE Returns",
    description: "Monthly PAYE declarations and annual returns for employees.",
  },
  {
    icon: Calendar,
    title: "Tax Planning",
    description: "Strategic tax planning to optimize your tax position legally.",
  },
  {
    icon: Search,
    title: "Compliance Reviews",
    description: "Regular compliance checks to ensure you meet all tax obligations.",
  },
  {
    icon: Shield,
    title: "KRA Support",
    description: "Direct support with KRA queries, audits, and compliance issues.",
  },
];

const benefits = [
  "Avoid late filing penalties and interest",
  "Ensure full compliance with Kenyan tax laws",
  "Professional representation with KRA",
  "Timely and accurate tax submissions",
  "Tax optimization strategies",
  "Peace of mind knowing experts handle your taxes",
  "Detailed documentation and records",
  "Year-round tax support",
];

const taxTypes = [
  { name: "VAT", deadline: "20th of following month" },
  { name: "PAYE", deadline: "9th of following month" },
  { name: "Corporate Tax", deadline: "Last day of 4th month after year end" },
  { name: "Withholding Tax", deadline: "20th of following month" },
  { name: "Turnover Tax", deadline: "Last day of following month" },
];

export default function TaxFilingServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Tax Filing and Compliance Services Kenya',
            description: 'Professional tax filing, VAT returns, corporate tax, PAYE, and KRA compliance services for Kenyan businesses.',
            provider: {
              '@type': 'LocalBusiness',
              name: 'CliffeTech Accounting Solutions',
            },
            areaServed: {
              '@type': 'Country',
              name: 'Kenya',
            },
            serviceType: ['Tax Filing', 'Tax Compliance', 'VAT Returns', 'PAYE Returns'],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-6">
              Tax Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tax Filing & Compliance Services in Kenya
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Stay compliant with KRA regulations. We handle VAT, corporate tax, PAYE, and all your tax obligations accurately and on time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link href="/contact">
                  Get Tax Help Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Link href="/contact">Compliance Check</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Deadline Section */}
      <section className="py-12 bg-orange-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-blue-950">Key Tax Deadlines in Kenya</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {taxTypes.map((tax, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center border border-slate-200">
                <p className="font-bold text-blue-900">{tax.name}</p>
                <p className="text-sm text-slate-600">{tax.deadline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-900 mb-4">Our Tax Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
              Comprehensive Tax Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We handle all aspects of your tax compliance, from filing to KRA representation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-slate-50 border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
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
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
              <Shield className="h-16 w-16 text-orange-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Stay Compliant, Avoid Penalties</h3>
              <p className="text-blue-100 mb-6">
                Late tax filing can result in significant penalties and interest. Our expert team ensures all your returns are filed accurately and on time.
              </p>
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link href="/contact">Book Free Consultation</Link>
              </Button>
            </div>
            <div>
              <Badge className="bg-green-100 text-green-700 mb-4">Benefits</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
                Why Choose Us for Tax Services?
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
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
                    name: 'When is VAT return filing due in Kenya?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'VAT returns are due by the 20th of the following month in Kenya.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What happens if I miss a tax deadline?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Missing tax deadlines results in penalties and interest charges from KRA. The penalty can be significant depending on the tax type and duration of default.',
                    },
                  },
                ],
              }),
            }}
          />
          <div className="text-center mb-12">
            <Badge className="bg-orange-100 text-orange-700 mb-4">FAQ</Badge>
            <h2 className="text-3xl font-bold text-blue-950 mb-6">
              Tax Filing FAQs
            </h2>
          </div>
          <div className="space-y-6">
            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold text-blue-950 mb-2">When is VAT return filing due in Kenya?</h3>
              <p className="text-slate-600">VAT returns are due by the 20th of the following month in Kenya.</p>
            </div>
            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold text-blue-950 mb-2">What happens if I miss a tax deadline?</h3>
              <p className="text-slate-600">Missing tax deadlines results in penalties and interest charges from KRA. The penalty can be significant depending on the tax type and duration of default.</p>
            </div>
            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold text-blue-950 mb-2">Do you handle KRA audits?</h3>
              <p className="text-slate-600">Yes, we provide professional representation during KRA audits and can help resolve any compliance issues or disputes.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
