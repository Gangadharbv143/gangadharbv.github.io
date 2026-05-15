function Skills() {

  const skills = [
    "Linux",
    "Docker",
    "Jenkins",
    "Kubernetes",
    "AWS",
    "Shell Scripting",
    "Git & GitHub",
    "CI/CD",
  ];

  return (
    <section className="p-20 text-center">
      <h1 className="text-5xl font-bold mb-10 text-cyan-400">
        Skills
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:bg-cyan-500 hover:text-black transition"
          >
            <h2 className="text-xl font-semibold">
              {skill}
            </h2>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Skills;