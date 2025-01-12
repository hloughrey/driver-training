import { NodeProps } from "./node";
import { SectionHeader } from "./section-header";
import { FormattedText } from "./formatted-text";
import { Section } from "./section";

export function SectionCards({ node, ...props }: NodeProps) {
  return (
    <Section
      backgroundColor={node.backgroundMuted ? "bg-gray-50" : undefined}
      {...props}
    >
      <SectionHeader
        heading={node.title}
        text={node.subTitle}
        // links={node.links}
      />
      <div className="container px-6 mx-auto">
        {node.items?.length && (
          <div className="grid justify-center gap-20 pt-20 lg:grid-cols-3">
            {node.items.map((card) => (
              <div
                key={card.title.concat("-")}
                className="max-w-sm text-center lg:max-w-none"
              >
                <h3 className="text-2xl font-bold">{card.title}</h3>
                {card.subTitle && (
                  <FormattedText
                    processed={card.subTitle}
                    className="pt-2 text-lg"
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
