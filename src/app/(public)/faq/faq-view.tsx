"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { faqs } from "./faq-data";

export default function FaqContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 py-14 sm:py-20 md:py-28 lg:py-32 relative">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Find answers to common questions about our photography courses.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-28">
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
