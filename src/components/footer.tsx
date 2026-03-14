"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import { BrandReveal } from "./brand-reveal";

export function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) return null;

  return (
    <>
    <BrandReveal />
    <footer className="border-t border-border bg-schwarz">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-nebel">
              Professional dog training in West Palm Beach. Schutzhund/IPG and
              Nepopo methodology. AKC CGC Evaluator.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display mb-4 text-xs font-semibold tracking-[0.2em] text-stahl">
              NAVIGATION
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="/about" className="text-sm text-nebel no-underline hover:text-weiss">
                About
              </Link>
              <Link href="/programs" className="text-sm text-nebel no-underline hover:text-weiss">
                Programs
              </Link>
              <Link href="/results" className="text-sm text-nebel no-underline hover:text-weiss">
                Results
              </Link>
              <Link href="/blog" className="text-sm text-nebel no-underline hover:text-weiss">
                Journal
              </Link>
              <Link href="/book" className="text-sm text-kupfer no-underline hover:text-kupfer-light">
                Book a Consultation
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display mb-4 text-xs font-semibold tracking-[0.2em] text-stahl">
              CONTACT
            </h4>
            <div className="flex flex-col gap-3 text-sm text-nebel">
              <span>West Palm Beach, FL</span>
              <a
                href="tel:+15612318006"
                className="no-underline text-nebel hover:text-weiss"
              >
                (561) 231-8006
              </a>
              <a
                href="mailto:info@hektork9.com"
                className="no-underline text-nebel hover:text-weiss"
              >
                info@hektork9.com
              </a>
            </div>
            <div className="mt-6 flex gap-4">
              <a
                href="https://instagram.com/hektor_k9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stahl no-underline hover:text-kupfer"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@Hektork9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stahl no-underline hover:text-kupfer"
                aria-label="YouTube"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/hektork9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stahl no-underline hover:text-kupfer"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <hr className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-nebel sm:flex-row">
          <span>&copy; {new Date().getFullYear()} Hektor K9. All rights reserved.</span>
          <span>West Palm Beach, Florida</span>
        </div>
      </div>
    </footer>
    </>
  );
}
