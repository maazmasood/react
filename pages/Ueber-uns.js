import Link from "next/link";
import Head from "next/head";
import DynamicCarousel from "@/pages/components/DynamicCarousel";

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Resources', href: '#' },
    { name: 'Company', href: '#' },
]
const stats = [
    { label: 'Transactions every 24 hours', value: '44 million' },
    { label: 'Assets under holding', value: '$119 trillion' },
    { label: 'New users annually', value: '46,000' },
]
const values = [
    {
        name: 'Be world-class',
        description:
            'Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.',
    },
    {
        name: 'Share everything you know',
        description:
            'Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.',
    },
    {
        name: 'Always learning',
        description:
            'Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.',
    },
    {
        name: 'Be supportive',
        description:
            'Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.',
    },
    {
        name: 'Take responsibility',
        description:
            'Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.',
    },
    {
        name: 'Enjoy downtime',
        description:
            'Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.',
    },
]
const team = [
    {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    },
    // More people...
]
const blogPosts = [
    {
        id: 1,
        title: 'Vel expedita assumenda placeat aut nisi optio voluptates quas',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        author: {
            name: 'Michael Foster',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    // More posts...
]
const images = [
    "/Klima-Nrw-Carousel-1.webp",
    "/Klima-Nrw-Carousel-2.webp",
    "/Klima-Nrw-Carousel-3.webp",
    "/Klima-Nrw-Carousel-4.webp",
    "/Klima-Nrw-Carousel-5.webp",
];


export default function Example() {
    return (
        <>
        <Head>
            <meta charSet="UTF-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta name="description" content="Unser Unternehmen in Dorsten bietet Geschäftskunden planmäßige Wartungs- und Pflegedienste für ihre Wärmepumpen und Klimaanlagen an. Wir verwenden hochwertige Materialien und Techniken, um sicherzustellen, dass Ihre Geräte optimal funktionieren. Kontaktieren Sie uns für maßgeschneiderte Lösungen für Ihr Unternehmen."></meta>
            <meta name="keywords" content="Wartung, Pflege, Wärmepumpen, Klimaanlagen, Geschäftskunden, Dorsten"></meta>
            <title>Wartung und Pflege von Wärmepumpen und Klimaanlagen für Geschäftskunden in Dorsten</title>
            <link rel="canonical" href="https://klimanrw.de/Ueber-uns"/>
            <meta property="og:title" content="Wartung und Pflege von Wärmepumpen und Klimaanlagen für Geschäftskunden in Dorsten"/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://klimanrw.de/Ueber-uns"/>
            <meta property="og:description" content="Unser Unternehmen in Dorsten bietet Geschäftskunden planmäßige Wartungs- und Pflegedienste für ihre Wärmepumpen und Klimaanlagen an. Wir verwenden hochwertige Materialien und Techniken, um sicherzustellen, dass Ihre Geräte optimal funktionieren. Kontaktieren Sie uns für maßgeschneiderte Lösungen für Ihr Unternehmen."/>
            <meta property="og:image" content="https://klimanrw.de/Klima-Nrw-Carousel-3.webp"/>
            <meta name="twitter:title" content="Wartung und Pflege von Wärmepumpen und Klimaanlagen für Geschäftskunden in Dorsten"/>
            <meta name="twitter:description" content="Unser Unternehmen in Dorsten bietet Geschäftskunden planmäßige Wartungs- und Pflegedienste für ihre Wärmepumpen und Klimaanlagen an. Wir verwenden hochwertige Materialien und Techniken, um sicherzustellen, dass Ihre Geräte optimal funktionieren. Kontaktieren Sie uns für maßgeschneiderte Lösungen für Ihr Unternehmen."/>
            <meta name="twitter:image" content="https://klimanrw.de/Klima-Nrw-Carousel-3.webp"/>
        </Head>
        <div className="bg-white">
            <main className="isolate">
                {/* Hero section */}
                <div className="relative isolate -z-10">
                    <svg
                        className="absolute inset-x-0 top-0 -z-50 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)] no-pointer-events"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                                width={200}
                                height={200}
                                x="50%"
                                y={-1}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M.5 200V.5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible -z-50  fill-gray-50 no-pointer-events">
                            <path
                                className="no-pointer-events"
                                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        {/*<rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />*/}
                    </svg>
                    <div className="absolute top-0 left-1/2 right-0 -z-50 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48 no-pointer-events">
                        <svg viewBox="0 0 801 1036" aria-hidden="true" className="w-[50.0625rem] no-pointer-events">
                            <path
                                fill="url(#70656b7e-db44-4b9b-b7d2-1f06791bed52)"
                                fillOpacity=".3"
                                d="m282.279 843.371 32.285 192.609-313.61-25.32 281.325-167.289-58.145-346.888c94.5 92.652 277.002 213.246 251.009-45.597C442.651 127.331 248.072 10.369 449.268.891c160.956-7.583 301.235 116.434 351.256 179.39L507.001 307.557l270.983 241.04-495.705 294.774Z"
                            />
                            <defs>
                                <linearGradient
                                    id="70656b7e-db44-4b9b-b7d2-1f06791bed52"
                                    x1="508.179"
                                    x2="-28.677"
                                    y1="-116.221"
                                    y2="1091.63"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#4C6EF5" />
                                    <stop offset={1} stopColor="#1C34AB" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="overflow-hidden">
                        <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                        Unsere erfahrenen Klima Reparaturtechniker sind 24h für Sie da!
                                    </h1>
                                    <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
Herzlich willkommen bei unserem innovativen Unternehmen, das sich auf die fachgerechte Montage und Installation von Klimaanlagen spezialisiert hat. Unser Team besteht aus hochqualifizierten Mitarbeitern, die sich mit Leidenschaft und Fachwissen um Ihre individuellen Anforderungen kümmern. Von Anfang an gehen wir flexibel und auf Ihre Wünsche maßgeschneidert vor.

Unser umfangreiches Leistungsspektrum umfasst nicht nur die Montage von Klimaanlagen, sondern auch regelmäßige Wartungen, schnelle Reparaturen und gründliche Sicherheitsprüfungen. Dank unserer werksgeschulten Techniker werden alle Aufgaben zügig, kompetent und unkompliziert erledigt.

Um Ihnen erstklassige Ergebnisse zu garantieren, setzen wir ausschließlich auf qualitativ hochwertige Materialien. Ihre Zufriedenheit hat bei uns höchste Priorität, denn unser Ziel ist es, Ihnen das perfekte Raumklima zu ermöglichen.

Sie können sich darauf verlassen, dass wir Ihre Klimaanlage professionell einbinden, damit sie optimal in Ihre Räumlichkeiten integriert wird. Vertrauen Sie auf unsere Expertise und Erfahrung, um ein angenehmes und komfortables Raumklima zu schaffen.

Wir freuen uns darauf, Sie von unserer erstklassigen Arbeit zu überzeugen! Zögern Sie nicht, uns zu kontaktieren, um Ihre Klimaanlagen-Montage in die besten Hände zu legen.Herzlich willkommen bei unserem innovativen Unternehmen, das sich auf die fachgerechte Montage und Installation von Klimaanlagen spezialisiert hat. Unser Team besteht aus hochqualifizierten Mitarbeitern, die sich mit Leidenschaft und Fachwissen um Ihre individuellen Anforderungen kümmern. Von Anfang an gehen wir flexibel und auf Ihre Wünsche maßgeschneidert vor.

Unser umfangreiches Leistungsspektrum umfasst nicht nur die Montage von Klimaanlagen, sondern auch regelmäßige Wartungen, schnelle Reparaturen und gründliche Sicherheitsprüfungen. Dank unserer werksgeschulten Techniker werden alle Aufgaben zügig, kompetent und unkompliziert erledigt.

Um Ihnen erstklassige Ergebnisse zu garantieren, setzen wir ausschließlich auf qualitativ hochwertige Materialien. Ihre Zufriedenheit hat bei uns höchste Priorität, denn unser Ziel ist es, Ihnen das perfekte Raumklima zu ermöglichen.

Sie können sich darauf verlassen, dass wir Ihre Klimaanlage professionell einbinden, damit sie optimal in Ihre Räumlichkeiten integriert wird. Vertrauen Sie auf unsere Expertise und Erfahrung, um ein angenehmes und komfortables Raumklima zu schaffen.

Wir freuen uns darauf, Sie von unserer erstklassigen Arbeit zu überzeugen! Zögern Sie nicht, uns zu kontaktieren, um Ihre Klimaanlagen-Montage in die besten Hände zu legen.
                                    </p>
                                    <div className="mt-12 flex items-center gap-x-6">
                                        <Link
                                            href="/Kontakt"
                                            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                        >
                                            <p>
                                                Jetzt Beratungstermin vereinbaren (kostenlos)
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                                    <DynamicCarousel className="mt-3" images={images} />
                            </div>
                        </div>
                    </div>

                </div>

            </main>

        </div>
        </>
    )
}
