import skills from "../data/skills";
import Reveal from "./Reveal";

function Skills() {
  const accentStyles = {
    pink: {
      icon: "border-[#FF498B]/30 bg-[#FF498B]/10 text-[#FF498B]",
      cardHover:
        "hover:border-[#FF498B]/40 hover:shadow-[0_0_30px_rgba(255,73,139,0.08)]",
      dot: "bg-[#FF498B]",
      tag: "hover:border-[#FF498B]/40 hover:text-[#FF6EC7]",
      glow: "bg-[#FF498B]",
    },

    cyan: {
      icon: "border-[#00D8FF]/30 bg-[#00D8FF]/10 text-[#00D8FF]",
      cardHover:
        "hover:border-[#00D8FF]/40 hover:shadow-[0_0_30px_rgba(0,216,255,0.08)]",
      dot: "bg-[#00D8FF]",
      tag: "hover:border-[#00D8FF]/40 hover:text-[#00D8FF]",
      glow: "bg-[#00D8FF]",
    },

    purple: {
      icon: "border-[#9966FF]/30 bg-[#9966FF]/10 text-[#9966FF]",
      cardHover:
        "hover:border-[#9966FF]/40 hover:shadow-[0_0_30px_rgba(153,102,255,0.08)]",
      dot: "bg-[#9966FF]",
      tag: "hover:border-[#9966FF]/40 hover:text-[#CC99FF]",
      glow: "bg-[#9966FF]",
    },
  };

  return (
    <section id="skills" className="relative overflow-hidden px-6 py-24">
      {/* Background glow */}
      <div className="absolute right-[-10%] top-[20%] h-80 w-80 rounded-full bg-[#9966FF]/5 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Heading */}
        <Reveal>
          <div className="mb-14 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF498B]">
              Technical Skills
            </p>

            <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
              Technologies I Work With
            </h2>

            <p className="mt-5 leading-7 text-[#A098B2]">
              A growing technical foundation built through academic projects,
              internship experience, and hands-on software development.
            </p>
          </div>
        </Reveal>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skillGroup, index) => {
            const style = accentStyles[skillGroup.accent];

            return (
              <Reveal
                key={skillGroup.category}
                delay={index * 0.1}
                direction={index % 2 === 0 ? "up" : "down"}
              >
                <div
                  className={`group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#1C1525] p-6 transition-all duration-500 hover:-translate-y-2 ${style.cardHover}`}
                >
                  {/* Subtle accent glow on hover */}
                  <div
                    className={`absolute -right-16 -top-16 h-32 w-32 rounded-full opacity-0 blur-3xl transition duration-500 group-hover:opacity-10 ${style.glow}`}
                  />

                  {/* Card content */}
                  <div className="relative">
                    {/* Category Number */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl border font-bold transition duration-500 group-hover:scale-110 group-hover:rotate-3 ${style.icon}`}
                      >
                        0{index + 1}
                      </div>

                      <span
                        className={`h-2.5 w-2.5 rounded-full shadow-[0_0_12px_currentColor] ${style.dot}`}
                      />
                    </div>

                    {/* Category */}
                    <h3 className="mt-6 text-xl font-bold text-white">
                      {skillGroup.category}
                    </h3>

                    {/* Skills */}
                    <div className="mt-6 flex flex-wrap gap-3">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <span
                          key={skill}
                          className={`rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#A098B2] transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:text-white ${style.tag}`}
                          style={{
                            transitionDelay: `${skillIndex * 20}ms`,
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;