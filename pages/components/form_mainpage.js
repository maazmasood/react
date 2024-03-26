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
      firstName: formData.get("full-name"),
      lastName: " ",
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
      <Head>
        <meta
          name="description"
          content="Kontaktieren Sie uns für eine persönliche Beratung rund um das Thema Klimaanlagen. Unsere Adresse lautet Huttropstraße 60, 45138 Essen (Germany). Tel: 02369 4049939, Email: Info@klimanrw.de"
        />
        <meta
          name="keywords"
          content="Kontakt, Klimaanlagen, Beratung, Adresse, Telefon, Email, Klimanrw, Essen, Deutschland"
        />
      </Head>
      <div
        className="contact-form rounded-lg justify-content align-center p-6"
        id="s3"
        style={{
          boxShadow:
            "0 4px 6px rgba(255, 255, 255, 0.1), 0 1px 3px rgba(255, 255, 255, 0.8)",
        }}
      >
        <p className="s3-text text-white">Kontaktiere uns - </p>
        <h1 className="text-2xl font-bold mb-4 text-white ">
          ERHALTEN EIN KOSTENLOSES ANGEBOT!
        </h1>
        <hr />
        <br />

        <form onSubmit={handleSubmit}>
          <div className="mb-4 grid grid-cols-2 gap-4 p-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Gib deinen Namen ein"
                required
                name="full-name"
                className="px-4 py-2 w-full border-b border-blue-600 focus:outline-none focus:border-blue-800"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Stadt"
                required
                className="px-4 py-2 w-full"
                name="city"
                style={{
                  borderBottom: "1px solid #2c4587",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                }}
              />
            </div>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4 p-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                className="px-4 py-2 w-full"
                style={{
                  borderBottom: "1px solid #2c4587",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                }}
              />
            </div>
            <div className="relative">
              <input
                type="tel"
                placeholder="Telefonnummer"
                required
                name="phone-number"
                className="px-4 py-2 w-full"
                style={{
                  borderBottom: "1px solid #2c4587",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                }}
              />
            </div>
          </div>
          <div className="mb-4 p-4">
            <textarea
              placeholder="Wie können wir Ihnen helfen ?"
              required
              className="px-4 py-2 w-full"
              name="message"
              style={{
                borderBottom: "1px solid #2c4587",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
              }}
            ></textarea>
          </div>
          <div className="mt-8 flex justify-start">
            <button
              type="submit"
              id="s3-text"
              className=" mt-3 ml-3  px-4 py-2 rounded-lg bg-white"
            >
              Senden
            </button>
            {successMessage && (
              <p className="text-white ml-8 mt-4">{successMessage}</p>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
