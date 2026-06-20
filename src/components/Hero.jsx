import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black text-white px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <p className="text-cyan-400 text-xl mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-6xl font-bold mb-4">
            Gangadhar B V
          </h1>

          <h2 className="text-3xl text-gray-300 mb-6">
            DevOps Engineer | Linux Administrator
          </h2>

          <p className="text-gray-400 leading-8 text-lg mb-8">
            Passionate about building automated CI/CD pipelines,
            deploying containerized applications using Docker and
            Kubernetes, and automating cloud infrastructure on AWS.
            I enjoy solving real-world infrastructure problems and
            continuously learning modern DevOps technologies.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              "Linux",
              "Git",
              "GitHub",
              "Docker",
              "Jenkins",
              "Kubernetes",
              "AWS",
              "Terraform",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-gray-900 border border-cyan-500 text-cyan-400 px-4 py-2 rounded-full text-sm hover:bg-cyan-500 hover:text-black transition"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5">

            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-lg transition"
            >
              View Projects
            </a>

            <a
              href="/portfolio/resume.pdf"
              download
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold px-6 py-3 rounded-lg transition"
            >
              Download Resume
            </a>

          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="Gangadhar"
            className="w-80 h-80 rounded-full border-4 border-cyan-400 object-cover shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;