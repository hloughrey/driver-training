import { SectionHeader } from "./header";
import { Section } from "./section";

type CardsProps = {
  title: string;
  subTitle?: string;
  items: CardsProps[];
  backgroundMuted?: boolean;
};

export function SectionPricing({
  title,
  subTitle,
  items,
  backgroundMuted,
}: CardsProps) {
  return (
    <Section backgroundMuted={backgroundMuted}>
      <SectionHeader heading={title} text={subTitle} />
      <div className="container px-6 mx-auto">
        {items?.length && (
          <div className="grid justify-center gap-20 pt-20 lg:grid-cols-3">
            {items.map((card) => (
              <div
                key={card.title.concat("-")}
                className="max-w-sm text-center lg:max-w-none"
              >
                <h3 className="text-2xl font-bold">{card.title}</h3>
                {card.subTitle && (
                  <p className="pt-2 text-lg font-light leading-tight text-gray-500 sm:text-xl">
                    {card.subTitle}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
