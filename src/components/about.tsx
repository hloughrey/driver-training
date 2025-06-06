import { Markdown } from "./markdown";
import { Section } from "./section";

type AboutProps = {
  content: any;
};

export function SectionAbout({ content }: AboutProps) {
  return (
    <Section data-cy="node-faq">
      <div className="container px-6 mx-auto md:w-3/5 xl:w-3/5">
        <Markdown>{content}</Markdown>
      </div>
    </Section>
  );
}
