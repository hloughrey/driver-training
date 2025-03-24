import { JSX } from "react";
import { LinksProps, Links } from "./links";

interface SectionHeaderProps {
  level?: number;
  heading: string;
  text?: string;
  links?: LinksProps["links"];
}

export function SectionHeader({
  level = 2,
  heading,
  text,
  links,
  ...props
}: SectionHeaderProps) {
  const HeadingLevel = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <div className="container px-6 mx-auto text-center" {...props}>
      {heading && (
        <HeadingLevel className="text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl">
          {heading}
        </HeadingLevel>
      )}
      {text && (
        <p className="max-w-3xl mx-auto mt-4 text-xl text-gray-800">{text}</p>
      )}
      {links?.length ? <Links links={links} /> : null}
    </div>
  );
}
