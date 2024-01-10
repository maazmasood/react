// pages/api/send-email.js
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(
  "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"
);

export default async (req, res) => {
  const {
    pname,
    pid,
    selectedroomno,
    roomsizes,
    brand,
    mountlocation,
    cablelength,
    days,
    outdoorColor,
    rubber,
    plastic,
    price,
    firstName,
    lastName,
    location,
    email,
    phoneNumber,
    message,
  } = req.body;

  const roomVariables = [];

  roomsizes.forEach((roomsize, index) => {
    console.log(`Room ${index + 1}: ${roomsize}`);
    if (roomsize !== "") {
      roomVariables.push({ [`room${index + 1}Size`]: roomsize });
    }
  });

  const roomSizeRows = roomVariables.map((roomVariable, index) => {
    const roomNumber = index + 1;
    const roomSize = roomVariable[`room${roomNumber}Size`];
    return `<tr><td>Room ${roomNumber} Size : </td><td>${roomSize}</td></tr>`;
  });

  const content = [
    `<h1>Buy Order</h1>`,
    `<table style="border-collapse: collapse; width: 100%; border: 1px solid #ddd;">`,
    `<tr style="background-color: #f2f2f2;">`,
    `<th style="padding: 8px; text-align: left;">Field</th>`,
    `<th style="padding: 8px; text-align: left;">Value</th>`,
    `</tr>`,
    `<tr><td>Product Id : </td><td>${pid}</td></tr>`,
    `<tr><td>Product Name : </td><td>${pname}</td></tr>`,
    `<tr><td>Selected Rooms : </td><td>${selectedroomno}</td></tr>`,
    ...roomSizeRows, // Include room sizes
    `<tr><td>Brand : </td><td>${brand}</td></tr>`,
    `<tr><td>Mount Location : </td><td>${mountlocation}</td></tr>`,
    `<tr><td>Cable Length : </td><td>${cablelength}</td></tr>`,
    `<tr><td>7days installation : </td><td>${days}</td></tr>`,
    `<tr><td>Outdoor/indoor unit coloring : </td><td>${outdoorColor}</td></tr>`,
    rubber ? `<tr><td>Rubber Feets : </td><td>${rubber}</td></tr>` : `<tr><td>Plastic Feets : </td><td>${plastic}</td></tr>`,
    `<tr><td>Total Price : </td><td>${price}</td></tr>`,
    `</table>`,
    `<h1>User Details</h1>`,
    `<table style="border-collapse: collapse; width: 100%; border: 1px solid #ddd;">`,
    `<tr style="background-color: #f2f2f2;">`,
    `<th style="padding: 8px; text-align: left;">Field</th>`,
    `<th style="padding: 8px; text-align: left;">Value</th>`,
    `</tr>`,
    `<tr><td>User Name : </td><td>${firstName} ${lastName}</td></tr>`,
    `<tr><td>Location : </td><td>${location}</td></tr>`,
    `<tr><td>Email </td><td>${email}</td></tr>`,
    `<tr><td>Phone </td><td>${phoneNumber}</td></tr>`,
    `<tr><td>Message </td><td>${message}</td></tr>`,
    `</table>`,
  ].join("");

  const textContent = content;
  const htmlContent = content;

  const mail = {
    to: "maazmasood001@gmail.com", // replace with your email
    from: "klimanrw@gmail.com", // replace with your domain email
    subject: "Neue Nachricht aus Kontaktform Klimanrw",
    text: textContent,
    html: htmlContent,
  };

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  try {
    await sgMail.send(mail);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error.message);
    console.error("Error response:", error.response.body);
    res.status(500).send("Error sending email");
  }
};
