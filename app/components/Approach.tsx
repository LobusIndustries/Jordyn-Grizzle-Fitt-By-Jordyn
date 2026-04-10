const pillars = [
  {
    num: "01",
    title: "Strength First",
    body: "My primary focus is muscle building and body composition. Every program is built around progressive overload and smart training principles that produce real, visible results.",
  },
  {
    num: "02",
    title: "Nutrition as Fuel",
    body: "Food is not the enemy — it's your tool. I'll teach you how to eat in a way that supports your training, your energy, and your lifestyle without restriction.",
  },
  {
    num: "03",
    title: "Mindset & Consistency",
    body: "Short cuts don't exist. I help you build the mental discipline and habits that keep you showing up — even on the hard days. Sustainable progress is the goal.",
  },
  {
    num: "04",
    title: "Movement Quality",
    body: "Coming from gymnastics, I deeply understand how the body moves. Mobility, flexibility, and proper mechanics are always part of the plan — so you can train for life.",
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="py-28 lg:py-36"
      style={{ background: "#0d0d0d" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Header */}
          <div className="lg:sticky lg:top-28">
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
              My Approach
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
              Holistic Fitness.
              <br />
              <span className="gradient-text">Real Results.</span>
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(245, 240, 235, 0.55)",
                lineHeight: 1.9,
                maxWidth: "420px",
              }}
            >
              I don&apos;t believe in quick fixes or one-size-fits-all programs.
              My approach combines evidence-based training, smart nutrition, and
              genuine support — because lasting transformation requires all three
              working together.
            </p>

            {/* Niche callout */}
            <div
              className="mt-10 p-6 rounded-2xl"
              style={{
                background: "rgba(200, 149, 108, 0.07)",
                border: "1px solid rgba(200, 149, 108, 0.2)",
              }}
            >
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#c8956c",
                  marginBottom: "0.6rem",
                }}
              >
                Primary Specialty
              </p>
              <p
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "#f5f0eb",
                  marginBottom: "0.5rem",
                }}
              >
                Muscle Building & Body Composition
              </p>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "rgba(245, 240, 235, 0.5)",
                  lineHeight: 1.7,
                }}
              >
                Whether you want to build lean muscle, improve your physique, or
                gain strength, this is my expertise — and it&apos;s where I get
                clients their best results.
              </p>
            </div>
          </div>

          {/* Right: Pillars */}
          <div className="flex flex-col gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.num}
                className="card-hover flex gap-6 p-6 rounded-2xl"
                style={{
                  background: "#1a1a1a",
                  border: "1px solid #2a2a2a",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "rgba(200, 149, 108, 0.25)",
                    lineHeight: 1,
                    flexShrink: 0,
                    paddingTop: "2px",
                  }}
                >
                  {pillar.num}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "#f5f0eb",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "rgba(245, 240, 235, 0.55)",
                      lineHeight: 1.8,
                    }}
                  >
                    {pillar.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
