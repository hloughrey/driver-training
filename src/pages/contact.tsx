import { ContactForm } from "../components/contact";
import { PageLayout } from "../components/common/page-layout";
import { getPageData } from "../lib/data-fetching";
import { PageProps } from "../types";

export async function getStaticProps() {
  return getPageData("contact");
}

export default function Contact({ attributes, contactDetails }: PageProps) {
  return (
    <PageLayout attributes={attributes} contactDetails={contactDetails}>
      <ContactForm {...attributes.contact} />
    </PageLayout>
  );
}
