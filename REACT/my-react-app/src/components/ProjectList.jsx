function ProjectList() {
  const projects = [
    {
      title: "Project A",
      description: "Description of Project A",
      link: "#",
    },
    {
      title: "Project B",
      description: "Description of Project B",
      link: "#",
    },
    {
      title: "Project C",
      description: "Description of Project C",
      link: "#",
    },
  ];
  return (
    <>
      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="projects-item">
              <h3>{project.title}</h3>
              <h3>{project.description}</h3>
              <h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreference"
                >
                  Link
                </a>
              </h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ProjectList;
