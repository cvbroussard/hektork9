import type { Metadata } from "next";
import { spaceGrotesk, ibmPlexSans, ibmPlexMono } from "@/lib/fonts";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { LocalBusinessSchema } from "@/components/structured-data";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Hektor K9 | Dog Training in West Palm Beach",
    template: "%s | Hektor K9",
  },
  description:
    "Professional dog training in West Palm Beach. Schutzhund/IPG and Nepopo methodology. AKC CGC Evaluator. Private consultations, obedience programs, and puppy development.",
  metadataBase: new URL("https://hektork9.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Hektor K9",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <LocalBusinessSchema />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
