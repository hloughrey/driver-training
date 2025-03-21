import React from "react";
import { PreviewProvider } from "./PreviewContext";
import { SectionHero } from "../components/hero";
import { processEntryData, processMedia } from "./utils";

export const ContactPreview = ({ entry, getAsset }) => {
  const data = processEntryData(entry);

  const heroData = {
    ...data.hero,
    media: processMedia(data.hero?.media),
  };

  return (
    <PreviewProvider value={{ entry, getAsset }}>
      <div className="preview-container">
        <SectionHero
          {...heroData}
          phoneNumber="01234567890" // Placeholder for preview
        />
        {/* Contact form would go here in a real implementation */}
        <div className="container px-6 mx-auto py-12">
          <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Contact Form Preview</h2>
            <p className="text-gray-600 mb-4">
              This is a placeholder for the contact form in preview mode.
            </p>
          </div>
        </div>
      </div>
    </PreviewProvider>
  );
};
