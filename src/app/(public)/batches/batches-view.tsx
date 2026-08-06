"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  Users,
  ArrowRight,
  Monitor,
  MapPin,
} from "lucide-react";

const ONLINE_PRICE = 37000;
const OFFLINE_PRICE = 43000;

const onlineBatches = [
  {
    id: 1,
    mode: "online" as const,
    name: "January 2026 Batch",
    course: "Online Photography Course",
    startDate: "January 15, 2026",
    endDate: "March 15, 2026",
    schedule: "Mon-Fri, 8:00 AM - 10:30 AM IST",
    maxStudents: 30,
    currentStudents: 12,
    price: ONLINE_PRICE,
    status: "upcoming" as const,
  },
  {
    id: 2,
    mode: "online" as const,
    name: "March 2026 Batch",
    course: "Online Photography Course",
    startDate: "March 20, 2026",
    endDate: "May 20, 2026",
    schedule: "Mon-Fri, 8:00 AM - 10:30 AM IST",
    maxStudents: 30,
    currentStudents: 0,
    price: ONLINE_PRICE,
    status: "upcoming" as const,
  },
  {
    id: 3,
    mode: "online" as const,
    name: "June 2026 Batch",
    course: "Online Photography Course",
    startDate: "June 10, 2026",
    endDate: "August 10, 2026",
    schedule: "Mon-Fri, 8:00 AM - 10:30 AM IST",
    maxStudents: 30,
    currentStudents: 8,
    price: ONLINE_PRICE,
    status: "upcoming" as const,
  },
  {
    id: 4,
    mode: "online" as const,
    name: "September 2026 Batch",
    course: "Online Photography Course",
    startDate: "September 5, 2026",
    endDate: "November 5, 2026",
    schedule: "Mon-Fri, 8:00 AM - 10:30 AM IST",
    maxStudents: 30,
    currentStudents: 3,
    price: ONLINE_PRICE,
    status: "upcoming" as const,
  },
];

const offlineBatches = [
  {
    id: 5,
    mode: "offline" as const,
    name: "January 2026 Batch",
    course: "Offline Photography Course",
    startDate: "January 20, 2026",
    endDate: "March 20, 2026",
    schedule: "Mon-Fri, 10:00 AM - 1:00 PM IST",
    maxStudents: 20,
    currentStudents: 8,
    location: "Hyderabad",
    price: OFFLINE_PRICE,
    status: "upcoming" as const,
  },
  {
    id: 6,
    mode: "offline" as const,
    name: "March 2026 Batch",
    course: "Offline Photography Course",
    startDate: "March 25, 2026",
    endDate: "May 25, 2026",
    schedule: "Mon-Fri, 10:00 AM - 1:00 PM IST",
    maxStudents: 20,
    currentStudents: 2,
    location: "Hyderabad",
    price: OFFLINE_PRICE,
    status: "upcoming" as const,
  },
];

type BatchMode = "online" | "offline";

export default function BatchesContent() {
  const [mode, setMode] = useState<BatchMode>("online");

  const batches = mode === "online" ? onlineBatches : offlineBatches;

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 py-14 sm:py-20 md:py-28 lg:py-32 relative">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Available Batches
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Choose a batch that fits your schedule. Limited seats available to
            ensure personalized attention.
          </p>
        </div>
      </section>

      {/* Photo Banner */}
      <section className="relative h-[200px] sm:h-[280px] md:h-[360px] lg:h-[420px] overflow-hidden">
        <Image
          src="/images/gallery/gallery7.jpg"
          alt="Photography batches"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <p className="text-white/80 text-sm md:text-base mb-1">
            Join our community
          </p>
          <h2 className="text-white text-2xl md:text-4xl font-bold">
            Find Your Perfect Batch
          </h2>
        </div>
      </section>

      {/* Online / Offline Toggle */}
      <section className="py-10 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-gray-100 rounded-xl p-1">
              <button
                onClick={() => setMode("online")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  mode === "online"
                    ? "bg-white text-black shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <Monitor className="h-4 w-4" />
                Online
              </button>
              <button
                onClick={() => setMode("offline")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  mode === "offline"
                    ? "bg-white text-black shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <MapPin className="h-4 w-4" />
                Offline
              </button>
            </div>
          </div>

          {/* Batch Cards */}
          <div className="max-w-5xl mx-auto space-y-4">
            {batches.map((batch) => {
              const isOnline = batch.mode === "online";
              const seatsLeft = batch.maxStudents - batch.currentStudents;
              const fillPercent =
                batch.maxStudents > 0
                  ? (batch.currentStudents / batch.maxStudents) * 100
                  : 0;

              const modeLabel = isOnline ? "Online" : "Offline";
              const whatsappMessage = `Hi Photriya Academy! I would like to enroll in the ${modeLabel} ${batch.name} (${batch.course}) starting ${batch.startDate}.`;
              const whatsappLink = `https://wa.me/919618855959?text=${encodeURIComponent(whatsappMessage)}`;

              return (
                <div
                  key={batch.id}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Left info */}
                    <div className="flex-1 p-5 md:p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className="bg-green-100 text-green-700 border-0">
                          Upcoming
                        </Badge>
                        {!isOnline && (
                          <Badge variant="outline" className="border-gray-200 text-gray-600">
                            In-Person
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-black mb-1">
                        {batch.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-4">
                        {batch.course}
                      </p>
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          {batch.startDate} - {batch.endDate}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="h-4 w-4 text-gray-400" />
                          {batch.schedule}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Users className="h-4 w-4 text-gray-400" />
                          {seatsLeft} seats available
                        </div>
                        {!isOnline && "location" in batch && batch.location && (
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="h-4 w-4 text-gray-400" />
                            {batch.location}
                          </div>
                        )}
                      </div>
                      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-black rounded-full transition-all"
                          style={{ width: `${fillPercent}%` }}
                        />
                      </div>
                    </div>

                    {/* Right: price + CTA */}
                    <div className="flex flex-col sm:flex-row md:flex-col items-stretch sm:items-center justify-between md:justify-center gap-3 sm:gap-4 p-5 md:p-6 md:border-l border-t md:border-t-0 border-gray-100 bg-gray-50/50 md:min-w-[200px]">
                      <div className="text-left sm:text-center">
                        <p className="text-2xl font-bold text-black">
                          ₹{batch.price.toLocaleString("en-IN")}
                        </p>
                        <p className="text-xs text-gray-400">complete course</p>
                      </div>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full sm:w-auto"
                      >
                        <Button className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white">
                          Enroll Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}

            {batches.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                No batches available at the moment.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
