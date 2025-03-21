import { SectionHeader } from "./header";
import { Section } from "./section";

type CardsProps = {
  title: string;
  subTitle?: string;
  items: CardsProps[];
  backgroundMuted?: boolean;
};

// Helper component for the checkmark icon
const CheckmarkIcon = () => (
  <svg
    className="w-5 h-5 text-rose-700 mr-2 mt-0.5 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    ></path>
  </svg>
);

export function SectionPricing({
  title,
  subTitle,
  items,
  backgroundMuted,
}: CardsProps) {
  // Find the items by title if they exist
  const basicPackage = items?.find((item) => item.title === "Basic Packages");
  const whatsIncluded = items?.find((item) => item.title === "What's Included");
  const flexibleOptions = items?.find(
    (item) => item.title === "Flexible Options"
  );

  return (
    <Section backgroundMuted={backgroundMuted}>
      <SectionHeader heading={title} text={subTitle} />
      <div className="container px-6 mx-auto">
        {items?.length && (
          <div className="flex justify-center pt-20">
            <div className="max-w-3xl w-full p-8 border rounded-lg drop-shadow-lg hover:shadow-lg transition-shadow duration-300">
              {/* Price Header */}
              <div className="text-center mb-10">
                <h3 className="text-3xl font-black sm:text-4xl">
                  C1 Driver Training Pricing
                </h3>
                <div className="mt-6 inline-block px-8 py-4 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-black">£850 - £1,150</p>
                </div>
              </div>

              {/* Basic Package Section */}
              {basicPackage && (
                <div className="mb-8">
                  <h4 className="text-2xl font-bold mb-4">
                    {basicPackage.title}
                  </h4>
                  <p className="text-lg font-light leading-relaxed text-gray-500 mb-6">
                    {basicPackage.subTitle}
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckmarkIcon />
                      <span>Initial training needs assessment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckmarkIcon />
                      <span>Personalized training package</span>
                    </li>
                    <li className="flex items-start">
                      <CheckmarkIcon />
                      <span>First driving test fee included</span>
                    </li>
                  </ul>
                </div>
              )}

              {/* Divider */}
              <div className="border-t border-gray-200 my-8"></div>

              {/* What's Included Section */}
              {whatsIncluded && (
                <div className="mb-8">
                  <h4 className="text-2xl font-bold mb-4">
                    {whatsIncluded.title}
                  </h4>
                  <p className="text-lg font-light leading-relaxed text-gray-500">
                    {whatsIncluded.subTitle}
                  </p>
                </div>
              )}

              {/* Divider */}
              <div className="border-t border-gray-200 my-8"></div>

              {/* Flexible Options Section */}
              {flexibleOptions && (
                <div>
                  <h4 className="text-2xl font-bold mb-4">
                    {flexibleOptions.title}
                  </h4>
                  <p className="text-lg font-light leading-relaxed text-gray-500">
                    {flexibleOptions.subTitle}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
