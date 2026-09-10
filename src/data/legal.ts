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
  es: "Información legal",
  en: "Legal information",
} as const;

export const legalDocuments: LegalDocument[] = [
  {
    locale: "es",
    slug: "aviso-legal",
    path: "/es/legal/aviso-legal/",
    title: "Aviso legal",
    description: "Información legal de Sterling Books para España.",
    status: status.es,
    sections: [
      {
        heading: "Titularidad y contacto",
        paragraphs: [
          "El titular de este sitio web y de las marcas Sterling Books y Tempus Code es Eloy Martínez Cuesta, que actúa como particular. Para consultas sobre el sitio puede escribirse a hola@eloymartinezcuesta.com.",
          "Este sitio no publica el DNI ni el domicilio particular del titular.",
        ],
      },
      {
        heading: "Objeto del sitio",
        paragraphs: [
          "Este sitio presenta libros y contenidos editoriales bajo las marcas Sterling Books y Tempus Code. La información tiene carácter general y editorial.",
          "El titular puede actualizar, corregir o retirar contenidos del sitio. Aunque procura mantener la información actualizada, pueden producirse errores, interrupciones o cambios en los contenidos, enlaces o disponibilidad.",
        ],
      },
      {
        heading: "Enlaces externos y compras",
        paragraphs: [
          "El sitio enlaza a Amazon y Apple Books para consultar o adquirir libros. No hay carrito, checkout ni procesamiento de compras en este sitio web.",
          "Los precios, la disponibilidad, los métodos de pago, la entrega, las devoluciones y las condiciones de cada transacción corresponden a Amazon, Apple Books o a la plataforma enlazada. Antes de contratar, la persona usuaria debe consultar las condiciones de la plataforma elegida.",
        ],
      },
      {
        heading: "Propiedad intelectual e industrial",
        paragraphs: [
          "Salvo indicación en contrario, los textos, imágenes, diseños, signos distintivos y demás contenidos del sitio pertenecen al titular o a sus respectivos titulares y están protegidos por la normativa de propiedad intelectual e industrial.",
          "No se concede ninguna licencia para reproducir, distribuir, transformar, comunicar públicamente o explotar los contenidos fuera de los usos permitidos por la ley o de una autorización previa y expresa del titular de los derechos correspondiente.",
        ],
      },
      {
        heading: "Uso y responsabilidad",
        paragraphs: [
          "La persona usuaria debe utilizar el sitio de forma lícita, diligente y respetuosa, sin afectar a su seguridad, disponibilidad, derechos de terceros ni funcionamiento técnico.",
          "En la medida permitida por la ley, el titular no responde de decisiones tomadas únicamente a partir de la información general del sitio ni de los contenidos, disponibilidad, políticas o transacciones de servicios externos enlazados. Esto no limita las responsabilidades que no puedan excluirse conforme a la legislación aplicable.",
        ],
      },
      {
        heading: "Actualizaciones, legislación y jurisdicción",
        paragraphs: [
          "El titular podrá actualizar este aviso para reflejar cambios del sitio o de la normativa. Las actualizaciones se publicarán en esta página.",
          "Este aviso se interpreta conforme al Derecho español. Para cualquier controversia, serán competentes los juzgados y tribunales que determinen las normas imperativas aplicables, sin alterar la competencia que corresponda a consumidores y usuarios.",
        ],
      },
    ],
  },
  {
    locale: "es",
    slug: "privacidad",
    path: "/es/legal/privacidad/",
    title: "Política de privacidad",
    description: "Política de privacidad de Sterling Books para España.",
    status: status.es,
    sections: [
      {
        heading: "Responsable y contacto",
        paragraphs: [
          "El responsable del tratamiento relacionado con este sitio es Eloy Martínez Cuesta, particular y titular de las marcas Sterling Books y Tempus Code. Las solicitudes de privacidad pueden enviarse a hola@eloymartinezcuesta.com.",
          "Este sitio no publica el DNI ni el domicilio particular del titular.",
        ],
      },
      {
        heading: "Datos y finalidades",
        paragraphs: [
          "El sitio no ofrece cuentas de usuario ni procesa compras de libros. Si una persona contacta voluntariamente por correo electrónico, podrán tratarse los datos que incluya, como su dirección de correo, nombre y contenido de la consulta, para responder y gestionar el contacto.",
          "Los servicios técnicos y de alojamiento pueden procesar los datos técnicos estrictamente necesarios para operar el sitio. No se venden datos personales.",
          "Solo después de que la persona usuaria acepte la analítica, el sitio carga Google Analytics 4 con el ID de medición G-V1LH71HG1E para medir de forma agregada las visitas y el uso del sitio.",
        ],
      },
      {
        heading: "Base del tratamiento",
        paragraphs: [
          "La analítica se basa en el consentimiento previo de la persona usuaria, conforme al artículo 6.1.a del RGPD. El consentimiento puede retirarse o modificarse mediante el control indicado en la Política de cookies.",
          "Los datos enviados voluntariamente por correo se tratan para responder y gestionar la comunicación.",
        ],
      },
      {
        heading: "Destinatarios y transferencias",
        paragraphs: [
          "Los proveedores técnicos, de alojamiento o de correo pueden acceder a datos únicamente cuando sea necesario para prestar sus servicios.",
          "Si se acepta la analítica, Google puede recibir datos de medición y su tratamiento puede implicar transferencias internacionales de datos. La información sobre ese tratamiento debe consultarse en la documentación y políticas de Google.",
        ],
      },
      {
        heading: "Derechos y reclamación",
        paragraphs: [
          "Puede solicitar acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad cuando proceda, así como retirar el consentimiento sin afectar a la licitud del tratamiento previo. Para ejercer estos derechos, escriba a hola@eloymartinezcuesta.com e indique el derecho que desea ejercer y la información necesaria para identificar su solicitud.",
          "También puede reclamar ante la Agencia Española de Protección de Datos (www.aepd.es) si considera que el tratamiento vulnera la normativa aplicable.",
        ],
      },
      {
        heading: "Cambios y alcance",
        paragraphs: [
          "Esta política podrá actualizarse ante cambios legales, técnicos o en los tratamientos realizados. Las actualizaciones se publicarán en esta página.",
          "Las compras realizadas en Amazon o Apple Books se rigen por las políticas de privacidad de esas plataformas, ya que este sitio no interviene en su checkout.",
        ],
      },
    ],
  },
  {
    locale: "es",
    slug: "cookies",
    path: "/es/legal/cookies/",
    title: "Política de cookies",
    description: "Política de cookies de Sterling Books para España.",
    status: status.es,
    sections: [
      {
        heading: "Cookies y tecnologías similares",
        paragraphs: [
          "Las cookies y tecnologías similares son archivos o identificadores que un sitio o un tercero puede almacenar o leer en un dispositivo para recordar información o medir el uso.",
        ],
      },
      {
        heading: "Elección de analítica",
        paragraphs: [
          "El sitio muestra un aviso de consentimiento antes de cargar Google Analytics 4. La analítica solo se carga si la persona usuaria la acepta; si la rechaza o no realiza ninguna elección, el sitio no carga el script externo de Google Analytics.",
          "La elección se guarda en localStorage del navegador para recordar la preferencia. Si el almacenamiento local no está disponible o JavaScript está desactivado, no se carga analítica.",
        ],
      },
      {
        heading: "Cookies analíticas",
        paragraphs: [
          "Tras la aceptación, Google Analytics 4 puede establecer cookies analíticas para la medición agregada de visitas y uso. Entre los patrones habituales se encuentran _ga y _ga_<container>.",
          "Las cookies analíticas no se cargan antes del consentimiento ni después de rechazarlo.",
        ],
      },
      {
        heading: "Cómo retirar o cambiar el consentimiento",
        paragraphs: [
          "Puede retirar o cambiar su elección desde el control «Restablecer consentimiento de cookies» disponible en esta página. Al restablecerlo, se elimina la preferencia guardada en localStorage y el aviso vuelve a mostrarse.",
          "Rechazar o retirar el consentimiento evita la carga futura de analítica en este sitio. La retirada no elimina datos que Google hubiera recibido antes de ella; para ello deben consultarse las opciones y políticas de Google.",
        ],
      },
      {
        heading: "Terceros y actualizaciones",
        paragraphs: [
          "Cuando se acepta la analítica, Google puede recibir datos de medición y pueden producirse transferencias internacionales de datos. La información sobre ese tratamiento debe consultarse en la documentación y políticas de Google.",
          "Esta política podrá actualizarse si cambia la tecnología empleada. Las actualizaciones se publicarán en esta página.",
        ],
      },
    ],
  },
  {
    locale: "es",
    slug: "terminos",
    path: "/es/legal/terminos/",
    title: "Términos de uso",
    description: "Términos de uso de Sterling Books para España.",
    status: status.es,
    sections: [
      {
        heading: "Objeto y aceptación",
        paragraphs: [
          "Estos términos regulan el acceso y uso informativo del sitio de Sterling Books. Al navegar por él, la persona usuaria se compromete a emplearlo de conformidad con la ley, estos términos y los derechos de terceros.",
          "El sitio está orientado a España. Cuando una persona usuaria tenga la condición de consumidora, se aplicarán las normas imperativas de protección que correspondan.",
        ],
      },
      {
        heading: "Contenido editorial y disponibilidad",
        paragraphs: [
          "El sitio presenta información editorial sobre libros y puede actualizar, corregir, retirar o modificar contenidos cuando sea razonable. La información se ofrece con fines generales y no constituye asesoramiento profesional ni una oferta contractual directa de este sitio.",
          "Pueden producirse interrupciones, errores o limitaciones técnicas en la disponibilidad del sitio. Nada de ello excluye responsabilidades que no puedan limitarse legalmente.",
        ],
      },
      {
        heading: "Compras y plataformas externas",
        paragraphs: [
          "Los libros se venden o distribuyen mediante Amazon y Apple Books. Este sitio no procesa pagos, pedidos, entregas, devoluciones ni atención posventa de las compras.",
          "Los precios, la disponibilidad, las condiciones de contratación, la política de devoluciones y el tratamiento de datos de la compra pertenecen a la plataforma externa correspondiente. Antes de comprar, la persona usuaria debe revisar sus condiciones y políticas.",
        ],
      },
      {
        heading: "Propiedad intelectual y uso",
        paragraphs: [
          "Los contenidos del sitio están protegidos por derechos de propiedad intelectual e industrial. Se permite su consulta personal y privada dentro de los límites legales.",
          "No está permitido copiar, redistribuir, modificar, extraer, usar para entrenamiento automatizado, eludir medidas técnicas o explotar los contenidos o las marcas sin autorización, salvo que una norma imperativa lo permita. Las menciones a marcas de terceros pertenecen a sus respectivos titulares.",
        ],
      },
      {
        heading: "Enlaces, responsabilidad y cambios",
        paragraphs: [
          "Los enlaces externos se facilitan para comodidad de la persona usuaria. El titular no controla ni garantiza los contenidos, disponibilidad o prácticas de Amazon, Apple Books u otros sitios externos.",
          "Estos términos podrán actualizarse para reflejar cambios del sitio o de la normativa. Las actualizaciones se publicarán en esta página.",
        ],
      },
      {
        heading: "Ley aplicable, jurisdicción y contacto",
        paragraphs: [
          "Estos términos se rigen por el Derecho español. Cualquier controversia se someterá a los juzgados y tribunales competentes conforme a la ley, sin perjuicio de los fueros imperativos que protejan a consumidores y usuarios.",
          "Para cualquier consulta sobre estos términos puede escribirse a hola@eloymartinezcuesta.com.",
        ],
      },
    ],
  },
  {
    locale: "en",
    slug: "legal-notice",
    path: "/en/legal/legal-notice/",
    title: "Legal notice",
    description: "Sterling Books legal information for Spain.",
    status: status.en,
    sections: [
      {
        heading: "Holder and contact",
        paragraphs: [
          "The holder of this website and the Sterling Books and Tempus Code brands is Eloy Martínez Cuesta, acting as a private individual. Enquiries about the website may be sent to hola@eloymartinezcuesta.com.",
          "This website does not publish the holder's DNI or private home address.",
        ],
      },
      {
        heading: "Website purpose",
        paragraphs: [
          "This website presents books and editorial content under the Sterling Books and Tempus Code brands. The information is general and editorial in nature.",
          "The holder may update, correct or remove website content. Although reasonable efforts are made to keep information current, errors, interruptions or changes to content, links or availability may occur.",
        ],
      },
      {
        heading: "External links and purchases",
        paragraphs: [
          "The website links to Amazon and Apple Books to view or buy books. This website has no cart or checkout and does not process book purchases.",
          "Prices, availability, payment methods, delivery, returns and transaction terms are the responsibility of Amazon, Apple Books or the relevant linked platform. Users should review that platform's terms before entering into a transaction.",
        ],
      },
      {
        heading: "Intellectual and industrial property",
        paragraphs: [
          "Unless stated otherwise, the website's text, images, designs, distinctive signs and other content belong to the holder or their respective rights holders and are protected by intellectual and industrial property laws.",
          "No licence is granted to reproduce, distribute, transform, communicate publicly or otherwise exploit content beyond uses permitted by law or expressly authorised in advance by the relevant rights holder.",
        ],
      },
      {
        heading: "Use and liability",
        paragraphs: [
          "Users must use the website lawfully, carefully and respectfully, without impairing its security, availability, third-party rights or technical operation.",
          "To the extent permitted by law, the holder is not liable for decisions based solely on general website information or for the content, availability, policies or transactions of linked external services. This does not limit liability that cannot lawfully be excluded.",
        ],
      },
      {
        heading: "Updates, law and jurisdiction",
        paragraphs: [
          "The holder may update this notice to reflect website or legal changes. Updates will be published on this page.",
          "This notice is interpreted under Spanish law. Disputes shall be heard by the courts with jurisdiction under mandatory applicable rules, including any jurisdiction that protects consumers and users.",
        ],
      },
    ],
  },
  {
    locale: "en",
    slug: "privacy",
    path: "/en/legal/privacy/",
    title: "Privacy policy",
    description: "Sterling Books privacy policy for Spain.",
    status: status.en,
    sections: [
      {
        heading: "Controller and contact",
        paragraphs: [
          "The controller for processing related to this website is Eloy Martínez Cuesta, a private individual and holder of the Sterling Books and Tempus Code brands. Privacy requests may be sent to hola@eloymartinezcuesta.com.",
          "This website does not publish the holder's DNI or private home address.",
        ],
      },
      {
        heading: "Data and purposes",
        paragraphs: [
          "The website has no user accounts and does not process book purchases. If a person voluntarily contacts the holder by email, data included in that message—such as email address, name and enquiry content—may be processed to respond and manage the contact.",
          "Technical and hosting services may process technical data strictly necessary to operate the website. Personal data is not sold.",
          "Only after the user accepts analytics does the website load Google Analytics 4 with measurement ID G-V1LH71HG1E to measure visits and website use in aggregate.",
        ],
      },
      {
        heading: "Basis for processing",
        paragraphs: [
          "Analytics is based on the user's prior consent under Article 6(1)(a) GDPR. Consent can be withdrawn or changed through the control described in the Cookie policy.",
          "Data sent voluntarily by email is processed to respond to and manage the communication.",
        ],
      },
      {
        heading: "Recipients and transfers",
        paragraphs: [
          "Technical, hosting and email providers may access data only when necessary to provide their services.",
          "If analytics is accepted, Google may receive measurement data and its processing may involve international data transfers. Information about that processing is available in Google's documentation and policies.",
        ],
      },
      {
        heading: "Rights and complaints",
        paragraphs: [
          "You may request access, rectification, erasure, objection, restriction and portability where applicable, and withdraw consent without affecting the lawfulness of processing before withdrawal. To exercise these rights, write to hola@eloymartinezcuesta.com, state the right you wish to exercise and provide the information needed to identify your request.",
          "You may also lodge a complaint with the Spanish Data Protection Agency (www.aepd.es) if you believe processing breaches applicable law.",
        ],
      },
      {
        heading: "Changes and scope",
        paragraphs: [
          "This policy may be updated for legal, technical or processing changes. Updates will be published on this page.",
          "Purchases on Amazon or Apple Books are governed by those platforms' privacy policies because this website does not take part in their checkout.",
        ],
      },
    ],
  },
  {
    locale: "en",
    slug: "cookies",
    path: "/en/legal/cookies/",
    title: "Cookie policy",
    description: "Sterling Books cookie policy for Spain.",
    status: status.en,
    sections: [
      {
        heading: "Cookies and similar technologies",
        paragraphs: [
          "Cookies and similar technologies are files or identifiers that a website or third party may store or read on a device to remember information or measure use.",
        ],
      },
      {
        heading: "Analytics choice",
        paragraphs: [
          "The website shows a consent notice before loading Google Analytics 4. Analytics loads only if the user accepts it; if it is rejected or no choice is made, the website does not load Google's external Analytics script.",
          "The choice is stored in the browser's localStorage to remember the preference. If local storage is unavailable or JavaScript is disabled, analytics does not load.",
        ],
      },
      {
        heading: "Analytics cookies",
        paragraphs: [
          "After acceptance, Google Analytics 4 may set analytics cookies for aggregate measurement of visits and use. Common patterns include _ga and _ga_<container>.",
          "Analytics cookies do not load before consent or after rejection.",
        ],
      },
      {
        heading: "Withdrawing or changing consent",
        paragraphs: [
          "You may withdraw or change your choice through the “Reset cookie consent” control on this page. Resetting removes the preference stored in localStorage and shows the notice again.",
          "Rejecting or withdrawing consent prevents future analytics loading on this website. Withdrawal does not erase data that Google received before it; consult Google's options and policies for that purpose.",
        ],
      },
      {
        heading: "Third parties and updates",
        paragraphs: [
          "When analytics is accepted, Google may receive measurement data and international data transfers may occur. Information about that processing is available in Google's documentation and policies.",
          "This policy may be updated if the technology changes. Updates will be published on this page.",
        ],
      },
    ],
  },
  {
    locale: "en",
    slug: "terms",
    path: "/en/legal/terms/",
    title: "Terms of use",
    description: "Sterling Books terms of use for Spain.",
    status: status.en,
    sections: [
      {
        heading: "Purpose and acceptance",
        paragraphs: [
          "These terms govern access to and informational use of the Sterling Books website. By browsing it, users agree to use it in accordance with the law, these terms and third-party rights.",
          "The website is intended for Spain. Where a user is a consumer, applicable mandatory consumer-protection rules apply.",
        ],
      },
      {
        heading: "Editorial content and availability",
        paragraphs: [
          "The website presents editorial information about books and may update, correct, remove or change content where reasonable. Information is provided for general purposes and is not professional advice or a direct contractual offer from this website.",
          "Interruptions, errors and technical limitations may affect website availability. Nothing excludes liability that cannot legally be limited.",
        ],
      },
      {
        heading: "Purchases and external platforms",
        paragraphs: [
          "Books are sold or distributed through Amazon and Apple Books. This website does not process payments, orders, delivery, returns or post-sale support for purchases.",
          "Prices, availability, contract terms, return policies and purchase-data processing belong to the relevant external platform. Users should review its terms and policies before buying.",
        ],
      },
      {
        heading: "Intellectual property and use",
        paragraphs: [
          "Website content is protected by intellectual and industrial property rights. Personal, private consultation is permitted within legal limits.",
          "Users may not copy, redistribute, modify, extract, use for automated training, circumvent technical measures or exploit content or the brands without permission, except where mandatory law allows it. Third-party marks belong to their respective owners.",
        ],
      },
      {
        heading: "Links, liability and changes",
        paragraphs: [
          "External links are provided for user convenience. The holder does not control or guarantee the content, availability or practices of Amazon, Apple Books or other linked websites.",
          "These terms may be updated to reflect website or legal changes. Updates will be published on this page.",
        ],
      },
      {
        heading: "Applicable law, jurisdiction and contact",
        paragraphs: [
          "These terms are governed by Spanish law. Any dispute will be submitted to the courts with jurisdiction under law, without prejudice to mandatory forums that protect consumers and users.",
          "For questions about these terms, write to hola@eloymartinezcuesta.com.",
        ],
      },
    ],
  },
];
