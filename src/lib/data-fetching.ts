import { StaticPropsReturn } from "../types";

/**
 * Fetches page data and contact details for static props
 * @param pagePath - Path to the page markdown file
 * @returns Promise with page data and contact details
 */
export async function getPageData(
  pagePath: string
): Promise<StaticPropsReturn> {
  // Import page content
  const {
    default: { attributes, html },
  }: any = await import(`@content/pages/${pagePath}.md`);

  // Import contact details
  const {
    default: { attributes: contactDetails },
  }: any = await import("@content/settings/contact.md");

  return {
    props: {
      attributes,
      contactDetails,
      html,
    },
  };
}
