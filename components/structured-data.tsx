import { homePageFAQ } from "@/data/faq-data"

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Key Real Estate Capital",
  url: "https://keyrealestatecapital.com",
  logo: "https://keyrealestatecapital.com/miniature.png",
  sameAs: [
    "https://www.linkedin.com/company/key-real-estate-capital/",
  ],
}

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Key Real Estate Capital",
  image: "https://keyrealestatecapital.com/miniature.png",
  url: "https://keyrealestatecapital.com",
  telephone: "(619) 369-4444",
  email: "loans@keyrealestatecapital.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "401 W A St Ste 200",
    addressLocality: "San Diego",
    addressRegion: "CA",
    postalCode: "92101",
    addressCountry: "US",
  },
  areaServed: "US",
  identifier: {
    "@type": "PropertyValue",
    name: "NMLS",
    value: "2676974",
  },
}

export function StructuredData() {
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homePageFAQ.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  )
}
