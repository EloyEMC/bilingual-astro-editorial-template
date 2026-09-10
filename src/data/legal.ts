import type { Locale } from "./books";

export type LegalDocument = {
  locale: Locale;
  slug: string;
  path: string;
  title: string;
  description: string;
  status: string;
  sections: LegalSection[];
};

type LegalSection = {
  heading: string;
  paragraphs: string[];
  items?: string[];
};

const status = {
  es: "Borrador — pendiente de revisión legal",
  en: "Draft — pending legal review",
} as const;

export const legalDocuments: LegalDocument[] = [
  {
    locale: "es",
    slug: "aviso-legal",
    path: "/es/legal/aviso-legal/",
    title: "Aviso legal",
    description:
      "Borrador de aviso legal de Sterling Books pendiente de revisión legal.",
    status: status.es,
    sections: [
      {
        heading: "Titularidad",
        paragraphs: [
          "El titular de este sitio y de la marca Sterling Books es Eloy Martínez Cuesta.",
          "Este borrador se completa para su uso en España. La dirección profesional debe incorporarse antes de publicar una versión definitiva.",
        ],
      },
      {
        heading: "Contacto",
        paragraphs: [
          "Para consultas relacionadas con este sitio, puedes escribir a hola@eloymartinezcuesta.com.",
        ],
      },
      {
        heading: "Enlaces y compras externas",
        paragraphs: [
          "El sitio puede dirigir a páginas externas de Amazon y Apple Books para los libros. Las compras se completan en esas plataformas externas, no en este sitio.",
          "Las condiciones aplicables a una compra se deben consultar en la plataforma correspondiente.",
        ],
      },
      {
        heading: "Pendiente de completar",
        paragraphs: [
          "Este aviso no incluye datos de registro, situación fiscal ni dirección profesional. Esos datos, si resultan aplicables, requieren confirmación y revisión legal antes de la publicación definitiva.",
        ],
      },
    ],
  },
  {
    locale: "es",
    slug: "privacidad",
    path: "/es/legal/privacidad/",
    title: "Política de privacidad",
    description:
      "Borrador de política de privacidad de Sterling Books pendiente de revisión legal.",
    status: status.es,
    sections: [
      {
        heading: "Responsable y contacto",
        paragraphs: [
          "El titular del sitio es Eloy Martínez Cuesta. Para consultas sobre privacidad, puedes escribir a hola@eloymartinezcuesta.com.",
        ],
      },
      {
        heading: "Medición del sitio",
        paragraphs: [
          "El sitio carga Google Analytics 4 con el ID de medición G-V1LH71HG1E. Esta medición puede implicar tecnologías de Google Analytics.",
        ],
      },
      {
        heading: "Información pendiente",
        paragraphs: [
          "Antes de publicar una versión definitiva, se deben confirmar y documentar las actividades de tratamiento, finalidades, bases jurídicas, destinatarios, transferencias internacionales, plazos de conservación, medidas aplicables y el modo de ejercer los derechos de privacidad.",
        ],
      },
    ],
  },
  {
    locale: "es",
    slug: "cookies",
    path: "/es/legal/cookies/",
    title: "Política de cookies",
    description:
      "Borrador de política de cookies de Sterling Books pendiente de revisión legal.",
    status: status.es,
    sections: [
      {
        heading: "Tecnologías de medición detectadas",
        paragraphs: [
          "El sitio carga Google Analytics 4 con el ID de medición G-V1LH71HG1E y puede utilizar tecnologías de Google Analytics.",
        ],
      },
      {
        heading: "Información pendiente",
        paragraphs: [
          "Este borrador no contiene un inventario de cookies ni describe su duración, proveedores, finalidades concretas o el comportamiento de consentimiento. Esos elementos deben verificarse y completarse antes de publicar una versión definitiva.",
        ],
      },
    ],
  },
  {
    locale: "es",
    slug: "terminos",
    path: "/es/legal/terminos/",
    title: "Términos de uso",
    description:
      "Borrador de términos de uso de Sterling Books pendiente de revisión legal.",
    status: status.es,
    sections: [
      {
        heading: "Alcance del sitio",
        paragraphs: [
          "Este sitio presenta libros bajo la marca Sterling Books y puede dirigir a páginas externas de Amazon y Apple Books.",
        ],
      },
      {
        heading: "Compras en plataformas externas",
        paragraphs: [
          "Las compras se completan en Amazon o Apple Books, según el enlace elegido. Este sitio no completa la compra.",
          "La información sobre una compra debe consultarse en la plataforma externa correspondiente.",
        ],
      },
      {
        heading: "Pendiente de completar",
        paragraphs: [
          "Estos términos son un borrador para España. Las reglas de uso, limitaciones y otros extremos jurídicos que resulten aplicables requieren confirmación y revisión legal antes de la publicación definitiva.",
        ],
      },
    ],
  },
  {
    locale: "en",
    slug: "legal-notice",
    path: "/en/legal/legal-notice/",
    title: "Legal notice",
    description: "Draft legal notice for Sterling Books pending legal review.",
    status: status.en,
    sections: [
      {
        heading: "Site and brand holder",
        paragraphs: [
          "The holder of this website and the Sterling Books brand is Eloy Martínez Cuesta.",
          "This draft is prepared for use in Spain. A professional address must be added before a final version is published.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          "For enquiries related to this website, contact hola@eloymartinezcuesta.com.",
        ],
      },
      {
        heading: "External links and purchases",
        paragraphs: [
          "The website may direct visitors to external Amazon and Apple Books pages for its books. Purchases are completed on those external platforms, not on this website.",
          "The terms that apply to a purchase should be consulted on the relevant platform.",
        ],
      },
      {
        heading: "Details to complete",
        paragraphs: [
          "This notice does not include registration details, tax status, or a professional address. Those details, if applicable, require confirmation and legal review before final publication.",
        ],
      },
    ],
  },
  {
    locale: "en",
    slug: "privacy",
    path: "/en/legal/privacy/",
    title: "Privacy policy",
    description:
      "Draft privacy policy for Sterling Books pending legal review.",
    status: status.en,
    sections: [
      {
        heading: "Holder and contact",
        paragraphs: [
          "The website holder is Eloy Martínez Cuesta. For privacy enquiries, contact hola@eloymartinezcuesta.com.",
        ],
      },
      {
        heading: "Website measurement",
        paragraphs: [
          "The website loads Google Analytics 4 with measurement ID G-V1LH71HG1E. This measurement may involve Google Analytics technologies.",
        ],
      },
      {
        heading: "Details to complete",
        paragraphs: [
          "Before a final version is published, the processing activities, purposes, legal bases, recipients, international transfers, retention periods, applicable measures, and method for exercising privacy rights must be confirmed and documented.",
        ],
      },
    ],
  },
  {
    locale: "en",
    slug: "cookies",
    path: "/en/legal/cookies/",
    title: "Cookie policy",
    description: "Draft cookie policy for Sterling Books pending legal review.",
    status: status.en,
    sections: [
      {
        heading: "Measurement technologies identified",
        paragraphs: [
          "The website loads Google Analytics 4 with measurement ID G-V1LH71HG1E and may use Google Analytics technologies.",
        ],
      },
      {
        heading: "Details to complete",
        paragraphs: [
          "This draft does not provide a cookie inventory or describe durations, providers, specific purposes, or consent behaviour. Those details must be verified and completed before a final version is published.",
        ],
      },
    ],
  },
  {
    locale: "en",
    slug: "terms",
    path: "/en/legal/terms/",
    title: "Terms of use",
    description: "Draft terms of use for Sterling Books pending legal review.",
    status: status.en,
    sections: [
      {
        heading: "Website scope",
        paragraphs: [
          "This website presents books under the Sterling Books brand and may direct visitors to external Amazon and Apple Books pages.",
        ],
      },
      {
        heading: "Purchases on external platforms",
        paragraphs: [
          "Purchases are completed on Amazon or Apple Books, according to the selected link. This website does not complete the purchase.",
          "Information about a purchase should be consulted on the relevant external platform.",
        ],
      },
      {
        heading: "Details to complete",
        paragraphs: [
          "These terms are a draft for Spain. Applicable rules of use, limitations, and other legal matters require confirmation and legal review before final publication.",
        ],
      },
    ],
  },
];
