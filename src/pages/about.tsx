import { Meta } from "../components/meta";
import { SectionAbout } from "../components/about";
import { SectionHero } from "../components/hero";

type HomePageProps = {
  props: {
    attributes: any;
    html?: any;
  };
};

export async function getStaticProps(): Promise<HomePageProps> {
  const {
    default: { attributes, html },
  }: any = await import("@content/pages/about.md");

  return { props: { attributes, html } };
}

export default function About({ attributes }) {
  return (
    <>
      <Meta title={attributes.pageMeta.title} />
      <SectionHero {...attributes.hero} />
      <SectionAbout content={attributes.content} />
    </>
  );
}
