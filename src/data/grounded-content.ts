export type Lang = "en" | "es";

export type Feature = {
  title: string;
  body: string;
};

export type Screenshot = {
  src: string;
  alt: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type PrivacySection = {
  heading: string;
  paragraphs: string[];
};

export const GROUNDED_SUPPORT_EMAIL = "jfdoradotr@icloud.com";
export const GROUNDED_PRIVACY_UPDATED = "2026-09-27";

export const groundedContent = {
  en: {
    nav: {
      app: "Grounded",
      support: "Support",
      privacy: "Privacy",
    },
    app: {
      title: "Grounded — Private, on-device journal · Swifty Journey",
      description:
        "Grounded is an iPhone journal that reflects your entries back on your device, grounded in how you slept and trained.",
      eyebrow: "An iPhone app",
      heading: "Grounded: Daily Journal",
      lede:
        "Write or say one thing about your day. Grounded reads it on your iPhone and reflects it back, grounded in how you slept. No account. Nothing leaves your phone.",
      screenshots: [
        { src: "/apps/grounded/en/01-reflection.jpg", alt: "An entry with its reflection" },
        { src: "/apps/grounded/en/02-journal.jpg", alt: "The journal list with captions" },
        { src: "/apps/grounded/en/03-trends.jpg", alt: "Trends showing a pattern across work, training and family" },
      ] as Screenshot[],
      featuresHeading: "What it does",
      features: [
        {
          title: "Write or speak",
          body: "Type an entry or dictate it. Speech is turned into text on the device.",
        },
        {
          title: "A reflection, not advice",
          body: "Apple Intelligence reads the entry on your iPhone and reflects it back in a few sentences.",
        },
        {
          title: "Grounded in your body",
          body: "With your permission, Grounded reads last night's sleep and your latest workout so the reflection can refer to them.",
        },
        {
          title: "Patterns over time",
          body: "From the third entry on, Trends looks for what connects work, training and family.",
        },
        {
          title: "Fast capture",
          body: "Add an entry from the Home Screen widget, a Siri phrase, a shortcut or Back Tap.",
        },
        {
          title: "English and Spanish",
          body: "The app, its captions and its reflections follow your iPhone's language.",
        },
      ] as Feature[],
      requirementsHeading: "Requirements",
      requirements:
        "iOS 26 or later. Reflections, captions and patterns need an iPhone that supports Apple Intelligence, with Apple Intelligence turned on. Without it, Grounded still keeps your journal, privately, on your device.",
      disclaimer: "Grounded is a journal, not a medical device, and it does not give medical advice.",
      linksHeading: "More",
      supportLink: "Support",
      privacyLink: "Privacy policy",
    },
    support: {
      title: "Grounded Support · Swifty Journey",
      description: "Help and contact for Grounded, the private on-device journal for iPhone.",
      eyebrow: "Grounded",
      heading: "Support",
      lede: "Questions, bugs or ideas? Write and you will get an answer from the developer.",
      contactHeading: "Contact",
      contactBody: "Send an email and include your iPhone model and iOS version if something is not working.",
      faqHeading: "Frequently asked questions",
      faqs: [
        {
          question: "Why don't I see reflections or captions?",
          answer:
            "They are made by Apple Intelligence on your iPhone. Check that your iPhone supports Apple Intelligence and that it is turned on in Settings › Apple Intelligence & Siri. Right after you turn it on, the model may still be downloading; try again in a few minutes. Your entries are saved either way.",
        },
        {
          question: "Does Grounded need an internet connection or an account?",
          answer: "No. There is no account and no server. Everything happens on your iPhone.",
        },
        {
          question: "Why does Grounded ask for Health access?",
          answer:
            "To read last night's sleep and your most recent workout so a reflection can mention them. Access is read-only, and you can turn it off at any time in Settings › Health › Data Access & Devices › Grounded. Grounded works without it.",
        },
        {
          question: "Why doesn't voice entry work?",
          answer:
            "Grounded needs microphone and speech recognition permission. You can allow both in Settings › Apps › Grounded. Speech is turned into text on the device.",
        },
        {
          question: "How do I add an entry quickly?",
          answer:
            "Add the Grounded widget to your Home Screen, say \"Add an entry to Grounded\" to Siri, or assign the Add Entry shortcut to Back Tap in Settings › Accessibility › Touch › Back Tap.",
        },
        {
          question: "Can I use Grounded in Spanish?",
          answer:
            "Yes. Grounded follows your iPhone's language. To change it only for Grounded, go to Settings › Apps › Grounded › Language.",
        },
        {
          question: "How do I delete my entries?",
          answer:
            "Swipe left on an entry in the Journal to delete it. Deleting the app removes all of its entries from your iPhone.",
        },
      ] as Faq[],
      privacyLink: "Read the privacy policy",
      appLink: "About Grounded",
    },
    privacy: {
      title: "Grounded Privacy Policy · Swifty Journey",
      description: "Grounded collects no data. Your entries, Health readings and voice stay on your iPhone.",
      eyebrow: "Grounded",
      heading: "Privacy policy",
      lede: "Grounded does not collect any data. What you write stays on your iPhone.",
      updatedLabel: "Last updated",
      sections: [
        {
          heading: "What Grounded collects",
          paragraphs: [
            "Nothing. Grounded has no account, no server, no analytics, no advertising and no third-party code. The developer never receives your entries or any information about how you use the app.",
          ],
        },
        {
          heading: "Your entries",
          paragraphs: [
            "Entries, their captions and their reflections are stored only on your iPhone, inside the app. Reflections and captions are made by Apple Intelligence on the device; the text of your entries is not sent anywhere.",
            "If you use iCloud Backup, your iPhone's backup includes the app's data, as it does for any app. This is managed by Apple under your Apple Account settings, not by Grounded.",
          ],
        },
        {
          heading: "Health data",
          paragraphs: [
            "If you allow it, Grounded reads your sleep analysis and your workouts from the Health app so a reflection can refer to them. Access is read-only: Grounded never writes to Health. Health data is used on the device only, is never shared, and is never used for advertising.",
            "You can change this at any time in Settings › Health › Data Access & Devices › Grounded.",
          ],
        },
        {
          heading: "Microphone and speech",
          paragraphs: [
            "If you speak an entry, Grounded uses the microphone and on-device speech recognition to turn your voice into text. Audio is not recorded, stored or sent anywhere.",
          ],
        },
        {
          heading: "Widget and shortcuts",
          paragraphs: [
            "The Home Screen widget shows when you last wrote. To do that, the app shares only that date with the widget, on your iPhone.",
          ],
        },
        {
          heading: "Deleting your data",
          paragraphs: [
            "Delete any entry from the Journal. Deleting the app removes all of its data from your iPhone.",
          ],
        },
        {
          heading: "Children",
          paragraphs: ["Grounded does not collect data from anyone, including children."],
        },
        {
          heading: "Changes",
          paragraphs: [
            "If this policy changes, the new version will be published on this page with a new date.",
          ],
        },
      ] as PrivacySection[],
      contactHeading: "Contact",
      contactBody: "Questions about this policy:",
      supportLink: "Support",
    },
  },
  es: {
    nav: {
      app: "Grounded",
      support: "Soporte",
      privacy: "Privacidad",
    },
    app: {
      title: "Grounded — Diario privado en tu iPhone · Swifty Journey",
      description:
        "Grounded es un diario para iPhone que refleja lo que escribes en tu dispositivo, a partir de cómo dormiste y entrenaste.",
      eyebrow: "Una app para iPhone",
      heading: "Grounded: Diario personal",
      lede:
        "Escribe o di una cosa sobre tu día. Grounded la lee en tu iPhone y te la devuelve como reflexión, a partir de cómo dormiste. Sin cuenta. Nada sale de tu teléfono.",
      screenshots: [
        { src: "/apps/grounded/es/01-reflection.jpg", alt: "Una entrada con su reflexión" },
        { src: "/apps/grounded/es/02-journal.jpg", alt: "La lista del diario con sus resúmenes" },
        { src: "/apps/grounded/es/03-trends.jpg", alt: "Tendencias con un patrón entre trabajo, entrenamiento y familia" },
      ] as Screenshot[],
      featuresHeading: "Qué hace",
      features: [
        {
          title: "Escribe o habla",
          body: "Escribe una entrada o díctala. La voz se convierte en texto en el dispositivo.",
        },
        {
          title: "Una reflexión, no un consejo",
          body: "Apple Intelligence lee la entrada en tu iPhone y te la devuelve en unas pocas frases.",
        },
        {
          title: "A partir de tu cuerpo",
          body: "Con tu permiso, Grounded lee tu sueño de anoche y tu último entrenamiento para que la reflexión pueda mencionarlos.",
        },
        {
          title: "Patrones con el tiempo",
          body: "A partir de la tercera entrada, Tendencias busca qué conecta el trabajo, el entrenamiento y la familia.",
        },
        {
          title: "Captura rápida",
          body: "Agrega una entrada desde el widget de la pantalla de inicio, con Siri, con un atajo o con Toque posterior.",
        },
        {
          title: "Español e inglés",
          body: "La app, sus resúmenes y sus reflexiones siguen el idioma de tu iPhone.",
        },
      ] as Feature[],
      requirementsHeading: "Requisitos",
      requirements:
        "iOS 26 o posterior. Las reflexiones, los resúmenes y los patrones necesitan un iPhone compatible con Apple Intelligence, con Apple Intelligence activado. Sin él, Grounded sigue guardando tu diario, en privado, en tu dispositivo.",
      disclaimer: "Grounded es un diario, no un dispositivo médico, y no da consejos médicos.",
      linksHeading: "Más",
      supportLink: "Soporte",
      privacyLink: "Política de privacidad",
    },
    support: {
      title: "Soporte de Grounded · Swifty Journey",
      description: "Ayuda y contacto para Grounded, el diario privado para iPhone.",
      eyebrow: "Grounded",
      heading: "Soporte",
      lede: "¿Preguntas, errores o ideas? Escribe y te responderá el desarrollador.",
      contactHeading: "Contacto",
      contactBody: "Envía un correo e incluye tu modelo de iPhone y tu versión de iOS si algo no funciona.",
      faqHeading: "Preguntas frecuentes",
      faqs: [
        {
          question: "¿Por qué no veo reflexiones ni resúmenes?",
          answer:
            "Los hace Apple Intelligence en tu iPhone. Revisa que tu iPhone sea compatible con Apple Intelligence y que esté activado en Configuración › Apple Intelligence y Siri. Justo después de activarlo, el modelo puede seguir descargándose; vuelve a intentarlo en unos minutos. Tus entradas se guardan de todas formas.",
        },
        {
          question: "¿Grounded necesita internet o una cuenta?",
          answer: "No. No hay cuenta ni servidor. Todo pasa en tu iPhone.",
        },
        {
          question: "¿Por qué Grounded pide acceso a Salud?",
          answer:
            "Para leer tu sueño de anoche y tu entrenamiento más reciente, y que una reflexión pueda mencionarlos. El acceso es de solo lectura y puedes quitarlo cuando quieras en Configuración › Salud › Acceso a datos y dispositivos › Grounded. Grounded funciona sin él.",
        },
        {
          question: "¿Por qué no funciona el dictado?",
          answer:
            "Grounded necesita permiso de micrófono y de reconocimiento de voz. Puedes darlos en Configuración › Apps › Grounded. La voz se convierte en texto en el dispositivo.",
        },
        {
          question: "¿Cómo agrego una entrada rápido?",
          answer:
            "Agrega el widget de Grounded a tu pantalla de inicio, dile a Siri \"Agrega una entrada en Grounded\" o asigna el atajo Agregar entrada a Toque posterior en Configuración › Accesibilidad › Tocar › Toque posterior.",
        },
        {
          question: "¿Puedo usar Grounded en inglés?",
          answer:
            "Sí. Grounded sigue el idioma de tu iPhone. Para cambiarlo solo en Grounded, ve a Configuración › Apps › Grounded › Idioma.",
        },
        {
          question: "¿Cómo borro mis entradas?",
          answer:
            "Desliza a la izquierda sobre una entrada en el Diario para borrarla. Al borrar la app se eliminan todas sus entradas de tu iPhone.",
        },
      ] as Faq[],
      privacyLink: "Lee la política de privacidad",
      appLink: "Sobre Grounded",
    },
    privacy: {
      title: "Política de privacidad de Grounded · Swifty Journey",
      description: "Grounded no recopila datos. Tus entradas, tus datos de Salud y tu voz se quedan en tu iPhone.",
      eyebrow: "Grounded",
      heading: "Política de privacidad",
      lede: "Grounded no recopila ningún dato. Lo que escribes se queda en tu iPhone.",
      updatedLabel: "Última actualización",
      sections: [
        {
          heading: "Qué recopila Grounded",
          paragraphs: [
            "Nada. Grounded no tiene cuenta, servidor, analítica, publicidad ni código de terceros. El desarrollador nunca recibe tus entradas ni información sobre cómo usas la app.",
          ],
        },
        {
          heading: "Tus entradas",
          paragraphs: [
            "Las entradas, sus resúmenes y sus reflexiones se guardan solo en tu iPhone, dentro de la app. Apple Intelligence hace las reflexiones y los resúmenes en el dispositivo; el texto de tus entradas no se envía a ningún lado.",
            "Si usas el respaldo de iCloud, el respaldo de tu iPhone incluye los datos de la app, como con cualquier app. Eso lo gestiona Apple desde la configuración de tu cuenta de Apple, no Grounded.",
          ],
        },
        {
          heading: "Datos de Salud",
          paragraphs: [
            "Si lo permites, Grounded lee tu análisis de sueño y tus entrenamientos de la app Salud para que una reflexión pueda mencionarlos. El acceso es de solo lectura: Grounded nunca escribe en Salud. Los datos de Salud se usan solo en el dispositivo, nunca se comparten y nunca se usan para publicidad.",
            "Puedes cambiarlo cuando quieras en Configuración › Salud › Acceso a datos y dispositivos › Grounded.",
          ],
        },
        {
          heading: "Micrófono y voz",
          paragraphs: [
            "Si dictas una entrada, Grounded usa el micrófono y el reconocimiento de voz en el dispositivo para convertir tu voz en texto. El audio no se graba, no se guarda y no se envía a ningún lado.",
          ],
        },
        {
          heading: "Widget y atajos",
          paragraphs: [
            "El widget de la pantalla de inicio muestra cuándo escribiste por última vez. Para eso, la app comparte solo esa fecha con el widget, en tu iPhone.",
          ],
        },
        {
          heading: "Borrar tus datos",
          paragraphs: [
            "Borra cualquier entrada desde el Diario. Al borrar la app se eliminan todos sus datos de tu iPhone.",
          ],
        },
        {
          heading: "Menores",
          paragraphs: ["Grounded no recopila datos de nadie, incluidos menores."],
        },
        {
          heading: "Cambios",
          paragraphs: [
            "Si esta política cambia, la nueva versión se publicará en esta página con una fecha nueva.",
          ],
        },
      ] as PrivacySection[],
      contactHeading: "Contacto",
      contactBody: "Preguntas sobre esta política:",
      supportLink: "Soporte",
    },
  },
} as const;
