import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fitt By Jordyn | Personal Training & Online Coaching",
  description:
    "Certified personal trainer in Queen Creek, AZ. Specializing in muscle building, body composition, nutrition guidance, and online coaching. Train with Jordyn Grizzle.",
  keywords: [
    "personal trainer",
    "Queen Creek Arizona",
    "online coaching",
    "muscle building",
    "body composition",
    "nutrition guidance",
    "PNF stretching",
    "Fitt By Jordyn",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
