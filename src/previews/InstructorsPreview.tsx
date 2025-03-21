import React from "react";
import { PreviewProvider } from "./PreviewContext";
import { SectionHero } from "../components/hero";
import { Section } from "../components/section";
import { processEntryData, processMedia } from "./utils";

export const InstructorsPreview = ({ entry, getAsset }) => {
  const data = processEntryData(entry);

  const heroData = {
    ...data.hero,
    media: processMedia(data.hero?.media),
  };

  // Process instructor images
  const instructors =
    data.team?.instructors?.map((instructor) => ({
      ...instructor,
      media: processMedia(instructor.media),
    })) || [];

  return (
    <PreviewProvider value={{ entry, getAsset }}>
      <div className="preview-container">
        <SectionHero
          {...heroData}
          phoneNumber="01234567890" // Placeholder for preview
        />
        <Section>
          <div className="container px-6 mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {instructors.map((instructor, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                  {instructor.media?.image && (
                    <div className="mb-4">
                      <img
                        src={instructor.media.image}
                        alt={instructor.media.alt || instructor.name}
                        className="rounded-full w-32 h-32 object-cover mx-auto"
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-center">
                    {instructor.name}
                  </h3>
                  {instructor.qualifications?.length > 0 && (
                    <ul className="mt-2 text-gray-600">
                      {instructor.qualifications.map((qual, idx) => (
                        <li key={idx} className="text-center">
                          {qual.qualification}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>
    </PreviewProvider>
  );
};
