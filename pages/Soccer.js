import {
  DevicePhoneMobileIcon,
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";

export default function Kontakt() {
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
      const response = await axios.post("/api/send-email", data);
      setSuccessMessage("Nachricht erfolgreich gesendet!");

      form.reset();
      // Show success message or perform any other action after successful submission
    } catch (error) {
      console.error("Error sending email:", error);
      // Show error message or perform any other action in case of error
    }
  }

  return (
    <>
      <Head>
        <title>
          Kontakt - Treten Sie mit Klimanrw in Kontakt für klimafreundliche
          Lösungen
        </title>
        <meta
          name="description"
          content="Kontaktieren Sie uns für eine persönliche Beratung rund um das Thema Klimaanlagen. Unsere Adresse lautet Huttropstraße 60, 45138 Essen (Germany). Tel: 02369 4049939, Email: Info@klimanrw.de"
        />
        <meta
          name="keywords"
          content="Kontakt, Klimaanlagen, Beratung, Adresse, Telefon, Email, Klimanrw, Essen, Deutschland"
        />
      </Head>
      <div className="relative isolate bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:py-48 lg:px-8">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2"></div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Hallo Kollegen von VFL Resse 08!
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Als treue Fans des VFL Resse 08 erhalten Sie 10% Nachlass auf
                die Montage einer Klimaanlage bei uns!
              </p>

              <Image
                className="w-[30rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[20rem]"
                src="/Klima-Nrw-vfl.webp"
                alt="Klima-Nrw-vfl"
                title="Klima-Nrw-vfl"
                width={"200"}
                height={"200"}
              />

              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <DevicePhoneMobileIcon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      href="tel:015738350053"
                      title="Klima-Nrw-Telefon"
                      className="hover:text-gray-900"
                    >
                      015738350053
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>

                    <span className="sr-only">Telephone</span>
                    <DevicePhoneMobileIcon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      href="tel:023694049939"
                      title="Klima-Nrw-Telefon"
                      className="hover:text-gray-900"
                    >
                      02369 4049939
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>

                    <EnvelopeIcon
                      className="h-7 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      href="mailto:Info@klimanrw.de"
                      title="Klima-Nrw-Email"
                      className="hover:text-gray-900"
                    >
                      Info@klimanrw.de
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="px-6 pb-24 pt-20 sm:pb-32 lg:py-48 lg:px-8"
          >
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Vorname
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="border-b block w-full border-0 py-2 px-3.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Nachname
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="border-b block w-full border-0 py-2 px-3.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Ort
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="border-b block w-full border-0 py-2 px-3.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="border-b block w-full border-0 py-2 px-3.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Telefon
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      autoComplete="tel"
                      className="border-b block w-full border-0 py-2 px-3.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Nachricht
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                {successMessage && (
                  <p className="text-green-600 mr-4 mt-2">{successMessage}</p>
                )}
                <button
                  type="submit"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Senden
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
