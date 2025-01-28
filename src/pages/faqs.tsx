import { SectionHero } from "../components/hero";
import { FAQS } from "../components/faq";
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
  }: any = await import("@content/pages/faqs.md");

  return { props: { attributes, html } };
}

export default function index({ attributes }) {
  return (
    <>
      <Meta title={attributes.pageMeta.title} />
      <SectionHero {...attributes.hero} />
      <FAQS faqs={attributes.faqs} />
    </>
  );
}
