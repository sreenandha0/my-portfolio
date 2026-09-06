import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-[#1C1525]/75 px-5 py-3 shadow-lg shadow-black/20 backdrop-blur-xl sm:px-6">
        {/* Logo */}
        <a
          href="#home"
          className="text-lg font-bold tracking-wide text-white transition hover:text-[#FF498B] sm:text-xl"
        >
          Sreenandha<span className="text-[#FF498B]">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#A098B2] transition duration-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}

          {/* Interactive Resume Page */}
          <Link
            to="/resume"
            className="rounded-full bg-[#FF498B] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(255,73,139,0.25)] transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,73,139,0.45)]"
          >
            Resume
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-white transition hover:border-[#FF498B] lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-[#1C1525]/95 p-5 shadow-xl backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-[#A098B2] transition hover:bg-white/5 hover:text-white"
              >
                {link.name}
              </a>
            ))}

            {/* Interactive Resume Page */}
            <Link
              to="/resume"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 rounded-full bg-[#FF498B] px-5 py-3 text-center text-sm font-semibold text-white shadow-[0_0_20px_rgba(255,73,139,0.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(255,73,139,0.45)]"
            >
              Resume
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;