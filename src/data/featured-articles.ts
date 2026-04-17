import type { Article } from "../components/FeaturedArticles.astro";

export type LocalizedArticles = {
  en: Article[];
  es: Article[];
};

export const featuredArticles: LocalizedArticles = {
  en: [
    {
      title: "Understanding Swift Concurrency",
      excerpt: "A friendly walkthrough of async/await, actors, and isolation — for people who don't want to memorize a spec.",
      href: "https://blog.swiftyjourney.com/en/",
      date: "Apr 2026",
    },
    {
      title: "SwiftUI Performance",
      excerpt: "Real-world tactics to keep SwiftUI views snappy — what to profile, what to ignore, and what Instruments won't tell you.",
      href: "https://blog.swiftyjourney.com/en/",
      date: "Mar 2026",
    },
    {
      title: "Clean Architecture in iOS",
      excerpt: "Small, safe steps to modularize a legacy iOS app with SPM — without breaking shipping.",
      href: "https://blog.swiftyjourney.com/en/",
      date: "Feb 2026",
    },
  ],
  es: [
    {
      title: "Entendiendo Swift Concurrency",
      excerpt: "Un recorrido amigable por async/await, actors y aislamiento — para quien no quiere memorizar la spec.",
      href: "https://blog.swiftyjourney.com/es/",
      date: "Abr 2026",
    },
    {
      title: "SwiftUI Performance",
      excerpt: "Tácticas reales para mantener tus vistas SwiftUI ágiles — qué perfilar, qué ignorar, y qué no te dirá Instruments.",
      href: "https://blog.swiftyjourney.com/es/",
      date: "Mar 2026",
    },
    {
      title: "Clean Architecture en iOS",
      excerpt: "Pasos pequeños y seguros para modularizar un app iOS legacy con SPM — sin parar el envío.",
      href: "https://blog.swiftyjourney.com/es/",
      date: "Feb 2026",
    },
  ],
};
