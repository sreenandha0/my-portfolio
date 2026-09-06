import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Resume() {
  const skills = [
    "Python",
    "Java",
    "PHP",
    "JavaScript",
    "React",
    "Django",
    "HTML5",
    "CSS3",
    "MySQL",
    "SQLite",
    "PostgreSQL",
    "Git",
    "GitHub",
  ];

  const projects = [
    {
      title: "EcoScrap",
      subtitle: "Smart Scrap Management System",
      description:
        "A web-based scrap management system with secure authentication, role-based access, QR code verification, pickup requests, and status tracking.",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap 5"],
      accent: "pink",
    },
    {
      title: "Student Score Predictor",
      subtitle: "Machine Learning Application",
      description:
        "A machine learning web application that predicts whether a student is likely to PASS or FAIL using academic information.",
      technologies: ["Python", "Machine Learning", "Streamlit"],
      accent: "cyan",
    },
    {
      title: "Victory Sports Academy",
      subtitle: "Football Academy Management System",
      description:
        "A centralized management platform with player management, attendance tracking, performance monitoring, authentication, and dashboards.",
      technologies: ["Python", "Django", "MySQL", "PostgreSQL"],
      accent: "purple",
    },
  ];

  const education = [
    {
      period: "2025 – Present",
      title: "Master of Computer Applications",
      institution: "KMM College of Arts and Science, Thrikkakara",
    },
    {
      period: "2022 – 2025",
      title: "Bachelor of Computer Applications",
      institution: "St. Joseph's College, Irinjalakuda",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#120E18] text-white">
      {/* Background */}
      <div className="fixed left-[-10%] top-[10%] h-96 w-96 rounded-full bg-[#FF498B]/10 blur-[150px]" />

      <div className="fixed bottom-[10%] right-[-10%] h-96 w-96 rounded-full bg-[#00D8FF]/10 blur-[150px]" />

      {/* Navigation */}
      <div className="relative z-10 px-6 pt-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link
            to="/"
            className="rounded-full border border-white/10 bg-[#1C1525]/80 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-[#FF498B]/50 hover:bg-[#FF498B]/10"
          >
            ← Back to Portfolio
          </Link>

          <a
            href="/resume/SREENANDHA-MS.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#FF498B] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(255,73,139,0.3)] transition hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(255,73,139,0.5)]"
          >
            Download PDF ↓
          </a>
        </div>
      </div>

      <main className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-20">
        {/* HERO */}

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="min-h-[70vh] py-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF498B]">
            Interactive Resume
          </p>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight sm:text-7xl">
            Sreenandha
            <span className="block text-[#FF498B]">M. S.</span>
          </h1>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-3xl border border-white/10 bg-[#1C1525]/80 p-8 backdrop-blur-xl">
              <p className="text-xl font-semibold text-[#00D8FF]">
                MCA Student • Aspiring Software Engineer
              </p>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#A098B2]">
                Motivated software development student with hands-on experience
                through internships and academic projects. Interested in building
                practical full-stack applications and continuously improving as a
                Software Engineer.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Python", "Django", "React", "JavaScript", "Databases"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#00D8FF]/20 bg-[#00D8FF]/5 px-4 py-2 text-sm text-[#00D8FF]"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="rounded-3xl border border-[#FF498B]/20 bg-[#FF498B]/5 p-8">
              <p className="text-sm uppercase tracking-wider text-[#A098B2]">
                Current Goal
              </p>

              <h2 className="mt-4 text-2xl font-bold">
                Become a Software Engineer
              </h2>

              <p className="mt-5 leading-7 text-[#A098B2]">
                Build real-world applications, gain professional experience,
                learn continuously, and contribute to meaningful software
                products.
              </p>
            </div>
          </div>
        </motion.section>

        {/* EXPERIENCE */}

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF498B]">
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Professional Journey
          </h2>

          <div className="mt-12 border-l border-[#FF498B]/30 pl-8">
            <div className="relative">
              <span className="absolute -left-[41px] top-2 h-5 w-5 rounded-full border-4 border-[#120E18] bg-[#FF498B]" />

              <p className="text-sm font-semibold text-[#FF498B]">
                May 2024 – May 2024
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Project Intern
              </h3>

              <p className="mt-2 text-[#00D8FF]">
                Emdeon Digital Services Private Limited
              </p>

              <p className="mt-5 max-w-3xl leading-8 text-[#A098B2]">
                Developed responsive web applications using Python, Django,
                HTML, CSS, JavaScript, and SQL. Assisted with application
                development, testing, debugging, database integration, and
                performance improvements.
              </p>
            </div>
          </div>
        </motion.section>

        {/* PROJECTS */}

        <section className="py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF498B]">
            Selected Work
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Projects That Define My Journey
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-[#1C1525] p-7"
              >
                <span className="text-4xl">
                  {index === 0 && "♻"}
                  {index === 1 && "📊"}
                  {index === 2 && "⚽"}
                </span>

                <p className="mt-6 text-sm text-[#FF498B]">
                  {project.subtitle}
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-[#A098B2]">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#A098B2]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SKILLS */}

        <section className="py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF498B]">
            Technical Foundation
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Skills & Technologies
          </h2>

          <div className="mt-10 flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.08 }}
                className="rounded-2xl border border-white/10 bg-[#1C1525] px-5 py-3 text-[#A098B2] transition hover:border-[#00D8FF]/40 hover:text-[#00D8FF]"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </section>

        {/* EDUCATION */}

        <section className="py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF498B]">
            Education
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Academic Journey
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {education.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-[#1C1525] p-8"
              >
                <p className="font-semibold text-[#9966FF]">
                  {item.period}
                </p>

                <h3 className="mt-4 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-[#A098B2]">
                  {item.institution}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}

        <section className="py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF498B]">
            Certifications
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Continuous Learning
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              "Diploma in Web Designing — July 2022",
              "Diploma in Multimedia — C-DIT — August 2023",
              "AWS Cloud Practitioner Essentials — August 2026",
            ].map((certificate) => (
              <motion.div
                key={certificate}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-white/10 bg-[#1C1525] p-6 text-[#A098B2] transition hover:border-[#9966FF]/40"
              >
                📜
                <p className="mt-4 leading-7">{certificate}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT CTA */}

        <section className="rounded-[2rem] border border-[#FF498B]/20 bg-gradient-to-br from-[#FF498B]/10 via-[#1C1525] to-[#00D8FF]/10 p-10 text-center sm:p-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF498B]">
            Let's Connect
          </p>

          <h2 className="mt-5 text-4xl font-bold">
            Ready for the Next Chapter
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#A098B2]">
            I am actively learning, building projects, and looking for
            opportunities to grow as a Software Engineer or Full-Stack
            Developer.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:sreenandhams700@gmail.com"
              className="rounded-full bg-[#FF498B] px-7 py-3.5 font-semibold text-white transition hover:-translate-y-1"
            >
              Contact Me
            </a>

            <Link
              to="/"
              className="rounded-full border border-white/10 bg-white/5 px-7 py-3.5 font-semibold text-white transition hover:border-[#00D8FF]/40"
            >
              View Portfolio
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Resume;