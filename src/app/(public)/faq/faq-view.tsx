"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronDown, Search, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "What are the prerequisites for this course?",
    answer:
      "No prior photography experience is required. This course is designed for beginners who want to learn photography from scratch. All you need is a DSLR or mirrorless camera.",
  },
  {
    question: "What camera do I need?",
    answer:
      "You can use any DSLR or mirrorless camera. During the course, we'll help you understand your camera's features and settings. If you're planning to buy one, we can guide you on the best options within your budget.",
  },
  {
    question: "How are the online classes conducted?",
    answer:
      "Classes are conducted via live streaming with multiple camera angles. You can see the instructor, the camera setup, and the editing screen in real-time. Interactive Q&A sessions are also included.",
  },
  {
    question: "Will I get a certificate after completing the course?",
    answer:
      "Yes, upon successful completion of the course and assignments, you will receive a certificate from Photriya Academy.",
  },
  {
    question: "What if I miss a class?",
    answer:
      "All live sessions are recorded and made available to enrolled students. You can watch the recordings at your convenience if you miss any class.",
  },
  {
    question: "Is there any placement assistance?",
    answer:
      "While we don't provide direct placement, we guide you on how to start your photography career, build a portfolio, and find clients. We also share job opportunities in our alumni network.",
  },
  {
    question: "Can I pay in installments?",
    answer:
      "Currently, we offer a full payment option of ₹38,000. We are working on installment options for future batches.",
  },
  {
    question: "What software will I need?",
    answer:
      "We'll be using Adobe Photoshop, Lightroom, and Premiere Pro for editing. You can get Adobe Creative Cloud subscription or use trial versions during the course.",
  },
  {
    question: "How interactive are the classes?",
    answer:
      "Very interactive! You can ask questions in real-time, participate in discussions, and get personalized feedback on your work. Our small batch size ensures individual attention.",
  },
  {
    question: "What if I want a refund?",
    answer:
      "Please contact us within the first week of the batch start date for refund requests. Terms and conditions apply.",
  },
];

export default function FaqContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm text-gold-light mb-5">
            <Sparkles className="h-4 w-4" />
            <span>Help Center</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Find answers to common questions about our photography courses.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <Card
                  key={index}
                  className={`border border-gray-100 shadow-sm hover:shadow-md transition-all ${
                    isOpen ? "border-gold/30" : ""
                  }`}
                >
                  <CardHeader
                    className="cursor-pointer select-none"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                  >
                    <div className="flex items-center justify-between gap-4">
                      <CardTitle
                        className={`text-base font-medium pr-4 transition-colors ${
                          isOpen ? "text-navy" : "text-gray-700"
                        }`}
                      >
                        {faq.question}
                      </CardTitle>
                      <div
                        className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                          isOpen
                            ? "bg-gold/10 text-gold rotate-180"
                            : "bg-gray-50 text-gray-400"
                        }`}
                      >
                        <ChevronDown className="h-4 w-4 transition-transform" />
                      </div>
                    </div>
                  </CardHeader>
                  {isOpen && (
                    <CardContent className="pt-0 pb-5">
                      <div className="pl-0 border-l-0 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </CardContent>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
