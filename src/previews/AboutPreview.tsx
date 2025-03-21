import React from "react";
import { PreviewProvider } from "./PreviewContext";
import { SectionHero } from "../components/hero";
import { Section } from "../components/section";
import ReactMarkdown from "react-markdown";
import { processEntryData, processMedia } from "./utils";

export const AboutPreview = ({ entry, getAsset }) => {
  const data = processEntryData(entry);

  // Process image paths
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
          <div className="container px-6 mx-auto prose lg:prose-xl">
            <ReactMarkdown>{data.content || ""}</ReactMarkdown>
          </div>
        </Section>
      </div>
    </PreviewProvider>
  );
};
