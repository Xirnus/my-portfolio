export default function Skills() {
  const skills = ['Python', 'React', 'JavaScript', 'Flask', 'MySQL', 'HTML / CSS'];

  return (
    <section id="skills" className="skills-section">
      <div>
        <p className="eyebrow">The toolkit</p>
        <h2>
          Curious by default.
          <br />
          <em>Useful by design.</em>
        </h2>
      </div>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill-item" key={skill}>
            <span>0{index + 1}</span>
            <strong>{skill}</strong>
            <span aria-hidden="true">↗</span>
          </div>
        ))}
      </div>
    </section>
  );
}
