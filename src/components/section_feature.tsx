// import Image from "next/image";
// import classNames from "classnames";

// import { absoluteURL } from "lib/utils/absolute-url";
// import { Links } from "./links";
import { FormattedText } from "./formatted-text";
import { NodeProps } from "./node";
import { Section } from "./section";

export function SectionFeature({ node, ...props }: NodeProps) {
  return node?.items?.map((node, index) => (
    <Section
      key={index}
      data-cy="node-feature"
      backgroundColor={node.backgroundMuted ? "bg-gray-50" : undefined}
      {...props}
    >
      <div className="container px-6 mx-auto">
        <div className="grid items-center gap-8 md:grid-flow-col-dense md:grid-cols-2 md:gap-12">
          {/* {node.media?.media_image && (
            <div
              className={classNames(
                node.media_position === "left"
                  ? "md:col-start-1"
                  : "md:col-start-2"
              )}
            >
              <Image
                src={absoluteURL(node.media.media_image.uri.url)}
                alt={node.media.media_image.resourceIdObjMeta.alt}
                // width={500}
                // height={300}
                // layout="responsive"
                // objectFit="cover"
                className="rounded-lg"
              />
            </div>
          )} */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            {node.title && (
              <h2 className="text-3xl font-black sm:text-4xl lg:text-5xl">
                {node.title}
              </h2>
            )}
            {node.subTitle && (
              <FormattedText
                className="max-w-md mt-4 text-lg font-light leading-relaxed text-gray-500 sm:text-xl lg:text-2xl"
                processed={node.subTitle}
              />
            )}
            {/* {node.link && <Links links={[node.link]} />} */}
          </div>
        </div>
      </div>
    </Section>
  ));
}
