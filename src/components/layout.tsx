import * as React from "react";
import { useEffect, useState } from "react";

import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { getMenus, Menus } from "../lib/get-menus";

export interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [menus, setMenus] = useState<Menus>({ main: [], footer: [] });

  useEffect(() => {
    // Fetch menus on client-side
    const fetchMenus = async () => {
      const menuData = await getMenus();
      setMenus(menuData);
    };

    fetchMenus();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar links={menus.main} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
