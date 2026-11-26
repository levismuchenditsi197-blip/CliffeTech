"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { submitContactForm } from "@/actions/contact";
import { useToast } from "@/hooks/use-toast";

const PHONE_NUMBER = "+254 703 372 3371";
const PHONE_LINK = "+254703723371";
const EMAIL = "cliffelikanga@gmail.com";
const ADDRESS = "Westlands Business Park, Nairobi";
const WHATSAPP_LINK = "254703723371";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    value: PHONE_NUMBER,
    href: `tel:${PHONE_LINK}`,
    color: "bg-blue-500",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    color: "bg-green-500",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: PHONE_NUMBER,
    href: `https://wa.me/${WHATSAPP_LINK}`,
    color: "bg-emerald-500",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: ADDRESS,
    href: "#",
    color: "bg-orange-500",
  },
];

const services = [
  "Bookkeeping Services",
  "Tax Filing & Compliance",
  "Payroll Management",
  "Financial Reporting",
  "Business Advisory",
  "Zoho Books Services",
  "General Consultation",
];

const businessSizes = [
  "1-10 employees",
  "11-50 employees",
  "51-100 employees",
  "100+ employees",
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    service: "",
    businessSize: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = await submitContactForm(formData);

    setIsSubmitting(false);

    if (result.success) {
      setIsSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
    } else {
      toast({
        title: "Error sending message",
        description: result.error || "Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-6">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s Talk About Your Accounting Needs
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Book a free consultation or reach out via phone, email, or WhatsApp. We&apos;re here to help your business succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group"
              >
                <div className="flex items-center gap-4 bg-slate-50 rounded-lg p-4 border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all">
                  <div className={`w-12 h-12 ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <method.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{method.title}</p>
                    <p className="font-semibold text-blue-950">{method.value}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white border-slate-200">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="h-10 w-10 text-green-500" />
                      </div>
                      <h2 className="text-2xl font-bold text-blue-950 mb-4">
                        Thank You for Reaching Out!
                      </h2>
                      <p className="text-slate-600 mb-6">
                        We&apos;ve received your message and will get back to you within 24 hours.
                      </p>
                      <Button onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ fullName: "", companyName: "", email: "", phone: "", service: "", businessSize: "", message: "" });
                      }} variant="outline">
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-blue-950 mb-6">
                        Book a Free Consultation
                      </h2>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="fullName">Full Name *</Label>
                            <Input
                              id="fullName"
                              required
                              value={formData.fullName}
                              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                              placeholder="John Mwangi"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="companyName">Company Name</Label>
                            <Input
                              id="companyName"
                              value={formData.companyName}
                              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                              placeholder="Your Company Ltd"
                            />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="john@company.com"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder={PHONE_NUMBER}
                            />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="service">Service Required *</Label>
                            <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                              <SelectContent>
                                {services.map((service) => (
                                  <SelectItem key={service} value={service}>
                                    {service}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="businessSize">Business Size</Label>
                            <Select value={formData.businessSize} onValueChange={(value) => setFormData({ ...formData, businessSize: value })}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select size" />
                              </SelectTrigger>
                              <SelectContent>
                                {businessSizes.map((size) => (
                                  <SelectItem key={size} value={size}>
                                    {size}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message *</Label>
                          <Textarea
                            id="message"
                            required
                            rows={5}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Tell us about your accounting needs..."
                          />
                        </div>
                        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-5 w-5" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-blue-950 text-white border-0">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6">Office Hours</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-orange-400" />
                      <div>
                        <p className="font-medium">Monday - Friday</p>
                        <p className="text-blue-200">8:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-orange-400" />
                      <div>
                        <p className="font-medium">Saturday</p>
                        <p className="text-blue-200">9:00 AM - 1:00 PM</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-blue-800">
                    <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <a href={`https://wa.me/${WHATSAPP_LINK}`} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-slate-200">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-blue-950 mb-6">Quick Tips</h3>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Book a free 30-minute consultation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>No obligation quote within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Site visits available on request</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Flexible appointment times</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">Find Us</h2>
            <p className="text-slate-600">{ADDRESS}</p>
          </div>
          <div className="bg-slate-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-500">Map Location: {ADDRESS}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
