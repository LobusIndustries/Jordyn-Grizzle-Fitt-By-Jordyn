const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "One-on-One Coaching",
    subtitle: "In-Person Training",
    description:
      "Train with Jordyn at your home or hers. Every session is completely personalized to your goals, fitness level, and schedule — with real-time coaching, form corrections, and full accountability.",
    features: [
      "Customized programming",
      "Real-time form coaching",
      "At your home or Jordyn's gym",
      "Progress tracking & adjustments",
    ],
    featured: false,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Online Coaching",
    subtitle: "Train From Anywhere",
    description:
      "Get expert programming, check-ins, and support no matter where you are. Jordyn's primary coaching format — fully customized plans delivered digitally with ongoing guidance and accountability.",
    features: [
      "Weekly custom workout plans",
      "Regular check-ins & feedback",
      "Video form reviews",
      "Available wherever you are",
    ],
    featured: true,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Nutrition Guidance",
    subtitle: "Fuel Your Body Right",
    description:
      "Customized meal plans and practical nutrition strategies built around your lifestyle and goals. Learn how to fuel your performance, support recovery, and build habits that last.",
    features: [
      "Personalized meal plans",
      "Macro guidance & education",
      "Fueling for performance",
      "Sustainable habits",
    ],
    featured: false,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    ),
    title: "PNF Stretching",
    subtitle: "Mobility & Recovery",
    description:
      "Proprioceptive neuromuscular facilitation (PNF) stretching — an advanced technique rooted in Jordyn's gymnastics background. Dramatically improve your range of motion and movement quality.",
    features: [
      "Advanced flexibility techniques",
      "Gymnastics-based methodology",
      "Injury prevention focus",
      "Improved movement quality",
    ],
    featured: false,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22V12M12 12L5 7M12 12l7-5" />
        <path d="M5 7V17l7 5 7-5V7" />
        <path d="M5 7l7-5 7 5" />
      </svg>
    ),
    title: "Flexibility & Mobility",
    subtitle: "Move Better, Feel Better",
    description:
      "10 years of elite gymnastics gave Jordyn exceptional expertise in flexibility and mobility work. Whether you're recovering from injury or optimizing athletic performance, this program gets you moving freely.",
    features: [
      "10 years gymnastics expertise",
      "Full mobility assessments",
      "Targeted stretch programs",
      "Long-term flexibility gains",
    ],
    featured: false,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-28 lg:py-36"
      style={{ background: "#111111" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
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
            What I Offer
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
            Services Built{" "}
            <span className="gradient-text">Around You</span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(245, 240, 235, 0.5)",
              maxWidth: "480px",
              margin: "1.25rem auto 0",
              lineHeight: 1.8,
            }}
          >
            Every program is designed for your specific body, goals, and
            lifestyle. No cookie-cutter plans.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="card-hover relative rounded-2xl p-7 flex flex-col"
              style={{
                background: service.featured
                  ? "linear-gradient(135deg, rgba(200, 149, 108, 0.12), rgba(200, 149, 108, 0.04))"
                  : "#1a1a1a",
                border: service.featured
                  ? "1px solid rgba(200, 149, 108, 0.35)"
                  : "1px solid #2a2a2a",
              }}
            >
              {service.featured && (
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(200, 149, 108, 0.2)",
                    border: "1px solid rgba(200, 149, 108, 0.4)",
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#c8956c",
                  }}
                >
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div
                className="flex items-center justify-center w-12 h-12 rounded-xl mb-5"
                style={{
                  background: "rgba(200, 149, 108, 0.12)",
                  color: "#c8956c",
                }}
              >
                {service.icon}
              </div>

              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#c8956c",
                  marginBottom: "0.4rem",
                }}
              >
                {service.subtitle}
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#f5f0eb",
                  marginBottom: "0.9rem",
                  lineHeight: 1.3,
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "rgba(245, 240, 235, 0.55)",
                  lineHeight: 1.8,
                  marginBottom: "1.5rem",
                  flex: 1,
                }}
              >
                {service.description}
              </p>

              {/* Feature list */}
              <ul className="flex flex-col gap-2">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2.5"
                    style={{
                      fontSize: "0.82rem",
                      color: "rgba(245, 240, 235, 0.6)",
                    }}
                  >
                    <span
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "#c8956c",
                        flexShrink: 0,
                      }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a href="#contact" className="btn-primary">
            Ready to Get Started?
          </a>
        </div>
      </div>
    </section>
  );
}
