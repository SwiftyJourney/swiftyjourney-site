import type { Article } from "../components/FeaturedArticles.astro";

export type LocalizedArticles = {
  en: Article[];
  es: Article[];
};

export const featuredArticles: LocalizedArticles = {
  en: [
    {
      title: "Mastering Instruments (Part 2): Stack vs. Heap, Symbolication, and Early Detection",
      excerpt: "How your app manages memory, why dSYMs matter, and how to spot performance issues before Instruments is even open.",
      href: "https://blog.swiftyjourney.com/en/blog/mastering-instruments-stack-heap-symbolication",
      date: "Apr 2026",
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
      title: "Dominando Instruments (Parte 2): Stack vs. Heap, simbolización y detección temprana",
      excerpt: "Cómo tu app gestiona la memoria, por qué los dSYMs son críticos y cómo detectar problemas de rendimiento antes de abrir Instruments.",
      href: "https://blog.swiftyjourney.com/es/blog/dominando-instruments-stack-heap-simbolizacion",
      date: "Abr 2026",
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
