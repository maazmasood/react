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
    to: "Info@klimanrw.de", // replace with your email
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
