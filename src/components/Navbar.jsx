function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-cyan-400 cursor-pointer">
          Gangadhar<span className="text-white">.</span>
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">

          <li>
            <a href="#home" className="hover:text-cyan-400 transition duration-300">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-cyan-400 transition duration-300">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-cyan-400 transition duration-300">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-cyan-400 transition duration-300">
              Projects
            </a>
          </li>

          <li>
            <a href="#certificates" className="hover:text-cyan-400 transition duration-300">
              Certificates
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-400 transition duration-300">
              Contact
            </a>
          </li>

        </ul>

        {/* Resume Button */}
        <a
          href="/Gangadhar_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-5 py-2 rounded-lg transition duration-300"
        >
          Resume
        </a>

      </div>
    </nav>
  );
}

export default Navbar;