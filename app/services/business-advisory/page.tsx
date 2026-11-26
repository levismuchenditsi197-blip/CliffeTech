import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Lightbulb,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Target,
  PiggyBank,
  BarChart3,
  Users,
  Zap,
} from "lucide-react";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Business Advisory Services Kenya | Strategic Financial Consulting",
  description: "Professional business advisory services in Kenya. Business performance reviews, financial analysis, budgeting, cash flow management, growth planning, and cost reduction strategies for SMEs.",
  keywords: "Business Advisory Kenya, Financial Consulting Nairobi, Business Performance Review, Cash Flow Management Kenya, Growth Planning, SME Advisory Services",
  openGraph: {
    title: "Business Advisory Services Kenya | CliffeTech Accounting Solutions",
    description: "Strategic guidance for business growth and profitability.",
    url: "https://cliffetech.co.ke/services/business-advisory",
  },
  alternates: {
    canonical: "https://cliffetech.co.ke/services/business-advisory",
  },
};

const services = [
  {
    icon: BarChart3,
    title: "Performance Reviews",
    description: "Comprehensive reviews of your business performance and financial health.",
  },
  {
    icon: Target,
    title: "Financial Analysis",
    description: "In-depth analysis to identify strengths, weaknesses, and opportunities.",
  },
  {
    icon: PiggyBank,
    title: "Budgeting",
    description: "Strategic budget preparation and variance analysis.",
  },
  {
    icon: TrendingUp,
    title: "Cash Flow Management",
    description: "Optimize cash flow and working capital for sustainability.",
  },
  {
    icon: Zap,
    title: "Growth Planning",
    description: "Strategic planning for sustainable business growth.",
  },
  {
    icon: Users,
    title: "Cost Reduction",
    description: "Identify and implement cost-saving opportunities.",
  },
];

const benefits = [
  "Make informed strategic decisions",
  "Improve profitability and efficiency",
  "Prepare for sustainable growth",
  "Optimize resource allocation",
  "Better cash flow management",
  "Identify new opportunities",
  "Reduce operational costs",
  "Enhanced business planning",
];

const advisoryAreas = [
  "Startup Strategy",
  "Growth Planning",
  "Cash Flow Optimization",
  "Cost Control",
  "Pricing Strategy",
  "Financial Restructuring",
  "Business Valuation",
  "Exit Planning",
];

export default function BusinessAdvisoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Business Advisory Services Kenya',
            description: 'Strategic business advisory including performance reviews, financial analysis, budgeting, and growth planning.',
            provider: {
              '@type': 'LocalBusiness',
              name: 'CliffeTech Accounting Solutions',
            },
            areaServed: {
              '@type': 'Country',
              name: 'Kenya',
            },
            serviceType: ['Business Advisory', 'Financial Consulting', 'Strategic Planning'],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-6">
              Business Advisory
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Business Advisory Services in Kenya
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Strategic guidance to help businesses improve profitability, achieve sustainable growth, and make better financial decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link href="/contact">
                  Get Business Advice
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Link href="/contact">Schedule Review</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Areas */}
      <section className="py-12 bg-amber-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-blue-950">Areas of Advisory</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {advisoryAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center border border-slate-200">
                <span className="text-slate-700">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-900 mb-4">Our Advisory Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
              Strategic Business Guidance
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We partner with you to identify opportunities and overcome challenges.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-slate-50 border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center mb-6">
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
              <Badge className="bg-amber-100 text-amber-700 mb-4">Benefits</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
                Why Work with a Business Advisor?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                An experienced advisor brings an outside perspective, industry insights, and proven frameworks to accelerate your business success.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-8 text-white">
              <Lightbulb className="h-16 w-16 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Strategic Insights, Real Results</h3>
              <p className="text-amber-100 mb-6">
                Our advisory services are practical and actionable. We don&apos;t just give advice - we help you implement changes that drive measurable results.
              </p>
              <Button asChild className="bg-white text-amber-600 hover:bg-blue-50">
                <Link href="/contact">Book Strategy Session</Link>
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
                    name: 'What does a business advisor do?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'A business advisor provides strategic guidance on financial management, growth planning, operational efficiency, and overall business improvement to help achieve your goals.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How often should I meet with a business advisor?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'The frequency depends on your needs. Monthly or quarterly reviews are common for ongoing advisory. For specific projects, we can work intensively until completion.',
                    },
                  },
                ],
              }),
            }}
          />
          <div className="text-center mb-12">
            <Badge className="bg-amber-100 text-amber-700 mb-4">FAQ</Badge>
            <h2 className="text-3xl font-bold text-blue-950 mb-6">
              Business Advisory FAQs
            </h2>
          </div>
          <div className="space-y-6">
            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold text-blue-950 mb-2">What does a business advisor do?</h3>
              <p className="text-slate-600">A business advisor provides strategic guidance on financial management, growth planning, operational efficiency, and overall business improvement to help achieve your goals.</p>
            </div>
            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="font-semibold text-blue-950 mb-2">How often should I meet with a business advisor?</h3>
              <p className="text-slate-600">The frequency depends on your needs. Monthly or quarterly reviews are common for ongoing advisory. For specific projects, we can work intensively until completion.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
