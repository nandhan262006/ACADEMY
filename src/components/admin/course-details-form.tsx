"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type {
  CourseDetails,
  CourseDetailsInput,
} from "@/lib/course-details";

const FIELDS: { key: Exclude<keyof CourseDetailsInput, "price">; label: string }[] = [
  { key: "duration", label: "Duration" },
  { key: "schedule", label: "Schedule" },
  { key: "timings", label: "Timings" },
  { key: "location", label: "Location" },
  { key: "batchNumber", label: "Batch Number" },
  { key: "batchStartsFrom", label: "Batch Starts From" },
];

function toInput(course: CourseDetails): CourseDetailsInput {
  return {
    duration: course.duration,
    schedule: course.schedule,
    timings: course.timings,
    location: course.location,
    batchNumber: course.batchNumber,
    batchStartsFrom: course.batchStartsFrom,
    price: course.price,
  };
}

export function CourseDetailsForm({ course }: { course: CourseDetails }) {
  const [values, setValues] = useState<CourseDetailsInput>(() =>
    toInput(course)
  );
  const [baseline, setBaseline] = useState<CourseDetailsInput>(() =>
    toInput(course)
  );
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  const changed =
    JSON.stringify(values) !== JSON.stringify(baseline);

  async function handleSave() {
    setStatus("saving");
    setMessage("");
    try {
      const res = await fetch(`/api/course-details/${course.slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? `Failed to save (${res.status})`);
      }
      const data = (await res.json()) as { course?: CourseDetails };
      const next = data.course ? toInput(data.course) : values;
      setValues(next);
      setBaseline(next);
      setStatus("saved");
      setMessage("Saved. The website is now updated.");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-navy">{course.title}</CardTitle>
        <CardDescription>
          Edit the details shown across the website.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2">
          {FIELDS.map((field) => (
            <label key={field.key} className="grid gap-1.5">
              <span className="text-xs font-medium text-gray-600">
                {field.label}
              </span>
              <Input
                value={values[field.key]}
                onValueChange={(value) =>
                  setValues((v) => ({ ...v, [field.key]: value }))
                }
              />
            </label>
          ))}
          <label className="grid gap-1.5">
            <span className="text-xs font-medium text-gray-600">
              Price (₹)
            </span>
            <Input
              inputMode="numeric"
              value={String(values.price)}
              onValueChange={(value) =>
                setValues((v) => ({
                  ...v,
                  price: Number(value.replace(/[^0-9]/g, "")) || 0,
                }))
              }
            />
          </label>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <Button
            onClick={handleSave}
            disabled={status === "saving" || !changed}
            className="bg-black text-white hover:bg-gray-800"
          >
            {status === "saving" ? "Saving..." : "Save Changes"}
          </Button>
          {status === "saved" && (
            <span className="text-sm text-green-600">{message}</span>
          )}
          {status === "error" && (
            <span className="text-sm text-red-600">{message}</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
