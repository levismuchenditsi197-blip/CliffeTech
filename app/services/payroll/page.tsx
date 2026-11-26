import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  CheckCircle,
  ArrowRight,
  Calculator,
  UserCheck,
  FileSpreadsheet,
  Clock,
  Shield,
  ClipboardList,
} from "lucide-react";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Payroll Management Services Kenya | Professional Payroll Processing",
  description: "Professional payroll management services in Kenya. PAYE calculations, NSSF, SHIF deductions, employee payroll reports, and payroll compliance for businesses.",
  keywords: "Payroll Services Kenya, Payroll Management Nairobi, PAYE Calculations Kenya, NSSF Deductions, SHIF Kenya, Payroll Outsourcing Kenya",
  openGraph: {
    title: "Payroll Management Services Kenya | CliffeTech Accounting Solutions",
    description: "Professional payroll services including PAYE, NSSF, SHIF calculations and compliance.",
    url: "https://cliffetech.co.ke/services/payroll",
  },
  alternates: {
    canonical: "https://cliffetech.co.ke/services/payroll",
  },
};

const services = [
  {
    icon: Calculator,
    title: "Payroll Processing",
    description: "Accurate calculation and processing of employee salaries, wages, and allowances.",
  },
  {
    icon: UserCheck,
    title: "PAYE Calculations",
    description: "Proper PAYE computation based on current Kenya Revenue Authority rates.",
  },
  {
    icon: Shield,
    title: "NSSF Deductions",
    description: "Accurate NSSF contributions calculation and reporting.",
  },
  {
    icon: ClipboardList,
    title: "SHIF Deductions",
    description: "Social Health Insurance Fund deductions as per regulations.",
  },
  {
    icon: FileSpreadsheet,
    title: "Employee Reports",
    description: "Detailed payroll reports, payslips, and employee summaries.",
  },
  {
    icon: Clock,
    title: "Payroll Compliance",
    description: "Ensure all statutory deductions are filed timely with relevant authorities.",
  },
];

const benefits = [
  "Accurate and timely salary processing",
  "Compliance with all statutory requirements",
  "Confidential handling of employee data",
  "Detailed payslips and reports",
  "Year-end P9 and annual returns",
  "Reduced administrative burden",
  "Expert handling of PAYE, NSSF, SHIF",
  "Support during audits",
];

const statutoryRates = [
  { name: "PAYE", rate: "Progressive rates up to 35%" },
  { name: "NSSF", rate: "6% employee + 6% employer" },
  { name: "SHIF", rate: "2.75% of gross salary" },
  { name: "Housing Levy", rate: "1.5% employee + 1.5% employer" },
];

export default function PayrollManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Payroll Management Services Kenya',
            description: 'Professional payroll processing including PAYE, NSSF, SHIF calculations and compliance.',
            provider: {
              '@type': 'LocalBusiness',
              name: 'CliffeTech Accounting Solutions',
            },
            areaServed: {
              '@type': 'Country',
              name: 'Kenya',
            },
            serviceType: ['Payroll Processing', 'PAYE Calculations', 'Statutory Deductions'],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-6">
              Payroll Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Payroll Management Services in Kenya
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Accurate payroll processing for businesses across Kenya. We handle PAYE, NSSF, SHIF, and all statutory deductions with precision and confidentiality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link href="/contact">
                  Get Payroll Services
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

      {/* Statutory Rates Section */}
      <section className="py-12 bg-green-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-blue-950">Current Statutory Deduction Rates</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {statutoryRates.map((rate, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center border border-slate-200">
                <p className="font-bold text-blue-900">{rate.name}</p>
                <p className="text-sm text-slate-600">{rate.rate}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-900 mb-4">Our Payroll Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
              Comprehensive Payroll Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From salary calculations to statutory compliance, we handle all your payroll needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-slate-50 border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mb-6">
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
                Why Outsource Your Payroll?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Outsourcing payroll to experts saves time, ensures compliance, and gives you peace of mind knowing your employees are paid correctly.
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
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white">
              <Users className="h-16 w-16 text-orange-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Payroll Done Right</h3>
              <p className="text-green-100 mb-6">
                Employee satisfaction starts with accurate, on-time payroll. Let us handle the complexities while you focus on your business.
              </p>
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link href="/contact">Get Started Today</Link>
              </Button>
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
                    name: 'What statutory deductions do you handle?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'We handle PAYE, NSSF, SHIF, Housing Levy, and all other statutory deductions required by Kenyan law.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Does payroll include annual P9 forms?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, we prepare annual P9 forms for all employees and assist with year-end tax returns.',
                    },
                  },
                ],
              }),
            }}
          />
          <div className="text-center mb-12">
            <Badge className="bg-green-100 text-green-700 mb-4">FAQ</Badge>
            <h2 className="text-3xl font-bold text-blue-950 mb-6">
              Payroll FAQs
            </h2>
          </div>
          <div className="space-y-6">
            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold text-blue-950 mb-2">What statutory deductions do you handle?</h3>
              <p className="text-slate-600">We handle PAYE, NSSF, SHIF, Housing Levy, and all other statutory deductions required by Kenyan law.</p>
            </div>
            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold text-blue-950 mb-2">Does payroll include annual P9 forms?</h3>
              <p className="text-slate-600">Yes, we prepare annual P9 forms for all employees and assist with year-end tax returns.</p>
            </div>
            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold text-blue-950 mb-2">How do you ensure data confidentiality?</h3>
              <p className="text-slate-600">We maintain strict confidentiality protocols and use secure systems to protect all employee payroll data.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
