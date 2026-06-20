function Skills() {
  const skillCategories = [
    {
      title: "Operating Systems",
      skills: ["Linux", "Windows"],
    },
    {
      title: "Cloud",
      skills: ["AWS"],
    },
    {
      title: "Containers",
      skills: ["Docker", "Kubernetes"],
    },
    {
      title: "CI/CD",
      skills: ["Git", "GitHub", "Jenkins"],
    },
    {
      title: "Infrastructure as Code",
      skills: ["Terraform", "Ansible"],
    },
    {
      title: "Monitoring",
      skills: ["Prometheus", "Grafana"],
    },
    {
      title: "Scripting",
      skills: ["Shell Scripting", "YAML"],
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-5">
          Technical Skills
        </h2>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16 text-lg">
          Hands-on experience with DevOps tools, cloud technologies,
          automation, containerization, and modern deployment practices.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-cyan-500 rounded-xl p-6 hover:scale-105 hover:border-cyan-400 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-5">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-cyan-500/20 border border-cyan-400 text-cyan-300 px-3 py-2 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;