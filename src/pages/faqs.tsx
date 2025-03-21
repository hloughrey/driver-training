import { FAQS } from "../components/faq";
import { PageLayout } from "../components/common/page-layout";
import { getPageData } from "../lib/data-fetching";
import { PageProps } from "../types";

export async function getStaticProps() {
  return getPageData("faqs");
}

export default function FAQsPage({ attributes, contactDetails }: PageProps) {
  return (
    <PageLayout attributes={attributes} contactDetails={contactDetails}>
      <FAQS faqs={attributes.faqs} />
    </PageLayout>
  );
}
