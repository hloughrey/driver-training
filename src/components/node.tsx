import { SectionCards } from "./section_cards";
import { SectionFAQ } from "./section_faq";
import { SectionFeature } from "./section_feature";
import { SectionHero } from "./section_hero";

const nodeTypes = {
  Cards: SectionCards,
  FAQ: SectionFAQ,
  Feature: SectionFeature,
  Hero: SectionHero,
};

export type NodeTypes = keyof typeof nodeTypes;

export interface NodeItem {
  type: NodeTypes;
  title: string;
  subTitle?: string;
  backgroundMuted?: boolean;
  items?: NodeItem[];
}

export type NodeProps = {
  node: NodeItem;
};

export function Node({ node, ...props }: NodeProps) {
  if (!node) {
    return null;
  }

  const Component = nodeTypes[node.type];

  if (!Component) {
    return null;
  }

  return <Component node={node} {...props} />;
}
