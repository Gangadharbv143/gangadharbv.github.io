function About() {
  return (
    <section
      id="about"
      className="bg-gray-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>

            <h3 className="text-3xl font-bold mb-6">
              Passionate About DevOps & Cloud Technologies
            </h3>

            <p className="text-gray-400 leading-8 text-lg mb-6">
              I am a BE graduate passionate about DevOps, Linux,
              Cloud Computing, and Automation. I have gained
              hands-on experience by building real-world DevOps
              projects involving Git, GitHub, Jenkins, Docker,
              Kubernetes, AWS, and Terraform.
            </p>

            <p className="text-gray-400 leading-8 text-lg">
              I enjoy learning new technologies, automating
              deployment processes, solving infrastructure
              challenges, and continuously improving my technical
              skills. My goal is to begin my career as a DevOps
              Engineer where I can contribute, learn, and grow.
            </p>

          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-black border border-cyan-500 rounded-xl p-6 text-center hover:scale-105 transition">
              <h3 className="text-4xl font-bold text-cyan-400">
                8+
              </h3>
              <p className="text-gray-400 mt-2">
                DevOps Tools
              </p>
            </div>

            <div className="bg-black border border-cyan-500 rounded-xl p-6 text-center hover:scale-105 transition">
              <h3 className="text-4xl font-bold text-cyan-400">
                4+
              </h3>
              <p className="text-gray-400 mt-2">
                Projects
              </p>
            </div>

            <div className="bg-black border border-cyan-500 rounded-xl p-6 text-center hover:scale-105 transition">
              <h3 className="text-4xl font-bold text-cyan-400">
                Linux
              </h3>
              <p className="text-gray-400 mt-2">
                System Administration
              </p>
            </div>

            <div className="bg-black border border-cyan-500 rounded-xl p-6 text-center hover:scale-105 transition">
              <h3 className="text-4xl font-bold text-cyan-400">
                AWS
              </h3>
              <p className="text-gray-400 mt-2">
                Cloud Deployment
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;