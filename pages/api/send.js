// pages/api/send-email.js
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(
  "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"
);

export default async (req, res) => {
  // Hardcoded values for demonstration
  const firstName = "John";
  const lastName = "Doe";
  const city = "Example City";
  const email = "example@example.com";
  const phoneNumber = "1234567890";
  const message = "This is a hardcoded message for demonstration purposes.";

  const content = [
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    `Telefon: ${phoneNumber}`,
    `Stadt: ${city}`,
    `Nachricht: ${message}`,
  ].join("\n");

  const textContent = content;
  const htmlContent = content
    .split("\n")
    .map((line) => `<p>${line}</p>`)
    .join("");

  const mail = {
    to: "maazmasood001@mail.com", // replace with your email
    from: "Klimanrw@gmail.com", // replace with your domain email
    subject: "Neue Nachricht aus Kontaktform Klimanrw",
    text: textContent,
    html: htmlContent,
  };

  try {
    await sgMail.send(mail);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
};
