import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, CheckCircle, ArrowRight, BarChart3, Package, Receipt } from "lucide-react";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Accounting for Retail Businesses in Kenya | Retail Industry Accounting",
  description: "Accounting services for retail businesses in Kenya. Inventory accounting, POS integration, stock management, and retail financial reporting.",
  keywords: "Retail Accounting Kenya, Inventory Management, POS Integration, Stock Accounting, Retail Financial Reports",
  openGraph: {
    title: "Accounting for Retail Kenya | CliffeTech",
    description: "Specialized accounting for retail businesses.",
    url: "https://cliffetech.co.ke/industries/retail",
  },
  alternates: {
    canonical: "https://cliffetech.co.ke/industries/retail",
  },
};

const services = [
  {
    icon: Package,
    title: "Inventory Accounting",
    description: "Track stock levels, costs, and margins accurately.",
  },
  {
    icon: Receipt,
    title: "POS Integration",
    description: "Connect point of sale systems with accounting.",
  },
  {
    icon: BarChart3,
    title: "Margin Analysis",
    description: "Track product and category profitability.",
  },
];

const benefits = [
  "Real-time inventory tracking",
  "POS system integration",
  "Stock valuation (FIFO/LIFO)",
  "Gross margin analysis",
  "Multi-location support",
  "Shrinkage tracking",
];

export default function RetailPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-6">
              Retail Industry
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Accounting Services for Retail Businesses in Kenya
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Specialized accounting solutions including inventory management, POS integration, and retail financial reporting.
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
              <Badge className="bg-amber-100 text-amber-700 mb-4">Retail Expertise</Badge>
              <h2 className="text-3xl font-bold text-blue-950 mb-6">
                Accounting for Retail Operations
              </h2>
              <p className="text-slate-600 mb-6">
                Retail businesses need accurate inventory tracking, margin analysis, and efficient bookkeeping. We help you understand your product performance and maintain healthy margins.
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
                    <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
