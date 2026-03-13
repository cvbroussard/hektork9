export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Hektor K9",
    description:
      "Professional dog training in West Palm Beach using Schutzhund/IPG and Nepopo methodology. AKC CGC Evaluator. Private consultations, obedience programs, and puppy development.",
    url: "https://hektork9.com",
    telephone: "+15612318006",
    email: "info@hektork9.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "West Palm Beach",
      addressRegion: "FL",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "West Palm Beach" },
      { "@type": "City", name: "Palm Beach" },
      { "@type": "City", name: "Jupiter" },
      { "@type": "City", name: "Wellington" },
      { "@type": "City", name: "Boca Raton" },
      { "@type": "City", name: "Delray Beach" },
    ],
    priceRange: "$225-$300 per session",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "19:00",
    },
    sameAs: [
      "https://instagram.com/hektor_k9",
      "https://youtube.com/@Hektork9",
      "https://linkedin.com/company/hektork9",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
