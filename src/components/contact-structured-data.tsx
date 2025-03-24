import React from "react";

interface ContactPageStructuredDataProps {
  businessName: string;
  telephone: string;
  email: string;
  description: string;
  url: string;
}

export function ContactPageStructuredData({
  businessName,
  telephone,
  email,
  description,
  url,
}: ContactPageStructuredDataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
  const pageUrl = `${baseUrl}${url}`;

  // Create structured data for the contact page
  const contactData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${businessName}`,
    description: description,
    url: pageUrl,
    mainEntity: {
      "@type": "Organization",
      name: businessName,
      telephone: telephone,
      email: email,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: telephone,
        email: email,
        contactType: "customer service",
        availableLanguage: "English",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(contactData) }}
    />
  );
}

interface LocalBusinessStructuredDataProps {
  businessName: string;
  telephone: string;
  email: string;
  description: string;
  url: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  geo?: {
    latitude?: number;
    longitude?: number;
  };
  openingHours?: string[];
  priceRange?: string;
}

export function LocalBusinessStructuredData({
  businessName,
  telephone,
  email,
  description,
  url,
  address,
  geo,
  openingHours,
  priceRange,
}: LocalBusinessStructuredDataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
  const pageUrl = `${baseUrl}${url}`;

  // Create structured data for the local business
  const businessData: any = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessName,
    description: description,
    url: pageUrl,
    telephone: telephone,
    email: email,
    priceRange: priceRange || "££",
    image: `${baseUrl}/android-chrome-512x512.png`,
    sameAs: [
      // Add social media profiles here if available
    ],
  };

  // Add address if provided
  if (address) {
    businessData.address = {
      "@type": "PostalAddress",
      streetAddress: address.streetAddress || "",
      addressLocality: address.addressLocality || "",
      addressRegion: address.addressRegion || "",
      postalCode: address.postalCode || "",
      addressCountry: address.addressCountry || "UK",
    };
  }

  // Add geo coordinates if provided
  if (geo && geo.latitude && geo.longitude) {
    businessData.geo = {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    };
  }

  // Add opening hours if provided
  if (openingHours && openingHours.length > 0) {
    businessData.openingHoursSpecification = openingHours.map((hours) => {
      const [days, timeRange] = hours.split(" ");
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: days,
        opens: timeRange.split("-")[0],
        closes: timeRange.split("-")[1],
      };
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
    />
  );
}
