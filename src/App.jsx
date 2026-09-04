import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';

export default function App() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="James Verceles home">
          <span className="brand-mark">JV</span>
          <span>James Verceles</span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="mailto:james.verceles@example.com">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </header>
      <div id="top">
        <Hero />
      </div>
      <Projects />
      <Skills />
      <footer id="contact" className="site-footer">
        <div>
          <p className="eyebrow">Have a project in mind?</p>
          <h2>Let&apos;s build something useful.</h2>
        </div>
        <a className="footer-link" href="mailto:james.verceles@example.com">
          james.verceles@example.com <span aria-hidden="true">↗</span>
        </a>
      </footer>
    </main>
  );
}