function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#120E18] px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Name and Message */}
          <div>
            <a
              href="#home"
              className="text-xl font-bold tracking-tight text-white"
            >
              Sreenandha<span className="text-[#FF498B]">.</span>
            </a>

            <p className="mt-3 max-w-md text-sm leading-6 text-[#A098B2]">
              MCA Student and aspiring Full-Stack Developer focused on building
              practical and user-friendly software solutions.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-5 text-sm font-medium">
            <a
              href="https://github.com/sreenandha0"
              target="_blank"
              rel="noreferrer"
              className="text-[#A098B2] transition hover:text-[#9966FF]"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/sreenandhams"
              target="_blank"
              rel="noreferrer"
              className="text-[#A098B2] transition hover:text-[#00D8FF]"
            >
              LinkedIn
            </a>

            <a
              href="mailto:sreenandhams700@gmail.com"
              className="text-[#A098B2] transition hover:text-[#FF498B]"
            >
              Email
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-[#A098B2] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Sreenandha M. S. All rights reserved.
          </p>

          <p>
            Built with{" "}
            <span className="font-medium text-white">
              React & Tailwind CSS
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;