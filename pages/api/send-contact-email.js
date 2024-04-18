// pages/api/send-email.js
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(
  "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"
);

export default async (req, res) => {
  const { firstName, lastName, city, email, phoneNumber, message } = req.body;

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
    to: "maazmasood001@gmail.com", // replace with your email
    from: "Klimanrw@gmail.com", // replace with your domain email
    subject: "Neue Nachricht aus Kontaktform Klimanrw",
    text: textContent,
    html: htmlContent,
  };

  const mail2 = {
    to: "maazmasood65@gmail.com",
    from: "Klimanrw@gmail.com", // replace with your domain email
    subject: "Neue Nachricht aus Kontaktform Klimanrw",
    text: textContent,
    html: htmlContent,
  };

  try {
    await sgMail.send(mail);
    await sgMail.send(mail2);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
};
