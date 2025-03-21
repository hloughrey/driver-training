import React from "react";
import { PreviewProvider } from "./PreviewContext";
import { SectionHero } from "../components/hero";
import { Section } from "../components/section";
import ReactMarkdown from "react-markdown";
import { processEntryData, processMedia } from "./utils";

export const FAQsPreview = ({ entry, getAsset }) => {
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
        <Section>
          <div className="container px-6 mx-auto">
            <div className="max-w-3xl mx-auto">
              {data.faqs?.map((item, idx) => (
                <div key={idx} className="mb-8 border-b pb-6">
                  <ReactMarkdown>{item.faq || ""}</ReactMarkdown>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>
    </PreviewProvider>
  );
};
