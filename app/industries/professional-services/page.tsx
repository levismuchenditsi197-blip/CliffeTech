import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PieChart, CheckCircle, ArrowRight, Clock, Users, FileText } from "lucide-react";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Accounting for Professional Service Firms in Kenya | Consultancy Accounting",
  description: "Specialized accounting services for professional service firms in Kenya. Time billing, project accounting, and financial management for consultancies, agencies, and service businesses.",
  keywords: "Professional Services Accounting Kenya, Consultancy Accounting, Agency Accounting, Time Billing, Service Business Accounting",
  openGraph: {
    title: "Accounting for Professional Services Kenya | CliffeTech",
    description: "Specialized accounting for service-based businesses.",
    url: "https://cliffetech.co.ke/industries/professional-services",
  },
  alternates: {
    canonical: "https://cliffetech.co.ke/industries/professional-services",
  },
};

const services = [
  {
    icon: Clock,
    title: "Time & Billing",
    description: "Track billable hours and client invoicing.",
  },
  {
    icon: FileText,
    title: "Project Accounting",
    description: "Track profitability by project or client.",
  },
  {
    icon: Users,
    title: "Utilization Tracking",
    description: "Monitor team utilization and efficiency.",
  },
];

const benefits = [
  "Time tracking integration",
  "Client billing automation",
  "Project profitability analysis",
  "Resource utilization tracking",
  "Client WIP management",
  "Partner profit distribution",
];

export default function ProfessionalServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-6">
              Professional Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Accounting for Professional Service Firms in Kenya
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Time billing, project accounting, and financial management for consultancies, agencies, and service-based businesses.
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
              <Badge className="bg-teal-100 text-teal-700 mb-4">Service Industry Expertise</Badge>
              <h2 className="text-3xl font-bold text-blue-950 mb-6">
                Accounting for Service Businesses
              </h2>
              <p className="text-slate-600 mb-6">
                Professional service firms succeed by maximizing billable hours and project profitability. We help you track time, manage projects, and ensure you&apos;re billing correctly.
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
                    <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
