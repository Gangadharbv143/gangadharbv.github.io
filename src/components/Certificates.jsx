import awsCertificate from "../assets/certificates/aws-certificate.png";
import devopsCertificate from "../assets/certificates/devops-training.png";
import dockerCertificate from "../assets/certificates/docker-essentials.png";
import internshipCertificate from "../assets/certificates/internship-certificate.png";
import kubernetesCertificate from "../assets/certificates/kubernetes-certificate.png";

function Certificates() {
  const certificates = [
    {
      title: "AWS Expert Certification",
      organization: "AWS",
      year: "2025",
      description:
        "Successfully completed AWS certification covering cloud computing concepts, services, and best practices.",
      image: awsCertificate,
    },
    {
      title: "DevOps Training Program",
      organization: "QSpiders Training Institute",
      year: "2025",
      description:
        "Completed hands-on training in Linux, Git, GitHub, Docker, Jenkins, Kubernetes, AWS and CI/CD pipelines.",
      image: devopsCertificate,
    },
    {
      title: "Docker Essentials",
      organization: "Professional Training",
      year: "2025",
      description:
        "Learned Docker containerization, image creation, networking, volumes, and container management.",
      image: dockerCertificate,
    },
    {
      title: "Internship Completion Certificate",
      organization: "Internship Program",
      year: "2025",
      description:
        "Successfully completed internship with practical exposure to DevOps tools and real-world project workflows.",
      image: internshipCertificate,
    },
    {
      title: "Scalable Web Applications on Kubernetes",
      organization: "Professional Training",
      year: "2025",
      description:
        "Completed Kubernetes deployment training covering Pods, Deployments, Services, Scaling, and application orchestration.",
      image: kubernetesCertificate,
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-black text-white">
      <h2 className="text-5xl font-bold text-center text-cyan-400 mb-12">
        Certifications
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-2 transition duration-300"
          >
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                {certificate.title}
              </h3>

              <p className="text-cyan-400 font-semibold mb-2">
                {certificate.organization}
              </p>

              <p className="text-gray-500 mb-4">
                Completed: {certificate.year}
              </p>

              <p className="text-gray-400 leading-7 mb-6">
                {certificate.description}
              </p>

              <a
                href={certificate.image}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-cyan-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition"
              >
                View Certificate →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;