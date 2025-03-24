import { ContactForm } from "../components/contact";
import { PageLayout } from "../components/common/page-layout";
import { getPageData } from "../lib/data-fetching";
import { PageProps } from "../types";
import {
  ContactPageStructuredData,
  LocalBusinessStructuredData,
} from "../components/contact-structured-data";
import { useRouter } from "next/router";

export async function getStaticProps() {
  return getPageData("contact");
}

export default function Contact({ attributes, contactDetails }: PageProps) {
  const router = useRouter();
  const pageDescription =
    "Get in touch with C1 Driver Training for expert driving instruction. We respond to all inquiries within 24 hours and offer personalized training solutions.";

  return (
    <PageLayout attributes={attributes} contactDetails={contactDetails}>
      {/* Structured data for SEO */}
      <ContactPageStructuredData
        businessName="C1 Driver Training"
        telephone={contactDetails.telephone.toString()}
        email={contactDetails.email}
        description={pageDescription}
        url={router.asPath}
      />

      <LocalBusinessStructuredData
        businessName="C1 Driver Training"
        telephone={contactDetails.telephone.toString()}
        email={contactDetails.email}
        description="C1 Driver Training provides professional driver training services for individuals and companies looking to add the C1 classification to their driver licence."
        url={router.asPath}
        priceRange="££"
      />

      <ContactForm {...attributes.contact} />
    </PageLayout>
  );
}
