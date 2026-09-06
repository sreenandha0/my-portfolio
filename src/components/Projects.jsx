import projects from "../data/projects";
import Reveal from "./Reveal";

function Projects() {
  const accentStyles = {
    pink: {
      label: "text-[#FF498B]",
      border: "hover:border-[#FF498B]/40",
      glow: "group-hover:shadow-[0_0_35px_rgba(255,73,139,0.12)]",
      icon: "bg-[#FF498B]/10 text-[#FF498B] border-[#FF498B]/20",
      button:
        "bg-[#FF498B] text-white hover:shadow-[0_0_25px_rgba(255,73,139,0.4)]",
      dot: "bg-[#FF498B]",
    },

    cyan: {
      label: "text-[#00D8FF]",
      border: "hover:border-[#00D8FF]/40",
      glow: "group-hover:shadow-[0_0_35px_rgba(0,216,255,0.12)]",
      icon: "bg-[#00D8FF]/10 text-[#00D8FF] border-[#00D8FF]/20",
      button:
        "bg-[#00D8FF] text-[#120E18] hover:shadow-[0_0_25px_rgba(0,216,255,0.35)]",
      dot: "bg-[#00D8FF]",
    },

    purple: {
      label: "text-[#9966FF]",
      border: "hover:border-[#9966FF]/40",
      glow: "group-hover:shadow-[0_0_35px_rgba(153,102,255,0.12)]",
      icon: "bg-[#9966FF]/10 text-[#9966FF] border-[#9966FF]/20",
      button:
        "bg-[#9966FF] text-white hover:shadow-[0_0_25px_rgba(153,102,255,0.35)]",
      dot: "bg-[#9966FF]",
    },
  };

  return (
    <section id="projects" className="relative overflow-hidden px-6 py-24">
      {/* Background Glow */}
      <div className="absolute left-[20%] top-[20%] h-80 w-80 rounded-full bg-[#FF498B]/5 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Heading */}
        <Reveal>
          <div className="mb-14 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF498B]">
              Featured Projects
            </p>

            <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
              Projects I&apos;ve Built
            </h2>

            <p className="mt-5 leading-7 text-[#A098B2]">
              A selection of full-stack and machine learning projects built
              through academic work and hands-on development.
            </p>
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid gap-7 lg:grid-cols-2">
          {projects.map((project, index) => {
            const style = accentStyles[project.accent];

            return (
              <Reveal
                key={project.id}
                delay={index * 0.12}
                direction={index % 2 === 0 ? "up" : "down"}
              >
                <article
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#1C1525] transition-all duration-500 hover:-translate-y-2 ${style.border} ${style.glow}`}
                >
                  {/* Project Visual */}
                  <div className="relative flex min-h-48 items-center justify-center overflow-hidden border-b border-white/10 bg-[#120E18] p-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />

                    {/* Decorative glow */}
                    <div
                      className={`absolute h-32 w-32 rounded-full blur-3xl opacity-20 ${
                        project.accent === "pink"
                          ? "bg-[#FF498B]"
                          : project.accent === "cyan"
                            ? "bg-[#00D8FF]"
                            : "bg-[#9966FF]"
                      }`}
                    />

                    {/* Project Icon */}
                    <div
                      className={`relative flex h-20 w-20 items-center justify-center rounded-3xl border text-3xl transition duration-500 group-hover:scale-110 group-hover:rotate-6 ${style.icon}`}
                    >
                      {project.id === 1 && "♻"}
                      {project.id === 2 && "📊"}
                      {project.id === 3 && "⚽"}
                      {project.id === 4 && "🌍"}
                    </div>

                    {/* Project Type */}
                    <span
                      className={`absolute right-5 top-5 rounded-full border border-white/10 bg-[#1C1525]/90 px-3 py-1.5 text-xs font-medium backdrop-blur-sm ${style.label}`}
                    >
                      {project.type}
                    </span>
                  </div>

                  {/* Project Content */}
                  <div className="flex flex-1 flex-col p-7">
                    <div>
                      <p className={`text-sm font-semibold ${style.label}`}>
                        {project.subtitle}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold text-white">
                        {project.title}
                      </h3>

                      <p className="mt-4 leading-7 text-[#A098B2]">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mt-6">
                      <p className="mb-3 text-sm font-semibold text-white">
                        Technologies
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-[#A098B2] transition duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mt-6">
                      <p className="mb-3 text-sm font-semibold text-white">
                        Key Features
                      </p>

                      <ul className="space-y-2">
                        {project.features.slice(0, 4).map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-sm leading-6 text-[#A098B2]"
                          >
                            <span
                              className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full ${style.dot}`}
                            />

                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Project Links */}
                    <div className="mt-8 flex flex-wrap gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
                        >
                          GitHub ↗
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className={`rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300 hover:-translate-y-1 ${style.button}`}
                        >
                          Live Demo ↗
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;