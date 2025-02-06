import { SectionCards } from "../components/cards";
import { SectionHero } from "../components/hero";
import { SectionFeature } from "../components/feature";
import { SectionPricing } from "../components/pricing";
import { Meta } from "../components/meta";

type HomePageProps = {
  props: {
    attributes: any;
    contactDetails: {
      telephone: number;
      email: string;
    };
    html?: any;
  };
};

export async function getStaticProps(): Promise<HomePageProps> {
  const {
    default: { attributes, html },
  }: any = await import("@content/pages/home.md");

  const {
    default: { attributes: contactDetails },
  }: any = await import("@content/settings/contact.md");

  return { props: { attributes, contactDetails, html } };
}

export default function index({ attributes, contactDetails }) {
  return (
    <>
      <Meta title={attributes.pageMeta.title} />
      <SectionHero
        {...attributes.hero}
        phoneNumber={contactDetails.telephone}
      />
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
