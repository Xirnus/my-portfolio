export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" /> Available for opportunities · 2026
        </p>
        <h1>
          Software that feels <em>considered.</em>
        </h1>
        <p className="hero-description">
          I&apos;m James, a Computer Science graduate building dependable full-stack products, practical automation, and systems that make complex work feel simple.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            See my work <span aria-hidden="true">↓</span>
          </a>
          <a className="text-link" href="mailto:james.verceles@example.com">
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="hero-aside">
        <div className="hero-note">
          <span className="note-label">Currently exploring</span>
          <strong>
            AI-assisted workflows
            <br />
            &amp; resilient backends
          </strong>
          <span className="note-arrow" aria-hidden="true">↗</span>
        </div>
      </div>
    </section>
  );
}
