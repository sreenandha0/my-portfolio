function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-14 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF498B]">
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Hands-On Development Experience
          </h2>

          <p className="mt-5 leading-7 text-[#A098B2]">
            Practical experience gained through internship-based software
            development and collaborative project work.
          </p>
        </div>

        {/* Experience Card */}
        <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#1C1525] p-6 transition duration-300 hover:border-[#FF498B]/40 hover:shadow-[0_0_35px_rgba(255,73,139,0.12)] sm:p-8">
          {/* Decorative glow */}
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#FF498B]/10 blur-[80px]" />

          <div className="relative grid gap-8 lg:grid-cols-[180px_1fr]">
            {/* Date */}
            <div>
              <p className="text-sm font-semibold text-[#00D8FF]">
                May 2024
              </p>

              <p className="mt-2 text-sm text-[#A098B2]">
                Project Internship
              </p>
            </div>

            {/* Experience Details */}
            <div>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Project Intern
                  </h3>

                  <p className="mt-1 text-[#FF498B]">
                    Emdeon Digital Services Private Limited
                  </p>
                </div>

                <span className="w-fit rounded-full border border-[#00D8FF]/20 bg-[#00D8FF]/10 px-4 py-2 text-xs font-medium text-[#00D8FF]">
                  Kakkanad, Kerala
                </span>
              </div>

              <p className="mt-6 leading-7 text-[#A098B2]">
                Developed responsive web applications using Python, Django,
                HTML, CSS, JavaScript, and SQL. Assisted with application
                development, testing, debugging, and database integration while
                collaborating with senior developers and following software
                development best practices.
              </p>

              {/* Skills */}
              <div className="mt-7">
                <p className="mb-3 text-sm font-semibold text-white">
                  Technologies & Areas
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Python",
                    "Django",
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "SQL",
                    "Testing",
                    "Debugging",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-[#A098B2] transition hover:border-[#00D8FF]/30 hover:text-[#00D8FF]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Contributions */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-[#120E18]/60 p-5">
                  <p className="text-sm font-semibold text-white">
                    Application Development
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#A098B2]">
                    Contributed to building and improving responsive web
                    application features.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#120E18]/60 p-5">
                  <p className="text-sm font-semibold text-white">
                    Testing & Debugging
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#A098B2]">
                    Assisted with testing, debugging, and improving application
                    reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;