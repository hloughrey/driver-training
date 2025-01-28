import { SectionCards } from "../components/cards";
import { SectionHero } from "../components/hero";
import { SectionFeature } from "../components/feature";
import { SectionPricing } from "../components/pricing";
import { Meta } from "../components/meta";

type HomePageProps = {
  props: {
    attributes: any;
    html?: any;
  };
};

export async function getStaticProps(): Promise<HomePageProps> {
  const {
    default: { attributes, html },
  }: any = await import("@content/pages/home.md");

  return { props: { attributes, html } };
}

export default function index({ attributes }) {
  return (
    <>
      <Meta title={attributes.pageMeta.title} />
      <SectionHero {...attributes.hero} />
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
    </>
  );
}
