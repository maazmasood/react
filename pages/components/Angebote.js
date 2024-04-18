import { useState } from "react";
import { CheckIcon, CogIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import {
  DevicePhoneMobileIcon,
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

import MultiStepForm from "../MultiStepForm";
import MainForm from "./form_mainpage";

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
  const [isContent1Visible, setContent1Visible] = useState(false);
  const [isContent2Visible, setContent2Visible] = useState(false);
  const [isContent3Visible, setContent3Visible] = useState(false);
  const [isContent4Visible, setContent4Visible] = useState(false);

  const [successMessage, setSuccessMessage] = useState(null); // Add state for success message

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = {
      firstName: formData.get("first-name"),
      lastName: formData.get("last-name"),
      city: formData.get("city"),
      email: formData.get("email"),
      phoneNumber: formData.get("phone-number"),
      message: formData.get("message"),
    };

    try {
      const response = await axios.post("/api/send-contact-email", data);
      setSuccessMessage("Nachricht erfolgreich gesendet!");

      form.reset();
      // Show success message or perform any other action after successful submission
    } catch (error) {
      console.error("Error sending email:", error);
      // Show error message or perform any other action in case of error
    }
  }

  const toggleContent1Visibility = () => {
    setContent1Visible(!isContent1Visible);
  };
  const toggleContent2Visibility = () => {
    setContent2Visible(!isContent2Visible);
  };
  const toggleContent3Visibility = () => {
    setContent3Visible(!isContent3Visible);
  };
  const toggleContent4Visibility = () => {
    setContent4Visible(!isContent4Visible);
  };

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Beratung?",
      answer:
        "Unsere Kundenberater stehen Ihnen jederzeit von Ihrer ersten Anfrage an zur Verfügung. Ihre Kompetenz, ihre Freundlichkeit und ihre schnellen Reaktionszeiten haben bereits zahlreiche Kunden überzeugt.",
    },
    {
      question: "Installation & Montage",
      answer:
        "Wir führen den Montageservice professionell, schnell und sauber durch und gehen gerne auf Ihre Wünsche ein. Lehnen Sie sich zurück – unsere Techniker kümmern sich um Ihre Anliegen.",
    },
    {
      question: "Unterstützung & Beratung",
      answer:
        "Unsere Fachberater beraten und unterstützen Sie von der Angebotserstellung bis zur Auszahlung der Fördermittel. Nutzen Sie unseren kostenlosen Service und wir werden Ihre Anmeldung für Sie bearbeiten.",
    },

    {
      question: "Verkauf von Klimaanlagen",
      answer:
        "Es ist uns wichtig, dass unsere Kunden die richtige Entscheidung für ihre Klima­lösung treffen. Deshalb verkaufen wir nur Klimaanlagen von namhaften Herstellern wie Daikin, Mitsubishi etc.",
    },

    {
      question: "24-Stunden-Service",
      answer:
        "Wir sind jederzeit für Sie da mit unserem 24-Stunden-Service. Sie können uns schriftlich, telefonisch oder direkt vor Ort erreichen. Wir freuen uns auf Ihre Kontaktaufnahme.",
    },
    {
      question: "Physische Geschäfte",
      answer:
        "Ja, wir haben ein physisches Geschäft. Sie können uns an jedem Werktag hier besuchen: Wischenstück 30, 46286 Dorsten, Deutschland.",
    },
  ];

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const images = [
    { src: "/gallery/g1.webp", alt: "Image 1" },
    { src: "/gallery/g2.webp", alt: "Image 2" },
    { src: "/gallery/g1.webp", alt: "Image 1" },
    { src: "/gallery/g2.webp", alt: "Image 2" },
    { src: "/gallery/g1.webp", alt: "Image 1" },
    { src: "/gallery/g2.webp", alt: "Image 2" },
    { src: "/gallery/g1.webp", alt: "Image 1" },
    { src: "/gallery/g2.webp", alt: "Image 2" },
    // Add more images as needed
  ];

  const images_mobile = [
    { src: "/gallery/g1.webp", alt: "Image 1" },
    { src: "/gallery/g2.webp", alt: "Image 2" },
    { src: "/gallery/g1.webp", alt: "Image 1" },
    { src: "/gallery/g2.webp", alt: "Image 2" },
    // Add more images as needed
  ];

  const gtag_report_conversion = () => {
    window.gtag("event", "conversion", {
      send_to: "AW-308056398/5rQ0CJygoJsZEM6i8pIB",
    });
  };

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
            <div className="p-8 bg-white rounded-lg shadow-lg max-w-2xl w-full h-full">
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-center text-gray-800 flashing-text">
                Erhalten Sie bis zum 30. April exklusive Winterangebote!
              </h1>
              <center>
                <p className="mt-4  text-m leading-relaxed text-gray-700">
                  Schauen Sie sich unten die Sale-Artikel an. Oder erhalten Sie
                  ein individuelles Rabattangebot
                </p>
              </center>
              <div className="flex justify-center mt-4">
                <Link href="/planer">
                  <p
                    id="s3"
                    className="px-6 py-3  text-white font-semibold rounded-md shadow-md hover:from-purple-700 hover:to-blue-700 transition duration-300 ease-in-out"
                  >
                    Angebot machen
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-20 bg-white sm:py-0" id="section-id">
        <div className=" md:py-28 px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {" "}
            {/* Adjusted grid-cols-4 */}
            {/* Product 1 */}
            <div className="relative max-w-2xl mx-auto mt-8 rounded-lg overflow-hidden shadow-lg ring-1 ring-gray-200">
              <div className="ribbon-wrapper">
                <div className="ribbon">
                  <span>Inklusive Montage</span>
                </div>
              </div>
              <div className="p-6">
                <div className="relative">
                  <Image
                    className="w-full rounded-xl product_image"
                    src="/Klima-Nrw-Angebote-Mitsubishi-Split.png"
                    alt="Klima-Nrw-Angebote-Mitsubishi-Split"
                    title="Klima-Nrw-Angebote-Mitsubishi-Split"
                    width={600}
                    height={600}
                  />
                  <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>

                <div className="mt-6 text-center">
                  <p className="text-base font-semibold text-gray-600">
                    Split Klimaanlage Mitsubishi{" "}
                  </p>
                  <div className="text-xs">
                    <div className="border-t border-gray-300 my-4"></div>
                    <span> perfekt für Ihr Zimmer</span>
                  </div>

                  <div
                    className="flex items-center justify-center gap-x-2 mt-2"
                    id="s3-text"
                  >
                    <span className="text-4xl font-bold tracking-tight ">
                      1699
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      €
                    </span>
                  </div>
                </div>

                <Link
                  id="s3"
                  href="/product?id=1"
                  className="block w-full px-4 py-2 mt-5 text-sm font-semibold text-center text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
                >
                  <p className="text-white">jetzt sichern</p>
                </Link>
              </div>
            </div>
            {/* Product 2 */}
            <div className="relative max-w-2xl mx-auto mt-8 rounded-lg overflow-hidden shadow-lg ring-1 ring-gray-200">
              <div className="ribbon-wrapper">
                <div className="ribbon">
                  <span>Inklusive Montage</span>
                </div>
              </div>
              <div className="p-6">
                <div className="relative">
                  <Image
                    className="w-full rounded-xl"
                    src="/Klima-Nrw-Angebote-Etherea.webp"
                    alt="Klima-Nrw-Angebote-Etherea"
                    title="Klima-Nrw-Angebote-Etherea"
                    width={600}
                    height={600}
                  />
                  <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>

                <div className="mt-6 text-center">
                  <p className="text-base font-semibold text-gray-600">
                    {" "}
                    Etherea{" "}
                  </p>
                  <div className="text-xs">
                    <div className="border-t border-gray-300 my-4"></div>
                    <span> stilvoll mit herausragenden Funktionen</span>
                  </div>

                  <div
                    className="flex items-center justify-center gap-x-2 mt-2"
                    id="s3-text"
                  >
                    <span className="text-4xl font-bold tracking-tight ">
                      4350
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      €
                    </span>
                  </div>
                </div>

                <Link
                  id="s3"
                  href="/product?id=2"
                  className="block w-full px-4 py-2 mt-4 text-sm font-semibold text-center text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
                >
                  <p className="text-white">jetzt sichern</p>
                </Link>
              </div>
            </div>
            {/* Product 3 */}
            <div className="relative max-w-2xl mx-auto mt-8 rounded-lg overflow-hidden shadow-lg ring-1 ring-gray-200">
              <div className="ribbon-wrapper">
                <div className="ribbon">
                  <span>Inklusive Montage</span>
                </div>
              </div>
              <div className="p-6">
                <div className="relative">
                  <Image
                    className="w-full rounded-xl"
                    src="/Klima-Nrw-Angebote-Daikin.png"
                    alt="Klima-Nrw-Angebote-Daikin"
                    title="Klima-Nrw-Angebote-Daikin"
                    width={600}
                    height={600}
                  />
                  <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>

                <div className="mt-6 text-center">
                  <p className="text-base font-semibold text-gray-600">
                    Effizientes{" "}
                  </p>
                  <div className="text-xs">
                    <div className="border-t border-gray-300 my-4"></div>
                    <span> 3D-Luftstrom-Klimagerät von Daikin</span>
                  </div>

                  <div
                    className="flex items-center justify-center gap-x-2 mt-2"
                    id="s3-text"
                  >
                    <span className="text-4xl font-bold tracking-tight ">
                      2299
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      €
                    </span>
                  </div>
                </div>

                <Link
                  id="s3"
                  href="/product?id=3"
                  className="block w-full px-4 py-2 mt-4 text-sm font-semibold text-center text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
                >
                  <p className="text-white">jetzt sichern</p>
                </Link>
              </div>
            </div>
            {/* Product 4 */}
            <div className="relative max-w-2xl mx-auto mt-8 rounded-lg overflow-hidden shadow-lg ring-1 ring-gray-200">
              <div className="ribbon-wrapper">
                <div className="ribbon">
                  <span>Inklusive Montage</span>
                </div>
              </div>
              <div className="p-6">
                <div className="relative">
                  <Image
                    className="w-full rounded-xl"
                    src="/Klima-Nrw-Brauchwasserpumpe.png"
                    alt="Klima-Nrw-Brauchwasserpumpe"
                    title="Klima-Nrw-Brauchwasserpumpe"
                    width={600}
                    height={600}
                  />
                  <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>

                <div className="mt-6 text-center">
                  <p className="text-base font-semibold text-gray-600">
                    Brauchwasserpumpe{" "}
                  </p>
                  <div className="text-xs">
                    <div className="border-t border-gray-300 my-4"></div>
                    <span>Eines der feinsten</span>
                  </div>

                  <div
                    className="flex items-center justify-center gap-x-2 mt-2"
                    id="s3-text"
                  >
                    <span className="text-4xl font-bold tracking-tight ">
                      3400
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      €
                    </span>
                  </div>
                </div>

                <Link
                  id="s3"
                  href="/product?id=4"
                  className="block w-full px-4 py-2 mt-4 text-sm font-semibold text-center text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
                >
                  <p className="text-white">jetzt sichern</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        style={{ minHeight: "250px" }}
        id="s3"
        class="section flex justify-center items-center lg:mt-12"
      >
        <div className="lg:pr-4">
          <div className="lg:max-w-4xl text-center">
            <h1 className="mt-2 text-xl font-bold tracking-tight text-white md:text-3xl">
              Maßgeschneiderte HVAC-Lösungen für Ihre Komfortbedürfnisse
            </h1>
            <p className="mt-4  text-sm md:text-m leading-8 text-white px-8 sm:px-0">
              Entdecken Sie personalisierte HLK-Pläne, die auf Ihre spezifischen
              Anforderungen zugeschnitten sind. Von der Installation bis zur
              Wartung entwickelt unser Team Lösungen, um Ihren Komfort das ganze
              Jahr über zu gewährleisten
            </p>
            <a
              id="s3-text"
              href="tel:023694049939"
              title="Klima-Nrw-Telefon"
              class="relative hidden  inline-flex items-center justify-center mt-4 px-6 py-3 text-base font-medium text-blue-700 bg-white rounded-lg focus:ring-4 focus:ring-blue-300 focus:outline-none focus:ring-opacity-50"
            >
              <span class="inline">Kontakt</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto grid grid-cols-1 lg:grid-cols-5">
        {/* First Section (20% width) */}
        <div className="relative flex items-center justify-center px-12 py-6 pt-36 pb-20 sm:pt-32 lg:static  lg:px-8 hidden md:block">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg ">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Senden Sie uns!
            </h2>
            <p className="text-lg text-gray-600 mb-6 ">
              Wir vereinbaren für Sie ein kostenloses Beratungsgespräch und
              stellen Ihnen je nach Bedarf Expertenmeinungen zur Verfügung.
              Fülle dieses Formular aus.
              <br />
              Oder:
            </p>
            <a
              id="s3"
              href="/Kontakt"
              title="Klima-Nrw-Kontakt"
              class="relative   inline-flex items-center justify-center mt-4 px-6 py-3 text-white font-medium  rounded-lg focus:ring-4 focus:ring-blue-300 focus:outline-none focus:ring-opacity-50"
            >
              <span class="inline">Kontakt Us</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Second Section (80% width) */}
        <div className="lg:col-span-4 bg-gray-200">
          <MultiStepForm />
        </div>
      </div>

      <section
        style={{ minHeight: "250px" }}
        id="s3"
        class="section flex justify-center items-center "
      >
        <div className="lg:pr-4">
          <div className="lg:max-w-5xl text-center">
            <h1 className="mt-2 text-xl font-bold tracking-tight text-white md:text-3xl">
              Aktuelle HVAC-Installationen: Sehen Sie sich unsere Handwerkskunst
              an
            </h1>
            <p className="mt-4  text-sm md:text-m leading-8 text-white px-8 sm:px-0">
              Entdecken Sie atemberaubende Bilder unserer jüngsten
              HVAC-Installationen, Dies zeigt die Kompetenz und Präzision, die
              wir in jedes Projekt einbringen. Von eleganten Rohrleitungen bis
              hin zu hochmodernen Systemen – erleben Sie die Qualität unserer
              Arbeit
            </p>
            <a
              id="s3-text"
              href="/Service"
              title="Klima-Nrw-Service"
              class="relative inline-flex items-center justify-center mt-4 px-6 py-3 text-base font-medium text-blue-700 bg-white rounded-lg focus:ring-4 focus:ring-blue-300 focus:outline-none focus:ring-opacity-50"
            >
              <CogIcon className="h-6 w-6 mr-2" />
              <span class="inline">Dienste anzeigen</span>
            </a>
          </div>
        </div>
      </section>

      <div className="md:pl-48 md:pr-48 md:pt-20 p-6 hidden md:block">
        <div className="container mx-auto px-4">
          {" "}
          {/* Added container div */}
          <div className="flex flex-wrap -mx-4">
            {images.map((image, index) => (
              <div
                key={image.id}
                className="w-full sm:w-1/1 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 cursor-pointer relative"
              >
                <div className="overflow-hidden shadow-md border border-white rounded-lg">
                  <img
                    style={{ width: "100%", height: "300px" }}
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-70 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
                    <div className="flex justify-center m-8">
                      <Link href="/Galerie">
                        <p
                          id="s3"
                          className="px-6 py-3 bg-white text-white font-semibold rounded-md shadow-md hover:from-purple-700 hover:to-blue-700 transition duration-300 ease-in-out"
                        >
                          Alle Bilder anzeigen
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*displaying less images for mobile version*/}

      <div className="md:pl-48 md:pr-48 md:pt-20 p-6 block md:hidden">
        <div className="container mx-auto px-4">
          {" "}
          {/* Added container div */}
          <div className="flex flex-wrap -mx-4">
            {images_mobile.map((image, index) => (
              <div
                key={image.id}
                className="w-full sm:w-1/1 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 cursor-pointer relative"
              >
                <div className="overflow-hidden shadow-md border border-white rounded-lg">
                  <img
                    style={{ width: "100%", height: "300px" }}
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-70 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white text-center">
                    <div className="flex justify-center m-8">
                      <Link href="/Galerie">
                        <p
                          id="s3"
                          className="px-6 py-3 bg-white text-white font-semibold rounded-md shadow-md hover:from-purple-700 hover:to-blue-700 transition duration-300 ease-in-out"
                        >
                          Alle Bilder anzeigen
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section
        style={{ minHeight: "250px" }}
        id="s3"
        class="section flex justify-center items-center lg:mt-12"
      >
        <div className="lg:pr-4">
          <div className="lg:max-w-5xl text-center">
            <h1 className="mt-2 text-l font-bold tracking-tight text-white md:text-3xl">
              Entdecken Sie unseren HVAC-Hub: Ihre vertrauenswürdige
              Komfortlösung
            </h1>
            <p className="mt-4 text-m leading-8 text-white px-8 sm:px-0">
              Betreten Sie unseren Laden, Ihre zentrale Anlaufstelle für
              erstklassige HVAC-Leistungen. Mit unseren Sicherheitsabdrücken
              können Sie sicher sein, dass Sie bei jeder Transaktion beruhigt
              sein können.
            </p>
            <a
              id="s3-text"
              href="/Impressum"
              title="Klima-Nrw-Impressum"
              class="relative inline-flex items-center justify-center mt-4 px-6 py-3 text-base font-medium text-blue-700 bg-white rounded-lg focus:ring-4 focus:ring-blue-300 focus:outline-none focus:ring-opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                />
              </svg>

              <span class="inline ml-2"> Impressum ansehen</span>
            </a>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row md:h-screen">
        <div className="md:w-1/2">
          <img
            src="Klima-Nrw-vfl.webp"
            alt="Your Image"
            className="h-full w-full object-cover p-4"
          />
        </div>

        <div className="w-full p-4 md:p-2 md:w-1/2 flex justify-center items-center rounded-lg ">
          <div className="w-full max-w-lg">
            <div className="overflow-hidden mb-4 md:block hidden">
              <h1 className="font-bold text-2xl text-blue-500 uppercase tracking-wider">
                Antworten auf Ihre HVAC-Fragen
              </h1>
              <div className="w-full border-b-2 border-blue-500"></div>
            </div>
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6">
                <button
                  className="text-left w-full py-3 px-6 text-white font-semibold rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  onClick={() => toggleFAQ(index)}
                  id="s3"
                >
                  <span className="float-right md:hidden">+</span>
                  {faq.question}
                </button>
                {openIndex === index && (
                  <p className="mt-4 px-6 py-4 bg-white rounded-lg shadow-md text-gray-700">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section id="s3" class="py-12 px-4 sm:px-6 lg:px-8">
        <h2 class="text-xl md:text-4xl font-bold text-center text-white mb-8 md:mb-0">
          Entdecken Sie, was unsere Kunden sagen
        </h2>
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white rounded-lg shadow-md p-6">
              <p class="text-m md:text-lg text-gray-800 mb-6">
                "Hervorragende Auswahl und schnelle Lieferung! Dieses
                Unternehmen bietet eine beeindruckende Auswahl an Klimaanlagen,
                die den Bedürfnissen verschiedener Kunden gerecht."
              </p>
              <p class="text-gray-700 font-semibold">- Geschäftsinhaber</p>
            </div>
            <div class="bg-white rounded-lg shadow-md p-6">
              <p class="text-m md:text-m text-gray-800 mb-6">
                "Top-Qualität und exzellenter Service! Die Klimaanlagen dieses
                Unternehmens sind von höchster Qualität. Die Installation
                verlief reibungslos, und das Personal war äußerst kompetent."
              </p>
              <p class="text-gray-700 font-semibold">- Ladenbesitzer</p>
            </div>
            <div class="bg-white rounded-lg shadow-md p-6">
              <p class="text-m md:text-m text-gray-800 mb-6">
                "Sehr zufrieden mit dem Kauf! Die Klimaanlagen, die ich bei
                diesem Unternehmen erworben habe, funktionieren einwandfrei. Die
                Beratung war professionell, und der Kundenservice war sehr
                hilfsbereit.."
              </p>
              <p class="text-gray-700 font-semibold">- Hausbesitzer</p>
            </div>
            <div class="bg-white rounded-lg shadow-md p-6">
              <p class="text-m md:text-m text-gray-800 mb-6">
                "Das Unternehmen bietet eine beeindruckende Auswahl an
                Klimaanlagen, die den Bedürfnissen verschiedener Kunden gerecht
                werden. Die Lieferung erfolgte schnell und die
                Auswahlmöglichkeiten waren hervorragend!"
              </p>
              <p class="text-gray-700 font-semibold">- Hausbesitzer</p>
            </div>
          </div>
        </div>
      </section>

      <section id="s3" className="section flex flex-col items-center md:hidden">
        <div
          className="w-full block md:hidden z-60 flex flex-col" // Added flex-col class
        >
          <div className="rounded-lg shadow-lg max-w-3xl w-full">
            <div className="flex justify-center p-4">
              <MainForm />
            </div>
          </div>
        </div>
      </section>

      <div className="hidden md:block">
        <section className="section  justify-center items-centerflex">
          <div className="w-full max-w-lg">
            <h1
              className="text-2xl md:text-2xl  font-extrabold leading-tight "
              id="s3-text"
            >
              Machen Sie den ersten Schritt zu einem komfortableren Raum.
              <br /> Füllen Sie das Formular aus und lassen Sie uns Ihre
              HVAC-Vision umsetzen Gemeinsam in die Realität umsetzen!
              <br />
              <br />
            </h1>

            <br />

            <br />
            <div className="text-xl leading-6 font-medium">
              <a
                href="tel:023694049939"
                id="s3-text"
                title="Klima-Nrw-Telefon"
                className="hover:text-gray-900 p-4"
              >
                <span onClick={gtag_report_conversion}>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 inline mr-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  02369 4049939
                </span>
              </a>
              <br />
              <br />
              <a
                id="s3-text"
                href="mailto:Info@klimanrw.de"
                title="Klima-Nrw-Email"
                className="hover:text-gray-900 p-4 mt-4"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 inline mr-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  Info@klimanrw.de
                </span>
              </a>
              <br />
              <br />
              <a
                id="s3-text"
                href="https://wa.me/015738350053"
                title="Klima-Nrw-whatsapp"
                className="hover:text-gray-900 p-4 mt-4"
              >
                <span>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 inline mr-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                    />
                  </svg>
                  015738350053
                </span>
              </a>
            </div>
          </div>
          <div className="lg:ml-28 ">
            <div className="flex justify-center items-center w-100  px-8">
              <div
                className="m-6 rounded-lg shadow-lg max-w-3xl w-full"
                id="s3"
              >
                <div className="flex justify-center mt-4 p-4">
                  <MainForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
