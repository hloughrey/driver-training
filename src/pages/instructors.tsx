import { SectionInstructors } from "../components/instructors";
import { PageLayout } from "../components/common/page-layout";
import { getPageData } from "../lib/data-fetching";
import { PageProps } from "../types";
import {
  PersonStructuredData,
  BusinessServiceStructuredData,
} from "../components/structured-data";
import Head from "next/head";

export async function getStaticProps() {
  return getPageData("instructors");
}

export default function Instructors({ attributes, contactDetails }: PageProps) {
  return (
    <>
      <Head>
        {/* Add structured data for the C1 driver training service */}
        <BusinessServiceStructuredData
          name="C1 Driver Training for Paramedics"
          description="Professional C1 driver training for paramedics and emergency response personnel with experienced instructors"
          provider="C1 Driver Training"
          serviceType="Emergency Response Driver Training"
        />

        {/* Add structured data for each instructor */}
        {attributes.team.instructors.map((instructor) => (
          <PersonStructuredData
            key={`structured-data-${instructor.name}`}
            name={instructor.name}
            jobTitle={instructor.specialization}
            description={instructor.bio}
            image={instructor.media.image}
            experience={instructor.experience}
            qualifications={instructor.qualifications}
          />
        ))}
      </Head>

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
    </>
  );
}
