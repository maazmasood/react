import React, { useState, useEffect } from "react";

const PrivacySlider = () => {
  const [showConfirmation, setShowConfirmation] = useState(true);

  const handleAccept = () => {
    console.log("User accepted privacy terms");
    setShowConfirmation(false);
    // Store a flag in localStorage to mark the user as non-new
    localStorage.setItem("isNewUser", "false");
  };

  const handleDecline = () => {
    console.log("User declined privacy terms");
    setShowConfirmation(false);
  };

  useEffect(() => {
    // Check if the user is a new user (flag not set in localStorage)
    const isNewUser = localStorage.getItem("isNewUser") !== "false";
    setShowConfirmation(isNewUser);
  }, []);

  return showConfirmation ? (
    <div className={`privacy-slider ${showConfirmation ? "up" : ""}`}>
      <div className="confirmation-message">
        <div className="content">
          <p>
            Diese Website nutzt Cookies und vergleichbare Funktionen zur
            Verarbeitung von Endgeräteinformationen und personenbezogenen Daten.
            Die Verarbeitung dient der Einbindung von Inhalten, externen
            Diensten und Elementen Dritter, der statistischen Analyse/Messung,
            der personalisierten Werbung sowie der Einbindung sozialer Medien.
            Je nach Funktion werden dabei Daten an Dritte weitergegeben und an
            Dritte in Ländern, in denen kein angemessenes Datenschutzniveau
            vorliegt und von diesen verarbeitet wird, z. B. die USA. Ihre
            Einwilligung ist stets freiwillig, für die Nutzung unserer Website
            nicht erforderlich und kann jederzeit auf unserer Seite abgelehnt
            oder widerrufen werden.
          </p>
        </div>
        <div className="confirmation-buttons">
          <button className="accept-button" onClick={handleAccept}>
            Akzeptieren
          </button>
          <button className="reject-button" onClick={handleDecline}>
            Ablehnen
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default PrivacySlider;
