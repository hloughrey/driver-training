import { SectionHeader } from "./header";
import { Section } from "./section";
import Link from "next/link";

type CardsProps = {
  title: string;
  subTitle?: string;
  items: CardsProps[];
  backgroundMuted?: boolean;
};

export function SectionCards({
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
                className="max-w-sm text-center lg:max-w-none p-6 rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white relative"
              >
                {/* Add decorative accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>

                <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                {card.subTitle && (
                  <p className="pt-2 text-lg font-normal leading-tight text-gray-700 sm:text-xl mb-4">
                    {card.subTitle}
                  </p>
                )}

                {/* Add call-to-action */}
                <Link
                  href="/contact"
                  className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
