"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactContent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    const body = encodeURIComponent(
      `Hello Photriya Academy!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "—"}\n\n${message}`
    );
    window.open(`https://wa.me/919618855959?text=${body}`, "_blank");
    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 py-14 sm:py-20 md:py-28 lg:py-32 relative">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Have questions? We&apos;d love to hear from you. Send us a message
            and we&apos;ll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8 tracking-tight">
                Get in Touch
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    value: "+91 9618855959",
                    href: "tel:+919618855959",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    value: "info@photriya.com",
                    href: "mailto:info@photriya.com",
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    value: "Hyderabad, India",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="pt-1">
                        <h3 className="font-semibold text-navy text-sm">
                          {item.title}
                        </h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-gray-600 hover:text-navy transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-600">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h3 className="font-semibold text-navy mb-3">
                  Course Details
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    Online: ₹37,000 · Offline: ₹43,000
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    Duration: 8 Weeks
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    Schedule: Mon-Fri, 8:00 AM - 10:30 AM IST
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    Next Batch: January 15, 2026
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border border-gray-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-black text-xl">Send us a Message</CardTitle>
                <CardDescription className="text-gray-500">
                  Fill out the form and we&apos;ll get back to you on WhatsApp.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mx-auto mb-5">
                      <Send className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-black mb-1">Message Sent!</h3>
                    <p className="text-sm text-gray-500">Opening WhatsApp with your details.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input id="name" name="name" placeholder="Your name" required />
                    <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                    <Input id="phone" name="phone" type="tel" placeholder="+91 9618855959 (optional)" />
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your interest in photography..."
                      rows={4}
                      required
                    />
                    {error && (
                      <p className="text-sm text-red-600">{error}</p>
                    )}
                    <Button
                      type="submit"
                      className="w-full h-11 bg-black hover:bg-gray-800 text-white text-sm font-medium rounded-xl"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Opening WhatsApp..."
                      ) : (
                        <>
                          Send via WhatsApp
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
