export type Highlight = {
  category: string;
  summary: string;
};

export type SkillGroup = {
  heading: string;
  items: string[];
};

export type Credential = {
  program: string;
  org: string;
  year: string;
  href?: string;
};

export type Project = {
  title: string;
  desc: string;
  tags: string[];
  href: string;
};

export type AboutLocaleContent = {
  intro: {
    eyebrow: string;
    title: string;
    lede: string;
  };
  highlights: {
    eyebrow: string;
    title: string;
    items: Highlight[];
  };
  skills: {
    eyebrow: string;
    title: string;
    groups: SkillGroup[];
  };
  teaching: {
    eyebrow: string;
    title: string;
    moderator: { role: string; program: string; org: string; period: string; href: string };
    academyHeading: string;
    credentials: Credential[];
  };
  openSource: {
    eyebrow: string;
    title: string;
    projects: Project[];
  };
  ai: {
    eyebrow: string;
    title: string;
    projects: Project[];
  };
  finalCta: {
    heading: string;
    body: string;
    ctaLabel: string;
    ctaHref: string;
  };
};

export const aboutContent: Record<"en" | "es", AboutLocaleContent> = {
  en: {
    intro: {
      eyebrow: "About",
      title: "I build iOS apps I'd actually want to maintain.",
      lede: "Senior iOS Engineer from Mexico. 11+ years shipping iOS apps — from UIKit to SwiftUI, from solo projects to leading teams. I write and mentor because the architecture lessons I learned the hard way are the ones I wish someone had shown me sooner.",
    },
    highlights: {
      eyebrow: "Highlights",
      title: "What I've done",
      items: [
        {
          category: "Architecture & modularization",
          summary: "Led iOS modularization efforts across large codebases — establishing SPM boundaries, composition roots, and dependency rules that survive team churn.",
        },
        {
          category: "CI/CD & developer velocity",
          summary: "Drove ~67% CI/CD throughput improvements through streamlined pipelines, smarter caching, and test parallelization.",
        },
        {
          category: "Performance",
          summary: "Shipped ~22% performance gains on critical user flows through Instruments-led profiling and targeted SwiftUI rendering fixes.",
        },
        {
          category: "SwiftUI migration",
          summary: "Led migrations from legacy UIKit modules to SwiftUI in production apps, keeping shipping cadence intact and regression risk contained.",
        },
        {
          category: "Mentoring & leadership",
          summary: "Mentored iOS engineers through architecture reviews, TDD practice, and CI/CD discipline — raising team-level code quality and autonomy.",
        },
        {
          category: "Observability",
          summary: "Wired analytics and observability (Adobe Analytics, DataDog) into iOS flows so product and engineering teams ship decisions on evidence, not vibes.",
        },
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "What I work with",
      groups: [
        {
          heading: "Architecture & Practice",
          items: [
            "Clean Architecture",
            "SOLID",
            "TDD",
            "Modularization",
            "Composition Root",
            "Essential Developer methodology",
          ],
        },
        {
          heading: "iOS & Apple Platforms",
          items: [
            "Swift",
            "SwiftUI",
            "UIKit",
            "Swift Concurrency",
            "SwiftData",
            "CoreData",
            "Swift Testing",
            "Instruments",
            "SPM",
          ],
        },
        {
          heading: "Tools & Workflow",
          items: [
            "Git (terminal-first)",
            "GitHub Actions",
            "Xcode Cloud",
            "DataDog",
            "Adobe Analytics",
            "Claude Code",
          ],
        },
      ],
    },
    teaching: {
      eyebrow: "Teaching & mentoring",
      title: "Where I learn and share",
      moderator: {
        role: "Moderator",
        program: "iOS Lead Essentials",
        org: "Essential Developer",
        period: "2022 – present",
        href: "https://iosacademy.essentialdeveloper.com/p/ios-lead-essentials/",
      },
      academyHeading: "Apple Coding Academy",
      credentials: [
        { program: "Swift Developer Program", org: "Apple Coding Academy", year: "2025", href: "https://acoding.academy/formaciones/swift-developer-program/" },
        { program: "Swift Accessibility Program", org: "Apple Coding Academy", year: "2025", href: "https://acoding.academy/" },
        { program: "Swift Refresh Workshop", org: "Apple Coding Academy", year: "2025", href: "https://acoding.academy/" },
        { program: "Swift Mastery Program", org: "Apple Coding Academy", year: "In progress · 2026", href: "https://acoding.academy/formaciones/swift-mastery-program/" },
      ],
    },
    openSource: {
      eyebrow: "Open source",
      title: "Things I've built in the open",
      projects: [
        { title: "TAXI", desc: "Modular architecture template for iOS using Clean Architecture, TDD, and SPM.", tags: ["Swift", "Architecture", "SPM"], href: "https://github.com/SwiftyJourney/TAXI" },
        { title: "BTC Price Study Case", desc: "Clean Architecture and TDD from user stories to tested business logic.", tags: ["Swift", "Clean Architecture", "TDD"], href: "https://github.com/SwiftyJourney/btc-price-study-case" },
        { title: "MyMangasApp", desc: "SwiftUI + SwiftData + Swift Testing — Swift Developer Program 2025 final project.", tags: ["SwiftUI", "SwiftData", "Testing"], href: "https://github.com/jfdoradotr/my-mangas-app-study-case" },
        { title: "XCSnippets", desc: "Xcode snippets distributed via SPM.", tags: ["Swift", "Productivity"], href: "https://github.com/SwiftyJourney/XCSnippets" },
        { title: "I-VIPER", desc: "Template to bootstrap VIPER modules.", tags: ["Makefile", "Architecture"], href: "https://github.com/SwiftyJourney/I-VIPER" },
      ],
    },
    ai: {
      eyebrow: "Bonus — AI tooling",
      title: "Claude Code Skills",
      projects: [
        { title: "iOS Architecture Expert", desc: "Claude Code skill for iOS architecture guidance, SOLID, and modular design.", tags: ["Claude Code", "Architecture"], href: "https://github.com/SwiftyJourney/ios-architecture-expert-skill" },
        { title: "SwiftUI Expert", desc: "Claude Code skill for SwiftUI best practices and declarative UI patterns.", tags: ["Claude Code", "SwiftUI"], href: "https://github.com/SwiftyJourney/swiftui-expert-skill" },
        { title: "Requirements Engineering", desc: "Claude Code skill for transforming requirements into user stories and specs.", tags: ["Claude Code", "Engineering"], href: "https://github.com/SwiftyJourney/requirements-engineering-skill" },
      ],
    },
    finalCta: {
      heading: "Let's connect.",
      body: "I enjoy collaborating on iOS projects, reviewing architecture, and helping developers grow.",
      ctaLabel: "LinkedIn",
      ctaHref: "https://linkedin.com/in/juanfranciscodoradotorres",
    },
  },
  es: {
    intro: {
      eyebrow: "Sobre mí",
      title: "Construyo apps iOS que yo mismo querría mantener.",
      lede: "Senior iOS Engineer desde México. 11+ años enviando apps iOS — de UIKit a SwiftUI, de proyectos individuales a liderar equipos. Escribo y mentoreo porque las lecciones de arquitectura que aprendí a los golpes son las que me hubiera gustado que alguien me mostrara antes.",
    },
    highlights: {
      eyebrow: "Hitos",
      title: "Lo que he hecho",
      items: [
        {
          category: "Arquitectura & modularización",
          summary: "Lideré esfuerzos de modularización iOS en codebases grandes — estableciendo fronteras SPM, composition roots y reglas de dependencias que sobreviven al churn del equipo.",
        },
        {
          category: "CI/CD & velocidad de desarrollo",
          summary: "Impulsé mejoras de ~67% en throughput de CI/CD con pipelines más simples, caching más inteligente y paralelización de tests.",
        },
        {
          category: "Performance",
          summary: "Envié mejoras de ~22% en flujos críticos del usuario vía profiling con Instruments y fixes quirúrgicos de rendering en SwiftUI.",
        },
        {
          category: "Migración a SwiftUI",
          summary: "Lideré migraciones de módulos legacy UIKit hacia SwiftUI en apps en producción, manteniendo la cadencia de envío y el riesgo de regresión contenido.",
        },
        {
          category: "Mentoría & liderazgo",
          summary: "Mentoreé ingenieros iOS con reviews de arquitectura, práctica de TDD y disciplina de CI/CD — elevando la calidad de código y la autonomía a nivel equipo.",
        },
        {
          category: "Observabilidad",
          summary: "Integré analytics y observabilidad (Adobe Analytics, DataDog) en flujos iOS para que producto e ingeniería decidan con evidencia, no con vibes.",
        },
      ],
    },
    skills: {
      eyebrow: "Habilidades",
      title: "Con qué trabajo",
      groups: [
        {
          heading: "Arquitectura & Práctica",
          items: [
            "Clean Architecture",
            "SOLID",
            "TDD",
            "Modularización",
            "Composition Root",
            "Metodología Essential Developer",
          ],
        },
        {
          heading: "iOS & Plataformas Apple",
          items: [
            "Swift",
            "SwiftUI",
            "UIKit",
            "Swift Concurrency",
            "SwiftData",
            "CoreData",
            "Swift Testing",
            "Instruments",
            "SPM",
          ],
        },
        {
          heading: "Herramientas & Flujo",
          items: [
            "Git (CLI-first)",
            "GitHub Actions",
            "Xcode Cloud",
            "DataDog",
            "Adobe Analytics",
            "Claude Code",
          ],
        },
      ],
    },
    teaching: {
      eyebrow: "Enseñanza & mentoría",
      title: "Donde aprendo y comparto",
      moderator: {
        role: "Moderador",
        program: "iOS Lead Essentials",
        org: "Essential Developer",
        period: "2022 – presente",
        href: "https://iosacademy.essentialdeveloper.com/p/ios-lead-essentials/",
      },
      academyHeading: "Apple Coding Academy",
      credentials: [
        { program: "Swift Developer Program", org: "Apple Coding Academy", year: "2025", href: "https://acoding.academy/formaciones/swift-developer-program/" },
        { program: "Swift Accessibility Program", org: "Apple Coding Academy", year: "2025", href: "https://acoding.academy/" },
        { program: "Swift Refresh Workshop", org: "Apple Coding Academy", year: "2025", href: "https://acoding.academy/" },
        { program: "Swift Mastery Program", org: "Apple Coding Academy", year: "En curso · 2026", href: "https://acoding.academy/formaciones/swift-mastery-program/" },
      ],
    },
    openSource: {
      eyebrow: "Open source",
      title: "Cosas que he construido en abierto",
      projects: [
        { title: "TAXI", desc: "Template de arquitectura modular para iOS con Clean Architecture, TDD y SPM.", tags: ["Swift", "Arquitectura", "SPM"], href: "https://github.com/SwiftyJourney/TAXI" },
        { title: "BTC Price Study Case", desc: "Clean Architecture y TDD desde user stories hasta lógica de negocio testeada.", tags: ["Swift", "Clean Architecture", "TDD"], href: "https://github.com/SwiftyJourney/btc-price-study-case" },
        { title: "MyMangasApp", desc: "SwiftUI + SwiftData + Swift Testing — proyecto final del Swift Developer Program 2025.", tags: ["SwiftUI", "SwiftData", "Testing"], href: "https://github.com/jfdoradotr/my-mangas-app-study-case" },
        { title: "XCSnippets", desc: "Snippets de Xcode distribuidos vía SPM.", tags: ["Swift", "Productividad"], href: "https://github.com/SwiftyJourney/XCSnippets" },
        { title: "I-VIPER", desc: "Template para bootstrap de módulos VIPER.", tags: ["Makefile", "Arquitectura"], href: "https://github.com/SwiftyJourney/I-VIPER" },
      ],
    },
    ai: {
      eyebrow: "Bonus — Herramientas AI",
      title: "Claude Code Skills",
      projects: [
        { title: "iOS Architecture Expert", desc: "Claude Code skill para guía de arquitectura iOS, SOLID y diseño modular.", tags: ["Claude Code", "Arquitectura"], href: "https://github.com/SwiftyJourney/ios-architecture-expert-skill" },
        { title: "SwiftUI Expert", desc: "Claude Code skill para best practices de SwiftUI y patrones declarativos.", tags: ["Claude Code", "SwiftUI"], href: "https://github.com/SwiftyJourney/swiftui-expert-skill" },
        { title: "Requirements Engineering", desc: "Claude Code skill para transformar requerimientos en user stories y specs.", tags: ["Claude Code", "Ingeniería"], href: "https://github.com/SwiftyJourney/requirements-engineering-skill" },
      ],
    },
    finalCta: {
      heading: "Conectemos.",
      body: "Disfruto colaborar en proyectos iOS, revisar arquitectura y ayudar a desarrolladores a crecer.",
      ctaLabel: "LinkedIn",
      ctaHref: "https://linkedin.com/in/juanfranciscodoradotorres",
    },
  },
};
