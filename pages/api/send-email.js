// pages/api/send-email.js
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(
  "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"
);

export default async (req, res) => {
  const {
    Answer_1,
    Answer_2,
    Answer_3,
    lenght,
    firstName,
    lastName,
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
    `<tr><td>Answer 1</td><td>${Answer_1}</td></tr>`,
    `<tr><td>Answer 2</td><td>${Answer_2}</td></tr>`,
    `<tr><td>Answer 3</td><td>${Answer_3}</td></tr>`,
    `<tr><td>Length</td><td>${lenght}</td></tr>`,
    `<tr><td>Name</td><td>${firstName} ${lastName}</td></tr>`,
    `<tr><td>Email</td><td>${email}</td></tr>`,
    `<tr><td>Telefon</td><td>${phoneNumber}</td></tr>`,
    `<tr><td>Nachricht</td><td>${message}</td></tr>`,
    `</table>`,
  ].join("");

  const textContent = content;
  const htmlContent = content;

  const mail = {
    to: "maazmasood001@gmail.com", // replace with your email
    from: "Klimanrw@gmail.com", // replace with your domain email
    subject: "Neue Nachricht aus Kontaktform Klimanrw",
    text: textContent,
    html: htmlContent,
  };

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  await sleep(5000);
  try {
    // await sgMail.send(mail);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error.message);
    console.error("Error response:", error.response.body);
    res.status(500).send("Error sending email");
  }
};
