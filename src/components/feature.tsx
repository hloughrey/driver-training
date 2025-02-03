import Image from "next/image";
import classNames from "classnames";

import { Section } from "./section";

type FeatureProps = {
  title: string;
  subTitle?: string;
  backgroundMuted: boolean;
  media?: {
    alt: string;
    image: string;
  };
  media_position: "left" | "right";
};

export function SectionFeature({
  title,
  subTitle,
  backgroundMuted,
  media,
  media_position,
}: FeatureProps) {
  return (
    <Section data-cy="node-feature" backgroundMuted={backgroundMuted}>
      <div className="container px-6 mx-auto">
        <div className="grid items-center gap-8 md:grid-flow-col-dense md:grid-cols-2 md:gap-12">
          {media?.image && (
            <div
              className={classNames(
                media_position === "left" ? "md:col-start-1" : "md:col-start-2"
              )}
            >
              <Image
                src={media.image}
                alt={media.alt}
                width={500}
                height={300}
                className="rounded-lg drop-shadow-lg"
              />
            </div>
          )}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            {title && (
              <h2 className="text-3xl font-black sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {subTitle && (
              <p className="max-w-md mt-4 text-lg font-light leading-relaxed text-gray-500 sm:text-xl lg:text-2xl">
                {subTitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
