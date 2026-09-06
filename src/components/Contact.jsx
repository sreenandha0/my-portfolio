function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#FF498B]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Resume CTA */}
        <div className="overflow-hidden rounded-3xl border border-[#FF498B]/20 bg-[#1C1525] p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF498B]">
                Let&apos;s Connect
              </p>

              <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
                Interested in working together?
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-[#A098B2]">
                I&apos;m currently looking for software development internships
                and entry-level opportunities where I can contribute, learn,
                and grow as a Software Developer.
              </p>

              <a
                href="/resume/SREENANDHA-MS.pdf"
                download
                className="mt-7 inline-flex items-center rounded-full bg-[#FF498B] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,73,139,0.45)]"
              >
                Download Resume ↓
              </a>
            </div>

            {/* Decorative Resume Card */}
            <div className="rounded-3xl border border-white/10 bg-[#120E18] p-6">
              <div className="rounded-2xl border border-white/10 bg-[#1C1525] p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[#A098B2]">
                  Resume
                </p>

                <p className="mt-3 text-xl font-bold text-white">
                  Sreenandha M. S.
                </p>

                <p className="mt-2 text-sm leading-6 text-[#A098B2]">
                  MCA Student · Aspiring Full-Stack Developer
                </p>

                <div className="mt-5 space-y-2">
                  <div className="h-2 rounded-full bg-[#FF498B]/70" />
                  <div className="h-2 w-4/5 rounded-full bg-white/10" />
                  <div className="h-2 w-3/5 rounded-full bg-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Heading */}
        <div className="mt-24 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#00D8FF]">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Let&apos;s Build Something Great
          </h2>

          <p className="mt-5 leading-7 text-[#A098B2]">
            Feel free to reach out for internship opportunities, software
            development roles, collaborations, or technical discussions.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Email */}
          <a
            href="mailto:sreenandhams700@gmail.com"
            className="group rounded-3xl border border-white/10 bg-[#1C1525] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#FF498B]/40 hover:shadow-[0_0_30px_rgba(255,73,139,0.1)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#FF498B]/20 bg-[#FF498B]/10 text-xl text-[#FF498B]">
              ✉
            </div>

            <h3 className="mt-5 font-bold text-white">Email</h3>

            <p className="mt-2 break-all text-sm text-[#A098B2]">
              sreenandhams700@gmail.com
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/sreenandhams"
            target="_blank"
            rel="noreferrer"
            className="group rounded-3xl border border-white/10 bg-[#1C1525] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#00D8FF]/40 hover:shadow-[0_0_30px_rgba(0,216,255,0.1)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#00D8FF]/20 bg-[#00D8FF]/10 text-xl font-bold text-[#00D8FF]">
              in
            </div>

            <h3 className="mt-5 font-bold text-white">LinkedIn</h3>

            <p className="mt-2 text-sm text-[#A098B2]">
              linkedin.com/in/sreenandhams
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/sreenandha0"
            target="_blank"
            rel="noreferrer"
            className="group rounded-3xl border border-white/10 bg-[#1C1525] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#9966FF]/40 hover:shadow-[0_0_30px_rgba(153,102,255,0.1)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#9966FF]/20 bg-[#9966FF]/10 text-xl text-[#9966FF]">
              ◉
            </div>

            <h3 className="mt-5 font-bold text-white">GitHub</h3>

            <p className="mt-2 text-sm text-[#A098B2]">
              github.com/sreenandha0
            </p>
          </a>

          {/* Location */}
          <div className="rounded-3xl border border-white/10 bg-[#1C1525] p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#39FF14]/20 bg-[#39FF14]/10 text-xl text-[#39FF14]">
              📍
            </div>

            <h3 className="mt-5 font-bold text-white">Location</h3>

            <p className="mt-2 text-sm text-[#A098B2]">
              Kerala, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;