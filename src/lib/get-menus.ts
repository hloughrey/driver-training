/**
 * Menu item interface
 */
export interface MenuItem {
  id: string;
  url: string;
  title: string;
}

/**
 * Menu structure interface
 */
export interface Menus {
  main: MenuItem[];
  footer: MenuItem[];
}

/**
 * Get all menus for the application
 * @returns Promise with menu structure
 */
export async function getMenus(): Promise<Menus> {
  // Main navigation menu
  const main = [
    { id: "home", url: "/", title: "Home" },
    { id: "about", url: "/about", title: "About" },
    { id: "instructors", url: "/instructors", title: "Instructors" },
    { id: "faqs", url: "/faqs", title: "FAQs" },
    { id: "contact", url: "/contact", title: "Contact Us" },
  ];

  // Footer menu (currently empty but can be expanded)
  const footer: MenuItem[] = [];

  return {
    main,
    footer,
  };
}
