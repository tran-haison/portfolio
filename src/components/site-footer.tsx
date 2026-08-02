import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-inner">
        <Link className="wordmark footer-wordmark" href="/" aria-label="Nosiah Studios home">
          <span className="wordmark-symbol" aria-hidden="true">N/S</span>
          <span className="wordmark-text">
            Nosiah
            <small>Studios</small>
          </span>
        </Link>
        <p>Independent digital studio · Melbourne, Australia</p>
        <div className="footer-links">
          <Link href="/work">Work</Link>
          <Link href="/#about">Studio</Link>
          <a href="mailto:hello@nosiah.studio">Email</a>
        </div>
        <p className="footer-fineprint">
          © {new Date().getFullYear()} Nosiah Studios
        </p>
      </div>
    </footer>
  );
}

