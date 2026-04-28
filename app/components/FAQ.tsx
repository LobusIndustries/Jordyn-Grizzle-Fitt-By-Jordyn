"use client";

import { useState } from "react";
import { faqItems } from "./StructuredData";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      style={{
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.3s ease",
        flexShrink: 0,
        color: "#c8956c",
      }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-28 lg:py-36"
      style={{ background: "#111111" }}
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
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
            FAQ
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
            Common{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(245, 240, 235, 0.5)",
              maxWidth: "420px",
              margin: "1.25rem auto 0",
              lineHeight: 1.8,
            }}
          >
            Not sure where to start? Here are some of the most common things people ask.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl overflow-hidden"
                style={{
                  background: isOpen ? "rgba(200, 149, 108, 0.06)" : "#1a1a1a",
                  border: isOpen
                    ? "1px solid rgba(200, 149, 108, 0.3)"
                    : "1px solid #2a2a2a",
                  transition: "background 0.3s ease, border-color 0.3s ease",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  style={{ cursor: "pointer", background: "transparent", border: "none" }}
                  aria-expanded={isOpen}
                >
                  <span
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: isOpen ? "#f5f0eb" : "rgba(245, 240, 235, 0.8)",
                      lineHeight: 1.4,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {item.question}
                  </span>
                  <ChevronIcon open={isOpen} />
                </button>
                {isOpen && (
                  <div
                    className="px-6 pb-6"
                    style={{
                      fontSize: "0.9rem",
                      color: "rgba(245, 240, 235, 0.6)",
                      lineHeight: 1.85,
                    }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p
            style={{
              fontSize: "0.9rem",
              color: "rgba(245, 240, 235, 0.45)",
              marginBottom: "1rem",
            }}
          >
            Still have questions?
          </p>
          <a href="#contact" className="btn-primary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
