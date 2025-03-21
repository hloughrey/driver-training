import { SectionInstructors } from "../components/instructors";
import { PageLayout } from "../components/common/page-layout";
import { getPageData } from "../lib/data-fetching";
import { PageProps } from "../types";

export async function getStaticProps() {
  return getPageData("instructors");
}

export default function Instructors({ attributes, contactDetails }: PageProps) {
  return (
    <PageLayout attributes={attributes} contactDetails={contactDetails}>
      {attributes.team.instructors.map((instructor, idx) => (
        <SectionInstructors
          key={instructor.name.concat("-")}
          {...instructor}
          media_position={idx % 2 === 0 ? "right" : "left"}
          backgroundMuted={idx % 2 !== 0}
        />
      ))}
    </PageLayout>
  );
}
