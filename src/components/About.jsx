import { motion } from "framer-motion";

function About() {
  const highlights = [
    {
      title: "Full-Stack Focus",
      description:
        "Interested in building complete web applications from responsive user interfaces to backend logic and databases.",
    },
    {
      title: "Practical Learning",
      description:
        "Strengthening my skills through internship experience, academic projects, testing, debugging, and continuous learning.",
    },
    {
      title: "Career Goal",
      description:
        "Seeking opportunities to grow as a Software Engineer or Full-Stack Developer and contribute to real-world products.",
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden px-6 py-24">
      {/* Background glow */}
      <div className="absolute left-[-10%] top-[20%] h-72 w-72 rounded-full bg-[#00D8FF]/5 blur-[120px]" />

      <div className="absolute right-[-10%] bottom-[10%] h-72 w-72 rounded-full bg-[#FF498B]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF498B]">
            About Me
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Building Skills Through Real Projects
          </h2>

          <p className="mt-5 leading-7 text-[#A098B2]">
            Developing practical software skills through internships,
            academic projects, and continuous hands-on learning.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Main About Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-[#1C1525] p-7 shadow-lg shadow-black/10 sm:p-10"
          >
            <p className="text-lg leading-8 text-[#A098B2]">
              I am an MCA student with a strong interest in software development
              and full-stack web development. Through internships and academic
              projects, I have gained hands-on experience building applications
              using Python, Django, PHP, JavaScript, and database technologies.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#A098B2]">
              I enjoy turning ideas into practical software solutions and
              learning how different parts of an application work together—from
              user interfaces and backend logic to database management.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#A098B2]">
              I am currently looking for opportunities where I can continue
              learning, contribute to meaningful projects, and grow as a
              Software Engineer or Full-Stack Developer.
            </p>

            {/* Current Focus */}
            <div className="mt-8 rounded-2xl border border-[#00D8FF]/20 bg-[#00D8FF]/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#00D8FF]">
                Currently Focused On
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  "Full-Stack Development",
                  "Django",
                  "React",
                  "Databases",
                  "Problem Solving",
                ].map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    className="cursor-default rounded-full border border-white/10 bg-[#120E18] px-4 py-2 text-sm text-[#A098B2] transition hover:border-[#00D8FF]/40 hover:text-[#00D8FF]"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side Highlights */}
          <div className="grid gap-5">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -5,
                }}
                className="group rounded-3xl border border-white/10 bg-[#1C1525] p-7 transition duration-300 hover:border-[#FF498B]/40 hover:bg-[#261D33] hover:shadow-[0_0_30px_rgba(255,73,139,0.08)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#FF498B]/20 bg-[#FF498B]/10 font-bold text-[#FF498B]">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-xl font-bold text-white">
                  {highlight.title}
                </h3>

                <p className="mt-3 leading-7 text-[#A098B2]">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;