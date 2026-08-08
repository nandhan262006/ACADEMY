import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a8 8 0 0 0-2.5 15.5c-.2-1.2.0-2.5.5-3.6l2-8c-.4-.8-.4-1.8 0-2.6a1.8 1.8 0 0 1 3.2 1c0 1.2-.8 2.8-1.2 4.2-.3 1.4.7 2.5 2 2.5 2.5 0 4.2-3 4.2-6.5 0-3.5-2.5-5.8-5.8-5.8-4 0-6.4 2.8-6.4 6 0 1 .4 2 1 2.8" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="space-y-5 sm:col-span-2 lg:col-span-4">
            <Image
              src="/images/logo.png"
              alt="Photriya Academy"
              width={89}
              height={56}
              className="h-14 w-auto"
            />
            <p className="text-white/70 text-sm leading-relaxed">
              Learn photography from industry experts with live online classes.
              Master DSLR, composition, lighting, editing, and more from the
              comfort of your home.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <a
                href="https://www.instagram.com/photriyaacademy/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-all text-white/80 hover:text-white"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>
              <a
                href="https://x.com/PhotriyaVenky"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-all text-white/80 hover:text-white"
              >
                <XIcon className="h-4 w-4" />
                X
              </a>
              <a
                href="https://www.facebook.com/PhotriyaPhotography/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-all text-white/80 hover:text-white"
              >
                <FacebookIcon className="h-4 w-4" />
                Facebook
              </a>
              <a
                href="https://in.pinterest.com/photriya/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-all text-white/80 hover:text-white"
              >
                <PinterestIcon className="h-4 w-4" />
                Pinterest
              </a>
              <a
                href="https://www.youtube.com/@PhotriyaVenky"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-all text-white/80 hover:text-white"
              >
                <YoutubeIcon className="h-4 w-4" />
                YouTube
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-semibold mb-5 text-sm tracking-wider uppercase text-white/60">
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
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-semibold mb-5 text-sm tracking-wider uppercase text-white/60">
              Courses
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/courses/online-photography-course"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Online Photography & Videography Course
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/offline-photography-course"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Offline Photography &amp; Videography Course
                </Link>
              </li>
              <li>
                <span className="text-white/50 text-sm block">Advanced Photography — Coming Soon</span>
              </li>
              <li>
                <span className="text-white/50 text-sm block">Video Editing Masterclass — Coming Soon</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-semibold mb-5 text-sm tracking-wider uppercase text-white/60">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919618855959"
                  className="flex items-center gap-3 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0 text-white/40" />
                  +91 9618855959
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@photriya.com"
                  className="flex items-center gap-3 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0 text-white/40" />
                  info@photriya.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-white/40" />
                <span>Hyderabad, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400 text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} Photriya Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/faq" className="hover:text-white/70 transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-white/70 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
