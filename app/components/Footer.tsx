"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid #1e1e1e",
        padding: "3rem 0",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <span
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "#f5f0eb",
              }}
            >
              Fitt By <span style={{ color: "#c8956c" }}>Jordyn</span>
            </span>
            <p
              style={{
                fontSize: "0.72rem",
                color: "rgba(245, 240, 235, 0.3)",
                marginTop: "0.25rem",
                letterSpacing: "0.08em",
              }}
            >
              NPTI Certified Personal Trainer · Queen Creek, AZ
            </p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            {[
              { href: "#about", label: "About" },
              { href: "#services", label: "Services" },
              { href: "#approach", label: "Approach" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(245, 240, 235, 0.35)",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c8956c")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245, 240, 235, 0.35)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <a
            href="https://instagram.com/jordyn.grizzle"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
            style={{
              color: "rgba(245, 240, 235, 0.4)",
              fontSize: "0.82rem",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c8956c")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245, 240, 235, 0.4)")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            @jordyn.grizzle
          </a>
        </div>

        <div
          className="mt-8 pt-6 text-center"
          style={{ borderTop: "1px solid #1e1e1e" }}
        >
          <p
            style={{
              fontSize: "0.72rem",
              color: "rgba(245, 240, 235, 0.2)",
              letterSpacing: "0.06em",
            }}
          >
            © {year} Fitt By Jordyn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
