const currentYear = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__main">
          <div className="site-footer__identity">
            <a
              className="wordmark"
              href="/"
              aria-label="TGG HUB home"
            >
              <span className="wordmark__name">TGG</span>
              <span className="wordmark__suffix">HUB</span>
            </a>
            <p>Different projects. Shared direction.</p>
          </div>

          <nav
            className="site-footer__navigation"
            aria-label="Footer navigation"
          >
            <a href="/ecosystem">Ecosystem</a>
            <a href="/web3">Web3</a>
            <a href="/services">Services</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>

        <div className="site-footer__bottom">
          <span>© {currentYear} TGG HUB.</span>
          <span>
            Independent work, connected by direction.
          </span>
        </div>
      </div>
    </footer>
  );
}