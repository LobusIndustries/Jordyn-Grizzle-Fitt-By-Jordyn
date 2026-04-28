const testimonials = [
  {
    name: "Kayla M.",
    goal: "Muscle Building",
    quote:
      "I've worked with a few trainers before, but Jordyn is on another level. She actually listens — like really listens — and built me a program that fit my schedule and what I wanted to accomplish. Six months in and I've put on more muscle than I did in two years of training alone.",
  },
  {
    name: "Brittany T.",
    goal: "Body Composition",
    quote:
      "I was nervous about online coaching but Jordyn made it feel just as personal as in-person. She checks in constantly, reviews my form videos, and actually adjusts my plan when life gets busy. I'm down 18 pounds and I feel stronger than ever.",
  },
  {
    name: "Jessica R.",
    goal: "Nutrition & Training",
    quote:
      "The nutrition side completely changed the game for me. I always thought I needed to restrict everything, but Jordyn taught me how to fuel properly for my workouts. I have way more energy, my lifts are up, and I actually enjoy eating again.",
  },
  {
    name: "Mia L.",
    goal: "Flexibility & Mobility",
    quote:
      "I came to Jordyn for PNF stretching after a hip injury and the difference in my range of motion after just a few weeks was unbelievable. Her gymnastics background really shows — she knows exactly how the body moves and what it needs.",
  },
  {
    name: "Amanda S.",
    goal: "Online Coaching",
    quote:
      "Best investment I've made for my health. Jordyn is so responsive through Trainerize — I never feel like I'm on my own. The programming is smart, the check-ins keep me accountable, and she genuinely celebrates your wins with you.",
  },
  {
    name: "Tori H.",
    goal: "Strength Training",
    quote:
      "I told Jordyn I wanted to feel strong and confident, not just 'toned.' She took that seriously and built me a real strength program. Deadlifting my bodyweight felt impossible when I started — now it's just a Tuesday.",
  },
];

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#c8956c" stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-28 lg:py-36"
      style={{ background: "#0d0d0d" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="section-line" />
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
            Client Results
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#f5f0eb",
              lineHeight: 1.2,
            }}
          >
            Real People,{" "}
            <span className="gradient-text">Real Results</span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(245, 240, 235, 0.5)",
              maxWidth: "460px",
              margin: "1.25rem auto 0",
              lineHeight: 1.8,
            }}
          >
            Every client comes with different goals. Every program is built around them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-hover rounded-2xl p-7 flex flex-col"
              style={{
                background: "#1a1a1a",
                border: "1px solid #2a2a2a",
              }}
            >
              <div className="flex gap-1 mb-5">
                <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
              </div>
              <p
                style={{
                  fontSize: "0.92rem",
                  color: "rgba(245, 240, 235, 0.7)",
                  lineHeight: 1.85,
                  flex: 1,
                  marginBottom: "1.5rem",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div
                className="flex items-center gap-3 pt-5"
                style={{ borderTop: "1px solid #2a2a2a" }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(200, 149, 108, 0.15)",
                    color: "#c8956c",
                    fontFamily: "var(--font-playfair)",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                  }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      color: "#f5f0eb",
                      lineHeight: 1.2,
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontSize: "0.72rem",
                      color: "#c8956c",
                      fontWeight: 500,
                      letterSpacing: "0.05em",
                      marginTop: "0.15rem",
                    }}
                  >
                    {t.goal}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
