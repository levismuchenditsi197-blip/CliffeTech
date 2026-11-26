import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Cloud,
  CheckCircle,
  ArrowRight,
  Settings,
  RefreshCcw,
  GraduationCap,
  HeadphonesIcon,
  Wrench,
  Zap,
  Link as LinkIcon,
  ArrowRightLeft,
} from "lucide-react";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Zoho Books Services Kenya | Implementation, Migration & Training",
  description: "Zoho Books implementation, migration, training, and support services in Kenya. Certified Zoho Books consultants helping businesses automate accounting, migrate from QuickBooks, Sage, Excel, and more.",
  keywords: "Zoho Books Kenya, Zoho Books Consultant, Zoho Books Migration, Zoho Books Implementation, QuickBooks to Zoho, Sage to Zoho, Cloud Accounting Kenya",
  openGraph: {
    title: "Zoho Books Services Kenya | CliffeTech Accounting Solutions",
    description: "Certified Zoho Books partner for implementation, migration, and training.",
    url: "https://cliffetech.co.ke/services/zoho-books",
  },
  alternates: {
    canonical: "https://cliffetech.co.ke/services/zoho-books",
  },
};

const services = [
  {
    icon: Settings,
    title: "Zoho Books Setup",
    description: "Complete setup and configuration of Zoho Books for your business.",
  },
  {
    icon: ArrowRightLeft,
    title: "Zoho Books Migration",
    description: "Seamless migration from QuickBooks, Sage, Excel, Tally, or Xero.",
  },
  {
    icon: GraduationCap,
    title: "Zoho Books Training",
    description: "Comprehensive training for your team to use Zoho Books effectively.",
  },
  {
    icon: HeadphonesIcon,
    title: "Zoho Books Support",
    description: "Ongoing support and troubleshooting for Zoho Books users.",
  },
  {
    icon: Zap,
    title: "Accounting Automation",
    description: "Automate invoicing, expenses, and financial workflows.",
  },
  {
    icon: Wrench,
    title: "Customization",
    description: "Custom fields, templates, and workflows tailored to your needs.",
  },
];

const migrationSources = [
  "QuickBooks",
  "Sage",
  "Excel Spreadsheets",
  "Tally",
  "Xero",
  "Other Systems",
];

const migrationSteps = [
  { step: "1", title: "Assessment", desc: "Review current system and requirements" },
  { step: "2", title: "Data Cleanup", desc: "Clean and prepare data for migration" },
  { step: "3", title: "Migration", desc: "Transfer data to Zoho Books" },
  { step: "4", title: "Validation", desc: "Verify data accuracy and completeness" },
  { step: "5", title: "Training", desc: "Train your team on the new system" },
  { step: "6", title: "Go-Live", desc: "Launch with ongoing support" },
];

const benefits = [
  "Real-time financial visibility",
  "Automated invoicing and reminders",
  "Bank integration and auto-reconciliation",
  "Mobile access anywhere",
  "Kenyan tax compliance features",
  "Multi-currency support",
  "Inventory management",
  "Collaborative workflows",
];

export default function ZohoBooksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Zoho Books Services Kenya',
            description: 'Implementation, migration, training, and support for Zoho Books cloud accounting software.',
            provider: {
              '@type': 'LocalBusiness',
              name: 'CliffeTech Accounting Solutions',
            },
            areaServed: {
              '@type': 'Country',
              name: 'Kenya',
            },
            serviceType: ['Zoho Books Implementation', 'Zoho Books Migration', 'Zoho Books Training'],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-6">
              Zoho Books Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Zoho Books Services in Kenya
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Certified Zoho Books partners offering implementation, migration, training, and ongoing support for Kenyan businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link href="/contact">
                  Get Zoho Books Help
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Link href="/contact">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Sources */}
      <section className="py-12 bg-cyan-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-blue-950">We Migrate From</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {migrationSources.map((source, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center border border-slate-200">
                <span className="font-semibold text-blue-900">{source}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-900 mb-4">Our Zoho Books Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
              Complete Zoho Books Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From initial setup to ongoing optimization, we support your Zoho Books journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-slate-50 border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-cyan-500 rounded-xl flex items-center justify-center mb-6">
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

      {/* Migration Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-700 mb-4">Migration Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
              Our Migration Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A proven, step-by-step approach to ensure a smooth transition to Zoho Books.
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {migrationSteps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-bold text-blue-950 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-2xl p-8 text-white">
              <Cloud className="h-16 w-16 text-orange-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Why Zoho Books?</h3>
              <p className="text-cyan-100 mb-6">
                Zoho Books is a powerful cloud accounting solution designed for SMEs. It&apos;s affordable, feature-rich, and supports Kenyan tax requirements out of the box.
              </p>
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link href="/contact">Get Started with Zoho</Link>
              </Button>
            </div>
            <div>
              <Badge className="bg-cyan-100 text-cyan-700 mb-4">Benefits</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
                Why Move to Zoho Books?
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
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
                    name: 'What is Zoho Books?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Zoho Books is a cloud-based accounting software that helps businesses manage invoicing, expenses, inventory, and financial reporting. It is affordable and ideal for SMEs.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Does Zoho Books support Kenyan tax requirements?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, Zoho Books supports Kenyan tax configurations including VAT, making it suitable for businesses operating in Kenya.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How long does migration to Zoho Books take?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Migration typically takes 2-4 weeks depending on data complexity. We ensure a smooth transition with minimal disruption to your business.',
                    },
                  },
                ],
              }),
            }}
          />
          <div className="text-center mb-12">
            <Badge className="bg-cyan-100 text-cyan-700 mb-4">FAQ</Badge>
            <h2 className="text-3xl font-bold text-blue-950 mb-6">
              Zoho Books FAQs
            </h2>
          </div>
          <div className="space-y-6">
            <div className="border border-slate-200 bg-white rounded-xl p-6">
              <h3 className="font-semibold text-blue-950 mb-2">What is Zoho Books?</h3>
              <p className="text-slate-600">Zoho Books is a cloud-based accounting software that helps businesses manage invoicing, expenses, inventory, and financial reporting. It is affordable and ideal for SMEs.</p>
            </div>
            <div className="border border-slate-200 bg-white rounded-xl p-6">
              <h3 className="font-semibold text-blue-950 mb-2">Does Zoho Books support Kenyan tax requirements?</h3>
              <p className="text-slate-600">Yes, Zoho Books supports Kenyan tax configurations including VAT, making it suitable for businesses operating in Kenya.</p>
            </div>
            <div className="border border-slate-200 bg-white rounded-xl p-6">
              <h3 className="font-semibold text-blue-950 mb-2">How long does migration to Zoho Books take?</h3>
              <p className="text-slate-600">Migration typically takes 2-4 weeks depending on data complexity. We ensure a smooth transition with minimal disruption to your business.</p>
            </div>
            <div className="border border-slate-200 bg-white rounded-xl p-6">
              <h3 className="font-semibold text-blue-950 mb-2">Do you offer training after migration?</h3>
              <p className="text-slate-600">Yes, comprehensive training is included with all migrations. We ensure your team can use Zoho Books effectively before go-live.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
