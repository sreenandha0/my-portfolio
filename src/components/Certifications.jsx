import certifications from "../data/certifications";

function Certifications() {
  const accentStyles = {
    pink: {
      text: "text-[#FF498B]",
      border: "border-[#FF498B]/30",
      background: "bg-[#FF498B]/10",
      hover:
        "hover:border-[#FF498B]/40 hover:shadow-[0_0_30px_rgba(255,73,139,0.10)]",
    },

    cyan: {
      text: "text-[#00D8FF]",
      border: "border-[#00D8FF]/30",
      background: "bg-[#00D8FF]/10",
      hover:
        "hover:border-[#00D8FF]/40 hover:shadow-[0_0_30px_rgba(0,216,255,0.10)]",
    },

    purple: {
      text: "text-[#9966FF]",
      border: "border-[#9966FF]/30",
      background: "bg-[#9966FF]/10",
      hover:
        "hover:border-[#9966FF]/40 hover:shadow-[0_0_30px_rgba(153,102,255,0.10)]",
    },
  };

  return (
    <section
      id="certifications"
      className="relative overflow-hidden px-6 py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-[-10%] top-[30%] h-80 w-80 rounded-full bg-[#9966FF]/5 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF498B]">
            Certifications
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Learning & Achievements
          </h2>

          <p className="mt-5 leading-7 text-[#A098B2]">
            Certifications and learning experiences that support my technical
            development and continuous growth.
          </p>
        </div>

        {/* Certification Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certificate, index) => {
            const style = accentStyles[certificate.accent];

            return (
              <article
                key={certificate.id}
                className={`group rounded-3xl border border-white/10 bg-[#1C1525] p-7 transition duration-300 hover:-translate-y-1 ${style.hover}`}
              >
                {/* Certificate Number */}
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl border text-lg font-bold ${style.border} ${style.background} ${style.text}`}
                  >
                    0{index + 1}
                  </div>

                  <span className="text-sm text-[#A098B2]">
                    {certificate.year}
                  </span>
                </div>

                {/* Certificate Details */}
                <h3 className="mt-7 text-xl font-bold leading-7 text-white">
                  {certificate.title}
                </h3>

                <p className={`mt-3 text-sm font-semibold ${style.text}`}>
                  {certificate.organization}
                </p>

                <p className="mt-5 leading-7 text-[#A098B2]">
                  {certificate.description}
                </p>

                {/* Verification Link */}
                {certificate.verification && (
                  <a
                    href={certificate.verification}
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-7 inline-flex items-center gap-2 text-sm font-semibold transition hover:opacity-80 ${style.text}`}
                  >
                    Verify Certificate ↗
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Certifications;