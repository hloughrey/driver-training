import Image from "next/image";
import { HTMLReactParserOptions } from "html-react-parser";
import { Element } from "domhandler";
import parse from "html-react-parser";

import { isRelative } from "../lib/utils/is-relative";
import Link from "next/link";

const options: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof Element) {
      if (domNode.name === "img") {
        // const { src, alt, width = 100, height = 100 } = domNode.attribs;
        const { src, alt } = domNode.attribs;

        if (isRelative(src)) {
          return (
            <Image
              src={`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/${src}`}
              width={100}
              height={100}
              alt={alt}
              layout="intrinsic"
              objectFit="cover"
            />
          );
        }
      }

      if (domNode.name === "a") {
        const { href, class: className } = domNode.attribs;

        if (href && isRelative(href)) {
          return (
            <Link href={href} passHref>
              {/* <a className={className}>{domToReact(domNode.children)}</a> */}
              <a className={className}></a>
            </Link>
          );
        }
      }

      if (domNode.name === "input") {
        if (domNode.attribs.value === "") {
          delete domNode.attribs.value;
        }

        return domNode;
      }
    }
  },
};

interface FormattedTextProps extends React.HTMLAttributes<HTMLDivElement> {
  format?: string;
  processed: string;
  value?: string;
}

export function FormattedText({ processed, ...props }: FormattedTextProps) {
  return (
    <div data-cy="node--body" {...props}>
      {parse(processed, options)}
    </div>
  );
}
