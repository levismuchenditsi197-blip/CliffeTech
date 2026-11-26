import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, CheckCircle, ArrowRight, FileText, Receipt, Users } from "lucide-react";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Accounting Services for NGOs in Kenya | Non-Profit Accounting",
  description: "Specialized accounting services for NGOs and non-profit organizations in Kenya. Fund accounting, donor reporting, grant compliance, and charity accounting.",
  keywords: "NGO Accounting Kenya, Non-Profit Accounting, Fund Accounting, Donor Reporting, Grant Compliance Kenya",
  openGraph: {
    title: "Accounting for NGOs Kenya | CliffeTech",
    description: "Specialized accounting for non-profit organizations.",
    url: "https://cliffetech.co.ke/industries/ngos",
  },
  alternates: {
    canonical: "https://cliffetech.co.ke/industries/ngos",
  },
};

const services = [
  {
    icon: FileText,
    title: "Fund Accounting",
    description: "Track and report on restricted and unrestricted funds.",
  },
  {
    icon: Receipt,
    title: "Donor Reporting",
    description: "Accurate reports that meet donor requirements.",
  },
  {
    icon: Users,
    title: "Grant Compliance",
    description: "Ensure compliance with grant terms and conditions.",
  },
];

const benefits = [
  "Fund-based accounting",
  "Donor reporting standards",
  "Grant budget tracking",
  "Restricted vs. unrestricted funds",
  "NGO regulatory compliance",
  "Annual statutory reports",
];

export default function NGOsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-6">
              Non-Profit Sector
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Accounting Services for NGOs in Kenya
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Specialized fund accounting, donor reporting, and compliance services for non-profit organizations.
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
              <Badge className="bg-green-100 text-green-700 mb-4">NGO Expertise</Badge>
              <h2 className="text-3xl font-bold text-blue-950 mb-6">
                Accounting for Impact-Driven Organizations
              </h2>
              <p className="text-slate-600 mb-6">
                NGOs have unique accounting requirements including fund accounting, donor reporting, and regulatory compliance. We help you maintain transparency and accountability to stakeholders.
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
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
