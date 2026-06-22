function Contact() {
  return (
    <div className="text-center text-white mt-16 mb-10">
      <h2 className="text-4xl font-bold text-cyan-400 mb-6">
        Get In Touch
      </h2>

      <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
        I'm actively seeking opportunities as a <strong>DevOps Engineer</strong>,
        <strong> Cloud Engineer</strong>, or
        <strong> Linux System Administrator</strong>. Feel free to contact me
        for job opportunities, collaborations, or professional networking.
      </p>

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
          📞 Phone:
          <span className="text-cyan-300 ml-2">
            +91 XXXXXXXXXX
          </span>
        </p>

        <p>
          📍 Location:
          <span className="text-cyan-300 ml-2">
            Karnataka, India
          </span>
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