function Contact() {
  return (
    <section className="p-20 text-center">

      <h1 className="text-5xl font-bold mb-10 text-cyan-400">
        Contact
      </h1>

      <div className="space-y-6 text-lg">

        <p>
          📧 Email:
          <span className="text-gray-400 ml-2">
            gangadhargangadharbv@gmail.com
          </span>
        </p>

        <p>
          💻 GitHub:
          <a
            href="https://github.com/Gangadharbv143"
            target="_blank"
            className="text-cyan-400 ml-2 hover:underline"
          >
            github.com/Gangadharbv143
          </a>
        </p>

        <p>
          🔗 LinkedIn:
          <span className="text-gray-400 ml-2">
            https://www.linkedin.com/in/gangadharbv 
          </span>
        </p>

      </div>

    </section>
  );
}

export default Contact;