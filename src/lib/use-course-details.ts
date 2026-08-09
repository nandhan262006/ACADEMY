"use client";

import { useEffect, useState } from "react";
import type { CourseDetails } from "./course-details";

export function useCourseDetails() {
  const [courses, setCourses] = useState<CourseDetails[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/course-details")
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("Failed to load"))))
      .then((data: { courses?: CourseDetails[] }) => {
        if (!cancelled) setCourses(data.courses ?? []);
      })
      .catch(() => {
        if (!cancelled) setCourses([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return courses;
}
