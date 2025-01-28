import Image from "next/image";
import { Section } from "./section";

type InstructorsProps = {
  name: string;
  qualifications: [
    {
      qualification: string;
    }
  ];
  backgroundMuted: boolean;
  media: {
    alt: string;
    image: string;
  };
  media_position: "left" | "right";
};

export function SectionInstructors({
  name,
  qualifications,
  backgroundMuted,
  media,
  media_position,
}: InstructorsProps) {
  return (
    <Section data-cy="node-feature" backgroundMuted={backgroundMuted}>
      <div className="container px-6 mx-auto md:w-3/5 xl:w-3/5">
        <div className="grid items-center gap-8 md:grid-flow-col-dense md:grid-cols-2 md:gap-12">
          {media?.image && (
            <div
              className={`

                ${
                  media_position === "left"
                    ? "md:col-start-1"
                    : "md:col-start-2"
                }
              `}
            >
              <Image
                src={media.image}
                alt={media.alt}
                width={300}
                height={300}
                className={`${
                  media_position === "left"
                    ? "sm:mx-auto md:mr-auto md:ml-0"
                    : "sm:mx-auto md:ml-auto md:mr-0"
                } rounded-lg shadow-xl shadow-blue-gray-900/50 `}
              />
            </div>
          )}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h2 className="text-3xl font-black sm:text-4xl lg:text-5xl md:py-8 lg:py-8">
              {name}
            </h2>
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
          </div>
        </div>
      </div>
    </Section>
  );
}
