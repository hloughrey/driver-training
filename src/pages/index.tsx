import { SectionCards } from "../components/cards";
import { SectionFeature } from "../components/feature";
import { SectionPricing } from "../components/pricing";
import { PageLayout } from "../components/common/page-layout";
import { getPageData } from "../lib/data-fetching";
import { PageProps } from "../types";

export async function getStaticProps() {
  return getPageData("home");
}

export default function Index({ attributes, contactDetails }: PageProps) {
  return (
    <PageLayout attributes={attributes} contactDetails={contactDetails}>
      <SectionCards {...attributes.cards} />
      {attributes.features.items.map((item, idx) => (
        <SectionFeature
          key={item.title.concat("-")}
          {...item}
          media_position={idx % 2 === 0 ? "right" : "left"}
          backgroundMuted={idx % 2 !== 0}
        />
      ))}
      <SectionPricing {...attributes.pricing} />
    </PageLayout>
  );
}
