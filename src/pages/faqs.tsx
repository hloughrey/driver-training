import { SectionHero } from "../components/hero";
import { FAQS } from "../components/faq";
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
  }: any = await import("@content/pages/faqs.md");

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
      <FAQS faqs={attributes.faqs} />
    </>
  );
}
