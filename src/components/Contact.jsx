function Contact() {
  return (
    <div className="text-center text-white mt-16 mb-10">
      <h2 className="text-4xl font-bold text-cyan-400 mb-6">
        Contact
      </h2>

      <div className="space-y-4 text-xl">
        <p>
          📧 Email:
          <a
            href="mailto:gangadhargangadharbv@gmail.com"
            className="text-cyan-300 hover:text-cyan-400 ml-2"
          >
            gangadhargangadharbv@gmail.com
          </a>
        </p>

        <p>
          💻 GitHub:
          <a
            href="https://github.com/Gangadharbv143"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:text-cyan-400 ml-2"
          >
            Gangadharbv143
          </a>
        </p>

        <p>
          🔗 LinkedIn:
          <a
            href="https://linkedin.com/in/gangadharbv"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:text-cyan-400 ml-2"
          >
            linkedin.com/in/gangadharbv
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;