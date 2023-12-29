import React, { useState } from "react";

import Image from "next/image";
import axios from "axios";

const questions = [
  {
    page: 1,
    question: "Wie viele Räume sollen klimatisiert werden?",
    options: [
      { text: "1 Raum", image: "room-1.png" },
      { text: "2 Räume", image: "room-2.png" },
      { text: "3 Räume", image: "room-3.png" },
      { text: "4 Räume", image: "room-4.png" },
    ],
  },
  {
    page: 2,
    question: "Wie groß sind die zu klimatisierenden Gesamtflächen?",
    options: [
      { text: "30 m2", image: "30.png" },
      { text: "45 m2", image: "45.png" },
      { text: "60 m2", image: "60.png" },
      { text: "über 60+", image: "60plus.png" },
    ],
  },
  {
    page: 3,
    question: "Welche Art der Inneneinheit möchten sie haben ?",
    options: [
      { text: "Wandgerät", image: "wall.png" },
      { text: "Deckengerät", image: "ceiling.png" },
      { text: "Truhengerät", image: "chest.png" },
      { text: "Nicht sicher", image: "other.png" },
    ],
  },
  {
    page: 4,
    question: "wie lang ist der Weg zum Außengerät:",
    options: [], // No options for a text box
    textbox: true, // Indicates the presence of a text box
  },
  {
    page: 5,
    question: "Geben Sie Ihre Kontaktdaten ein:",
    options: [], // No options for a text box
    textbox: false, // Indicates the presence of a text box
  },
];

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false); // New state variable
  const [loading, setLoading] = useState(false);

  const currentQuestion = questions.find((q) => q.page === step);

  const handleOptionClick = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      [currentQuestion.page]: { answer: value },
    }));

    if (step < questions.length) {
      setStep((prevStep) => prevStep + 1);
    } else if (step === 5) {
      handleSubmit();
    }
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (currentQuestion.page === 4) {
      setInputValue(value); // Save the input value for Form 4
    } else if (currentQuestion.page === 5) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const renderButtons = () => {
    if (loading) {
      return <div className="loader">Loading...</div>;
    }
    return (
      <div className="button-container">
        {step === 4 && (
          <button type="button" onClick={() => handleOptionClick(inputValue)}>
            Nächste
          </button>
        )}
        {step === 5 && (
          <button type="button" onClick={handleSubmit}>
            Formular abschicken
          </button>
        )}
      </div>
    );
  };

  const handleSubmit = async (event) => {
    setLoading(true);
    let formDataJson = {};

    for (const [key, value] of Object.entries(formData)) {
      if (typeof value === "object" && value !== null) {
        // For nested objects (e.g., page 5 with multiple fields)
        formDataJson[key] = {};
        for (const [nestedKey, nestedValue] of Object.entries(value)) {
          formDataJson[key][nestedKey] = nestedValue;
        }
      } else {
        formDataJson[key] = value;
      }
    }

    const formDataString = JSON.stringify(formDataJson, null, 2);

    const data = {
      Answer_1: formData["1"]["answer"],
      Answer_2: formData["2"]["answer"],
      Answer_3: formData["3"]["answer"],
      lenght: formData["4"]["answer"],
      firstName: formData["name"],
      lastName: formData["Nachname"],
      email: formData["Ihre E-Mail"],
      phoneNumber: formData["Telefonnummer"],
      message: formData["Ihre Anfrage Nachricht"],
    };

    try {
      const response = await axios.post("/api/send-email", data);
      setFormSubmitted(true);
    } catch (error) {
      console.error("Error sending email please try again! Error :", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="form-body">
      {formSubmitted ? (
        <div
          style={{
            textAlign: "left",
            maxWidth: "400px",
            margin: "20px auto",
          }}
        >
          <p>Nachricht erfolgreich gesendet!</p>
        </div>
      ) : (
        <div className="form-container">
          <div className="form">
            <p style={{ textAlign: "center" }}>{currentQuestion.question}</p>
            <div
              className="option-container flex items-center"
              style={{ justifyContent: "center" }}
            >
              {currentQuestion.options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleOptionClick(option.text)}
                  className="option-box flex flex-col items-center"
                >
                  <img
                    src={option.image}
                    alt={option.text}
                    className="mx-auto max-w-full h-auto"
                    style={{ display: "block" }}
                  />
                  <p className="text-center">{option.text}</p>
                </div>
              ))}
            </div>

            {/* For Form 4 and Form 5: Add a text input */}
            {currentQuestion.textbox && (
              <div className="text-container">
                <textarea
                  placeholder="(0-40) In Meter angebene..."
                  name="answer"
                  value={inputValue}
                  required
                  onChange={handleInputChange}
                />
                {step === 4 && renderButtons()}
              </div>
            )}

            {/* Additional fields for Form 5 */}
            {/* Additional fields for Form 5 */}
            {step === 5 && (
              <div
                style={{
                  textAlign: "left",
                  maxWidth: "400px",
                  margin: "20px auto",
                }}
              >
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      onChange={handleInputChange}
                      className="mt-1 p-2 border rounded-md w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="Nachname"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nachname:
                    </label>
                    <input
                      type="text"
                      id="Nachname"
                      name="Nachname"
                      required
                      onChange={handleInputChange}
                      className="mt-1 p-2 border rounded-md w-full"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <label
                      htmlFor="Ihre E-Mail"
                      className="block mt-4 text-sm font-medium text-gray-700"
                    >
                      Ihre E-Mail:
                    </label>
                    <input
                      type="text"
                      id="Ihre E-Mail"
                      name="Ihre E-Mail"
                      required
                      onChange={handleInputChange}
                      className="mt-1 p-2 border rounded-md w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="Telefonnummer"
                      className="block mt-4 text-sm font-medium text-gray-700"
                    >
                      Telefonnummer:
                    </label>
                    <input
                      type="text"
                      id="Telefonnummer"
                      name="Telefonnummer"
                      required
                      onChange={handleInputChange}
                      className="mt-1 p-2 border rounded-md w-full"
                    />
                  </div>
                </div>

                <label
                  htmlFor="Ihre Anfrage Nachricht"
                  className="block mt-4 text-sm font-medium text-gray-700"
                >
                  Ihre Anfrage Nachricht:
                </label>
                <textarea
                  id="Ihre Anfrage Nachricht"
                  name="Ihre Anfrage Nachricht"
                  rows="4"
                  cols="50"
                  onChange={handleInputChange}
                  required
                  className="mt-1 p-2 border rounded-md w-full"
                />

                {renderButtons()}
              </div>
            )}

            {!currentQuestion.textbox && step !== 5 && renderButtons()}

            {step === 6 && (
              <div
                style={{
                  textAlign: "left",
                  maxWidth: "400px",
                  margin: "20px auto",
                }}
              >
                <p>Form Submitted!</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
