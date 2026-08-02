import Link from "next/link";

const navigation = [
  { href: "/#work", label: "Work" },
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/#about", label: "Studio" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="section-shell header-inner">
        <Link className="wordmark" href="/" aria-label="Nosiah Studios home">
          <span className="wordmark-symbol" aria-hidden="true">N/S</span>
          <span className="wordmark-text">
            Nosiah
            <small>Studios</small>
          </span>
        </Link>

        <nav className="primary-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="header-contact" href="mailto:hello@nosiah.studio">
          <span>Let&apos;s talk</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}

