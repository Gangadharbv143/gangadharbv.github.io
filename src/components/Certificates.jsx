function Certificates() {
  return (
    <section className="py-20 bg-black text-white text-center">
      <h2 className="text-4xl font-bold text-cyan-400 mb-10">
        Certifications
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 px-6">

        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">
            DevOps Training Certificate
          </h3>
          <p>
            Completed DevOps training covering Linux, Docker,
            Jenkins, Kubernetes and AWS basics.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">
            Linux Administration Practice
          </h3>
          <p>
            Practiced Linux commands, shell scripting,
            networking and troubleshooting.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Certificates;