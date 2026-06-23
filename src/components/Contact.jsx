import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-20 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-5xl font-bold text-cyan-400 mb-6">
          Get In Touch
        </h2>

        <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-8">
          I'm actively seeking opportunities as a{" "}
          <strong>DevOps Engineer</strong>,{" "}
          <strong>Cloud Engineer</strong>, or{" "}
          <strong>Linux System Administrator</strong>.
          Feel free to contact me regarding job opportunities,
          collaborations, or professional networking.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Email */}
          <div className="bg-gray-900 border border-cyan-500 rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/30 transition">
            <h3 className="text-xl font-bold text-cyan-400 mb-3">
              📧 Email
            </h3>

            <a
              href="mailto:gangadhargangadharbv@gmail.com"
              className="text-gray-300 hover:text-cyan-400 break-all"
            >
              gangadhargangadharbv@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-gray-900 border border-cyan-500 rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/30 transition">
            <h3 className="text-xl font-bold text-cyan-400 mb-3">
              📞 Phone
            </h3>

            <p className="text-gray-300">
              +91 YOUR_PHONE_NUMBER
            </p>
          </div>

          {/* GitHub */}
          <div className="bg-gray-900 border border-cyan-500 rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/30 transition">
            <h3 className="text-xl font-bold text-cyan-400 mb-3">
              💻 GitHub
            </h3>

            <a
              href="https://github.com/Gangadharbv143"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 break-all"
            >
              github.com/Gangadharbv143
            </a>
          </div>

          {/* LinkedIn */}
          <div className="bg-gray-900 border border-cyan-500 rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/30 transition">
            <h3 className="text-xl font-bold text-cyan-400 mb-3">
              🔗 LinkedIn
            </h3>

            <a
              href="https://linkedin.com/in/gangadharbv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 break-all"
            >
              linkedin.com/in/gangadharbv
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;