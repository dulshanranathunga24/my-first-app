import Link from "next/link";

export function Navigation() {
  return (
    <nav className="nav inner-nav" aria-label="Main navigation">
      <Link className="brand" href="/" aria-label="Nexa home">
        <span className="brand-mark"><span /></span>
        <span>Nexa</span>
      </Link>
      <div className="nav-links">
        <Link href="/product">Product</Link>
        <Link href="/solutions">Solutions</Link>
        <Link href="/resources">Resources</Link>
        <Link href="/pricing">Pricing</Link>
      </div>
      <div className="nav-actions">
        <a className="login" href="#">Log in</a>
        <Link className="button button-small" href="/pricing">Start for free <span aria-hidden="true">→</span></Link>
      </div>
      <details className="mobile-menu">
        <summary aria-label="Open navigation menu"><span /><span /><span /></summary>
        <div className="mobile-menu-panel">
          <Link href="/product">Product</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/pricing">Pricing</Link>
          <Link className="mobile-menu-cta" href="/pricing">Start for free <span aria-hidden="true">→</span></Link>
        </div>
      </details>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <Link className="brand" href="/" aria-label="Nexa home">
        <span className="brand-mark"><span /></span><span>Nexa</span>
      </Link>
      <span>© 2026 Nexa, Inc.</span>
      <div className="footer-links"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Contact</a></div>
    </footer>
  );
}
