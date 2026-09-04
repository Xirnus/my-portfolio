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
    <section>
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
            <li key={index}>
                <h3>{project.title}</h3>
                <pi>{project.description}</pi>

                <div>
                    {project.tech.map((item, techIndex) =>(
                        <span key={techIndex}>#{item} </span>
                    ))}
                </div>

                <div>
                    <a href={project.github}>Github</a> | <a href={project.demo}>Live Demo</a>
                </div>
            </li>
        ))}
      </ul>
    </section>
  );
}