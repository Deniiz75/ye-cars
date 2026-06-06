"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";
import { Logo } from "./logo";

const nav = [
  ["/aanbod", "Aanbod"],
  ["/diensten", "Diensten"],
  ["/over-ons", "Over ons"],
  ["/verkocht", "Verkocht"],
] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell header__inner">
        <Logo />
        <nav className={`nav${open ? " nav--open" : ""}`} aria-label="Hoofdnavigatie">
          {nav.map(([href, label]) => (
            <Link
              className={pathname.startsWith(href) ? "nav__link nav__link--active" : "nav__link"}
              href={href}
              key={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link className="button button--gold nav__contact" href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </nav>
        <button
          className="menu-button"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          aria-expanded={open}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
}
