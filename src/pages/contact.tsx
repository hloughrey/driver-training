import { Meta } from "../components/meta";
import { ContactForm } from "../components/contact";
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
  }: any = await import("@content/pages/contact.md");

  return { props: { attributes, html } };
}

export default function Contact({ attributes }) {
  return (
    <>
      <Meta title={attributes.pageMeta.title} />
      <SectionHero {...attributes.hero} />
      <ContactForm {...attributes.contact} />
    </>
  );
}
