function Projects() {
  const projects = [
    {
      title: "End-to-End CI/CD Kubernetes Deployment",
      description:
        "Built a complete CI/CD pipeline using GitHub, Jenkins, Docker, Docker Hub and Kubernetes to automate application deployment.",
      tech: ["GitHub", "Jenkins", "Docker", "Docker Hub", "Kubernetes"],
      github: "https://github.com/Gangadharbv143/cicd-k8s-project",
      featured: true,
    },
    {
      title: "Advanced Kubernetes Projects",
      description:
        "Implemented Namespaces, ConfigMaps, Secrets, RBAC, HPA, StatefulSets, DaemonSets, Jobs, CronJobs and ArgoCD.",
      tech: ["Kubernetes", "ArgoCD", "RBAC", "HPA"],
      github: "https://github.com/Gangadharbv143",
    },
    {
      title: "Prometheus & Grafana Monitoring",
      description:
        "Configured Prometheus and Grafana to monitor Kubernetes workloads and visualize metrics.",
      tech: ["Prometheus", "Grafana", "Kubernetes"],
      github: "https://github.com/Gangadharbv143",
    },
    {
      title: "Helm Package Management",
      description:
        "Created and managed Kubernetes applications using Helm charts with version upgrades and rollbacks.",
      tech: ["Helm", "Kubernetes"],
      github: "https://github.com/Gangadharbv143",
    },
    {
      title: "Portfolio Website",
      description:
        "Built and deployed a responsive portfolio using React, Vite and Tailwind CSS.",
      tech: ["React", "Vite", "Tailwind CSS"],
      github: "https://github.com/Gangadharbv143/portfolio",
    },
  ];

  return (
    <section className="py-20 bg-gray-950 text-white">
      <h2 className="text-5xl font-bold text-cyan-400 text-center mb-12">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto px-6 grid gap-8">

        {projects.map((project, index) => (
          <div
            key={index}
            className={`bg-gray-900 rounded-xl shadow-lg p-8 hover:shadow-cyan-500/30 hover:-translate-y-2 transition duration-300 ${
              project.featured ? "border-2 border-cyan-400" : ""
            }`}
          >
            {project.featured && (
              <span className="bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                ⭐ Featured Project
              </span>
            )}

            <h3 className="text-3xl font-bold mt-4 mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((item, i) => (
                <span
                  key={i}
                  className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition"
            >
              View on GitHub →
            </a>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Projects;