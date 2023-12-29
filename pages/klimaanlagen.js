import { useEffect, useRef } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';


const features = [
    {
        name: '24/7 Notdienst:',
        description:
            'Unsere Wartungs- und Pflegedienste umfassen auch einen 24/7 Notdienst für unsere Geschäftskunden in Dorsten. Wenn Ihre Geräte ausfallen oder ein Problem auftritt, stehen wir Ihnen rund um die Uhr zur Verfügung, um schnelle Reparaturen durchzuführen und Ausfallzeiten zu minimieren.',
        icon: CheckIcon,
    },
    {
        name: 'Klimaanlagen für Geschäftskunden:',
        description: 'sind eine energieeffiziente und umweltfreundliche Art, um Ihr Unternehmen zu heizen oder zu kühlen. Damit Ihre Geräte jedoch reibungslos und effizient funktionieren, ist eine regelmäßige Wartung und Pflege unerlässlich.',
        icon: CheckIcon,
    },
    {
        name: 'Wartungs- und Pflegedienste:',
        description: 'Unser Unternehmen in Dorsten bietet Geschäftskunden planmäßige Wartungs- und Pflegedienste für ihre Wärmepumpen und Klimaanlagen an. Unsere erfahrenen Techniker werden Ihre Geräte regelmäßig überprüfen, um sicherzustellen, dass Sie in einwandfreiem Zustand sind und effizient arbeiten. Wir verwenden nur hochwertige Materialien und Techniken, um sicherzustellen, dass Ihre Geräte optimal funktionieren.',
        icon: CheckIcon,
    },
]

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
                            <h2 className="text-base font-semibold leading-7 text-blue-600">24 Stunden am Tag für Sie da!</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Wartung und Pflege</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Wärmepumpen und Klimaanlagen sind eine energieeffiziente und umweltfreundliche Art, um Ihr Unternehmen zu heizen oder zu kühlen.
                                Damit Ihre Geräte jedoch reibungslos und effizient funktionieren, ist eine regelmäßige Wartung und Pflege unerlässlich.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <Image
                        className="w-[22rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[50rem]"
                        src="/Klima-Nrw-Carousel-2.webp"
                        alt="Klima-Nrw-Carousel-2.webp"
                        title="Klima-Nrw-Carousel-2.webp"
                        width={1280}
                        height={853}
                    />
                    </div>
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon className="absolute top-1 left-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                                <div className="mt-12 flex items-center gap-x-6">
                                    <Link
                                        href="/Kontakt"
                                        className="rounded-md bg-blue-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                    >
                                      <p className="text-white">
                                            Jetzt Beratungstermin vereinbaren (kostenlos)
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section id="s3" class="section flex justify-center items-center">
    <div className="lg:pr-4">
        <div className="lg:max-w-lg text-center">
            <p className="text-base font-semibold leading-7 text-blue-900 ">Energie sparen mit</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Klimaanlagen</h1>
            <p className="mt-4 text-xl leading-8 text-gray-700">
                Erleben Sie optimalen Komfort mit unseren Klimaanlagen und Installationsservices
            </p>
        </div>
    </div>
</section>

        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">

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
                                  <p className="text-white">
                                        Jetzt Beratungstermin vereinbaren (kostenlos)
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <section id="s3" class="section flex justify-center items-center">
<div className="lg:pr-4">
    <div className="lg:max-w-lg text-center">
        <p className="text-base font-semibold leading-7 text-blue-900 ">Energie sparen mit</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Wärmepumpen</h1>
        <p className="mt-4 text-xl leading-8 text-gray-700">
          Effizientes Heizen mit Wärmepumpen: Beratung, Installation und Wartung bei KlimaNRW
        </p>
    </div>
</div>
</section>

        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                </div>
                <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <Image
                        className="w-[22rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        src="/Klima-Nrw-Brauchwasserpumpe.webp"
                        alt="Klima-Nrw-Brauchwasserpumpe.webp"
                        title="Klima-Nrw-Brauchwasserpumpe.webp"
                        width={1920}
                        height={1280}
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                            <p>
                                Wärmepumpen sind eine umweltfreundliche und effiziente Art, Ihr Zuhause zu heizen.
                                Indem Sie Wärme aus der Luft oder dem Boden ziehen, können Wärmepumpen Energie sparen und helfen, die CO2-Emissionen zu reduzieren.
                            </p>
                            <ul className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                    <CheckIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                                    <span>
                    <strong className="font-semibold text-gray-900">Hochwertige Wärmepumpen für individuelle Bedürfnisse</strong><br/>
                                        Unser Unternehmen bietet eine große Auswahl an hochwertigen Wärmepumpen, die auf die individuellen Bedürfnisse unserer Kunden zugeschnitten sind.
                                        Ob Luft-Wasser-, Sole-Wasser- oder Wasser-Wasser-Wärmepumpen - wir haben das passende Modell für Sie.
                                        Unsere Wärmepumpen sind nicht nur umweltfreundlich, sondern auch effizient und langlebig.
                  </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <CheckIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                                    <span>
                    <strong className="font-semibold text-gray-900">Professionelle Installation und optimale Funktionalität</strong><br/>
                                        Unser professionelles Team von erfahrenen Installateuren kann Ihre neue Wärmepumpe schnell und zuverlässig installieren.
                                        Wir verwenden nur die besten Materialien und Techniken, um sicherzustellen, dass Ihre Wärmepumpe optimal funktioniert und lange hält.
                  </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <CheckIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                                    <span>
                    <strong className="font-semibold text-gray-900">Zuverlässiger Kundenservice und Wartungsdienste</strong><br/>
                                        Unser Kundenservice ist uns sehr wichtig. Wir stehen Ihnen jederzeit gerne zur Verfügung, um Ihre Fragen zu beantworten und Ihnen bei allen Problemen zu helfen, die Sie mit Ihrer Wärmepumpe haben könnten.
                                        Wir bieten auch regelmäßige Wartungs- und Reparaturdienste an, um sicherzustellen, dass Ihre Wärmepumpe in einwandfreiem Zustand bleibt.
                  </span>
                                </li>
                            </ul>
                            <p className="mt-8">
                                Wenn Sie eine neue Wärmepumpe kaufen möchten oder Ihre alte ersetzen lassen wollen, kontaktieren Sie uns bitte.
                                Wir bieten Ihnen eine kostenlose Beratung und ein maßgeschneidertes Angebot, das auf Ihre Bedürfnisse zugeschnitten ist.
                                Wir sind Ihr vertrauenswürdiger Partner für alle Fragen rund um Wärmepumpen.
                            </p>
                            <div className="mt-12 flex items-center gap-x-6">
                                <Link
                                    href="/Kontakt"
                                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                >
                                <p className=" text-white ">

                                        Jetzt Beratungstermin vereinbaren (kostenlos)
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section id="s3" class="section flex justify-center items-center" style={{minHeight: "250px"}}>
<div className="lg:pr-4">
    <div className="lg:max-w-lg text-center">
    <p className="text-white">Klimanrw hilft Ihnen dabei, stilvoll zu entspannen!
Die Effizienz wird Schritt für Schritt revolutioniert.</p><br />
    <a
        href="/shop"
        className=" px-6 bg-white text-gray-800 py-3 px-6 rounded-full inline-block font-semibold shadow-md transition duration-300 hover:bg-gray-200 hover:text-gray-900 transform hover:scale-105"
      >
        Buy Now
      </a>
    </div>
</div>
</section>

        </div>
    )
}
