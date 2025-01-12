import classNames from "classnames";

import { NodeProps } from "./node";
// import { MediaImage } from "./media--image";
import { SectionHeader } from "./section-header";

export function SectionHero({ node, ...props }: NodeProps) {
  return (
    <section
      data-cy="paragraph-hero"
      className={classNames(
        "pt-8 md:pt-12 lg:pt-20"
        // node.media?.media_image
        //   ? "pb-0 md:pb-0 border-b"
        //   : "pb-8 md:pb-12 lg:pb-20"
      )}
      {...props}
    >
      <SectionHeader
        level={1}
        heading={node.title}
        text={node.subTitle}
        // links={node.links}
      />
      <div className="container px-6 mx-auto">
        {/* {node.media && (
          <div className="w-full h-40 mt-6 overflow-hidden sm:rounded-t-xl md:mt-12 lg:mt-20 md:h-56 lg:h-80">
            <MediaImage
              media={node.media}
              // objectFit="cover"
              // priority
            />
          </div>
        )} */}
      </div>
    </section>
  );
}
