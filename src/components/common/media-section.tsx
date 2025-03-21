import Image from "next/image";
import classNames from "classnames";
import { MediaSectionProps } from "../../types";
import { Section } from "../section";

/**
 * A reusable section component with media and content
 * Used as a base for feature and instructor sections
 */
export function MediaSection({
  title,
  subTitle,
  backgroundMuted,
  media,
  media_position,
  children,
  containerClassName = "",
  imageWidth = 500,
  imageHeight = 300,
  imageClassName = "rounded-lg drop-shadow-lg",
}: MediaSectionProps & {
  children?: React.ReactNode;
  containerClassName?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageClassName?: string;
}) {
  return (
    <Section data-cy="node-media-section" backgroundMuted={backgroundMuted}>
      <div className={`container px-6 mx-auto ${containerClassName}`.trim()}>
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
                width={imageWidth}
                height={imageHeight}
                className={imageClassName}
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
            {children}
          </div>
        </div>
      </div>
    </Section>
  );
}
