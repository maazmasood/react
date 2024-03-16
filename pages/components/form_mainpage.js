import {
  DevicePhoneMobileIcon,
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

import axios from "axios";
import Head from "next/head";
import { useState } from "react";

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
      const response = await axios.post("/api/send-contact-email", data);
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
      <form
        onSubmit={handleSubmit}
        className="rounded-lg bg-grey mx-auto mt-6 p-8 "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-black"
            >
              Vorname
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="border-b focus:border-black border-black w-full py-2 px-3.5 text-black shadow-sm placeholder-black focus:ring-0 sm:text-sm sm:leading-6 bg-transparent"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-black"
            >
              Nachname
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="border-b w-full py-2 px-3.5 text-black shadow-sm placeholder-black focus:ring-0 sm:text-sm sm:leading-6 bg-transparent"
              />
            </div>
          </div>
          <div className="col-span-2">
            <label
              htmlFor="city"
              className="block text-sm font-semibold leading-6 text-black"
            >
              Ort
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="city"
                id="city"
                autoComplete="City"
                className="border-b w-full py-2 px-3.5 text-black shadow-sm placeholder-black focus:ring-0 sm:text-sm sm:leading-6 bg-transparent"
              />
            </div>
          </div>
          <div className="col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-black"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="border-b w-full py-2 px-3.5 text-black shadow-sm placeholder-black focus:ring-0 sm:text-sm sm:leading-6 bg-transparent"
              />
            </div>
          </div>
          <div className="col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-black"
            >
              Telefon
            </label>
            <div className="mt-2.5">
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="border-b w-full py-2 px-3.5 text-black shadow-sm placeholder-black focus:ring-0 sm:text-sm sm:leading-6 bg-transparent"
              />
            </div>
          </div>
          <div className="col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-black"
            >
              Nachricht
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="w-full rounded-md border-b py-2 px-3.5 text-black shadow-sm placeholder-black focus:ring-0 sm:text-sm sm:leading-6 bg-transparent"
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
            id="s3"
            className="rounded-md text-white px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Senden
          </button>
        </div>
      </form>
    </>
  );
}
