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
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((item, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="text-xs font-medium bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md"
                  >
                    #{item}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-3 border-t border-gray-100 text-sm font-semibold">
                <a href={project.github} className="text-blue-600 hover:underline">GitHub</a>
                <a href={project.demo} className="text-blue-600 hover:underline">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}