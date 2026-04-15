export default function Hero() {
  return (
    <section
      className="hero-gradient relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: "70px" }}
    >
      {/* Decorative grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(200, 149, 108, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(200, 149, 108, 0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative circle */}
      <div
        className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(200, 149, 108, 0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(200, 149, 108, 0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
        {/* Eyebrow */}
        <div
          className="animate-fade-in inline-flex items-center gap-3 mb-8"
          style={{ opacity: 0 }}
        >
          <span className="divider" style={{ width: "40px", height: "1px" }} />
          <span
            style={{
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#c8956c",
            }}
          >
            Certified Personal Trainer · Queen Creek, AZ
          </span>
          <span className="divider" style={{ width: "40px", height: "1px" }} />
        </div>

        {/* Main Headline */}
        <h1
          className="animate-fade-in-up delay-200"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#f5f0eb",
            marginBottom: "1.5rem",
            opacity: 0,
          }}
        >
          Build Your{" "}
          <span className="gradient-text">Strongest</span>
          <br />
          Self
        </h1>

        <p
          className="animate-fade-in-up delay-300"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            color: "rgba(245, 240, 235, 0.6)",
            maxWidth: "560px",
            margin: "0 auto 3rem",
            lineHeight: 1.75,
            opacity: 0,
          }}
        >
          Personalized training, real nutrition support, and a coach who
          genuinely cares — online or in person. Let&apos;s build something
          lasting.
        </p>

        {/* CTA Buttons */}
        <div
          className="animate-fade-in-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ opacity: 0 }}
        >
          <a href="#contact" className="btn-primary">
            Start Your Journey
          </a>
          <a href="#services" className="btn-outline">
            View Services
          </a>
        </div>

        {/* Stats bar */}
        <div
          className="animate-fade-in-up delay-600 mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto"
          style={{ opacity: 0 }}
        >
          {[
            { num: "10+", label: "Years in Athletics" },
            { num: "NPTI", label: "Certified Trainer" },
            { num: "100%", label: "Custom Programming" },
          ].map((stat) => (
            <div key={stat.num} className="flex flex-col items-center gap-1">
              <span
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  color: "#c8956c",
                }}
              >
                {stat.num}
              </span>
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(245, 240, 235, 0.45)",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
