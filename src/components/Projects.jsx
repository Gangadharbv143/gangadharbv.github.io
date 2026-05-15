function Projects() {

  const projects = [
    {
      title: "Docker Jenkins CI/CD Project",
      description:
        "Implemented CI/CD pipeline using Docker, Jenkins and GitHub integration.",
      github:
        "https://github.com/Gangadharbv143/docker-jenkins-ci-cd-project",
    },

    {
      title: "Flask CI/CD Project",
      description:
        "Built and deployed Flask application using Docker and Jenkins automation.",
      github:
        "https://github.com/Gangadharbv143/flask-cicd-project",
    },
  ];

  return (
    <section className="p-20 bg-gray-950 text-center">

      <h1 className="text-5xl font-bold mb-10 text-cyan-400">
        Projects
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 p-8 rounded-xl shadow-lg"
          >

            <h2 className="text-2xl font-bold mb-4">
              {project.title}
            </h2>

            <p className="text-gray-400 mb-6">
              {project.description}
            </p>

            <a
              href={project.github}
              target="_blank"
              className="bg-cyan-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400"
            >
              View Project
            </a>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;