const faqItems = [
  {
    question: "Do you work with complete beginners?",
    answer:
      "Absolutely. I love working with beginners. You'll start with the fundamentals — proper form, movement patterns, and building a base of strength — so we can progress safely and effectively from wherever you are.",
  },
  {
    question: "Is online coaching as effective as in-person training?",
    answer:
      "Yes — online coaching is actually my primary format. Through the Trainerize app you get fully customized programming, regular check-ins, video form reviews, and direct messaging access to me 24/7. Most clients see incredible results online.",
  },
  {
    question: "What app do you use for coaching?",
    answer:
      "All clients train through Trainerize, a professional coaching platform. Your workouts, meal plans, progress tracking, and check-in forms all live in one place — and you can message me there anytime.",
  },
  {
    question: "Do you offer nutrition coaching alongside training?",
    answer:
      "Yes. Nutrition guidance is available as a standalone service or bundled with training. I create custom meal plans and teach you how to fuel your body for performance, recovery, and your specific goals.",
  },
  {
    question: "How often will we communicate?",
    answer:
      "You can message me through Trainerize 24/7 and I'll get back to you as quickly as possible. We also have scheduled check-ins (weekly or bi-weekly depending on your program) to review progress and adjust your plan.",
  },
  {
    question: "Do you train clients outside of Queen Creek?",
    answer:
      "Yes — online coaching is available to anyone, anywhere. In-person training is available in and around the Queen Creek, Arizona area.",
  },
  {
    question: "How do I get started?",
    answer:
      "Fill out the contact form on this page or reach out via email or Instagram. We'll connect, talk through your goals, and figure out the best program for you.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
      "@id": "https://www.fittbyjordyn.com/#business",
      name: "Fitt By Jordyn",
      description:
        "NPTI Certified personal trainer in Queen Creek, AZ specializing in muscle building, body composition, nutrition guidance, online coaching, and PNF stretching.",
      url: "https://www.fittbyjordyn.com",
      email: "Jordyn.grizzle@gmail.com",
      image: "https://www.fittbyjordyn.com/opengraph-image",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Queen Creek",
        addressRegion: "AZ",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.2484,
        longitude: -111.6341,
      },
      areaServed: [
        { "@type": "City", "name": "Queen Creek" },
        { "@type": "AdministrativeArea", "name": "Arizona" },
        { "@type": "Country", "name": "United States" },
        "Worldwide (Online Coaching)",
      ],
      priceRange: "$$",
      sameAs: [
        "https://www.instagram.com/jordyn.fitt",
        "https://www.instagram.com/jordyn.grizzle",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Personal Training Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "One-on-One In-Person Coaching",
              description:
                "Personalized in-person training sessions at your home or Jordyn's gym, with custom programming delivered via the Trainerize app.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Online Coaching",
              description:
                "Fully customized online training programs delivered through Trainerize, with regular check-ins, video form reviews, and 24/7 messaging.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Nutrition Guidance & Meal Plans",
              description:
                "Custom meal plans and macro guidance built around your lifestyle, goals, and training — delivered through the Trainerize app.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "PNF Stretching",
              description:
                "Advanced proprioceptive neuromuscular facilitation stretching rooted in Jordyn's gymnastics background, improving range of motion and movement quality.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Flexibility & Mobility Training",
              description:
                "Targeted flexibility and mobility programs drawing on 10 years of elite gymnastics expertise, supporting injury prevention and athletic performance.",
            },
          },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": "https://www.fittbyjordyn.com/#jordyn",
      name: "Jordyn Grizzle",
      jobTitle: "NPTI Certified Personal Trainer",
      description:
        "NPTI Certified Personal Trainer from Queen Creek, AZ with a background in competitive gymnastics and cheer. Specializes in muscle building, body composition, and holistic fitness coaching.",
      url: "https://www.fittbyjordyn.com",
      email: "Jordyn.grizzle@gmail.com",
      sameAs: [
        "https://www.instagram.com/jordyn.fitt",
        "https://www.instagram.com/jordyn.grizzle",
      ],
      worksFor: { "@id": "https://www.fittbyjordyn.com/#business" },
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: "NPTI Personal Training Certification",
        credentialCategory: "Professional Certification",
        recognizedBy: {
          "@type": "Organization",
          name: "National Personal Training Institute of Arizona",
        },
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.fittbyjordyn.com/#website",
      url: "https://www.fittbyjordyn.com",
      name: "Fitt By Jordyn",
      description:
        "Personal training and online coaching by Jordyn Grizzle, NPTI Certified Trainer based in Queen Creek, AZ.",
      publisher: { "@id": "https://www.fittbyjordyn.com/#business" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.fittbyjordyn.com/#faq",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export { faqItems };
