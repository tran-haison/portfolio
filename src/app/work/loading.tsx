export default function WorkLoading() {
  return (
    <main id="main-content" className="interior-page" aria-busy="true">
      <div className="section-shell loading-shell">
        <p className="eyebrow">Locating coordinates</p>
        <div className="loading-line loading-line-large" />
        <div className="loading-line" />
        <span className="sr-only">Loading work</span>
      </div>
    </main>
  );
}

