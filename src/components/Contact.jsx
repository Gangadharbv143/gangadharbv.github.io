import React from "react";

function Contact() {
  return (
    <div id="contact" className="text-center text-white mt-20 mb-10 px-6">
      
      <h2 className="text-4xl font-bold text-cyan-400 mb-6">
        Get In Touch
      </h2>

      <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
        I'm actively seeking opportunities as a{" "}
        <strong>DevOps Engineer</strong>,{" "}
        <strong>Cloud Engineer</strong>, or{" "}
        <strong>Linux System Administrator</strong>. Feel free to contact me
        for job opportunities, collaborations, or professional networking.
      </p>

      <div className="space-y-5 text-lg">

        {/* Email */}
        <p>
          📧 Email:
          <a
            href="mailto:gangadhargangadharbv@gmail.com"
            className="text-cyan-300 hover:text-cyan-400 ml-2"
          >
            gangadhargangadharbv@gmail.com
          </a>
        </p>

        {/* Phone */}
        <p>
          📞 Phone:
          <span className="text-cyan-300 ml-2">
            +91 XXXXXXXXXX
          </span>
        </p>

        {/* Location */}
        <p>
          📍 Location:
          <span className="text-cyan-300 ml-2">
            Karnataka, India
          </span>
        </p>

        {/* GitHub */}
        <p>
          💻 GitHub:
          <a
            href="https://github.com/Gangadharbv143"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 hover:text-cyan-400 ml-2"
          >
            github.com/Gangadharbv143
          </a>
        </p>

        {/* LinkedIn */}
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