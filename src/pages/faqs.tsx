import { FAQS } from "../components/faq";
import { PageLayout } from "../components/common/page-layout";
import { getPageData } from "../lib/data-fetching";
import { PageProps } from "../types";
import Head from "next/head";

export async function getStaticProps() {
  return getPageData("faqs");
}

export default function FAQsPage({ attributes, contactDetails }: PageProps) {
  // Create FAQ structured data for SEO
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: attributes.faqs.flatMap((category) =>
      category.items.map((item) => {
        // Extract question (heading) and answer (content) from the markdown
        const faqContent = item.faq;
        const lines = faqContent
          .split("\n")
          .filter((line) => line.trim() !== "");
        const question = lines[0].replace(/^### /, "").trim();
        const answer = lines.slice(1).join(" ").trim();

        return {
          "@type": "Question",
          name: question,
          acceptedAnswer: {
            "@type": "Answer",
            text: answer,
          },
        };
      })
    ),
  };

  return (
    <>
      <Head>
        {/* Add FAQ structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqStructuredData),
          }}
        />
      </Head>
      <PageLayout attributes={attributes} contactDetails={contactDetails}>
        <FAQS faqs={attributes.faqs} testimonials={attributes.testimonials} />
      </PageLayout>
    </>
  );
}
