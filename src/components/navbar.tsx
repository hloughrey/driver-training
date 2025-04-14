import React from "react";
import { useRouter } from "next/router";
import classNames from "classnames";
import Image from "next/image";

import Link from "next/link";

interface NavbarProps {
  links: any[];
}

export function Navbar({ links, ...props }: NavbarProps) {
  const { locale } = useRouter();

  return (
    <header
      className="static top-0 z-50 flex-shrink-0 py-4 bg-white md:sticky"
      {...props}
    >
      <div className="container flex flex-col items-start justify-between px-6 mx-auto md:flex-row md:items-center">
        <Link
          href="/"
          locale={locale}
          className="text-lg font-bold mx-auto md:mx-0"
          passHref
        >
          <Image
            src="/images/Logo.svg"
            alt="C1 Driver Training logo"
            width={200}
            height={24}
            style={{ height: "auto" }}
            priority
          />
        </Link>

        {links ? <Menu items={links} /> : null}
      </div>
    </header>
  );
}

function Menu({ items }: { items: any[] }) {
  return (
    <ul
      className="grid grid-flow-col gap-4 mx-auto mt-6 md:mt-0 auto-cols-auto md:auto-rows-auto md:gap-8 lg:gap-12"
      data-cy="navbar-menu"
    >
      {items.map((item) => (
        <MenuLink link={item} key={item.id} />
      ))}
    </ul>
  );
}

function MenuLink({ link }: { link: any }) {
  const { asPath } = useRouter();

  return (
    <li>
      <Link
        rel="canonical"
        href={link.url}
        className={classNames(
          "py-4 hover:underline text-sm md:text-base",
          link.url === asPath ? "font-semibold" : "font-normal"
        )}
        passHref
      >
        {link.title}
      </Link>
    </li>
  );
}
