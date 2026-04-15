export default function About() {
  const highlights = [
    {
      icon: "🏅",
      title: "NPTI Certified",
      desc: "National Personal Training Institute of Arizona",
    },
    {
      icon: "🤸",
      title: "10-Year Gymnast",
      desc: "Competitive gymnastics & cheer background",
    },
    {
      icon: "💪",
      title: "Muscle Building Specialist",
      desc: "Niche focus on strength & body composition",
    },
    {
      icon: "❤️",
      title: "CPR & AED Certified",
      desc: "Trained in emergency response & client safety",
    },
  ];

  return (
    <section id="about" className="py-28 lg:py-36" style={{ background: "#0d0d0d" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image placeholder */}
          <div className="relative order-2 lg:order-1">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1a1a1a 0%, #222 100%)",
                border: "1px solid #2a2a2a",
                aspectRatio: "4/5",
                maxWidth: "460px",
                margin: "0 auto",
              }}
            >
              {/* Placeholder photo area */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                style={{ color: "rgba(200, 149, 108, 0.3)" }}
              >
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <p
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(200, 149, 108, 0.35)",
                  }}
                >
                  Add Your Photo Here
                </p>
              </div>

              {/* Decorative corner accent */}
              <div
                className="absolute top-0 right-0 w-24 h-24"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(200, 149, 108, 0.15), transparent)",
                  borderBottomLeftRadius: "100%",
                }}
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute bottom-6 left-0 lg:-left-6 px-5 py-4 rounded-xl"
              style={{
                background: "rgba(200, 149, 108, 0.1)",
                border: "1px solid rgba(200, 149, 108, 0.25)",
                backdropFilter: "blur(10px)",
                maxWidth: "220px",
              }}
            >
              <p
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#c8956c",
                  marginBottom: "0.25rem",
                }}
              >
                Based In
              </p>
              <p
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  color: "#f5f0eb",
                }}
              >
                Queen Creek, Arizona
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="section-line" style={{ margin: "0 0 1.5rem" }} />
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#c8956c",
                marginBottom: "1rem",
              }}
            >
              About Jordyn
            </p>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: "#f5f0eb",
                marginBottom: "1.5rem",
              }}
            >
              Hi, I&apos;m Jordyn
              <br />
              <span className="gradient-text">Your Coach, Your Partner</span>
            </h2>

            <div
              style={{
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "rgba(245, 240, 235, 0.65)",
              }}
              className="flex flex-col gap-4"
            >
              <p>
                I&apos;m a certified personal trainer from Queen Creek, Arizona
                with a deep passion for helping people feel stronger, healthier,
                and more confident in their own skin. Fitness has been a part of
                my life for as long as I can remember — I spent 10 years as a
                competitive gymnast while also competing in cheer, which gave me
                a strong foundation in movement, body awareness, and the kind of
                discipline that carries over into everything I do.
              </p>
              <p>
                At 17, I fell in love with strength training and quickly realized
                how much I wanted to share that with others. I went on to earn my
                certification from the{" "}
                <span style={{ color: "#c8956c" }}>
                  National Personal Training Institute of Arizona
                </span>
                , where I&apos;m incredibly grateful for the knowledge and
                mentorship of my instructors{" "}
                <span style={{ color: "#c8956c" }}>
                  Travis Wapelhorst and Chris James
                </span>
                . They taught me everything I know, and their guidance shaped the
                coach I am today.
              </p>
              <p>
                My approach is holistic — I care about your physical strength,
                nutrition, mindset, energy, and lifestyle. All of my clients
                train through{" "}
                <span style={{ color: "#c8956c" }}>Trainerize</span>, a
                professional coaching app where I deliver your custom workouts,
                meal plans, and check-ins — and where you can message me
                anytime, 24/7. My goal is to help you build sustainable habits
                and become the strongest, most aligned version of yourself.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="rounded-xl p-4"
                  style={{
                    background: "#1a1a1a",
                    border: "1px solid #2a2a2a",
                  }}
                >
                  <div style={{ fontSize: "1.4rem", marginBottom: "0.4rem" }}>
                    {h.icon}
                  </div>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "#f5f0eb",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {h.title}
                  </p>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "rgba(245, 240, 235, 0.45)",
                      lineHeight: 1.5,
                    }}
                  >
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
