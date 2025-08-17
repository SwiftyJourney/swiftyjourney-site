export const createPersonJsonLd = (lang: 'en' | 'es' = 'en') => {
  const isSpanish = lang === 'es';

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Juan Francisco Dorado Torres",
    "givenName": "Juan Francisco",
    "familyName": "Dorado Torres",
    "jobTitle": isSpanish ? "Senior Software Engineer (Especialista iOS)" : "Senior Software Engineer (iOS Specialist)",
    "description": isSpanish
      ? "Senior Software Engineer especialista en iOS con más de 8 años de experiencia en Swift y SwiftUI. Experto en arquitecturas escalables y mejores prácticas de desarrollo."
      : "Senior Software Engineer specializing in iOS with 8+ years of experience in Swift and SwiftUI. Expert in scalable architectures and development best practices.",
    "url": "https://swiftyjourney.com",
    "image": "https://swiftyjourney.com/hero/taylor_wave.png",
    "sameAs": [
      "https://github.com/swiftyjourney",
      "https://twitter.com/jfdoradotr",
      "https://linkedin.com/in/juanfranciscodoradotorres"
    ],
    "knowsAbout": [
      "iOS Development",
      "Swift Programming",
      "SwiftUI",
      "UIKit",
      "Xcode",
      "App Store",
      "Mobile Development",
      "Software Architecture"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Swifty Journey"
    }
  };
};

export const createOrganizationJsonLd = (lang: 'en' | 'es' = 'en') => {
  const isSpanish = lang === 'es';

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Swifty Journey",
    "url": "https://swiftyjourney.com",
    "logo": "https://swiftyjourney.com/logo-light.svg",
    "description": isSpanish
      ? "Blog y recursos sobre desarrollo iOS, Swift y SwiftUI para desarrolladores de todos los niveles."
      : "Blog and resources about iOS development, Swift and SwiftUI for developers of all levels.",
    "foundingDate": "2022",
    "founder": {
      "@type": "Person",
      "name": "Juan Francisco Dorado Torres"
    },
    "sameAs": [
      "https://github.com/swiftyjourney",
      "https://twitter.com/jfdoradotr"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "creator",
      "url": "https://swiftyjourney.com"
    }
  };
};

export const createWebsiteJsonLd = (lang: 'en' | 'es' = 'en') => {
  const isSpanish = lang === 'es';

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Swifty Journey",
    "url": "https://swiftyjourney.com",
    "description": isSpanish
      ? "Recursos y tutoriales sobre desarrollo iOS con Swift y SwiftUI"
      : "Resources and tutorials about iOS development with Swift and SwiftUI",
    "inLanguage": [lang === 'es' ? 'es-MX' : 'en-US'],
    "author": {
      "@type": "Person",
      "name": "Juan Francisco Dorado Torres"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Swifty Journey",
      "logo": {
        "@type": "ImageObject",
        "url": "https://swiftyjourney.com/logo-light.svg"
      }
    }
  };
};