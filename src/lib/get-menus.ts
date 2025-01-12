// import { GetStaticPropsContext } from "next";
// import { DrupalMenuLinkContent } from "next-drupal"
// import { drupal } from "lib/drupal"

// export async function getMenus(context: GetStaticPropsContext): Promise<{
//   main: DrupalMenuLinkContent[]
//   footer: DrupalMenuLinkContent[]
// }> {
export async function getMenus(): Promise<any> {
  const main = {};
  const footer = {};

  return {
    main,
    footer,
  };
}
