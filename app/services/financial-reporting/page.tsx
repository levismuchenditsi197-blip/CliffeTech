import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  FileText,
  PieChart,
  Activity,
  Calendar,
  LineChart,
} from "lucide-react";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Financial Reporting Services Kenya | Business Financial Reports",
  description: "Professional financial reporting services in Kenya. Profit and loss statements, balance sheets, cash flow reports, KPI dashboards, and management reports for informed business decisions.",
  keywords: "Financial Reporting Kenya, Financial Statements Nairobi, Profit and Loss Statement, Balance Sheet Kenya, Cash Flow Reports, Management Reports Kenya",
  openGraph: {
    title: "Financial Reporting Services Kenya | CliffeTech Accounting Solutions",
    description: "Professional financial reports for better business decisions.",
    url: "https://cliffetech.co.ke/services/financial-reporting",
  },
  alternates: {
    canonical: "https://cliffetech.co.ke/services/financial-reporting",
  },
};

const services = [
  {
    icon: FileText,
    title: "Profit & Loss Statements",
    description: "Clear income statements showing revenue, expenses, and profitability.",
  },
  {
    icon: BarChart3,
    title: "Balance Sheets",
    description: "Comprehensive statements of assets, liabilities, and equity.",
  },
  {
    icon: Activity,
    title: "Cash Flow Reports",
    description: "Detailed analysis of cash inflows and outflows.",
  },
  {
    icon: PieChart,
    title: "KPI Dashboards",
    description: "Key performance indicators tailored to your business.",
  },
  {
    icon: Calendar,
    title: "Management Reports",
    description: "Monthly management reports for business insights.",
  },
  {
    icon: TrendingUp,
    title: "Comparative Analysis",
    description: "Period-over-period comparisons and trend analysis.",
  },
];

const benefits = [
  "Understand your business performance clearly",
  "Make data-driven financial decisions",
  "Identify trends and opportunities",
  "Prepare for investor or bank presentations",
  "Track progress against budgets",
  "Early warning for financial issues",
  "Professional presentation quality",
  "Compliance with reporting standards",
];

const reportTypes = [
  {
    frequency: "Monthly",
    reports: ["Management Reports", "Cash Flow Summary", "Budget Variance"],
  },
  {
    frequency: "Quarterly",
    reports: ["Detailed P&L", "Balance Sheet", "KPI Analysis"],
  },
  {
    frequency: "Annual",
    reports: ["Full Financial Statements", "Auditor-Ready Reports", "Tax Packages"],
  },
];

export default function FinancialReportingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Financial Reporting Services Kenya',
            description: 'Professional financial reporting including P&L, balance sheets, cash flow reports, and management accounts.',
            provider: {
              '@type': 'LocalBusiness',
              name: 'CliffeTech Accounting Solutions',
            },
            areaServed: {
              '@type': 'Country',
              name: 'Kenya',
            },
            serviceType: ['Financial Reporting', 'Management Accounts', 'Financial Analysis'],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-6">
              Financial Reports
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Financial Reporting Services in Kenya
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Clear, actionable financial reports that help business owners understand performance and make informed decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link href="/contact">
                  Get Financial Reports
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Link href="/contact">View Sample Reports</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Report Types Section */}
      <section className="py-12 bg-purple-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-blue-950">Reports by Frequency</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reportTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-slate-200">
                <h3 className="font-bold text-blue-900 text-lg mb-4">{type.frequency}</h3>
                <ul className="space-y-2">
                  {type.reports.map((report, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {report}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-900 mb-4">Our Reporting Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
              Comprehensive Financial Reports
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From basic statements to advanced analytics, we provide reports that matter.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-slate-50 border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
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
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 text-white">
              <LineChart className="h-16 w-16 text-orange-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">See Your Business Clearly</h3>
              <p className="text-purple-100 mb-6">
                Financial reports should tell a story. Our reports transform raw numbers into actionable insights that drive growth.
              </p>
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link href="/contact">Request Sample Reports</Link>
              </Button>
            </div>
            <div>
              <Badge className="bg-purple-100 text-purple-700 mb-4">Benefits</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
                Why Professional Financial Reports?
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-purple-500 flex-shrink-0 mt-0.5" />
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
                    name: 'How often should I receive financial reports?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'For most businesses, monthly management reports are recommended. This allows for timely decision-making and course correction.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Are the reports suitable for bank loan applications?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, our financial statements are prepared in accordance with accounting standards and are suitable for bank loan applications, investor presentations, and audits.',
                    },
                  },
                ],
              }),
            }}
          />
          <div className="text-center mb-12">
            <Badge className="bg-purple-100 text-purple-700 mb-4">FAQ</Badge>
            <h2 className="text-3xl font-bold text-blue-950 mb-6">
              Financial Reporting FAQs
            </h2>
          </div>
          <div className="space-y-6">
            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold text-blue-950 mb-2">How often should I receive financial reports?</h3>
              <p className="text-slate-600">For most businesses, monthly management reports are recommended. This allows for timely decision-making and course correction.</p>
            </div>
            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold text-blue-950 mb-2">Are the reports suitable for bank loan applications?</h3>
              <p className="text-slate-600">Yes, our financial statements are prepared in accordance with accounting standards and are suitable for bank loan applications, investor presentations, and audits.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
