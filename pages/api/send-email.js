// pages/api/send-email.js
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(
  "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"
);

export default async (req, res) => {
  const {
    pname,
    Answer_1,
    Answer_2,
    Answer_3,
    firstName,
    email,
    phoneNumber,
    message,
  } = req.body;

  const content = [
    `<table style="border-collapse: collapse; width: 100%; border: 1px solid #ddd;">`,
    `<tr style="background-color: #f2f2f2;">`,
    `<th style="padding: 8px; text-align: left;">Field</th>`,
    `<th style="padding: 8px; text-align: left;">Value</th>`,
    `</tr>`,
    `<tr><td>Ausgewähltes Produkt : </td><td>${pname}</td></tr>`,
    `<tr><td>Räume : </td><td>${Answer_1}</td></tr>`,
    `<tr><td>Größe : </td><td>${Answer_2}</td></tr>`,
    `<tr><td>Innengerät : </td><td>${Answer_3}</td></tr>`,
    `<tr><td>Name</td><td>${firstName}</td></tr>`,
    `<tr><td>Email</td><td>${email}</td></tr>`,
    `<tr><td>Telefon</td><td>${phoneNumber}</td></tr>`,
    `<tr><td>Nachricht</td><td>${message}</td></tr>`,
    `</table>`,
  ].join("");

  const textContent = content;
  const htmlContent = content;

  const mail = {
    to: "maazmasood65@gmail.com",
    from: "Klimanrw@gmail.com", // replace with your domain email
    subject: "Neue Nachricht aus Kontaktform Klimanrw",
    text: textContent,
    html: htmlContent,
  };

  const mail2 = {
    to: "maazmasood001@gmail.com",
    from: "Klimanrw@gmail.com", // replace with your domain email
    subject: "Neue Nachricht aus Kontaktform Klimanrw",
    text: textContent,
    html: htmlContent,
  };

  try {
    // await sgMail.send(mail);
    //await sgMail.send(mail2);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error.message);
    console.error("Error response:", error.response.body);
    res.status(500).send("Error sending email");
  }
};
