import * as React from "react";

import { Navbar } from "./navbar";
import { Footer } from "./footer";

export interface LayoutProps {
  children?: React.ReactNode;
}

const menus = {
  main: [
    { id: "home", url: "/", title: "Home" },
    { id: "about", url: "/about", title: "About" },
    { id: "instructors", url: "/instructors", title: "Instructors" },
    { id: "faqs", url: "/faqs", title: "FAQs" },
    { id: "contact", url: "/contact", title: "Contact Us" },
  ],
  footer: [],
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar links={menus.main} />
      <main className="flex-1">{children}</main>
      {/* <Footer links={menus.footer} /> */}
      <Footer />
    </div>
  );
}
