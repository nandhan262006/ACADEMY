"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/batches", label: "Batches" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-xl border-b border-gray-100/80">
      <div className="hidden md:block bg-navy text-white/90 text-xs tracking-wide">
        <div className="container mx-auto px-4 flex justify-between items-center h-9">
          <div className="flex items-center gap-6">
            <a
              href="tel:+919618855959"
              className="flex items-center gap-1.5 hover:text-gold transition-colors"
            >
              <Phone className="h-3 w-3" />
              +91 9618855959
            </a>
            <a
              href="mailto:info@photriya.com"
              className="flex items-center gap-1.5 hover:text-gold transition-colors"
            >
              <Mail className="h-3 w-3" />
              info@photriya.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/photriyaacademy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors text-xs"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/photriyaacademy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors text-xs"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/images/logo.png"
              alt="Photriya Academy"
              width={120}
              height={40}
              className="h-9 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-navy rounded-lg hover:bg-gray-50 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="text-gray-600">
                Login
              </Button>
            </Link>
            <Link href="/batches">
              <Button size="sm" className="bg-navy hover:bg-navy-light text-white shadow-sm">
                Apply Now
              </Button>
            </Link>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="md:hidden p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-6">
              <div className="flex flex-col gap-1 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-2.5 text-base font-medium text-gray-700 hover:text-navy rounded-lg hover:bg-gray-50 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-2 pt-6 border-t border-gray-100">
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link href="/batches" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-navy hover:bg-navy-light text-white">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
