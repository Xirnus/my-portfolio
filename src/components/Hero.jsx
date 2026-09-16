export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" /> Available for opportunities · 2026
        </p>
        <h1>
          Clean Code. <em>Fast Systems.</em>
        </h1>
        <p className="hero-description">
          I&apos;m James, a Computer Science graduate building dependable full-stack products, practical automation, and systems that make complex work feel simple.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            See my work <span aria-hidden="true">↓</span>
          </a>
          <a className="text-link" href="mailto:vercelesjames27@gmail.com">
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="hero-aside">
        <div className="hero-note">
          <span className="note-label">Currently Upskilling</span>
          <strong>
            JavaScript
            &amp; React
          </strong>
          <span className="note-arrow" aria-hidden="true">↗</span>
        </div>
      </div>
    </section>
  );
}
