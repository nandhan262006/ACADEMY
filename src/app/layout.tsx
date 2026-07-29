import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Footer } from "@/components/public/footer";
import VideoPopup from "@/components/VideoPopup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Photriya Academy | Online Photography Courses",
  description:
    "Learn photography from industry experts with live online classes. Master DSLR, composition, lighting, editing, and more at Photriya Academy.",
  keywords: [
    "photography course",
    "online photography class",
    "DSLR training",
    "photography academy",
    "learn photography online",
  ],
  openGraph: {
    title: "Photriya Academy | Online Photography Courses",
    description:
      "Learn photography from industry experts with live online classes.",
    url: "https://academy.photriya.com",
    siteName: "Photriya Academy",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <VideoPopup />
      </body>
    </html>
  );
}
