function Practice() {
  return (
    <section className="py-20 px-6 bg-gray-950 text-white text-center">
      <h2 className="text-4xl font-bold mb-10 text-cyan-400">
        DevOps Practice
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-3">Linux Commands</h3>
          <p>
            Practiced file permissions, process management,
            networking commands, cron jobs, SSH and package management.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-3">Docker</h3>
          <p>
            Worked with Docker containers, Dockerfiles,
            image creation and container management.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-3">Docker Compose</h3>
          <p>
            Created multi-container applications using docker-compose.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-3">Jenkins</h3>
          <p>
            Practiced Jenkins installation, pipelines and CI/CD automation.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-3">Kubernetes</h3>
          <p>
            Worked with pods, deployments, scaling and rollback concepts.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-3">Shell Scripting</h3>
          <p>
            Created basic shell scripts for automation and Linux tasks.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Practice;