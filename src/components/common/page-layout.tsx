import React from "react";
import { PageProps } from "../../types";
import { Meta } from "../meta";
import { SectionHero } from "../hero";

interface PageLayoutProps extends PageProps {
  children?: React.ReactNode;
}

/**
 * Common page layout component that handles meta and hero sections
 */
export function PageLayout({
  attributes,
  contactDetails,
  children,
}: PageLayoutProps) {
  // Get page-specific meta description if available
  const metaDescription = attributes.pageMeta.description || undefined;

  // Use hero image as OG image if available
  const ogImage = attributes.hero?.media?.image || undefined;

  return (
    <>
      <Meta
        title={attributes.pageMeta.title}
        description={metaDescription}
        ogImage={ogImage}
      />
      <SectionHero
        {...attributes.hero}
        phoneNumber={contactDetails.telephone}
      />
      {children}
    </>
  );
}
