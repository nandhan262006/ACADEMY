import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4 space-y-5">
            <Image
              src="/images/logo.png"
              alt="Photriya Academy"
              width={150}
              height={50}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Learn photography from industry experts with live online classes.
              Master DSLR, composition, lighting, editing, and more from the
              comfort of your home.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/photriyaacademy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-gold/20 rounded-lg flex items-center justify-center hover:text-gold transition-all text-xs"
              >
                IG
              </a>
              <a
                href="https://www.facebook.com/photriyaacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-gold/20 rounded-lg flex items-center justify-center hover:text-gold transition-all text-xs"
              >
                FB
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold mb-5 text-sm tracking-wider uppercase text-gray-300">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/courses", label: "Courses" },
                { href: "/batches", label: "Batches" },
                { href: "/faq", label: "FAQ" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-semibold mb-5 text-sm tracking-wider uppercase text-gray-300">
              Courses
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/courses/online-photography-course"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Online Photography Course
                </Link>
              </li>
              <li>
                <span className="text-gray-600 text-sm block">Advanced Photography — Coming Soon</span>
              </li>
              <li>
                <span className="text-gray-600 text-sm block">Video Editing Masterclass — Coming Soon</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-semibold mb-5 text-sm tracking-wider uppercase text-gray-300">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919618855959"
                  className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors"
                >
                  <Phone className="h-4 w-4 text-gold shrink-0" />
                  +91 9618855959
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@photriya.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors"
                >
                  <Mail className="h-4 w-4 text-gold shrink-0" />
                  info@photriya.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <span>Hyderabad, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Photriya Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/faq" className="hover:text-gray-300 transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
