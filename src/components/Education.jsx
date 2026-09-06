function Education() {
  const education = [
    {
      degree: "Master of Computer Applications",
      shortName: "MCA",
      institution: "KMM College of Arts and Science, Thrikkakara",
      period: "2025 – 2027",
      status: "Currently Pursuing",
      accent: "cyan",
    },
    {
      degree: "Bachelor of Computer Applications",
      shortName: "BCA",
      institution: "St. Joseph's College, Irinjalakuda",
      period: "2022 – 2025",
      status: "82.08%",
      accent: "pink",
    },
  ];

  const accentStyles = {
    cyan: {
      text: "text-[#00D8FF]",
      border: "border-[#00D8FF]/30",
      background: "bg-[#00D8FF]/10",
      line: "bg-[#00D8FF]",
      glow: "hover:shadow-[0_0_30px_rgba(0,216,255,0.10)]",
    },

    pink: {
      text: "text-[#FF498B]",
      border: "border-[#FF498B]/30",
      background: "bg-[#FF498B]/10",
      line: "bg-[#FF498B]",
      glow: "hover:shadow-[0_0_30px_rgba(255,73,139,0.10)]",
    },
  };

  return (
    <section id="education" className="relative overflow-hidden px-6 py-24">
      {/* Background Glow */}
      <div className="absolute right-[-10%] top-[20%] h-80 w-80 rounded-full bg-[#00D8FF]/5 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl">
        {/* Section Heading */}
        <div className="mb-14 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF498B]">
            Education
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Academic Journey
          </h2>

          <p className="mt-5 leading-7 text-[#A098B2]">
            My academic background in computer applications and software
            development.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative space-y-8">
          {/* Vertical Line - Desktop */}
          <div className="absolute bottom-8 left-6 top-8 hidden w-px bg-white/10 sm:block" />

          {education.map((item, index) => {
            const style = accentStyles[item.accent];

            return (
              <div
                key={item.degree}
                className="relative flex gap-6 sm:gap-8"
              >
                {/* Timeline Icon */}
                <div
                  className={`relative z-10 hidden h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border text-sm font-bold sm:flex ${style.border} ${style.background} ${style.text}`}
                >
                  0{index + 1}
                </div>

                {/* Education Card */}
                <article
                  className={`group flex-1 rounded-3xl border border-white/10 bg-[#1C1525] p-7 transition duration-300 hover:-translate-y-1 ${style.glow}`}
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`rounded-lg border px-3 py-1 text-xs font-bold ${style.border} ${style.background} ${style.text}`}
                        >
                          {item.shortName}
                        </span>

                        <span className="text-sm text-[#A098B2]">
                          {item.period}
                        </span>
                      </div>

                      <h3 className="mt-5 text-2xl font-bold text-white">
                        {item.degree}
                      </h3>

                      <p className="mt-3 text-[#A098B2]">
                        {item.institution}
                      </p>
                    </div>

                    {/* Status */}
                    <div
                      className={`flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${style.border} ${style.background} ${style.text}`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${style.line}`}
                      />

                      {item.status}
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Education;