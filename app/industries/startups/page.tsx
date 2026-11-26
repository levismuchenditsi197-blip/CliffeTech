import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, CheckCircle, ArrowRight, TrendingUp, FileText, Lightbulb } from "lucide-react";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Accounting Services for Startups in Kenya | Startup Financial Management",
  description: "Accounting services for startups in Kenya. Financial setup, bookkeeping, investor reporting, and growth-focused financial guidance for new businesses.",
  keywords: "Startup Accounting Kenya, New Business Accounting, Financial Setup, Investor Reports, Business Planning",
  openGraph: {
    title: "Accounting for Startups Kenya | CliffeTech",
    description: "Financial management services for startups.",
    url: "https://cliffetech.co.ke/industries/startups",
  },
  alternates: {
    canonical: "https://cliffetech.co.ke/industries/startups",
  },
};

const services = [
  {
    icon: FileText,
    title: "Financial Setup",
    description: "Set up your accounting systems right from day one.",
  },
  {
    icon: Lightbulb,
    title: "Business Planning",
    description: "Financial projections and business plan support.",
  },
  {
    icon: TrendingUp,
    title: "Investor Reports",
    description: "Professional reports for fundraising and investors.",
  },
];

const benefits = [
  "Cloud accounting setup",
  "Cash flow tracking",
  "Burn rate monitoring",
  "Financial projections",
  "Investor-ready reports",
  "Scalable processes",
];

export default function StartupsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-6">
              Startups
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Accounting Services for Startups in Kenya
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Get your financial foundation right from the start. Accounting, compliance, and financial guidance designed for growing startups.
            </p>
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-purple-100 text-purple-700 mb-4">Startup Expertise</Badge>
              <h2 className="text-3xl font-bold text-blue-950 mb-6">
                Financial Foundation for Growth
              </h2>
              <p className="text-slate-600 mb-6">
                Startups need financial systems that can grow with them. We set up scalable accounting processes, help you track key metrics, and provide investor-ready reporting.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-6">
              {services.map((service, index) => (
                <Card key={index} className="bg-slate-50 border-slate-200">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-950">{service.title}</h3>
                      <p className="text-slate-600 text-sm">{service.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
