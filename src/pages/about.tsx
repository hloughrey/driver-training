import { Meta } from "../components/meta";
import { SectionAbout } from "../components/about";
import { SectionHero } from "../components/hero";

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
  }: any = await import("@content/pages/about.md");

  const {
    default: { attributes: contactDetails },
  }: any = await import("@content/settings/contact.md");

  return { props: { attributes, contactDetails, html } };
}

export default function About({ attributes, contactDetails }) {
  return (
    <>
      <Meta title={attributes.pageMeta.title} />
      <SectionHero
        {...attributes.hero}
        phoneNumber={contactDetails.telephone}
      />
      <SectionAbout content={attributes.content} />
    </>
  );
}
