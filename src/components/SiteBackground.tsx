"use client";

import { usePathname } from "next/navigation";
import PhotoGridBackground from "./PhotoGridBackground";

export default function SiteBackground() {
  const pathname = usePathname();
  if (pathname?.startsWith("/gallery")) return null;
  return <PhotoGridBackground />;
}
