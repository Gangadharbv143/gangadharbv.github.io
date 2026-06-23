import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-cyan-400 cursor-pointer">
          Gangadhar<span className="text-white">BV</span>
        </h1>

        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-white text-lg">

          <a href="#home" className="hover:text-cyan-400 transition">
            Home
          </a>

          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>

          <a href="#certificates" className="hover:text-cyan-400 transition">
            Certificates
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>

          {/* Live Portfolio */}
          <a
            href="https://gangadharbv-github-io-9wnq.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition"
          >
            Live Portfolio
          </a>

        </div>

        {/* Mobile Menu */}
        <div className="md:hidden text-white text-2xl cursor-pointer">
          ☰
        </div>

      </div>
    </nav>
  );
}

export default Navbar;