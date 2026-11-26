import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Globe,
  Clock,
} from "lucide-react";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "About Us | CliffeTech Accounting Solutions Kenya",
  description: "Learn about CliffeTech Accounting Solutions - your trusted accounting and business advisory partner in Kenya. Our mission, vision, values, and team dedicated to helping businesses succeed.",
  keywords: "About CliffeTech, Accounting Firm Kenya, Accounting Services Provider Nairobi, Meet Our Team",
  openGraph: {
    title: "About CliffeTech Accounting Solutions | Kenya",
    description: "Your trusted accounting and business advisory partner in Kenya.",
    url: "https://cliffetech.co.ke/about",
  },
  alternates: {
    canonical: "https://cliffetech.co.ke/about",
  },
};

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our dealings.",
  },
  {
    icon: Lightbulb,
    title: "Excellence",
    description: "We deliver quality work that exceeds expectations.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Your success is our success. We put clients first.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We embrace technology to deliver modern solutions.",
  },
];

const milestones = [
  { year: "2020", event: "CliffeTech founded in Nairobi" },
  { year: "2021", event: "Became Zoho Books certified partner" },
  { year: "2022", event: "Expanded to serve over 100 clients" },
  { year: "2023", event: "Launched cloud accounting services" },
  { year: "2024", event: "Served over 200 businesses across Kenya" },
];

const team = [
  {
    name: "Cliffe Likhanga",
    role: "Founder & Lead Consultant",
    description: "Certified accountant with expertise in bookkeeping, tax compliance, and cloud accounting solutions.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About CliffeTech Accounting Solutions',
            description: 'Learn about our mission, vision, and team.',
            mainEntity: {
              '@type': 'LocalBusiness',
              name: 'CliffeTech Accounting Solutions',
              foundingDate: '2020',
              numberOfEmployees: '1-10',
              areaServed: 'Kenya',
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-6">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Helping Kenyan Businesses Succeed Since 2020
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              CliffeTech Accounting Solutions is a trusted partner for businesses across Kenya, combining traditional accounting expertise with modern cloud solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-slate-50 border-slate-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-900 rounded-xl flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-blue-950 mb-4">Our Mission</h2>
                <p className="text-slate-600 leading-relaxed">
                  To provide reliable, technology-driven accounting solutions that help businesses simplify financial management, maintain compliance, and achieve sustainable growth.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-50 border-slate-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-blue-950 mb-4">Our Vision</h2>
                <p className="text-slate-600 leading-relaxed">
                  To be the leading accounting and business advisory firm in East Africa, recognized for excellence, innovation, and client success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-blue-100 text-blue-900 mb-4">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
                A Legacy of Excellence in Accounting
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Founded in 2020, CliffeTech began with a simple mission: to help Kenyan businesses manage their finances better. What started as a solo practice has grown into a trusted accounting firm serving over 200 businesses.
              </p>
              <p className="text-slate-600 mb-6">
                Today, we combine traditional accounting expertise with modern cloud technology to deliver solutions that are both reliable and efficient. Our team of certified professionals is dedicated to helping businesses of all sizes achieve their financial goals.
              </p>
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link href="/contact">
                  Work With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-4 bg-white rounded-lg p-4 border border-slate-200">
                  <div className="w-20 text-center">
                    <span className="text-xl font-bold text-blue-900">{milestone.year}</span>
                  </div>
                  <div className="h-12 w-px bg-slate-200"></div>
                  <span className="text-slate-700">{milestone.event}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-700 mb-4">Core Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
              What We Stand For
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-slate-50 border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-900 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-950 mb-3">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-700 mb-4">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
              Meet the Experts Behind CliffeTech
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Dedicated to providing personalized, professional accounting services tailored to your business needs.
            </p>
          </div>
          <div className="max-w-md mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="bg-white border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-3xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-blue-950">{member.name}</h3>
                    <p className="text-orange-500 text-sm mb-3">{member.role}</p>
                    <p className="text-slate-600">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-blue-800 text-blue-200 mb-4">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The CliffeTech Difference
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">6+ Years Experience</h3>
              <p className="text-blue-200 text-sm">Proven track record of excellence</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">200+ Clients Served</h3>
              <p className="text-blue-200 text-sm">Trusted across industries</p>
            </div>
            <div className="text-center">
              <Globe className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Local Expertise</h3>
              <p className="text-blue-200 text-sm">Deep Kenyan market knowledge</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Certified Professionals</h3>
              <p className="text-blue-200 text-sm">Qualified and accredited team</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
