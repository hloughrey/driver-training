import { NodeProps } from "./node";
import { Section } from "./section";
import { SectionHeader } from "./section-header";
import { FormattedText } from "./formatted-text";

export function SectionFAQ({ node, ...props }: NodeProps) {
  return (
    <Section
      data-cy="node-faq"
      backgroundColor={node.backgroundMuted ? "bg-gray-50" : undefined}
      {...props}
    >
      <SectionHeader
        heading={node.title}
        text={node.subTitle}
        // links={node.links}
      />
      <div className="container px-6 mx-auto">
        {node.items && (
          <div className="grid gap-8 pt-10 md:py-20 md:gap-12 lg:gap-20 md:grid-cols-2">
            {node.items.map((card) => (
              <div key={card.title.concat("-")}>
                <h3 className="text-xl font-semibold md:text-2xl">
                  {card.title}
                </h3>
                {card.subTitle && (
                  <FormattedText
                    processed={card.subTitle}
                    className="mt-2 leading-relaxed"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
