import React from "react";

interface PersonStructuredDataProps {
  name: string;
  jobTitle: string;
  description: string;
  image: string;
  experience: number;
  qualifications: { qualification: string }[];
}

export function PersonStructuredData({
  name,
  jobTitle,
  description,
  image,
  experience,
  qualifications,
}: PersonStructuredDataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
  const imageUrl = `${baseUrl}${image}`;

  // Create structured data for a person
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: name,
    jobTitle: jobTitle,
    description: description,
    image: imageUrl,
    knowsAbout: [
      "Emergency Response Driving",
      "C1 Driver Training",
      "Defensive Driving",
    ],
    // Add years of experience as a skill level
    hasSkill: {
      "@type": "DefinedTerm",
      name: "Emergency Response Driving",
      description: `${experience} years of professional experience`,
      inDefinedTermSet: {
        "@type": "DefinedTermSet",
        name: "Driving Skills",
      },
    },
    hasCredential: qualifications.map((q) => ({
      "@type": "EducationalOccupationalCredential",
      name: q.qualification,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
    />
  );
}

interface BusinessServiceStructuredDataProps {
  name: string;
  description: string;
  provider: string;
  serviceType: string;
}

export function BusinessServiceStructuredData({
  name,
  description,
  provider,
  serviceType,
}: BusinessServiceStructuredDataProps) {
  // Create structured data for a business service
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "BusinessService",
    name: name,
    serviceType: serviceType,
    provider: {
      "@type": "Organization",
      name: provider,
    },
    description: description,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
    />
  );
}
