import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Factory, CheckCircle, ArrowRight, Package, BarChart3, FileText } from "lucide-react";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Accounting for Manufacturing Companies in Kenya | Manufacturing Industry Accounting",
  description: "Specialized accounting services for manufacturing companies in Kenya. Cost accounting, inventory management, production costing, and manufacturing financial reporting.",
  keywords: "Manufacturing Accounting Kenya, Cost Accounting, Production Costing, Inventory Management Manufacturing, Factory Accounting",
  openGraph: {
    title: "Accounting for Manufacturing Kenya | CliffeTech",
    description: "Specialized accounting for manufacturing industry.",
    url: "https://cliffetech.co.ke/industries/manufacturing",
  },
  alternates: {
    canonical: "https://cliffetech.co.ke/industries/manufacturing",
  },
};

const services = [
  {
    icon: Package,
    title: "Cost Accounting",
    description: "Track production costs and unit economics.",
  },
  {
    icon: BarChart3,
    title: "Inventory Management",
    description: "Raw materials, WIP, and finished goods tracking.",
  },
  {
    icon: FileText,
    title: "Production Reports",
    description: "Detailed production and variance reports.",
  },
];

const benefits = [
  "Job order and process costing",
  "Material requirement planning",
  "Labor efficiency tracking",
  "Overhead allocation",
  "Work-in-progress valuation",
  "Finished goods costing",
];

export default function ManufacturingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-6">
              Manufacturing Industry
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Accounting Services for Manufacturing Companies in Kenya
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Cost accounting, inventory management, and production reporting tailored for manufacturing businesses.
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
              <Badge className="bg-cyan-100 text-cyan-700 mb-4">Manufacturing Expertise</Badge>
              <h2 className="text-3xl font-bold text-blue-950 mb-6">
                Accounting for Manufacturing Operations
              </h2>
              <p className="text-slate-600 mb-6">
                Manufacturing requires detailed cost tracking and inventory management. We help you understand your true production costs and optimize your operations for profitability.
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
                    <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
