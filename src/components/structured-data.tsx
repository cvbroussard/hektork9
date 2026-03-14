const PROVIDER = {
  "@type": "LocalBusiness",
  name: "Hektor K9",
  url: "https://hektork9.com",
};

const AREA_SERVED = [
  { "@type": "City", name: "West Palm Beach" },
  { "@type": "City", name: "Palm Beach" },
  { "@type": "City", name: "Jupiter" },
  { "@type": "City", name: "Wellington" },
  { "@type": "City", name: "Boca Raton" },
  { "@type": "City", name: "Delray Beach" },
];

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", ...data }),
      }}
    />
  );
}

export function LocalBusinessSchema() {
  return (
    <JsonLd
      data={{
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
        areaServed: AREA_SERVED,
        priceRange: "$225-$300 per session",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "07:00",
          closes: "19:00",
        },
        sameAs: [
          "https://instagram.com/hektor_k9",
          "https://youtube.com/@Hektork9",
          "https://linkedin.com/company/hektork9",
        ],
      }}
    />
  );
}

export function ServiceSchema({
  services,
}: {
  services: { name: string; description: string; price: string }[];
}) {
  return (
    <>
      {services.map((s) => (
        <JsonLd
          key={s.name}
          data={{
            "@type": "Service",
            serviceType: "Dog Training",
            name: s.name,
            description: s.description,
            provider: PROVIDER,
            areaServed: AREA_SERVED,
            offers: {
              "@type": "Offer",
              price: s.price,
              priceCurrency: "USD",
            },
          }}
        />
      ))}
    </>
  );
}

export function FAQSchema({
  questions,
}: {
  questions: { question: string; answer: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@type": "FAQPage",
        mainEntity: questions.map((q) => ({
          "@type": "Question",
          name: q.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: q.answer,
          },
        })),
      }}
    />
  );
}

export function ReviewSchema({
  reviews,
  ratingValue,
  reviewCount,
}: {
  reviews: { body: string; author: string }[];
  ratingValue: number;
  reviewCount: number;
}) {
  return (
    <JsonLd
      data={{
        "@type": "LocalBusiness",
        name: "Hektor K9",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue,
          reviewCount,
          bestRating: 5,
        },
        review: reviews.map((r) => ({
          "@type": "Review",
          reviewBody: r.body,
          author: { "@type": "Person", name: r.author },
          reviewRating: {
            "@type": "Rating",
            ratingValue: 5,
            bestRating: 5,
          },
        })),
      }}
    />
  );
}

export function PersonSchema() {
  return (
    <JsonLd
      data={{
        "@type": "Person",
        name: "Charles Broussard",
        jobTitle: "Founder & Head Trainer",
        worksFor: PROVIDER,
        knowsAbout: [
          "Dog Training",
          "Schutzhund",
          "IPG",
          "Nepopo Method",
          "AKC Canine Good Citizen",
        ],
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Professional Certification",
          name: "AKC Canine Good Citizen Evaluator",
        },
      }}
    />
  );
}

export function ArticleSchema({
  title,
  description,
  datePublished,
  url,
}: {
  title: string;
  description: string;
  datePublished: string;
  url: string;
}) {
  return (
    <JsonLd
      data={{
        "@type": "Article",
        headline: title,
        description,
        datePublished,
        url,
        author: {
          "@type": "Person",
          name: "Charles Broussard",
          jobTitle: "AKC CGC Evaluator",
          url: "https://hektork9.com/about",
        },
        publisher: {
          "@type": "Organization",
          name: "Hektor K9",
          url: "https://hektork9.com",
        },
      }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: `https://hektork9.com${item.href}`,
        })),
      }}
    />
  );
}
