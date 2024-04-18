import {CheckIcon} from '@heroicons/react/20/solid'
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export default function Klimaanlagen() {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8"></meta>
                <meta name="description" content="Erleben Sie optimalen Komfort mit unseren Klimaanlagen und Installationsservices. Kontaktieren Sie uns für maßgeschneiderte Lösungen für Ihr Zuhause oder Unternehmen." ></meta>
                <meta name="keywords" content="Klimaanlagen, Installation, Komfort, Zuhause, Unternehmen"></meta>
                <title>Klimaanlagen und Installationsservices für Zuhause und Unternehmen - Name der Firma</title>
                <link rel="canonical" href="https://klimanrw.de/Klimaanlagen"></link>
            </Head>
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-blue-600">Energie sparen mit</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Klimaanlagen</h1>
                            <p className="mt-4 text-xl leading-8 text-gray-700">
                                Erleben Sie optimalen Komfort mit unseren Klimaanlagen und Installationsservices
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <Image
                        className="w-[22rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        src="/Klima-Nrw-Carousel-4.webp"
                        alt="Klima-Nrw-Carousel-4.webp"
                        title="Klima-Nrw-Carousel-4.webp"
                        width={1280}
                        height={853}
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                            <p>
                                Wenn die Temperaturen im Sommer steigen, sehnen sich viele Menschen nach einer angenehmen Abkühlung. Eine Klimaanlage kann hier Abhilfe schaffen.
                                Ob im Büro oder zu Hause, eine gut installierte Klimaanlage kann den Komfort erheblich verbessern und das Raumklima positiv beeinflussen.
                            </p>
                            <ul className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                    <CheckIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                                    <span>
                    <strong className="font-semibold text-gray-900">Hochwertige Klimaanlagen für individuelle Bedürfnisse</strong><br/>
                                       Unser Unternehmen bietet eine große Auswahl an hochwertigen Klimaanlagen, die auf die individuellen Bedürfnisse unserer Kunden zugeschnitten sind.
                                        Unsere Klimaanlagen sind nicht nur energieeffizient und umweltfreundlich, sondern auch leise und einfach zu bedienen.
                  </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <CheckIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                                    <span>
                    <strong className="font-semibold text-gray-900">Professionelle Installation und optimale Funktionalität</strong><br/>
                                       Unser professionelles Team von erfahrenen Installateuren kann Ihre neue Klimaanlage schnell und zuverlässig installieren.
                                        Wir verwenden nur die besten Materialien und Techniken, um sicherzustellen, dass Ihre Klimaanlage optimal funktioniert und lange hält.
                  </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <CheckIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                                    <span>
                    <strong className="font-semibold text-gray-900">Zuverlässiger Kundenservice und Wartungsdienste</strong><br/>
                                        Unser Kundenservice ist uns sehr wichtig. Wir stehen Ihnen jederzeit gerne zur Verfügung, um Ihre Fragen zu beantworten und Ihnen bei allen Problemen zu helfen, die Sie mit Ihrer Klimaanlage haben könnten.
                                        Wir bieten auch regelmäßige Wartungs- und Reparaturdienste an, um sicherzustellen, dass Ihre Klimaanlage in einwandfreiem Zustand bleibt.</span>
                                </li>
                            </ul>
                            <p className="mt-8">
                                Wenn Sie eine neue Klimaanlage suchen oder Ihre alte ersetzen möchten, kontaktieren Sie uns bitte.
                                Wir bieten Ihnen eine kostenlose Beratung und ein maßgeschneidertes Angebot, das auf Ihre Bedürfnisse zugeschnitten ist.
                                Wir sind Ihr vertrauenswürdiger Partner für alle Fragen rundum Klimaanlagen.
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
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
