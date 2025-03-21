import { MediaSection } from "./common/media-section";
import { MediaSectionProps } from "../types";

interface InstructorsProps extends MediaSectionProps {
  name: string;
  qualifications: [
    {
      qualification: string;
    },
  ];
}

/**
 * Instructors section component that uses the reusable MediaSection
 */
export function SectionInstructors({
  name,
  qualifications,
  ...props
}: InstructorsProps) {
  return (
    <MediaSection
      {...props}
      title={name}
      containerClassName="md:w-3/5 xl:w-3/5"
      imageWidth={300}
      imageHeight={300}
      imageClassName="rounded-lg shadow-xl shadow-blue-gray-900/50"
      data-cy="node-instructor"
    >
      {qualifications && (
        <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
          <div className="flex flex-col pb-3">
            <dt className="mb-1 font-semibold text-gray-500 md:text-lg dark:text-rose-600">
              Qualifications
            </dt>
            {qualifications.map(({ qualification }, idx) => (
              <dd key={idx} className="py-2 text-lg text-zinc-600">
                {qualification}
              </dd>
            ))}
          </div>
        </dl>
      )}
    </MediaSection>
  );
}
