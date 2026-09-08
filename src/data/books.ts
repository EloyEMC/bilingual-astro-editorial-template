export type Locale = "es" | "en";

export interface BookContent {
        locale: Locale;
        title: string;
        subtitle: string;
        description: string;
        cta: string;
        path: string;
        cover: string;
        caseImage: string;
}

export interface Book {
        id: string;
        content: Record<Locale, BookContent>;
}

export const tempusBook: Book = {
        id: "tempus",
        content: {
                es: {
                        locale: "es",
                        title: "Código Tempus",
                        subtitle: "Una novela para atravesar el tiempo con otros ojos.",
                        description:
                                "Conoce el primer libro del universo Sterling: una edición cuidada, disponible para descubrir a tu ritmo.",
                        cta: "Entrar en Código Tempus",
                        path: "/es/libro/codigo-tempus",
                        cover: "/media/codigo-tempus-cover-es.jpg",
                        caseImage: "/media/codigo-tempus-case-es.png",
                },
                en: {
                        locale: "en",
                        title: "Tempus Code",
                        subtitle: "A novel that invites you to see time through different eyes.",
                        description:
                                "Discover the first book in the Sterling universe: a carefully made edition, ready to be explored at your own pace.",
                        cta: "Enter Tempus Code",
                        path: "/en/book/tempus-code",
                        cover: "/media/codigo-tempus-cover-en.jpg",
                        caseImage: "/media/codigo-tempus-case-en.png",
                },
        },
};

export const books: Book[] = [tempusBook];

export const localeLabels: Record<Locale, string> = { es: "ES", en: "EN" };
