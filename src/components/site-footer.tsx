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
        <p>Independent digital studio · Working worldwide</p>
        <div className="footer-links">
          <Link href="/work">Work</Link>
          <Link href="/#about">Studio</Link>
          <a href="https://www.linkedin.com/in/tranhaison/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/tran-haison" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:nosiahstudio@gmail.com">Email</a>
        </div>
        <p className="footer-fineprint">
          © {new Date().getFullYear()} Nosiah Studios
        </p>
      </div>
    </footer>
  );
}
