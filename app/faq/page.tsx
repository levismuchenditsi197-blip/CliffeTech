import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | CliffeTech Accounting Solutions",
  description: "Find answers to common questions about our accounting, tax, payroll, and Zoho Books services in Kenya.",
  openGraph: {
    title: "FAQ | CliffeTech Accounting Solutions",
    description: "Common questions about accounting services in Kenya.",
    url: "https://cliffetech.co.ke/faq",
  },
  alternates: {
    canonical: "https://cliffetech.co.ke/faq",
  },
};

const faqCategories = [
  {
    title: "General Accounting",
    questions: [
      {
        question: "Why should I outsource bookkeeping?",
        answer: "Outsourcing bookkeeping saves time, reduces errors, ensures compliance, provides access to professional expertise, and is often more cost-effective than hiring in-house staff. You get expert service at a fraction of the cost of a full-time employee.",
      },
      {
        question: "What accounting services does my business need?",
        answer: "Most businesses need bookkeeping, tax filing, payroll management, and financial reporting. The specific needs depend on your business size, industry, and growth stage. We can assess your needs and recommend the right services.",
      },
      {
        question: "How often should financial reports be prepared?",
        answer: "Monthly management reports are recommended for most businesses. Annual reports are required for tax purposes. Quarterly reviews are beneficial for growing businesses to track performance.",
      },
    ],
  },
  {
    title: "Tax & Compliance",
    questions: [
      {
        question: "When is VAT return filing due in Kenya?",
        answer: "VAT returns are due by the 20th of the following month in Kenya. Late filing attracts penalties and interest from KRA.",
      },
      {
        question: "What penalties apply for late tax filing?",
        answer: "Late filing penalties vary by tax type. VAT late filing attracts a penalty of KShs 10,000 plus interest. PAYE late filing can result in penalties of 25% of the tax due plus interest. We ensure all returns are filed on time.",
      },
      {
        question: "Do you handle KRA audits?",
        answer: "Yes, we provide professional representation during KRA audits. Our team can help respond to queries, provide documentation, and resolve any compliance issues.",
      },
    ],
  },
  {
    title: "Payroll Services",
    questions: [
      {
        question: "What statutory deductions do you handle?",
        answer: "We handle PAYE, NSSF, SHIF (Social Health Insurance Fund), Housing Levy, and all other statutory deductions required by Kenyan law. We ensure accurate calculations and timely filing.",
      },
      {
        question: "Does payroll include annual P9 forms?",
        answer: "Yes, we prepare annual P9 forms for all employees as part of our payroll service. We also assist with year-end tax returns and ensure all employee records are properly maintained.",
      },
      {
        question: "How do you ensure confidentiality of payroll data?",
        answer: "We maintain strict confidentiality protocols including secure data storage, restricted access, and confidentiality agreements. Your employee data is handled with the highest level of security.",
      },
    ],
  },
  {
    title: "Zoho Books",
    questions: [
      {
        question: "What is Zoho Books?",
        answer: "Zoho Books is a cloud-based accounting software that helps businesses manage invoicing, expenses, inventory, and financial reporting. It's affordable, user-friendly, and ideal for SMEs in Kenya.",
      },
      {
        question: "Does Zoho Books support Kenyan tax requirements?",
        answer: "Yes, Zoho Books supports Kenyan tax configurations including VAT at 16%. It can generate VAT-compliant invoices and reports suitable for KRA filing.",
      },
      {
        question: "How long does migration to Zoho Books take?",
        answer: "Migration typically takes 2-4 weeks depending on data complexity and the source system. We handle data cleanup, transfer, validation, and training to ensure a smooth transition.",
      },
      {
        question: "Can you migrate from QuickBooks or Sage?",
        answer: "Yes, we have experience migrating from QuickBooks, Sage, Excel, Tally, Xero, and other accounting systems. We ensure data integrity and provide training for your team.",
      },
      {
        question: "Do you offer training after migration?",
        answer: "Yes, comprehensive training is included with all Zoho Books implementations. We train your team on daily operations, reporting, and best practices to maximize the value of the system.",
      },
    ],
  },
  {
    title: "Working With Us",
    questions: [
      {
        question: "How do I get started?",
        answer: "Simply contact us for a free consultation. We'll discuss your needs, provide a quote, and outline the next steps. Most clients begin services within a week of initial contact.",
      },
      {
        question: "Do you offer ongoing support?",
        answer: "Yes, we provide ongoing support for all our services. Whether you have questions about your reports, need help with tax queries, or require additional guidance, we're here to help.",
      },
      {
        question: "What are your payment terms?",
        answer: "Most services are billed monthly in advance. We offer flexible packages for SMEs with pricing based on your transaction volume and specific needs. Contact us for a customized quote.",
      },
    ],
  },
];

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqCategories.flatMap(cat =>
      cat.questions.map(q => ({
        '@type': 'Question',
        name: q.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: q.answer,
        },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-6">
              FAQ
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Find answers to common questions about our accounting, tax, payroll, and Zoho Books services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <h2 className="text-2xl font-bold text-blue-950 mb-6 pb-2 border-b-2 border-orange-500">
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <details
                      key={faqIndex}
                      className="group border border-slate-200 rounded-xl overflow-hidden"
                    >
                      <summary className="flex justify-between items-center cursor-pointer px-6 py-4 bg-slate-50 hover:bg-slate-100 transition-colors list-none">
                        <span className="font-semibold text-blue-950 pr-4">{faq.question}</span>
                        <svg
                          className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-6 py-4 bg-white border-t border-slate-200">
                        <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-slate-600 mb-6">
            We&apos;re happy to help. Contact us for personalized answers to your questions.
          </p>
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <CTASection />
    </>
  );
}
