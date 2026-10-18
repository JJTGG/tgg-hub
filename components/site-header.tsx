
const navigation = [
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

function NavigationLinks({ mobile = false }: { mobile?: boolean }) {
  return (
    <>
      {navigation.map((item) => (
        <a
          className={mobile ? "mobile-navigation__link" : "desktop-navigation__link"}
          href={item.href}
          key={item.href}
        >
          {item.label}
        </a>
      ))}
    </>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="wordmark" href="/" aria-label="TGG HUB home">
          <span className="wordmark__name">TGG</span>
          <span className="wordmark__suffix">HUB</span>
        </a>

        <nav className="desktop-navigation" aria-label="Primary navigation">
          <NavigationLinks />
        </nav>

        <details className="mobile-navigation">
          <summary aria-label="Open navigation menu">
            <span>Menu</span>
            <span className="mobile-navigation__icon" aria-hidden="true">
              <span />
              <span />
            </span>
          </summary>
          <nav className="mobile-navigation__panel" aria-label="Mobile navigation">
            <NavigationLinks mobile />
          </nav>
        </details>
      </div>
    </header>
  );
}
