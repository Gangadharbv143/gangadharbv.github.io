function Projects() {
  return (
    <section className="py-20 bg-gray-950 text-white text-center">
      <h2 className="text-4xl font-bold text-cyan-400 mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto px-6">

        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-3">
            DevOps Portfolio Website
          </h3>

          <p className="mb-4">
            Personal portfolio website built using React, Vite and Tailwind CSS.
          </p>

          <a
            href="https://github.com/Gangadharbv143/portfolio"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400"
          >
            View Project
          </a>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-3">
            DevOps Practice Repository
          </h3>

          <p className="mb-4">
            Linux, Docker, Jenkins, Kubernetes and shell scripting practice files.
          </p>

          <a
            href="https://github.com/Gangadharbv143/devops-practice"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400"
          >
            View Repository
          </a>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-3">
            Kubernetes Flask Deployment Project
          </h3>

          <p className="mb-4">
            Deployed a containerized Flask application on Kubernetes using Minikube.
            Created Deployments, Services and scaled pods for high availability.
          </p>

          <a
            href="https://github.com/Gangadharbv143/kubernetes-flask-project"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400"
          >
            View Project
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;
