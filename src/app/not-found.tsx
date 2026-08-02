import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found-page">
      <div className="section-shell not-found-inner">
        <p className="eyebrow">Error / 404 / Lost coordinate</p>
        <h1>
          Nothing orbits{" "}
          <span>at this address.</span>
        </h1>
        <p>The page may have moved, or the signal was never here.</p>
        <Link className="button button-primary" href="/">
          Return to the studio
          <span aria-hidden="true">↖</span>
        </Link>
      </div>
    </main>
  );
}
