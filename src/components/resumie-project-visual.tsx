type ResumieProjectVisualProps = {
  status: string;
};

export function ResumieProjectVisual({ status }: ResumieProjectVisualProps) {
  return (
    <div
      className="project-hero-visual resumie-showcase"
      role="group"
      aria-label="Example of Resumie tailoring a job brief into a resume and cover letter"
    >
      <div className="project-detail-grid" aria-hidden="true" />

      <p className="resumie-workflow-label resumie-input-label">
        <span>01</span>
        Source input
      </p>

      <section className="resumie-input-card" aria-label="Sample job brief">
        <div className="resumie-company">
          <span className="resumie-company-mark" aria-hidden="true">N/E</span>
          <div>
            <small>Company</small>
            <strong>Northstar Energy</strong>
          </div>
        </div>

        <div className="resumie-role">
          <small>Role</small>
          <strong>Software Engineer</strong>
          <span>Product Engineering · Full-time</span>
        </div>

        <div className="resumie-job-description">
          <small>Job description</small>
          <p>Build reliable digital products that make complex customer journeys feel simple.</p>
          <ul>
            <li>Ship full-stack React and Node.js features.</li>
            <li>Design secure APIs and integrations.</li>
            <li>Improve testing and delivery workflows.</li>
          </ul>
        </div>
      </section>

      <div className="resumie-tailor-flow" aria-hidden="true">
        <span />
        <small>Tailor</small>
      </div>

      <p className="resumie-workflow-label resumie-output-label">
        <span>02</span>
        Generated application
      </p>

      <section className="resumie-output" aria-label="Tailored application documents">
        <article className="resumie-document resumie-resume-document">
          <p className="resumie-document-kicker">Tailored resume</p>
          <header>
            <strong>Alex Morgan</strong>
            <span>Software Engineer</span>
            <small>alex.morgan.dev · github.com/alexmorgan</small>
          </header>
          <section>
            <h3>Summary</h3>
            <p>
              Full-stack engineer building reliable customer products across React,
              TypeScript, Node.js, APIs, and cloud delivery.
            </p>
          </section>
          <section>
            <h3>Professional experience</h3>
            <div className="resumie-document-row">
              <strong>Software Engineer</strong>
              <span>2023–Present</span>
            </div>
            <small>Fieldline Digital</small>
            <ul>
              <li>Shipped customer-facing workflows with React and TypeScript.</li>
              <li>Built secure Node.js services and REST API integrations.</li>
              <li>Improved automated delivery and production reliability.</li>
            </ul>
          </section>
          <section>
            <h3>Technical skills</h3>
            <p><strong>Languages:</strong> TypeScript, JavaScript, SQL</p>
            <p><strong>Platform:</strong> React, Next.js, Node.js, PostgreSQL</p>
          </section>
        </article>

        <article className="resumie-document resumie-cover-document">
          <p className="resumie-document-kicker">Matched cover letter</p>
          <header>
            <strong>Alex Morgan</strong>
            <small>alex.morgan.dev</small>
          </header>
          <section className="resumie-letter-copy">
            <span>Software Engineer · Northstar Energy</span>
            <p>Hello Northstar Energy team,</p>
            <p>
              Building reliable customer-facing software has shaped a career across
              full-stack product delivery, secure APIs, and cloud platforms.
            </p>
            <p>
              The Software Engineer opportunity closely matches that experience and
              a practical approach to collaborative, high-quality delivery.
            </p>
            <p>Kind regards,<br />Alex Morgan</p>
          </section>
        </article>
      </section>

      <span className="detail-code" aria-hidden="true">
        NS / RESUMIE / APPLICATION FLOW
      </span>
      <span className="detail-status" aria-hidden="true">{status}</span>
    </div>
  );
}
