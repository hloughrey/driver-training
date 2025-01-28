import { Meta } from "../components/meta";
import { SectionHero } from "../components/hero";
import { SectionInstructors } from "../components/instructors";

type TeamProps = {
  props: {
    attributes: any;
    html?: any;
  };
};

export async function getStaticProps(): Promise<TeamProps> {
  const {
    default: { attributes, html },
  }: any = await import("@content/pages/instructors.md");

  return { props: { attributes, html } };
}

export default function Instructors({ attributes }) {
  return (
    <>
      <Meta title={attributes.pageMeta.title} />
      <SectionHero {...attributes.hero} />
      {attributes.team.instructors.map((instructor, idx) => (
        <SectionInstructors
          key={instructor.name.concat("-")}
          {...instructor}
          media_position={idx % 2 === 0 ? "right" : "left"}
          backgroundMuted={idx % 2 !== 0}
        />
      ))}
    </>
  );
}
