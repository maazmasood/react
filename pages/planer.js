import {
  DevicePhoneMobileIcon,
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import MultiStepForm from "./MultiStepForm";

import Head from "next/head";
import { useState } from "react";

export default function Kontakt() {
  return (
    <>
      <Head>
        <title>
          Planer - Holen Sie sich Ihr individuelles Angebot mit Klimanrw
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
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-5">
        {/* First Section (20% width) */}
        <div className="relative flex items-center justify-center px-15 py-6 pt-36 pb-20 sm:pt-32 lg:static p-10 lg:px-8 block bg-[#DEE2EC]">
          <div className="mx-auto max-w-xl lg:mx-0 lg:my-20 lg:max-w-lg ">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Schreiben Sie uns!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Wir legen Wert auf eine persönliche Beratung. Scheuen Sie sich
              nicht, eine kostenlose Meinung rund um das Thema Klimaanlagen
              einzuholen. Wir sind für Sie da.
            </p>
            <dl className="space-y-4 text-base leading-7 text-gray-600">
              <div className="flex items-center gap-x-4">
                <DevicePhoneMobileIcon className="h-7 w-6 text-gray-400" />
                <a
                  href="tel:023694049939"
                  title="Klima-Nrw-Telefon"
                  className="hover:text-gray-900"
                >
                  02369 4049939
                </a>
              </div>
              <div className="flex items-center gap-x-4">
                <EnvelopeIcon className="h-7 w-6 text-gray-400" />
                <a
                  href="mailto:Info@klimanrw.de"
                  title="Klima-Nrw-Email"
                  className="hover:text-gray-900"
                >
                  Info@klimanrw.de
                </a>
              </div>
            </dl>
          </div>
        </div>

        {/* Second Section (80% width) */}
        <div className="lg:col-span-4 bg-gray-200 ">
          <MultiStepForm />
        </div>
      </div>
    </>
  );
}
