"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./logo";

const links = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/results", label: "Results" },
  { href: "/blog", label: "Journal" },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  if (pathname?.startsWith("/admin")) return null;

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-schwarz/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="no-underline">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-display text-sm font-medium tracking-wide no-underline transition-colors ${
                pathname === link.href
                  ? "text-kupfer"
                  : "text-stahl hover:text-weiss"
              }`}
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
          <Link
            href="/book"
            className="font-display rounded border border-kupfer bg-transparent px-5 py-2 text-sm font-medium tracking-wide text-kupfer no-underline transition-colors hover:bg-kupfer hover:text-schwarz"
          >
            BOOK CONSULTATION
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-weiss transition-transform ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-weiss transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-weiss transition-transform ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-schwarz px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-display text-base font-medium tracking-wide no-underline ${
                  pathname === link.href
                    ? "text-kupfer"
                    : "text-stahl hover:text-weiss"
                }`}
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={() => setMobileOpen(false)}
              className="font-display mt-2 rounded border border-kupfer bg-transparent px-5 py-3 text-center text-sm font-medium tracking-wide text-kupfer no-underline transition-colors hover:bg-kupfer hover:text-schwarz"
            >
              BOOK CONSULTATION
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
