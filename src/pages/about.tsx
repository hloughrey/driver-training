import { SectionAbout } from "../components/about";
import { PageLayout } from "../components/common/page-layout";
import { getPageData } from "../lib/data-fetching";
import { PageProps } from "../types";

export async function getStaticProps() {
  return getPageData("about");
}

export default function About({ attributes, contactDetails }: PageProps) {
  return (
    <PageLayout attributes={attributes} contactDetails={contactDetails}>
      <SectionAbout content={attributes.content} />
    </PageLayout>
  );
}
