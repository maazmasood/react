import { useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
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
      question: "Advice?",
      answer:
        "Our customer advisors are available to you at any time from your first inquiry. Their competence, their friendliness and their quick response times have already convinced numerous customers.",
    },
    {
      question: "Installation & Montage",
      answer:
        "We carry out the assembly service professionally, quickly and cleanly and are happy to respond to your wishes. Sit back – our technicians will take care of your concerns.",
    },

    {
      question: "Support & Advice",
      answer:
        "Our specialist advisors advise and support you from the preparation of the offer to the disbursement of the funding. Use our free service and we will process your application for you.",
    },

    {
      question: "Verkauf von Klimaanlagen",
      answer:
        "It is important to us that our customers make the right decision with their climate solution. That's why we only sell air conditioning systems from well-known manufacturers such as Daikin, Mitsubishi and Panasonic.",
    },

    {
      question: "24h servcies",
      answer:
        "We are there for you at any time with our 24-hour service. You can reach us in writing, by telephone or directly on site. We are looking forward to your contact.",
    },
    // Add more FAQs as needed
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
              <center>
                <p className="mt-4  text-lg leading-relaxed text-gray-700">
                  Nutzen Sie unsere exklusiven Winterangebote jetzt!
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
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            <div className="max-w-2xl mx-auto mt-8 rounded-lg overflow-hidden shadow-lg ring-1 ring-gray-200">
              <div className="p-6">
                <div className="relative">
                  <Image
                    className="w-full rounded-xl"
                    src="/Klima-Nrw-Angebote-Mitsubishi-Split.webp"
                    alt="Klima-Nrw-Angebote-Mitsubishi-Split"
                    title="Klima-Nrw-Angebote-Mitsubishi-Split"
                    width={600}
                    height={600}
                  />
                  <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>

                <div className="mt-6 text-center">
                  <p className="text-base font-semibold text-gray-600">
                    Inklusive Montage
                    <br /> Schon ab
                  </p>
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

                <div className="mt-6">
                  <button
                    id="s3"
                    className="block w-full px-4 py-2 text-sm font-semibold text-center text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
                    onClick={toggleContent1Visibility}
                  >
                    {isContent1Visible ? <span>-</span> : <span>+</span>}{" "}
                    <span className="ml-2">
                      {isContent1Visible
                        ? "Details ausblenden"
                        : "Zeige Details"}
                    </span>
                  </button>

                  {isContent1Visible && (
                    <>
                      <p className="mt-4 text-left text-gray-600">
                        Kühlen im Sommer, heizen an kälteren Tagen und
                        gleichzeitig die Luft filtern: Diese und viele weitere
                        Vorteile ziehen mit einer Split-Klimaanlage von
                        Mitsubishi Electric in Ihr Haus oder Ihre Wohnung ein.
                        Lernen Sie unsere große Auswahl an eleganten und
                        energieeffizienten Klimaanlagen kennen. Für die Planung
                        und Installation der Klimageräte stehen Ihnen unsere
                        Kälte-Klima Fachpartner beratend zur Seite.
                      </p>

                      <div className="mt-4">
                        <h4 className="text-sm font-semibold leading-6 text-blue-600">
                          Vorteile
                        </h4>
                        <ul className="mt-2 grid grid-cols-1 gap-2 text-sm text-gray-600">
                          {includedFeaturesMitsubishi.map((feature, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-x-2"
                            >
                              <CheckIcon className="w-4 h-4 text-blue-600" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}

                  <Link
                    id="s3"
                    href="/planer?product=Split Klimaanlage Mitsubishi"
                    className="block w-full px-4 py-2 mt-4 text-sm font-semibold text-center text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
                  >
                    <p className="text-white">jetzt sichern</p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="max-w-2xl mx-auto mt-8 rounded-lg overflow-hidden shadow-lg ring-1 ring-gray-200">
              <div className="p-6">
                <div className="relative">
                  <Image
                    className="w-full rounded-xl"
                    src="/Klima-Nrw-Angebote-Mitsubishi-Split.webp"
                    alt="Klima-Nrw-Angebote-Mitsubishi-Split"
                    title="Klima-Nrw-Angebote-Mitsubishi-Split"
                    width={600}
                    height={600}
                  />
                  <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>

                <div className="mt-6 text-center">
                  <p className="text-base font-semibold text-gray-600">
                    Inklusive Montage
                    <br /> Schon ab
                  </p>
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

                <div className="mt-6">
                  <button
                    id="s3"
                    className="block w-full px-4 py-2 text-sm font-semibold text-center text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
                    onClick={toggleContent2Visibility}
                  >
                    {isContent2Visible ? <span>-</span> : <span>+</span>}{" "}
                    <span className="ml-2">
                      {isContent2Visible
                        ? "Details ausblenden"
                        : "Zeige Details"}
                    </span>
                  </button>

                  {isContent2Visible && (
                    <>
                      <p className="mt-4 text-left text-gray-600">
                        Kühlen im Sommer, heizen an kälteren Tagen und
                        gleichzeitig die Luft filtern: Diese und viele weitere
                        Vorteile ziehen mit einer Split-Klimaanlage von
                        Mitsubishi Electric in Ihr Haus oder Ihre Wohnung ein.
                        Lernen Sie unsere große Auswahl an eleganten und
                        energieeffizienten Klimaanlagen kennen. Für die Planung
                        und Installation der Klimageräte stehen Ihnen unsere
                        Kälte-Klima Fachpartner beratend zur Seite.
                      </p>

                      <div className="mt-4">
                        <h4 className="text-sm font-semibold leading-6 text-blue-600">
                          Vorteile
                        </h4>
                        <ul className="mt-2 grid grid-cols-1 gap-2 text-sm text-gray-600">
                          {includedFeaturesMitsubishi.map((feature, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-x-2"
                            >
                              <CheckIcon className="w-4 h-4 text-blue-600" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}

                  <Link
                    id="s3"
                    href="/planer?product=Split Klimaanlage Mitsubishi"
                    className="block w-full px-4 py-2 mt-4 text-sm font-semibold text-center text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
                  >
                    <p className="text-white">jetzt sichern</p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="max-w-2xl mx-auto mt-8 rounded-lg overflow-hidden shadow-lg ring-1 ring-gray-200">
              <div className="p-6">
                <div className="relative">
                  <Image
                    className="w-full rounded-xl"
                    src="/Klima-Nrw-Angebote-Mitsubishi-Split.webp"
                    alt="Klima-Nrw-Angebote-Mitsubishi-Split"
                    title="Klima-Nrw-Angebote-Mitsubishi-Split"
                    width={600}
                    height={600}
                  />
                  <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>

                <div className="mt-6 text-center">
                  <p className="text-base font-semibold text-gray-600">
                    Inklusive Montage
                    <br /> Schon ab
                  </p>
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

                <div className="mt-6">
                  <button
                    id="s3"
                    className="block w-full px-4 py-2 text-sm font-semibold text-center text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
                    onClick={toggleContent3Visibility}
                  >
                    {isContent3Visible ? <span>-</span> : <span>+</span>}{" "}
                    <span className="ml-2">
                      {isContent3Visible
                        ? "Details ausblenden"
                        : "Zeige Details"}
                    </span>
                  </button>

                  {isContent3Visible && (
                    <>
                      <p className="mt-4 text-left text-gray-600">
                        Kühlen im Sommer, heizen an kälteren Tagen und
                        gleichzeitig die Luft filtern: Diese und viele weitere
                        Vorteile ziehen mit einer Split-Klimaanlage von
                        Mitsubishi Electric in Ihr Haus oder Ihre Wohnung ein.
                        Lernen Sie unsere große Auswahl an eleganten und
                        energieeffizienten Klimaanlagen kennen. Für die Planung
                        und Installation der Klimageräte stehen Ihnen unsere
                        Kälte-Klima Fachpartner beratend zur Seite.
                      </p>

                      <div className="mt-4">
                        <h4 className="text-sm font-semibold leading-6 text-blue-600">
                          Vorteile
                        </h4>
                        <ul className="mt-2 grid grid-cols-1 gap-2 text-sm text-gray-600">
                          {includedFeaturesMitsubishi.map((feature, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-x-2"
                            >
                              <CheckIcon className="w-4 h-4 text-blue-600" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}

                  <Link
                    id="s3"
                    href="/planer?product=Split Klimaanlage Mitsubishi"
                    className="block w-full px-4 py-2 mt-4 text-sm font-semibold text-center text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
                  >
                    <p className="text-white">jetzt sichern</p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="max-w-2xl mx-auto mt-8 rounded-lg overflow-hidden shadow-lg ring-1 ring-gray-200">
              <div className="p-6">
                <div className="relative">
                  <Image
                    className="w-full rounded-xl"
                    src="/Klima-Nrw-Angebote-Mitsubishi-Split.webp"
                    alt="Klima-Nrw-Angebote-Mitsubishi-Split"
                    title="Klima-Nrw-Angebote-Mitsubishi-Split"
                    width={600}
                    height={600}
                  />
                  <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>

                <div className="mt-6 text-center">
                  <p className="text-base font-semibold text-gray-600">
                    Inklusive Montage
                    <br /> Schon ab
                  </p>
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

                <div className="mt-6">
                  <button
                    id="s3"
                    className="block w-full px-4 py-2 text-sm font-semibold text-center text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
                    onClick={toggleContent4Visibility}
                  >
                    {isContent4Visible ? <span>-</span> : <span>+</span>}{" "}
                    <span className="ml-2">
                      {isContent4Visible
                        ? "Details ausblenden"
                        : "Zeige Details"}
                    </span>
                  </button>

                  {isContent4Visible && (
                    <>
                      <p className="mt-4 text-left text-gray-600">
                        Kühlen im Sommer, heizen an kälteren Tagen und
                        gleichzeitig die Luft filtern: Diese und viele weitere
                        Vorteile ziehen mit einer Split-Klimaanlage von
                        Mitsubishi Electric in Ihr Haus oder Ihre Wohnung ein.
                        Lernen Sie unsere große Auswahl an eleganten und
                        energieeffizienten Klimaanlagen kennen. Für die Planung
                        und Installation der Klimageräte stehen Ihnen unsere
                        Kälte-Klima Fachpartner beratend zur Seite.
                      </p>

                      <div className="mt-4">
                        <h4 className="text-sm font-semibold leading-6 text-blue-600">
                          Vorteile
                        </h4>
                        <ul className="mt-2 grid grid-cols-1 gap-2 text-sm text-gray-600">
                          {includedFeaturesMitsubishi.map((feature, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-x-2"
                            >
                              <CheckIcon className="w-4 h-4 text-blue-600" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}

                  <Link
                    id="s3"
                    href="/planer?product=Split Klimaanlage Mitsubishi"
                    className="block w-full px-4 py-2 mt-4 text-sm font-semibold text-center text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
                  >
                    <p className="text-white">jetzt sichern</p>
                  </Link>
                </div>
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
          <div className="lg:max-w-lg text-center">
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Don't know what to buy ?
            </h1>
            <p className="mt-4 text-xl leading-8 text-white px-8 sm:px-0">
              Unsere Funktionsliste umfasst modernste Technologien, die darauf
              zugeschnitten sind, den Komfort und die Effizienz zu steigern und
              unseren Kunden ein nahtloses Erlebnis zu gewährleisten.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto grid grid-cols-1 lg:grid-cols-5">
        {/* First Section (20% width) */}
        <div className="relative flex items-center justify-center px-12 py-6 pt-36 pb-20 sm:pt-32 lg:static lg:py-60 lg:px-8 hidden md:block">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg text-center pt-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us!</h2>
            <p className="text-lg text-gray-600 mb-6 ">
              We will arrange a free consultation for your website, we will
              provide you expert opinions as per your need.
            </p>
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
          <div className="lg:max-w-lg text-center">
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Look at our professional work ?
            </h1>
            <p className="mt-4 text-xl leading-8 text-white px-8 sm:px-0">
              Unsere Funktionsliste umfasst modernste Technologien, die darauf
              zugeschnitten sind, den Komfort und die Effizienz zu steigern und
              unseren Kunden ein nahtloses Erlebnis zu gewährleisten.
            </p>
          </div>
        </div>
      </section>

      <div className="p-6 pb-2">
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
                    <Link href="/Kontakt">
                      <p
                        id="s3"
                        className="px-6  py-3 bg-white text-white font-semibold rounded-md shadow-md hover:from-purple-700 hover:to-blue-700 transition duration-300 ease-in-out"
                      >
                        View All Images
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section
        style={{ minHeight: "250px" }}
        id="s3"
        class="section flex justify-center items-center lg:mt-12"
      >
        <div className="lg:pr-4">
          <div className="lg:max-w-lg text-center">
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              We're both online and offline +
            </h1>
            <p className="mt-4 text-xl leading-8 text-white px-8 sm:px-0">
              Unsere Funktionsliste umfasst modernste Technologien, die darauf
              zugeschnitten sind, den Komfort und die Effizienz zu steigern und
              unseren Kunden ein nahtloses Erlebnis zu gewährleisten.
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-row h-screen">
        <div className="w-1/2 hidden md:block">
          <img
            src="Klima-Nrw-vfl.webp"
            alt="Your Image"
            className="h-full w-full object-cover pt-5 pb-5"
          />
        </div>

        <div className="w-full p-2 md:w-1/2  flex justify-center items-center rounded-lg ">
          <div className="w-full max-w-lg ">
            <div className="overflow-hidden mb-4 block md:hidden">
              <h1 className="float-left mr-8 font-bold text-2xl text-blue-500 uppercase tracking-wider">
                Frequently Asked Questions
              </h1>
              <div className="float-left w-full border-b-2 border-blue-500"></div>
            </div>
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6">
                <button
                  className="text-left w-full py-3 px-6  text-white font-semibold rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  onClick={() => toggleFAQ(index)}
                  id="s3"
                >
                  <span style={{ float: "right" }}>+</span>
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

      <section id="s3" className="section flex flex-col items-center md:hidden">
        <div className="text-center px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white-800">
            Sie sind sich nicht sicher,
            <br /> was Sie kaufen sollen?
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-white">
            Unser Beratungsservice ist kostenlos
          </p>
        </div>
        <div className="lg:pr-4 w-full lg:w-auto mt-8 lg:mt-0">
          <div className="flex justify-center items-center w-full px-4 lg:px-0">
            <div className="p-4 bg-white rounded-lg shadow-lg w-full max-w-md">
              <div className="flex justify-center mt-4">
                <MainForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="hidden md:block">
        <section id="s3" className="section s4 justify-center items-centerflex">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white-800">
              Sie sind sich nicht sicher,...
              <br /> was Sie kaufen sollen?
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white">
              Unser Beratungsservice ist kostenlos
            </p>
          </div>
          <div className="lg:pl-8">
            <div className="flex justify-center items-center w-full h-1/2 px-8">
              <div className="p-8 bg-white rounded-lg shadow-lg max-w-3xl w-full h-full">
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
