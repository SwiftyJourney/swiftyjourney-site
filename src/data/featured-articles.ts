import type { Article } from "../components/FeaturedArticles.astro";

export type LocalizedArticles = {
  en: Article[];
  es: Article[];
};

export const featuredArticles: LocalizedArticles = {
  en: [
    {
      title: "Thread Safety in Swift: From NSLock to Actors",
      excerpt: "Three ways to make Swift code thread-safe — from traditional NSLock to Actors — and how Swift Concurrency dissolves race conditions and deadlocks.",
      href: "https://blog.swiftyjourney.com/en/blog/thread-safety-in-swift-from-nslock-to-actors",
      date: "Nov 2025",
    },
    {
      title: "Complete Swift 6.2 Guide: Approachable Concurrency Explained",
      excerpt: "An interactive walkthrough of the 5 Approachable Concurrency flags in Xcode 26 — recommended setup and a step-by-step migration path.",
      href: "https://blog.swiftyjourney.com/en/blog/swift6-approachable-concurrency-guide",
      date: "Mar 2026",
    },
    {
      title: "From Architecture to Reality: Building Real-Time BTC Price Apps",
      excerpt: "Wiring every layer with a Composition Root and ViewModels — and the macOS App Sandbox fight that nearly killed the network calls.",
      href: "https://blog.swiftyjourney.com/en/blog/from-architecture-to-reality-building-real-time-btc-apps",
      date: "Nov 2025",
    },
  ],
  es: [
    {
      title: "Thread Safety en Swift: De NSLock a Actors",
      excerpt: "Tres enfoques para lograr thread safety en Swift — desde NSLock tradicional hasta Actors — y cómo Swift Concurrency resuelve race conditions y deadlocks.",
      href: "https://blog.swiftyjourney.com/es/blog/thread-safety-en-swift-de-nslock-a-actors",
      date: "Nov 2025",
    },
    {
      title: "Guía completa de Swift 6.2: Approachable Concurrency explicado",
      excerpt: "Guía interactiva con las 5 feature flags de Approachable Concurrency en Xcode 26 — configuración recomendada y migración paso a paso.",
      href: "https://blog.swiftyjourney.com/es/blog/guia-swift6-approachable-concurrency",
      date: "Mar 2026",
    },
    {
      title: "De Arquitectura a Realidad: Construyendo Apps de Precio BTC en Tiempo Real",
      excerpt: "Conectando todas las capas con Composition Root y ViewModels — y cómo el App Sandbox de macOS casi destruye las llamadas de red.",
      href: "https://blog.swiftyjourney.com/es/blog/de-arquitectura-a-realidad-construyendo-apps-de-precio-btc-en-tiempo-real",
      date: "Nov 2025",
    },
  ],
};
