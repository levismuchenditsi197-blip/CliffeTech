import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, CheckCircle, ArrowRight, FileText, BarChart3, Users } from "lucide-react";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Accounting for Construction Companies in Kenya | Construction Industry Accounting",
  description: "Specialized accounting services for construction companies in Kenya. Project accounting, contract costing, CIS compliance, and construction financial management.",
  keywords: "Construction Accounting Kenya, Project Accounting, Contract Costing, Construction Financial Management, CIS Compliance",
  openGraph: {
    title: "Accounting for Construction Kenya | CliffeTech",
    description: "Specialized accounting for construction industry.",
    url: "https://cliffetech.co.ke/industries/construction",
  },
  alternates: {
    canonical: "https://cliffetech.co.ke/industries/construction",
  },
};

const services = [
  {
    icon: FileText,
    title: "Project Accounting",
    description: "Track costs and revenue by project or contract.",
  },
  {
    icon: BarChart3,
    title: "Job Costing",
    description: "Detailed cost tracking for each construction project.",
  },
  {
    icon: Users,
    title: "Retentions Management",
    description: "Manage retention monies and variations.",
  },
];

const benefits = [
  "Project-based accounting",
  "Work-in-progress tracking",
  "Contract profitability analysis",
  "Material and labor costing",
  "Retention management",
  "Progress billing support",
];

export default function ConstructionPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-6">
              Construction Industry
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Accounting Services for Construction Companies in Kenya
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Project accounting, contract costing, and financial management tailored for construction and contracting businesses.
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
              <Badge className="bg-slate-100 text-slate-700 mb-4">Construction Expertise</Badge>
              <h2 className="text-3xl font-bold text-blue-950 mb-6">
                Accounting for Construction Projects
              </h2>
              <p className="text-slate-600 mb-6">
                Construction companies require sophisticated project accounting. We track costs, manage retentions, and provide insights on project profitability to help you deliver on budget.
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
                    <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
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
