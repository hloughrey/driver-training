import { MediaSectionProps } from "../types";
import { MediaSection } from "./common/media-section";

/**
 * Feature section component that uses the reusable MediaSection
 */
export function SectionFeature(props: MediaSectionProps) {
  return <MediaSection {...props} data-cy="node-feature" />;
}
