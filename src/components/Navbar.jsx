function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-gray-900">
      <h1 className="text-2xl font-bold text-cyan-400">
        Gangadhar
      </h1>

      <ul className="flex gap-6">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;