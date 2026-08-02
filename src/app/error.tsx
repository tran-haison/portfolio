"use client";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  void error;

  return (
    <main id="main-content" className="not-found-page">
      <div className="section-shell not-found-inner">
        <p className="eyebrow">Signal interrupted</p>
        <h1>
          Something drifted{" "}
          <span>off course.</span>
        </h1>
        <p>The studio hit an unexpected error. Reconnect to try this route again.</p>
        <button className="button button-primary" type="button" onClick={reset}>
          Reconnect
          <span aria-hidden="true">↻</span>
        </button>
      </div>
    </main>
  );
}
