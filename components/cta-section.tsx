import Link from "next/link";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/constants";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  variant?: "blue" | "gradient";
}

export function CTASection({
  title = "Ready to Transform Your Accounting?",
  description = "Book a free consultation and discover how CliffeTech can help streamline your financial operations.",
  primaryCTA = { text: "Book Free Consultation", href: "/contact" },
  secondaryCTA = { text: "WhatsApp Us", href: `https://wa.me/${CONTACT_INFO.phone.whatsapp}` },
  variant = "gradient",
}: CTASectionProps) {
  return (
    <section className={`py-20 ${variant === "gradient" ? "bg-gradient-to-r from-blue-900 to-blue-800" : "bg-blue-950"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{title}</h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8">
            <Link href={primaryCTA.href}>
              <Calendar className="mr-2 h-5 w-5" />
              {primaryCTA.text}
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8">
            <a href={secondaryCTA.href} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              {secondaryCTA.text}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function CTAInline() {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-center">
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
        Get Started Today
      </h3>
      <p className="text-orange-100 mb-6 max-w-lg mx-auto">
        Schedule a free consultation to discuss your accounting needs and discover how we can help your business grow.
      </p>
      <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-blue-50 text-lg">
        <Link href="/contact">
          Book Free Consultation
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </div>
  );
}
