import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, ArrowRight, Sparkles } from "lucide-react";

const batches = [
  {
    id: 1,
    name: "January 2026 Batch",
    course: "Online Photography Course",
    startDate: "January 15, 2026",
    endDate: "March 15, 2026",
    schedule: "Mon-Fri, 8:00 AM - 10:30 AM IST",
    maxStudents: 30,
    currentStudents: 12,
    status: "upcoming" as const,
  },
  {
    id: 2,
    name: "March 2026 Batch",
    course: "Online Photography Course",
    startDate: "March 20, 2026",
    endDate: "May 20, 2026",
    schedule: "Mon-Fri, 8:00 AM - 10:30 AM IST",
    maxStudents: 30,
    currentStudents: 0,
    status: "upcoming" as const,
  },
  {
    id: 3,
    name: "June 2026 Batch",
    course: "Online Photography Course",
    startDate: "June 10, 2026",
    endDate: "August 10, 2026",
    schedule: "Mon-Fri, 8:00 AM - 10:30 AM IST",
    maxStudents: 30,
    currentStudents: 8,
    status: "upcoming" as const,
  },
  {
    id: 4,
    name: "September 2026 Batch",
    course: "Online Photography Course",
    startDate: "September 5, 2026",
    endDate: "November 5, 2026",
    schedule: "Mon-Fri, 8:00 AM - 10:30 AM IST",
    maxStudents: 30,
    currentStudents: 3,
    status: "upcoming" as const,
  },
];

export default function BatchesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm text-gold-light mb-5">
            <Sparkles className="h-4 w-4" />
            <span>Schedule</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Available Batches
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Choose a batch that fits your schedule. Limited seats available to
            ensure personalized attention.
          </p>
        </div>
      </section>

      {/* Batches List */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 max-w-4xl mx-auto">
            {batches.map((batch) => {
              const fillPercent = (batch.currentStudents / batch.maxStudents) * 100;
              return (
                <Card
                  key={batch.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-green-100 text-green-700 border-0">
                        Upcoming
                      </Badge>
                      <span className="text-sm text-gray-500">
                        {batch.currentStudents}/{batch.maxStudents} seats filled
                      </span>
                    </div>
                    <CardTitle className="text-navy text-xl">
                      {batch.name}
                    </CardTitle>
                    <CardDescription className="text-base text-gray-600">
                      {batch.course}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Progress bar */}
                    <div className="w-full h-2 bg-gray-100 rounded-full mb-6 overflow-hidden">
                      <div
                        className="h-full bg-gold rounded-full transition-all"
                        style={{ width: `${fillPercent}%` }}
                      />
                    </div>
                    <div className="grid md:grid-cols-3 gap-5 mb-6">
                      <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                        <Calendar className="h-5 w-5 text-gold shrink-0" />
                        <div>
                          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Duration
                          </p>
                          <p className="text-sm font-medium text-gray-700">
                            {batch.startDate} - {batch.endDate}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                        <Clock className="h-5 w-5 text-gold shrink-0" />
                        <div>
                          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Schedule
                          </p>
                          <p className="text-sm font-medium text-gray-700">
                            {batch.schedule}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                        <Users className="h-5 w-5 text-gold shrink-0" />
                        <div>
                          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Seats
                          </p>
                          <p className="text-sm font-medium text-gray-700">
                            {batch.maxStudents - batch.currentStudents} available
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold text-navy">₹38,000</p>
                      <Link href="/contact">
                        <Button className="bg-navy hover:bg-navy-light text-white shadow-sm">
                          Enroll Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
