import React from "react";

function App() {
  return (
    <div>

      {/* HEADER / HOME */}
      <section id="home">
        <h1>Hi, I'm Gangadhar</h1>
        <h3>DevOps Engineer | Cloud Enthusiast</h3>
      </section>

      <hr />

      {/* ABOUT */}
      <section id="about">
        <h2>About Me</h2>
        <p>
          I am a DevOps enthusiast skilled in Docker, Kubernetes, AWS, CI/CD,
          and Linux. I have built multiple real-world projects and a portfolio website.
        </p>
      </section>

      <hr />

      {/* PROJECTS */}
      <section id="projects">
        <h2>My Projects</h2>

        <ul>
          <li>Kubernetes CI/CD Pipeline Project</li>
          <li>Docker Containerization Project</li>
          <li>AWS DevOps Deployment Project</li>
        </ul>

        {/* LIVE LINK */}
        <a
          href="https://your-live-link.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          🚀 View Live Portfolio
        </a>
      </section>

      <hr />

      {/* CERTIFICATES */}
      <section id="certificates">
        <h2>Certificates</h2>

        <ul>
          <li>AWS Certification</li>
          <li>Docker Essentials</li>
          <li>Kubernetes Training</li>
          <li>DevOps Internship Certificate</li>
          <li>CI/CD Training Program</li>
        </ul>
      </section>

      <hr />

      {/* FOOTER */}
      <footer>
        <p>© 2026 Gangadhar</p>

        <a
          href="https://your-live-link.vercel.app"
          target="_blank"
          rel="noreferrer"
        >
          Live Portfolio
        </a>
      </footer>

    </div>
  );
}

export default App;
