import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, CheckCircle, ArrowRight, Users, FileText, Receipt } from "lucide-react";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Accounting for Healthcare Providers in Kenya | Medical Industry Accounting",
  description: "Specialized accounting services for healthcare providers in Kenya. Medical practice accounting, patient billing, NHIF claims, and healthcare financial compliance.",
  keywords: "Healthcare Accounting Kenya, Medical Practice Accounting, NHIF Claims, Patient Billing, Hospital Accounting",
  openGraph: {
    title: "Accounting for Healthcare Kenya | CliffeTech",
    description: "Specialized accounting for healthcare providers.",
    url: "https://cliffetech.co.ke/industries/healthcare",
  },
  alternates: {
    canonical: "https://cliffetech.co.ke/industries/healthcare",
  },
};

const services = [
  {
    icon: Receipt,
    title: "Patient Billing",
    description: "Accurate billing and claims management.",
  },
  {
    icon: FileText,
    title: "NHIF/SHIF Claims",
    description: "Manage insurance claims and reconciliations.",
  },
  {
    icon: Users,
    title: "Practice Management",
    description: "Financial oversight for medical practices.",
  },
];

const benefits = [
  "Patient billing systems",
  "NHIF/SHIF claims management",
  "Medical inventory tracking",
  "Doctor compensation tracking",
  "Regulatory compliance",
  "Practice profitability analysis",
];

export default function HealthcarePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-6">
              Healthcare Industry
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Accounting Services for Healthcare Providers in Kenya
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Specialized accounting for clinics, hospitals, and medical practices including patient billing, insurance claims, and practice management.
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
              <Badge className="bg-red-100 text-red-700 mb-4">Healthcare Expertise</Badge>
              <h2 className="text-3xl font-bold text-blue-950 mb-6">
                Accounting for Medical Practices
              </h2>
              <p className="text-slate-600 mb-6">
                Healthcare providers face unique challenges including insurance claims, patient billing, and regulatory compliance. We help you maintain financial health while you focus on patient care.
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
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
