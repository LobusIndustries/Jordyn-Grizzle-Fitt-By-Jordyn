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
  metadataBase: new URL("https://www.fittbyjordyn.com"),
  title: {
    default: "Fitt By Jordyn | Personal Training & Online Coaching",
    template: "%s | Fitt By Jordyn",
  },
  description:
    "NPTI Certified personal trainer in Queen Creek, AZ. Specializing in muscle building, body composition, nutrition guidance, and online coaching. Train with Jordyn Grizzle.",
  keywords: [
    "personal trainer Queen Creek AZ",
    "personal trainer Queen Creek Arizona",
    "online personal trainer",
    "online coaching",
    "muscle building coach",
    "body composition",
    "nutrition guidance",
    "PNF stretching",
    "flexibility training",
    "NPTI certified trainer",
    "Fitt By Jordyn",
    "Jordyn Grizzle",
  ],
  authors: [{ name: "Jordyn Grizzle" }],
  creator: "Jordyn Grizzle",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.fittbyjordyn.com",
    siteName: "Fitt By Jordyn",
    title: "Fitt By Jordyn | Personal Training & Online Coaching",
    description:
      "NPTI Certified personal trainer in Queen Creek, AZ. Muscle building, body composition, nutrition guidance, and online coaching with Jordyn Grizzle.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Fitt By Jordyn — Personal Training & Online Coaching",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitt By Jordyn | Personal Training & Online Coaching",
    description:
      "NPTI Certified personal trainer in Queen Creek, AZ. Muscle building, body composition, nutrition guidance, and online coaching.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.fittbyjordyn.com",
  },
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
