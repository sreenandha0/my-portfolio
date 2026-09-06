import { motion } from "framer-motion";

function Hero() {
  const technologies = ["Python", "Django", "PHP", "JavaScript"];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32"
    >
      {/* Background glow effects */}
      <div className="absolute left-[-10%] top-[20%] h-72 w-72 rounded-full bg-[#FF498B]/10 blur-[120px]" />

      <div className="absolute bottom-[10%] right-[-10%] h-80 w-80 rounded-full bg-[#00D8FF]/10 blur-[140px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-2">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#FF498B]" />

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF498B]">
              Hello, I&apos;m
            </p>
          </div>

          <h1 className="text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
            Sreenandha
            <span className="block text-[#FF498B]">M. S.</span>
          </h1>

          <h2 className="mt-6 text-xl font-semibold leading-relaxed text-[#A098B2] sm:text-2xl">
            MCA Student
            <span className="mx-2 text-[#00D8FF]">|</span>
            Aspiring Software Engineer
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-[#A098B2] sm:text-lg">
            Motivated MCA student with hands-on experience in software
            development through internships and academic projects. I enjoy
            building practical web applications using Python, Django, PHP,
            JavaScript, and database technologies.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <motion.a
              href="#projects"
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-[#FF498B] px-7 py-3.5 text-center font-semibold text-white shadow-[0_0_25px_rgba(255,73,139,0.35)] transition duration-300 hover:shadow-[0_0_35px_rgba(255,73,139,0.5)]"
            >
              View My Projects →
            </motion.a>

            <motion.a
              href="/resume/SREENANDHA-MS.pdf"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-center font-semibold text-white transition duration-300 hover:border-[#00D8FF]/50 hover:bg-[#00D8FF]/10"
            >
              View Resume ↓
            </motion.a>
          </div>

          {/* Professional Links */}
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm font-medium">
            <a
              href="https://github.com/sreenandha0"
              target="_blank"
              rel="noreferrer"
              className="text-[#A098B2] transition hover:text-[#00D8FF]"
            >
              GitHub ↗
            </a>

            <a
              href="https://linkedin.com/in/sreenandhams"
              target="_blank"
              rel="noreferrer"
              className="text-[#A098B2] transition hover:text-[#00D8FF]"
            >
              LinkedIn ↗
            </a>

            <a
              href="mailto:sreenandhams700@gmail.com"
              className="text-[#A098B2] transition hover:text-[#FF498B]"
            >
              Email ↗
            </a>
          </div>
        </motion.div>

        {/* Right Side Developer Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="relative mx-auto flex w-full max-w-md justify-center lg:max-w-none"
        >
          {/* Glow */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute inset-10 rounded-full bg-[#FF498B]/20 blur-[80px]"
          />

          {/* Main Card */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-[#1C1525]/80 p-6 shadow-2xl backdrop-blur-xl"
          >
            {/* Card Header */}
            <div className="mb-8 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-[#FF498B]" />
              <span className="h-3 w-3 rounded-full bg-[#9966FF]" />
              <span className="h-3 w-3 rounded-full bg-[#00D8FF]" />
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#120E18] p-6">
              <p className="font-mono text-sm text-[#A098B2]">
                &lt;software-engineer&gt;
              </p>

              <div className="py-10 text-center">
                <motion.div
                  animate={{
                    rotate: [0, 3, -3, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-[#00D8FF]/30 bg-[#00D8FF]/10 text-5xl shadow-[0_0_35px_rgba(0,216,255,0.15)]"
                >
                  &lt;/&gt;
                </motion.div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  Software Developer
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#A098B2]">
                  Building practical applications, learning continuously, and
                  growing through real-world projects.
                </p>
              </div>

              <p className="text-right font-mono text-sm text-[#FF498B]">
                &lt;/software-engineer&gt;
              </p>
            </div>

            {/* Technology Tags */}
            <div className="mt-6 flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{
                    scale: 1.08,
                    y: -2,
                  }}
                  className="cursor-default rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-[#A098B2] transition hover:border-[#00D8FF]/40 hover:text-[#00D8FF]"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Floating Education Badge */}
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute -bottom-5 -left-3 rounded-2xl border border-white/10 bg-[#1C1525]/95 px-5 py-4 shadow-xl backdrop-blur-xl sm:left-0"
          >
            <p className="text-xs uppercase tracking-wider text-[#A098B2]">
              Currently
            </p>

            <p className="mt-1 font-semibold text-white">
              Pursuing MCA 🎓
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;