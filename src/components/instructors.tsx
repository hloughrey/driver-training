import { MediaSection } from "./common/media-section";
import { MediaSectionProps } from "../types";

interface InstructorsProps extends MediaSectionProps {
  name: string;
  specialization: string;
  experience: number;
  bio: string;
  qualifications: [
    {
      qualification: string;
    },
  ];
}

/**
 * Instructors section component that uses the reusable MediaSection
 * Enhanced for better accessibility and SEO
 */
export function SectionInstructors({
  name,
  specialization,
  experience,
  bio,
  qualifications,
  ...props
}: InstructorsProps) {
  // Create a unique ID for this instructor section for better navigation
  const instructorId = name.toLowerCase().replace(/\s+/g, "-");

  return (
    <MediaSection
      {...props}
      title={name}
      containerClassName="md:w-3/5 xl:w-3/5"
      imageWidth={300}
      imageHeight={300}
      imageClassName="rounded-lg shadow-xl shadow-blue-gray-900/50"
      data-cy="node-instructor"
      id={instructorId}
      aria-labelledby={`${instructorId}-name`}
    >
      <div className="mt-2">
        <h3
          id={`${instructorId}-name`}
          className="text-xl font-bold text-gray-800 mb-1"
        >
          {specialization}
        </h3>
        <p className="text-md text-gray-600 mb-4">
          <span className="font-semibold">{experience} years</span> of
          professional experience
        </p>

        <p className="text-md text-gray-700 mb-6">{bio}</p>
      </div>

      {qualifications && (
        <dl
          className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700"
          aria-label={`Qualifications for ${name}`}
        >
          <div className="flex flex-col pb-3">
            <dt className="mb-1 font-semibold text-gray-500 md:text-lg dark:text-rose-600">
              Qualifications
            </dt>
            {qualifications.map(({ qualification }, idx) => (
              <dd
                key={idx}
                className="py-2 text-lg text-zinc-600"
                aria-label={qualification}
              >
                {qualification}
              </dd>
            ))}
          </div>
        </dl>
      )}
    </MediaSection>
  );
}
