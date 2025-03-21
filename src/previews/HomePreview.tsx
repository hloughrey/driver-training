import React from "react";
import { PreviewProvider } from "./PreviewContext";
import { SectionHero } from "../components/hero";
import { SectionCards } from "../components/cards";
import { SectionFeature } from "../components/feature";
import { SectionPricing } from "../components/pricing";
import { processEntryData, processMedia } from "./utils";

export const HomePreview = ({ entry, getAsset }) => {
  const data = processEntryData(entry);

  // Process hero data
  const heroData = {
    ...data.hero,
    media: processMedia(data.hero?.media),
  };

  // Process features data
  const featuresData = {
    items:
      data.features?.items?.map((item) => ({
        ...item,
        media: processMedia(item.media),
      })) || [],
  };

  return (
    <PreviewProvider value={{ entry, getAsset }}>
      <div className="preview-container">
        <SectionHero
          {...heroData}
          phoneNumber="01234567890" // Placeholder for preview
        />
        <SectionCards {...data.cards} />
        {featuresData.items.map((item, idx) => (
          <SectionFeature
            key={item.title || idx}
            {...item}
            media_position={idx % 2 === 0 ? "right" : "left"}
            backgroundMuted={idx % 2 !== 0}
          />
        ))}
        <SectionPricing {...data.pricing} />
      </div>
    </PreviewProvider>
  );
};
