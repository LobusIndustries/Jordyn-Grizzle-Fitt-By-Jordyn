"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    goal: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Encode form data for Formspree or simple mailto
    const subject = encodeURIComponent(`New Inquiry from ${form.name} - Fitt By Jordyn`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nGoal: ${form.goal}\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:your@email.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#1a1a1a",
    border: "1px solid #2a2a2a",
    borderRadius: "8px",
    padding: "0.85rem 1.1rem",
    color: "#f5f0eb",
    fontSize: "0.95rem",
    transition: "border-color 0.3s, box-shadow 0.3s",
    fontFamily: "var(--font-inter)",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.75rem",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "rgba(245, 240, 235, 0.5)",
    marginBottom: "0.5rem",
  };

  return (
    <section
      id="contact"
      className="py-28 lg:py-36"
      style={{ background: "#111111" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Info */}
          <div>
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
              Get In Touch
            </p>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: "#f5f0eb",
                marginBottom: "1.25rem",
              }}
            >
              Ready to Start
              <br />
              <span className="gradient-text">Your Journey?</span>
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(245, 240, 235, 0.55)",
                lineHeight: 1.9,
                maxWidth: "400px",
                marginBottom: "2.5rem",
              }}
            >
              Whether you&apos;re brand new to training or looking to level up,
              reach out and let&apos;s talk about what&apos;s possible for you.
            </p>

            {/* Contact methods */}
            <div className="flex flex-col gap-4">
              <a
                href="https://instagram.com/jordyn.grizzle"
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover flex items-center gap-4 p-5 rounded-xl"
                style={{ background: "#1a1a1a", border: "1px solid #2a2a2a" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(200, 149, 108, 0.12)", color: "#c8956c" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c8956c", marginBottom: "0.15rem", fontWeight: 600 }}>
                    Instagram
                  </p>
                  <p style={{ fontSize: "0.95rem", color: "#f5f0eb", fontWeight: 500 }}>
                    @jordyn.grizzle
                  </p>
                </div>
              </a>

              <div
                className="flex items-center gap-4 p-5 rounded-xl"
                style={{ background: "#1a1a1a", border: "1px solid #2a2a2a" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(200, 149, 108, 0.12)", color: "#c8956c" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c8956c", marginBottom: "0.15rem", fontWeight: 600 }}>
                    Location
                  </p>
                  <p style={{ fontSize: "0.95rem", color: "#f5f0eb", fontWeight: 500 }}>
                    Queen Creek, Arizona
                  </p>
                  <p style={{ fontSize: "0.78rem", color: "rgba(245, 240, 235, 0.4)", marginTop: "0.1rem" }}>
                    In-person & Online Available
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div
                className="rounded-2xl p-10 text-center"
                style={{
                  background: "rgba(200, 149, 108, 0.08)",
                  border: "1px solid rgba(200, 149, 108, 0.25)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: "rgba(200, 149, 108, 0.15)", color: "#c8956c" }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "1.6rem",
                    fontWeight: 700,
                    color: "#f5f0eb",
                    marginBottom: "0.75rem",
                  }}
                >
                  Message Sent!
                </h3>
                <p style={{ color: "rgba(245, 240, 235, 0.55)", fontSize: "0.95rem", lineHeight: 1.7 }}>
                  Thanks for reaching out! Jordyn will get back to you shortly.
                  In the meantime, follow along on Instagram.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8 lg:p-10 flex flex-col gap-5"
                style={{ background: "#1a1a1a", border: "1px solid #2a2a2a" }}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle} htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle} htmlFor="goal">Primary Goal</label>
                  <select
                    id="goal"
                    name="goal"
                    value={form.goal}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: "pointer" }}
                  >
                    <option value="">Select your goal...</option>
                    <option value="Muscle Building">Muscle Building</option>
                    <option value="Body Composition / Fat Loss">Body Composition / Fat Loss</option>
                    <option value="Strength Training">Strength Training</option>
                    <option value="Nutrition Guidance">Nutrition Guidance</option>
                    <option value="Flexibility / Mobility">Flexibility / Mobility</option>
                    <option value="General Fitness">General Fitness</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle} htmlFor="message">Tell Me About Yourself</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Share your goals, current fitness level, and what you're looking for in a coach..."
                    style={{ ...inputStyle, resize: "vertical" as const }}
                  />
                </div>

                <button type="submit" className="btn-primary text-center w-full">
                  Send Message
                </button>

                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(245, 240, 235, 0.3)",
                    textAlign: "center",
                    lineHeight: 1.6,
                  }}
                >
                  You can also DM on Instagram{" "}
                  <a
                    href="https://instagram.com/jordyn.grizzle"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#c8956c" }}
                  >
                    @jordyn.grizzle
                  </a>{" "}
                  for a faster response.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
