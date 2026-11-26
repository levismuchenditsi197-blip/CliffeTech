import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale, CheckCircle, ArrowRight, FileText, Receipt, Users } from "lucide-react";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Accounting Services for Law Firms in Kenya | Legal Industry Accounting",
  description: "Specialized accounting services for law firms in Kenya. Trust accounting, client billing, matter costing, and compliance for legal practices.",
  keywords: "Law Firm Accounting Kenya, Legal Accounting Nairobi, Trust Accounting, Client Billing Legal Practice",
  openGraph: {
    title: "Accounting for Law Firms Kenya | CliffeTech",
    description: "Specialized accounting services for legal practices.",
    url: "https://cliffetech.co.ke/industries/law-firms",
  },
  alternates: {
    canonical: "https://cliffetech.co.ke/industries/law-firms",
  },
};

const services = [
  {
    icon: FileText,
    title: "Trust Accounting",
    description: "Proper management and tracking of client trust accounts.",
  },
  {
    icon: Receipt,
    title: "Client Billing",
    description: "Accurate billing and invoice management for legal services.",
  },
  {
    icon: Users,
    title: "Matter Costing",
    description: "Track costs and profitability by case or matter.",
  },
];

const benefits = [
  "Compliance with Law Society regulations",
  "Trust account management",
  "Time and billing integration",
  "Partner profit tracking",
  "Matter profitability analysis",
  "Accurate client disbursements",
];

export default function LawFirmsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-6">
              Legal Industry
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Accounting Services for Law Firms in Kenya
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Specialized accounting solutions designed for the unique needs of legal practices, from sole practitioners to large firms.
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
              <Badge className="bg-blue-100 text-blue-900 mb-4">Industry Expertise</Badge>
              <h2 className="text-3xl font-bold text-blue-950 mb-6">
                Accounting Tailored for Legal Practices
              </h2>
              <p className="text-slate-600 mb-6">
                Law firms have unique accounting requirements including trust accounting, matter-based billing, and partner profit sharing. Our team understands the legal industry and provides solutions that keep you compliant and profitable.
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
                    <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
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
