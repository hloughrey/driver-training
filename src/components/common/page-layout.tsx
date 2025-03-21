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
  return (
    <>
      <Meta title={attributes.pageMeta.title} />
      <SectionHero
        {...attributes.hero}
        phoneNumber={contactDetails.telephone}
      />
      {children}
    </>
  );
}
