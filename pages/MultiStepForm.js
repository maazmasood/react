import React, { useState } from "react";
import { useRouter } from "next/router";

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
    question: "",
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
  // Initial value is 1

  const router = useRouter();
  const { product } = router.query;
  const product_namex = product || "None";

  const currentQuestion = questions.find((q) => q.page === step);

  const handleOptionClick = (value) => {
    if (step == 1) {
      trackConversion1();
    } else if (step == 2) {
      trackConversion2();
    } else if (step == 3) {
      trackConversion3();
    }

    setFormData((prevData) => ({
      ...prevData,
      [currentQuestion.page]: { answer: value },
    }));

    if (step < questions.length) {
      setStep((prevStep) => prevStep + 1);
    } else if (step === 4) {
      handleSubmit();
    }
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (currentQuestion.page === 4) {
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
      <div className=" flex justify-center">
        {step === 4 && (
          <button
            type="submit"
            className="px-4 py-2 mt-6 rounded-lg text-[#334E94] bg-white"
            onClick={handleSubmit}
          >
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
      pname: product_namex,
      Answer_1: formData["1"]["answer"],
      Answer_2: formData["2"]["answer"],
      Answer_3: formData["3"]["answer"],
      firstName: formData["name"],
      email: formData["Ihre E-Mail"],
      phoneNumber: formData["Telefonnummer"],
      message: formData["Ihre Anfrage Nachricht"],
    };

    try {
      const response = await axios.post("/api/send-email", data);
      setFormSubmitted(true);
      console.log(response);
      trackConversion(formData["Ihre E-Mail"]);
    } catch (error) {
      console.error("Error sending email please try again! Error :", error);
    } finally {
      setLoading(false);
    }
  };

  function trackConversion(eee) {
    gtag("set", "user_data", { email: eee });
    gtag("event", "conversion", {
      send_to: "AW-308056398/qUB6CK_3tJUZEM6i8pIB",
    });
  }

  function trackConversion1() {
    //AW-308056398/cd_8CJnH96AZEM6i8pIB
    gtag("event", "conversion", {
      send_to: "AW-308056398/cd_8CJnH96AZEM6i8pIB",
    });
  }

  function trackConversion2() {
    //AW-308056398/QPonCLq5_aAZEM6i8pIB

    gtag("event", "conversion", {
      send_to: "AW-308056398/QPonCLq5_aAZEM6i8pIB",
    });
  }

  function trackConversion3() {
    //AW-308056398/iQvCCJ3U96AZEM6i8pIB

    gtag("event", "conversion", {
      send_to: "AW-308056398/iQvCCJ3U96AZEM6i8pIB",
    });
  }

  return (
    <div id="form-body">
      {formSubmitted ? (
        <div
          style={{
            textAlign: "left",
          }}
        >
          <p>Nachricht erfolgreich gesendet!</p>
        </div>
      ) : (
        step < 4 && (
          <div className="form-container">
            <div>
              {product && (
                <div>
                  <h1 style={{ textAlign: "center" }}>{product}</h1> <hr />
                </div>
              )}
            </div>

            <div className="form">
              <p className="text-xl text-black" style={{ textAlign: "center" }}>
                {currentQuestion.question}
              </p>

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
            </div>
          </div>
        )
      )}

      {step === 4 && !formSubmitted && (
        <div className="box lg:mt-28" id="s3">
          <div className="flex gap-4">
            <div className="flex-1">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white"
              >
                Name:
              </label>
              <input
                type="text"
                placeholder="Vollständiger Name"
                id="name"
                name="name"
                required
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded-md w-full text-black"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label
                htmlFor="Telefonnummer"
                className="block mt-4 text-sm font-medium text-white"
              >
                Telefonnummer:
              </label>
              <input
                placeholder="
                Telefonnummer"
                type="number"
                id="Telefonnummer"
                name="Telefonnummer"
                required
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded-md w-full text-black"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="Ihre E-Mail"
                className="block mt-4 text-sm font-medium text-white"
              >
                Ihre E-Mail:
              </label>
              <input
                placeholder="Ihre E-Mail (Optionál)"
                type="email"
                id="Ihre E-Mail"
                name="Ihre E-Mail"
                required
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded-md w-full text-black"
              />
            </div>
          </div>

          <label
            htmlFor="Ihre Anfrage Nachricht"
            className="block mt-4 text-sm font-medium text-white"
          >
            Ihre Anfrage Nachricht:
          </label>
          <textarea
            placeholder="Teilen Sie uns Ihre Anfrage mit"
            id="Ihre Anfrage Nachricht"
            name="Ihre Anfrage Nachricht"
            rows="3"
            cols="50"
            onChange={handleInputChange}
            required
            className="mt-1 p-2 border rounded-md w-full text-black"
          />
          <br />
          {renderButtons()}
        </div>
      )}
      {!currentQuestion.textbox && step !== 4 && renderButtons()}
      {step === 5 && (
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
  );
};

export default MultiStepForm;
