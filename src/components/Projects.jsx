import cicdProject from "../assets/projects/cicd-project.png";
import kubernetesProject from "../assets/projects/kubernetes-project.png";
import monitoringProject from "../assets/projects/monitoring-project.png";
import helmProject from "../assets/projects/helm-project.png";
import portfolioProject from "../assets/projects/portfolio-project.png";

function Projects() {
  const projects = [
    {
      title: "End-to-End CI/CD Kubernetes Deployment",
      description:
        "Designed and implemented a complete CI/CD pipeline using GitHub, Jenkins, Docker, Docker Hub and Kubernetes. Code pushed to GitHub automatically triggers Jenkins using a webhook, builds a Docker image, pushes it to Docker Hub and deploys the latest version to a Kubernetes cluster.",
      tech: ["GitHub", "Jenkins", "Docker", "Docker Hub", "Kubernetes"],
      github: "https://github.com/Gangadharbv143/cicd-k8s-project",
      live: "",
      image: cicdProject,
      featured: true,
    },
    {
      title: "Advanced Kubernetes Projects",
      description:
        "Implemented real-world Kubernetes concepts including Namespaces, ConfigMaps, Secrets, RBAC, HPA, StatefulSets, DaemonSets, Jobs, CronJobs, Storage, Ingress and ArgoCD.",
      tech: [
        "Kubernetes",
        "RBAC",
        "ConfigMaps",
        "Secrets",
        "ArgoCD",
      ],
      github: "https://github.com/Gangadharbv143",
      live: "",
      image: kubernetesProject,
    },
    {
      title: "Prometheus & Grafana Monitoring",
      description:
        "Configured Prometheus and Grafana to monitor Kubernetes workloads, visualize application metrics and improve system observability.",
      tech: ["Prometheus", "Grafana", "Kubernetes"],
      github: "https://github.com/Gangadharbv143",
      live: "",
      image: monitoringProject,
    },
    {
      title: "Helm Package Management",
      description:
        "Created reusable Helm Charts and managed Kubernetes application deployments with upgrades, rollbacks and version control.",
      tech: ["Helm", "Kubernetes"],
      github: "https://github.com/Gangadharbv143",
      live: "",
      image: helmProject,
    },
    {
      title: "DevOps Portfolio Website",
      description:
        "Developed and deployed a responsive portfolio using React, Vite and Tailwind CSS to showcase DevOps projects, certifications and technical skills.",
      tech: ["React", "Vite", "Tailwind CSS"],
      github: "https://github.com/Gangadharbv143/portfolio",
      live: "",
      image: portfolioProject,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-2 transition duration-300 ${
                project.featured ? "border-2 border-cyan-400" : ""
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                {project.featured && (
                  <span className="inline-block bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-bold mb-4">
                    ⭐ Featured Project
                  </span>
                )}

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-5 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 flex-wrap">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-cyan-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-cyan-300 transition"
                  >
                    GitHub
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="border border-cyan-400 text-cyan-400 px-5 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;