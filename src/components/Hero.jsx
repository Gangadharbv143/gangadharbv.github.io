import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">

      <img
        src={profile}
        alt="profile"
        className="w-40 h-40 rounded-full border-4 border-cyan-400 shadow-lg mb-6 object-cover"
      />

      <h1 className="text-6xl font-bold mb-4">
        Hi, I'm Gangadhar
      </h1>

      <p className="text-2xl text-gray-400">
        Aspiring DevOps Engineer
      </p>

      <p className="mt-4 max-w-xl text-gray-500">
        Skilled in Linux, Docker, Jenkins,
        Kubernetes, AWS and CI/CD pipeline development.
      </p>

    </section>
  );
}

export default Hero;