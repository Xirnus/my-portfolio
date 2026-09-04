export default function Projects() {
  const projects = [
    {
      title: 'AI Restaurant Automation Platform',
      category: 'fullstack',
      tech: ['Flask', 'React', 'Gemini API', 'RAG'],
      description: 'Multi-tenant AI platform automating customer support workflows using Retrieval-Augmented Generation.',
      github: '#',
      demo: '#'
    },
    {
      title: 'OJT Management & OSINT Verification Portal',
      category: 'fullstack',
      tech: ['Flask', 'React', 'MySQL', 'OSINT'],
      description: 'Full-stack internal portal streamlining data management and automated verification workflows.',
      github: '#',
      demo: '#'
    },
    {
      title: 'Micro-Transaction Hotspot System',
      category: 'systems',
      tech: ['Python', 'MikroTik RouterOS API', 'Networking'],
      description: 'Public internet hotspot solution designed for low-bandwidth environments.',
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="work" className="work-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2>Things I&apos;ve made</h2>
        </div>
        <span className="project-count">03 / 03</span>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article key={project.title} className="project-card">
            <div className="project-topline">
              <span>0{index + 1}</span>
              <span>{project.category}</span>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-list">
                {project.tech.map((item) => (
                  <span key={item}>#{item}</span>
                ))}
              </div>
            </div>
            <div className="project-links">
              <a href={project.github}>GitHub <span aria-hidden="true">↗</span></a>
              <a href={project.demo}>Live demo <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
