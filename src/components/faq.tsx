import { Markdown } from "./markdown";
import { Section } from "./section";

type FAQProps = {
  faqs: any[];
};

export function FAQS({ faqs }: FAQProps) {
  return (
    <Section data-cy="node-faq">
      <div className="container px-6 mx-auto md:w-3/5 xl:w-3/5">
        {faqs && (
          <>
            {faqs.map(({ faq }, index) => (
              <div key={index} className="pb-8">
                <Markdown>{faq}</Markdown>
              </div>
            ))}
          </>
        )}
      </div>
    </Section>
  );
}
