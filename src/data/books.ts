export type Locale = "es" | "en";

export interface BookLink {
  label: string;
  url: string;
}

export interface BookFaq {
  question: string;
  answer: string;
}

export interface BookDossier {
  fullTitle: string;
  openCoverLabel: string;
  openControlLabel: string;
  closeLabel: string;
  heading: string;
  synopsisHeading: string;
  synopsis: string[];
  topicsHeading: string;
  topics: string[];
  editionsHeading: string;
  amazonHeading: string;
  amazonFormatsLabel: string;
  amazonFormats: string[];
  hardcoverHeading: string;
  appleHeading: string;
  factsLabels: {
    author: string;
    byline: string;
    publisher: string;
    publicationDate: string;
    availabilityDate: string;
    language: string;
    pages: string;
    isbn13: string;
    asin: string;
    format: string;
    seller: string;
  };
  amazonHardcover: {
    byline: string;
    publisher: string;
    publicationDate: string;
    language: string;
    pages: string;
    isbn13: string;
    asin: string;
  };
  appleEbook: {
    author: string;
    publisher: string;
    availabilityDate: string;
    language: string;
    pages: string;
    format: string;
    seller: string;
  };
  retailerLinksLabel: string;
  foundationHeading: string;
  foundationIntroduction: string;
  foundationLinksLabel: string;
  foundationLinks: BookLink[];
  faqHeading: string;
  faqs: BookFaq[];
}

export interface BookContent {
  locale: Locale;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  path: string;
  cover: string;
  coverAlt: string;
  caseImage: string;
  language: string;
  availability: string;
  amazonUrl: string;
  appleBooksUrl: string;
  backHome: string;
  dossier: BookDossier;
}

export interface Book {
  id: string;
  collection: string;
  number: string;
  content: Record<Locale, BookContent>;
}

const foundationUrls = {
  about: "https://arthurvaleriussterling.org/about",
  chronology: "https://arthurvaleriussterling.org/chronology",
  works: "https://arthurvaleriussterling.org/works",
  fictionNotice: "https://arthurvaleriussterling.org/fiction-notice",
} as const;

export const tempusBook: Book = {
  id: "tempus",
  collection: "Sterling Books",
  number: "001",
  content: {
    es: {
      locale: "es",
      title: "Código Tempus",
      subtitle: "Una teoría para atravesar el tiempo con otros ojos.",
      description:
        "El manuscrito perdido que plantea una pregunta radical: ¿y si el pasado siguiera vivo en nuestro ADN, nuestra memoria y nuestra conciencia?",
      cta: "Entrar en Código Tempus",
      path: "/es/libro/codigo-tempus",
      cover: "/media/codigo-tempus-cover-es.webp",
      coverAlt: "Cubierta de Código Tempus",
      caseImage: "/media/codigo-tempus-case-es.webp",
      language: "Español",
      availability: "Disponible",
      amazonUrl: "https://www.amazon.es/dp/B0HJ5RVRTS",
      appleBooksUrl:
        "https://books.apple.com/us/book/c%C3%B3digo-tempus/id6809938054",
      backHome: "Volver al inicio",
      dossier: {
        fullTitle:
          "CÓDIGO TEMPUS: La Revolución Bio-Genética del Viaje en el Tiempo",
        openCoverLabel: "Abrir el dossier completo de Código Tempus",
        openControlLabel:
          "Tocar para abrir el dossier completo de Código Tempus",
        closeLabel: "Cerrar el dossier de Código Tempus",
        heading: "Dossier de la obra",
        synopsisHeading: "El manuscrito y su propuesta",
        synopsis: [
          "Presentado como un manuscrito perdido o recuperado, CÓDIGO TEMPUS es un ensayo de teoría especulativa, no una novela. Reúne notas científicas y reflexiones personales alrededor de una pregunta: ¿podrían la biología, la memoria y la conciencia cambiar nuestra forma de pensar el tiempo?",
          "La obra explora, como hipótesis y preguntas abiertas, relaciones entre física, biología, genética y ADN, relatividad, entropía, causalidad, agujeros de gusano y paradojas temporales. También considera la herencia epigenética, la memoria inmunológica, los procesos cuánticos y los estados alterados de conciencia sin presentarlos como ciencia establecida.",
        ],
        topicsHeading: "Temas explorados",
        topics: [
          "Física, relatividad, entropía y causalidad",
          "Biología, genética y ADN",
          "Memoria, conciencia y estados alterados de conciencia",
          "Agujeros de gusano y paradojas temporales",
          "Herencia epigenética y memoria inmunológica",
          "Procesos cuánticos",
        ],
        editionsHeading: "Ediciones y formatos verificados",
        amazonHeading: "Amazon",
        amazonFormatsLabel: "Formatos disponibles",
        amazonFormats: ["Tapa dura", "Tapa blanda", "Ebook"],
        hardcoverHeading: "Edición de tapa dura en Amazon",
        appleHeading: "Ebook en Apple Books",
        factsLabels: {
          author: "Autor",
          byline: "Firma",
          publisher: "Editorial",
          publicationDate: "Fecha de publicación",
          availabilityDate: "Disponible",
          language: "Idioma",
          pages: "Extensión",
          isbn13: "ISBN-13",
          asin: "ASIN",
          format: "Formato",
          seller: "Vendedor",
        },
        amazonHardcover: {
          byline: "Dr Arthur Valerius Sterling y Eloy Martínez Cuesta",
          publisher: "Independently published",
          publicationDate: "6 de septiembre de 2026",
          language: "Español",
          pages: "264 páginas",
          isbn13: "979-8172250552",
          asin: "B0HJ5RVRTS",
        },
        appleEbook: {
          author: "DR Arthur Valerius Sterling",
          publisher: "Dr Arthur Valerius Sterling",
          availabilityDate: "10 de septiembre de 2026",
          language: "Español",
          pages: "258 páginas",
          format: "Ebook",
          seller: "Eloy Martinez Cuesta",
        },
        retailerLinksLabel: "Plataformas del libro",
        foundationHeading: "Contexto de la Fundación",
        foundationIntroduction:
          "La Fundación Arthur Valerius Sterling señala que Sterling se retiró en 1988 y que después trabajó en CÓDIGO TEMPUS en Bétera. Describe un manuscrito inacabado que une notas científicas y reflexiones personales.",
        foundationLinksLabel:
          "Fuentes de la Fundación Arthur Valerius Sterling",
        foundationLinks: [
          {
            label: "Sobre Arthur Valerius Sterling",
            url: foundationUrls.about,
          },
          { label: "Cronología", url: foundationUrls.chronology },
          { label: "Obras", url: foundationUrls.works },
          { label: "Aviso sobre ficción", url: foundationUrls.fictionNotice },
        ],
        faqHeading: "Preguntas frecuentes",
        faqs: [
          {
            question: "¿Qué es CÓDIGO TEMPUS?",
            answer:
              "Es un ensayo de teoría especulativa presentado como un manuscrito perdido o recuperado, compuesto por notas científicas y reflexiones personales.",
          },
          {
            question: "¿Es una novela?",
            answer:
              "No. La obra se presenta como teoría y ensayo especulativo, no como novela.",
          },
          {
            question: "¿Qué temas explora?",
            answer:
              "Explora preguntas sobre física, biología, genética y ADN, memoria, conciencia, relatividad, entropía, causalidad, agujeros de gusano, paradojas temporales, herencia epigenética, memoria inmunológica, procesos cuánticos y estados alterados de conciencia.",
          },
          {
            question: "¿En qué formatos y plataformas está disponible?",
            answer:
              "Amazon ofrece tapa dura, tapa blanda y ebook. Apple Books ofrece una edición ebook.",
          },
        ],
      },
    },
    en: {
      locale: "en",
      title: "Tempus Code",
      subtitle: "A theory that invites you to see time through different eyes.",
      description:
        "The lost manuscript that poses a radical question: what if the past were still alive in our DNA, our memory, and our consciousness?",
      cta: "Enter Tempus Code",
      path: "/en/book/tempus-code",
      cover: "/media/codigo-tempus-cover-en.webp",
      coverAlt: "Tempus Code book cover",
      caseImage: "/media/codigo-tempus-case-en.webp",
      language: "English",
      availability: "Available",
      amazonUrl: "https://www.amazon.es/dp/B0HJ82BD56",
      appleBooksUrl: "https://books.apple.com/us/book/tempus-code/id6809932289",
      backHome: "Back home",
      dossier: {
        fullTitle: "TEMPUS CODE: The Bio-Genetic Revolution of Time Travel",
        openCoverLabel: "Open the complete Tempus Code dossier",
        openControlLabel: "Tap to open the complete Tempus Code dossier",
        closeLabel: "Close the Tempus Code dossier",
        heading: "Book dossier",
        synopsisHeading: "The manuscript and its proposal",
        synopsis: [
          "Presented as a lost or recovered manuscript, TEMPUS CODE is an essay in speculative theory, not a novel. It brings scientific notes and personal reflections together around a question: could biology, memory, and consciousness change how we think about time?",
          "The work explores, as hypotheses and open questions, connections among physics, biology, genetics and DNA, relativity, entropy, causality, wormholes, and temporal paradoxes. It also considers epigenetic inheritance, immunological memory, quantum processes, and altered states of consciousness without presenting them as established science.",
        ],
        topicsHeading: "Subjects explored",
        topics: [
          "Physics, relativity, entropy, and causality",
          "Biology, genetics, and DNA",
          "Memory, consciousness, and altered states of consciousness",
          "Wormholes and temporal paradoxes",
          "Epigenetic inheritance and immunological memory",
          "Quantum processes",
        ],
        editionsHeading: "Verified editions and formats",
        amazonHeading: "Amazon",
        amazonFormatsLabel: "Available formats",
        amazonFormats: ["Hardcover", "Paperback", "Ebook"],
        hardcoverHeading: "Amazon hardcover edition",
        appleHeading: "Apple Books ebook",
        factsLabels: {
          author: "Author",
          byline: "Byline",
          publisher: "Publisher",
          publicationDate: "Publication date",
          availabilityDate: "Available",
          language: "Language",
          pages: "Length",
          isbn13: "ISBN-13",
          asin: "ASIN",
          format: "Format",
          seller: "Seller",
        },
        amazonHardcover: {
          byline: "Dr Arthur Valerius Sterling",
          publisher: "Independently published",
          publicationDate: "6 September 2026",
          language: "English",
          pages: "257 pages",
          isbn13: "979-8172380785",
          asin: "B0HJ82BD56",
        },
        appleEbook: {
          author: "DR Arthur Valerius Sterling",
          publisher: "DR Arthur Valerius Sterling",
          availabilityDate: "10 September 2026",
          language: "English",
          pages: "259 pages",
          format: "Ebook",
          seller: "Eloy Martinez Cuesta",
        },
        retailerLinksLabel: "Book platforms",
        foundationHeading: "Foundation context",
        foundationIntroduction:
          "The Arthur Valerius Sterling Foundation says Sterling retired in 1988 and later worked on CÓDIGO TEMPUS in Bétera. It describes an unfinished manuscript joining scientific notes and personal reflections.",
        foundationLinksLabel: "Arthur Valerius Sterling Foundation sources",
        foundationLinks: [
          {
            label: "About Arthur Valerius Sterling",
            url: foundationUrls.about,
          },
          { label: "Chronology", url: foundationUrls.chronology },
          { label: "Works", url: foundationUrls.works },
          { label: "Fiction notice", url: foundationUrls.fictionNotice },
        ],
        faqHeading: "Frequently asked questions",
        faqs: [
          {
            question: "What is TEMPUS CODE?",
            answer:
              "It is an essay in speculative theory presented as a lost or recovered manuscript made up of scientific notes and personal reflections.",
          },
          {
            question: "Is it a novel?",
            answer:
              "No. The work is presented as speculative theory and essay, not as a novel.",
          },
          {
            question: "What subjects does it explore?",
            answer:
              "It explores questions about physics, biology, genetics and DNA, memory, consciousness, relativity, entropy, causality, wormholes, temporal paradoxes, epigenetic inheritance, immunological memory, quantum processes, and altered states of consciousness.",
          },
          {
            question: "Which formats and platforms are available?",
            answer:
              "Amazon offers hardcover, paperback, and ebook formats. Apple Books offers an ebook edition.",
          },
        ],
      },
    },
  },
};

export const books: Book[] = [tempusBook];

export const localeLabels = { es: "ES", en: "EN" } as const satisfies Record<
  Locale,
  string
>;
