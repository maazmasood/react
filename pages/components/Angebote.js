import { useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const includedFeaturesMitsubishi = [
  "Energieeffizienz A+++",
  "besonders energieeffizient",
  "modernes Design",
  "kühlen, heizen und entfeuchten",
  "flüsterleiser Betrieb",
  "keine Zugerscheinungen",
  "reine Luft",
  "smart vernetzbar",
  "hygienisch",
];
const includedFeaturesBrauchwasserpumpe = [
  "Energieeffizienz A+++",
  "2/3 Energie aus Umgebungsluft",
  "Kein fossiler Brennstoff nötig",
  "Geringer Stromverbrauch",
  "Einfache, bohrungsfreie Installation",
  "Geringer Wartungsaufwand",
  "Kombinierbar mit Solarthermie",
  "Nutzt Wärme von Heizkesseln",
  "Abgekühlte Luft kann zur Kühlung genutzt werden",
];
const includedFeaturesEtherea = [
  "Energieeffizienz A+++",
  "Super Quiet-Technologie (nur 19 dB(A))",
  "Gesunde Luft dank nanoe™ X-Technologie mit Hydroxylradikalen",
  "24/7 Schutz durch nanoe™ X-Technologie",
  "Internetsteuerung über Panasonic Comfort Cloud",
  "Kompatibel mit Sprachsteuerung",
  "Infrarot-Steuerung Sky Controller",
  "Mild Dry Cooling zur Vermeidung eines schnellen Rückgangs der Raumfeuchtigkeit",
  "Aerowings zur Kontrolle der Luftzugrichtung",
  "Stärkere Luftzirkulation für eine schnellere Erreichung der gewünschten Temperatur",
  "Optionale kabelgebundene Steuerung",
];

const includedFeaturesDaikin = [
  "Effizienzklasse A+++",
  "Automatische Schwenkbewegungen für effektive Luftzirkulation",
  "Multi-Außengerät für bis zu 3 einzeln regelbare Innengeräte",
  "Platzsparendes Wandgerät mit zeitgemäßem Design",
  "Umweltfreundliches Kühlmittel R-32 reduziert die Umweltbelastung um 68%",
  "Allergen- und Luftreinigungsfilter mit Silberionen",
  "Geräuschloser Betrieb",
  "Sprachsteuerung über Amazon Alexa oder Google Assistant",
  "Fernsteuerung über Daikin Residential Controller App",
];

export default function Angebote() {
  return (
    <>
      <Head>
        <title>
          Angebote Klimaanlagen | Wärmepumpen und Klimaanlagen Dorsten
        </title>
        <meta
          name="description"
          content="Angebot: Sichern Sie sich eine Mitsubishi Split-Klimaanlage. Kühle Luft im Sommer, Wärme im Winter und reine Luft dank modernster Filtertechnologie. Unsere Fachpartner beraten Sie gerne."
        />
        <meta
          name="keywords"
          content="Angebot, Split-Klimaanlage, Mitsubishi, Kälte-Klima, Wärmepumpen, Klimaanlagen, Dorsten"
        />
      </Head>

      <section
        id="s3"
        className="section flex justify-center items-center scrolldiv"
      >
        <div className="lg:pr-4">
          <div className="flex justify-center items-center w-full h-1/2 px-8">
            <div className="p-8 bg-white rounded-lg shadow-lg max-w-3xl w-full h-full">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-center text-gray-800 flashing-text">
                Erhalten Sie bis zum 30. April exklusive Winterangebote!
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Verpassen Sie nicht die Chance, sich unsere einzigartigen
                Winterangebote zu sichern. Jetzt zugreifen!
              </p>
              <div className="flex justify-center mt-8">
                <Link href="/planer">
                  <p className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-md shadow-md hover:from-purple-700 hover:to-blue-700 transition duration-300 ease-in-out">
                    Angebot machen
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-20 bg-white sm:py-0" id="section-id">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl mx-auto mt-16 rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Split Klimaanlage Mitsubishi
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Kühlen im Sommer, heizen an kälteren Tagen und gleichzeitig die
                Luft filtern: Diese und viele weitere Vorteile ziehen mit einer
                Split-Klimaanlage von Mitsubishi Electric in Ihr Haus oder Ihre
                Wohnung ein. Lernen Sie unsere große Auswahl an eleganten und
                energieeffizienten Klimaanlagen kennen. Für die Planung und
                Installation der Klimageräte stehen Ihnen unsere Kälte-Klima
                Fachpartner beratend zur Seite.
              </p>
              <div className="flex items-center mt-10 gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600">
                  Vorteile
                </h4>
                <div className="flex-auto h-px bg-gray-100" />
              </div>
              <ul className="grid grid-cols-1 gap-4 mt-8 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                {includedFeaturesMitsubishi.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="flex-none w-5 h-6 text-blue-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="h-full py-10 text-center rounded-2xl bg-gray-50 ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="max-w-xl px-8 mx-auto">
                  <div className="relative">
                    <Image
                      className="w-full shadow-lg rounded-xl bg-gray-900/5 object-fit"
                      src="/Klima-Nrw-Angebote-Mitsubishi-Split.webp"
                      alt="Klima-Nrw-Angebote-Mitsubishi-Split"
                      title="Klima-Nrw-Angebote-Mitsubishi-Split"
                      width={956}
                      height={505}
                    />
                    <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>

                  <p className="mt-12 text-base font-semibold text-gray-600">
                    Inklusive Montage
                    <br /> Schon ab
                  </p>
                  <p className="flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-blue-500">
                      1699
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      €
                    </span>
                  </p>
                  <Link
                    href="/planer?product=Split Klimaanlage Mitsubishi"
                    className="block w-full px-3 py-2 mt-6 text-sm font-semibold text-center text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    <p className="text-white">jetzt sichern</p>
                  </Link>
                  <p className="mt-6 text-xs leading-5 text-gray-600"></p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-2xl mx-auto mt-16 rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Brauchwasserpumpe
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Im Vergleich zu Durchlauferhitzern, Boilern oder Kombithermen
                verbraucht eine Brauchwasserwärmepumpe weniger Energie. Sie
                nutzt zu zwei Dritteln Umgebungswärme und benötigt lediglich ein
                Drittel Strom. Zudem benötigt Sie keine fossilen Brennstoffe.
                Die Anschaffung einer Brauchwasserwärmepumpe spart also Energie
                und Kosten und schont gleichzeitig die Umwelt. Besitzer oder
                Planer einer Solaranlage sollten die Nutzung einer
                Brauchwasserwärmepumpe in Erwägung ziehen.
              </p>
              <div className="flex items-center mt-10 gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600">
                  Vorteile
                </h4>
                <div className="flex-auto h-px bg-gray-100" />
              </div>
              <ul className="grid grid-cols-1 gap-4 mt-8 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                {includedFeaturesBrauchwasserpumpe.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="flex-none w-5 h-6 text-blue-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="h-full py-10 text-center rounded-2xl bg-gray-50 ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="max-w-xl px-8 mx-auto">
                  <div className="relative">
                    <Image
                      className="w-full shadow-lg rounded-xl bg-gray-900/5 object-fit"
                      src="/Klima-Nrw-Brauchwasserpumpe.webp"
                      alt="Klima-Nrw-Brauchwasserpumpe"
                      title="Klima-Nrw-Brauchwasserpumpe"
                      width={1920}
                      height={1280}
                    />
                    <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <p className="mt-12 text-base font-semibold text-gray-600">
                    Inklusive Montage
                    <br /> Schon ab
                  </p>
                  <p className="flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-blue-500">
                      3400
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      €
                    </span>
                  </p>
                  <Link
                    href="/planer?product=Brauchwasserpumpe"
                    className="block w-full px-3 py-2 mt-6 text-sm font-semibold text-center text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    <p className="text-white">jetzt sichern</p>
                  </Link>
                  <p className="mt-6 text-xs leading-5 text-gray-600"></p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-2xl mx-auto mt-16 rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Etherea - stilvoll mit herausragenden Funktionen
              </h3>

              <p className="mt-6 text-base leading-7 text-gray-600">
                Die Etherea-Klimaanlage kombiniert herausragende
                Energieeffizienz mit Komfort und gesunder Luft dank der nanoe™
                X-Technologie und Super Quiet-Technologie, die nur 19 dB(A)
                erreicht. Die Klimaanlage bietet eine Internetsteuerung über die
                Panasonic Comfort Cloud und ist mit Sprachsteuerung kompatibel.
                Die Super Quiet-Technologie gewährleistet eine besonders leise
                Betriebsweise, während der Infrarot-Steuerung Sky Controller
                eine bequeme Bedienung ermöglicht. Aerowings ermöglichen die
                Kontrolle des Luftstroms, was zu einer schnelleren Erreichung
                der gewünschten Temperatur führt, und die Mild Dry
                Cooling-Funktion verhindert einen schnellen Anstieg der
                Raumfeuchtigkeit. Optional ist eine kabelgebundene Steuerung
                erhältlich.
              </p>

              <div className="flex items-center mt-10 gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600">
                  Vorteile
                </h4>
                <div className="flex-auto h-px bg-gray-100" />
              </div>
              <ul className="grid grid-cols-1 gap-4 mt-8 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                {includedFeaturesEtherea.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="flex-none w-5 h-6 text-blue-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="h-full py-5 text-center rounded-2xl bg-gray-50 ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="max-w-xl px-8 mx-auto">
                  <div className="relative">
                    <Image
                      className="w-full shadow-lg rounded-xl bg-gray-900/5 object-fit"
                      src="/Klima-Nrw-Angebote-Etherea.webp"
                      alt="Klima-Nrw-Angebote-Etherea"
                      title="Klima-Nrw-Angebote-Etherea"
                      width={600}
                      height={600}
                    />
                    <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>

                  <p className="mt-12 text-base font-semibold text-gray-600">
                    Inklusive Montage
                    <br /> Schon ab
                  </p>
                  <p className="flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-blue-500">
                      2599
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      €
                    </span>
                  </p>
                  <Link
                    href="/planer?product= Etherea - stilvoll mit herausragenden Funktionen"
                    className="block w-full px-3 py-2 mt-6 text-sm font-semibold text-center text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    <p className="text-white">jetzt sichern</p>
                  </Link>
                  <p className="mt-6 text-xs leading-5 text-gray-600"></p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-2xl mx-auto mt-16 rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Effizientes 3D-Luftstrom-Klimagerät von Daikin
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                The air conditioning system features an advanced 3D airflow
                mechanism for efficient air circulation in large spaces,
                complemented by the flexibility of connecting up to three
                independent indoor units. Its compact wall design is both
                stylish and practical, ideal for renovations and limited spaces.
                Utilizing eco-friendly R-32 refrigerant, the system reduces
                environmental impact by 68% while ensuring immediate energy
                savings. Equipped with advanced allergen filters, it operates
                silently, purifying the air and offering comfort. With
                impressive seasonal efficiency ratings and compatibility with
                voice control assistants, this system represents a pinnacle of
                convenience and sustainability in modern climate control.
              </p>

              <div className="flex items-center mt-10 gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600">
                  Vorteile
                </h4>
                <div className="flex-auto h-px bg-gray-100" />
              </div>
              <ul className="grid grid-cols-1 gap-4 mt-8 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                {includedFeaturesDaikin.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="flex-none w-5 h-6 text-blue-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="h-full py-10 text-center rounded-2xl bg-gray-50 ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="max-w-xl px-4 mx-auto">
                  <div className="relative">
                    <Image
                      className="w-full shadow-lg rounded-xl bg-gray-900/5 object-fit"
                      src="/Klima-Nrw-Angebote-Daikin.webp"
                      alt="Klima-Nrw-Angebote-Daikin"
                      title="Klima-Nrw-Angebote-Daikin"
                      width={350}
                      height={350}
                    />
                    <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>

                  <p className="mt-12 text-base font-semibold text-gray-600">
                    Inklusive Montage
                    <br /> Schon ab
                  </p>
                  <p className="flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-blue-500">
                      2299
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      €
                    </span>
                  </p>
                  <Link
                    href="/planer?product= Effizientes 3D-Luftstrom-Klimagerät von Daikin"
                    className="block w-full px-3 py-2 mt-6 text-sm font-semibold text-center text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    <p className="text-white">jetzt sichern</p>
                  </Link>
                  <p className="mt-6 text-xs leading-5 text-gray-600"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="s3" class="section flex justify-center items-center mt-3">
        <div className="lg:pr-4">
          <div className="lg:max-w-lg text-center">
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Warum bei uns kaufen?
            </h1>
            <p className="mt-4 text-xl leading-8 text-white">
              Unsere Funktionsliste umfasst modernste Technologien, die darauf
              zugeschnitten sind, den Komfort und die Effizienz zu steigern und
              unseren Kunden ein nahtloses Erlebnis zu gewährleisten.
            </p>
          </div>
        </div>
      </section>

      <div className="md:m-10 md:p-10">
        <br />
        <section>
          <div className="row">
            <div className="column">
              <div className="card">
                <div className="icon-wrapper">
                  <span>🏆</span>
                </div>
                <h3>Qualität</h3>
                <p>
                  Bei uns erhalten Sie erstklassige Klimaanlagensysteme, die für
                  ihre herausragende Qualität und Langlebigkeit bekannt sind
                </p>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <div className="icon-wrapper">
                  <span>💡</span>
                </div>
                <h3>Effizienz</h3>
                <p>
                  Wir garantieren maximale Leistung und Energieeffizienz in
                  jeder einzelnen Einheit, um Ihre Komfortbedürfnisse optimal zu
                  erfüllen
                </p>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <div className="icon-wrapper">
                  <i className="fas fa-hammer">🛠</i>
                </div>
                <h3>Fachkenntnisse</h3>
                <p>
                  Unsere Experten nutzen umfassende Branchenkenntnisse, um
                  maßgeschneiderte Lösungen zu entwickeln, die genau Ihren
                  Anforderungen entsprechen
                </p>
              </div>
            </div>
            {/* Repeat the structure for other columns */}
          </div>

          <div className="row">
            <div className="column">
              <div className="card">
                <div className="icon-wrapper">
                  <i className="fas fa-hammer">🤝</i>
                </div>
                <h3>Unterstützung</h3>
                <p>
                  Unser engagiertes Kundenserviceteam steht Ihnen jederzeit zur
                  Verfügung, um Ihnen ein reibungsloses und zufriedenstellendes
                  Einkaufserlebnis zu bieten
                </p>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <div className="icon-wrapper">
                  <span>💰</span>
                </div>
                <h3>Erschwinglichkeit</h3>
                <p>
                  Wir bieten kostengünstige Lösungen an, ohne dabei die Qualität
                  zu vernachlässigen, damit Sie ein ausgezeichnetes
                  Preis-Leistungs-Verhältnis erhalten
                </p>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <div className="icon-wrapper">
                  <i className="fas fa-hammer">😊</i>
                </div>
                <h3>Zufriedenheit</h3>
                <p>
                  Ihre Zufriedenheit hat für uns oberste Priorität. Wir
                  garantieren Ihnen daher eine 100%ige Kundenzufriedenheit mit
                  unseren zuverlässigen Produkten und Dienstleistungen
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="s3" className="section flex justify-center items-center">
        <div className="lg:pr-4">
          <div className="flex justify-center items-center w-full h-1/2 px-8">
            <div className="p-8 bg-white rounded-lg shadow-lg max-w-3xl w-full h-full">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-center text-gray-800 flashing-text">
                Schauen Sie sich an, wie unsere Arbeit aussieht
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Mit akribischer Präzision stellen wir sicher, dass jede
                AC-Installation einwandfrei funktioniert, ein Beweis für unser
                Streben nach Perfektion in jedem Detail.
              </p>
              <div className="flex justify-center mt-8">
                <Link href="/Galerie">
                  <p className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-md shadow-md hover:from-purple-700 hover:to-blue-700 transition duration-300 ease-in-out">
                    Galerie ansehen
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="header-container mt-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-black">
          Kundener fahrungen
        </h1>
        <br />
        <p className="text-grey-600 text-sm">
          Entdecken Sie die Erfahrungen unserer zufriedenen Kunden.
        </p>
      </div>
      <br />

      <div className="comments">
        <figure class="snip1157">
          <blockquote>
            Sehr zufrieden mit dem Kauf! Die Klimaanlagen, die ich bei diesem
            Unternehmen erworben habe, funktionieren einwandfrei. Die Beratung
            war professionell, und der Kundenservice war sehr hilfsbereit..{" "}
            <div class="arrow"></div>
          </blockquote>
          <img src="man.jpg" alt="Alex Turner" />
          <div class="author">
            <h5>
              {" "}
              Alex Turner <span> Hausbesitzer </span>
            </h5>
          </div>
        </figure>
        <figure class="snip1157 hover">
          <blockquote>
            Top-Qualität und exzellenter Service! Die Klimaanlagen dieses
            Unternehmens sind von höchster Qualität. Die Installation verlief
            reibungslos, und das Personal war äußerst kompetent.
            <div class="arrow"></div>
          </blockquote>
          <img src="man2.jpg" alt="Chris Anderson" />
          <div class="author">
            <h5>
              Chris Anderson<span> Ladenbesitzer</span>
            </h5>
          </div>
        </figure>
        <figure class="snip1157">
          <blockquote>
            Hervorragende Auswahl und schnelle Lieferung! Dieses Unternehmen
            bietet eine beeindruckende Auswahl an Klimaanlagen, die den
            Bedürfnissen verschiedener Kunden gerecht
            <div class="arrow"></div>
          </blockquote>
          <img src="man3.jpg" alt=" Sarah Mitchell" />
          <div class="author">
            <h5>
              Sarah Mitchell<span> Geschäftsinhaber</span>
            </h5>
          </div>
        </figure>
      </div>

      <section id="s3" className="section flex justify-center items-center">
        <div className="lg:pr-4">
          <div className="flex justify-center items-center w-full h-1/2 px-8">
            <div className="p-8 bg-white rounded-lg shadow-lg max-w-3xl w-full h-full">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-center text-gray-800 flashing-text">
                Bist du immer noch nicht sicher?
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Wir helfen Ihnen, das beste Produkt zu finden. Unser
                Beratungsservice ist kostenlos
              </p>
              <div className="flex justify-center mt-8">
                <Link href="/Kontakt">
                  <p className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-md shadow-md hover:from-purple-700 hover:to-blue-700 transition duration-300 ease-in-out">
                    kontaktiere uns
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
