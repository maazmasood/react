import { useEffect, useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Head from "next/head";

export default function Klimaanlagen() {
  const images = [
    "/Klima-Nrw-Carousel-1.webp",
    "/Klima-Nrw-Carousel-2.webp",
    "/Klima-Nrw-Carousel-3.webp",
    "/Klima-Nrw-Carousel-4.webp",
    "/Klima-Nrw-Carousel-5.webp",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Unser Unternehmen in Dorsten bietet Geschäftskunden planmäßige Wartungs- und Pflegedienste für ihre Wärmepumpen und Klimaanlagen an. Wir verwenden hochwertige Materialien und Techniken, um sicherzustellen, dass Ihre Geräte optimal funktionieren. Kontaktieren Sie uns für maßgeschneiderte Lösungen für Ihr Unternehmen."
        />
        <meta
          name="keywords"
          content="Wartung, Pflege, Wärmepumpen, Klimaanlagen, Geschäftskunden, Dorsten"
        />
        <title>
          Wartung und Pflege von Wärmepumpen und Klimaanlagen für
          Geschäftskunden in Dorsten
        </title>
        <link rel="canonical" href="https://klimanrw.de/Ueber-uns" />
        <meta
          property="og:title"
          content="Wartung und Pflege von Wärmepumpen und Klimaanlagen für Geschäftskunden in Dorsten"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://klimanrw.de/Ueber-uns" />
        <meta
          property="og:description"
          content="Unser Unternehmen in Dorsten bietet Geschäftskunden planmäßige Wartungs- und Pflegedienste für ihre Wärmepumpen und Klimaanlagen an. Wir verwenden hochwertige Materialien und Techniken, um sicherzustellen, dass Ihre Geräte optimal funktionieren. Kontaktieren Sie uns für maßgeschneiderte Lösungen für Ihr Unternehmen."
        />
        <meta
          property="og:image"
          content="https://klimanrw.de/Klima-Nrw-Carousel-3.webp"
        />
        <meta
          name="twitter:title"
          content="Wartung und Pflege von Wärmepumpen und Klimaanlagen für Geschäftskunden in Dorsten"
        />
        <meta
          name="twitter:description"
          content="Unser Unternehmen in Dorsten bietet Geschäftskunden planmäßige Wartungs- und Pflegedienste für ihre Wärmepumpen und Klimaanlagen an. Wir verwenden hochwertige Materialien und Techniken, um sicherzustellen, dass Ihre Geräte optimal funktionieren. Kontaktieren Sie uns für maßgeschneiderte Lösungen für Ihr Unternehmen."
        />
        <meta
          name="twitter:image"
          content="https://klimanrw.de/Klima-Nrw-Carousel-3.webp"
        />
      </Head>

      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        {/* Carousel div */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"></div>
          <div className="hidden lg:block -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            {/* Auto image carousel */}
            <div className="w-[22rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]">
              <img
                className="w-[22rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                src={images[currentImageIndex]}
                alt={`Carousel Image ${currentImageIndex + 1}`}
                title={`Carousel Image ${currentImageIndex + 1}`}
                width={1920}
                height={1280}
              />
            </div>
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <div className="lg:pr-4">
                  <div className="lg:max-w-lg">
                    <h2 className="text-base font-semibold leading-7 text-blue-600">
                      Erfahren Sie mehr über uns
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      Unsere erfahrenen Klima Reparaturtechniker sind 24h für
                      Sie da!
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      Herzlich willkommen bei unserem innovativen Unternehmen,
                      das sich auf die fachgerechte Montage und Installation von
                      Klimaanlagen spezialisiert hat.
                      <br />
                      Unser Team besteht aus hochqualifizierten Mitarbeitern,
                      die sich mit Leidenschaft und Fachwissen um Ihre
                      individuellen Anforderungen kümmern.
                    </p>
                  </div>
                </div>

                <ul className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <CheckIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Umfassende Dienstleistungen angeboten
                      </strong>
                      <br />
                      Unser umfangreiches Leistungsspektrum umfasst nicht nur
                      die Montage von Klimaanlagen, sondern auch regelmäßige
                      Wartungen, schnelle Reparaturen und gründliche
                      Sicherheitsprüfungen .
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Effiziente und kompetente Ausführung
                      </strong>
                      <br />
                      Dank unserer werksgeschulten Techniker werden alle
                      Aufgabenzügig, kompetent und unkompliziert erledigt.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-600"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Verpflichtung zur Exzellenz
                      </strong>
                      <br />
                      Um Ihnen erstklassige Ergebnisse zu garantieren, setzen
                      wir ausschließlich auf qualitativ hochwertige Materialien.
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                  <strong>
                    Wenn Sie eine neue Wärmepumpe kaufen möchten oder Ihre alte
                    ersetzen lassen wollen, kontaktieren Sie uns bitte. Wir
                    bieten Ihnen eine kostenlose Beratung und ein
                    maßgeschneidertes Angebot, das auf Ihre Bedürfnisse
                    zugeschnitten ist. Wir sind Ihr vertrauenswürdiger Partner
                    für alle Fragen rund um Wärmepumpen.
                  </strong>
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

      <section
        id="s3"
        class="section flex justify-center items-center"
        style={{ minHeight: "250px" }}
      >
        <div className="lg:pr-4">
          <div className="lg:max-w-lg text-center">
            <p className="text-white">
              Klimanrw hilft Ihnen dabei, stilvoll zu entspannen! Die Effizienz
              wird Schritt für Schritt revolutioniert.
            </p>
            <br />
            <a
              href="/planer"
              className=" px-6 bg-white text-gray-800 py-3 px-6 rounded-full inline-block font-semibold shadow-md transition duration-300 hover:bg-gray-200 hover:text-gray-900 transform hover:scale-105"
            >
              Buy Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
