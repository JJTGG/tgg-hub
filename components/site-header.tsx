"use client";

import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "@/components/theme-switcher";

const navigation = [
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/web3", label: "Web3" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

function NavigationLinks({
  mobile = false,
  pathname
}: {
  mobile?: boolean;
  pathname: string;
}) {
  return (
    <>
      {navigation.map((item) => (
        <a
          className={
            mobile
              ? "mobile-navigation__link"
              : "desktop-navigation__link"
          }
          href={item.href}
          key={item.href}
          aria-current={
            pathname === item.href ? "page" : undefined
          }
        >
          {item.label}
        </a>
      ))}
    </>
  );
}

export function SiteHeader() {
  const pathname = usePathname() ?? "/";

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a
          className="wordmark"
          href="/"
          aria-label="TGG HUB home"
          aria-current={pathname === "/" ? "page" : undefined}
        >
          <span className="wordmark__name">TGG</span>
          <span className="wordmark__suffix">HUB</span>
        </a>

        <nav
          className="desktop-navigation"
          aria-label="Primary navigation"
        >
          <NavigationLinks pathname={pathname} />
        </nav>

        <div className="site-header__actions">
          <ThemeSwitcher />

          <details className="mobile-navigation">
            <summary aria-label="Toggle primary navigation">
              <span>Menu</span>
              <span
                className="mobile-navigation__icon"
                aria-hidden="true"
              >
                <span />
                <span />
              </span>
            </summary>

            <nav
              className="mobile-navigation__panel"
              aria-label="Mobile navigation"
            >
              <NavigationLinks
                mobile
                pathname={pathname}
              />
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}feat(theme): add theme switcher and active navigation