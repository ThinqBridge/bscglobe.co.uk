"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import logo from "../images/logo.png";
import { Icon } from "./icons";

const links = [
  { href: "/programmes", label: "Our programmes" },
  { href: "/about", label: "Why BSC Globe" },
  { href: "/programmes/qs-undergraduate-pathway", label: "Your pathway" },
  { href: "/admissions", label: "Admissions" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="utility-bar">
        <div className="container">
          <span>British education. A world of possibility.</span>
          <a href="tel:+447903930607">
            <Icon name="phone" width={13} height={13} /> +44 7903 930607
          </a>
        </div>
      </div>
      <header className="site-header" ref={header}>
        <div className="container header-inner">
          <Link
            href="/"
            className="brand"
            aria-label="BSC Globe Education UK — home"
            onClick={() => setOpen(false)}
          >
            <Image
              src={logo}
              alt=""
              width={57}
              height={60}
              className="brand-logo"
            />
            <span>
              BSC GLOBE<small>EDUCATION UK</small>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <Link href="/contact" className="button button-navy header-cta">
              Let’s talk <Icon name="diagonal" />
            </Link>
            <button
              ref={menuButton}
              className={`menu-toggle ${open ? "is-open" : ""}`}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close navigation" : "Open navigation"}
              onClick={() => setOpen(!open)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
        <nav
          id="mobile-menu"
          className="mobile-nav"
          hidden={!open}
          aria-label="Mobile navigation"
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
              <Icon name="arrow" />
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact Admissions
            <Icon name="arrow" />
          </Link>
        </nav>
      </header>
    </>
  );
}
