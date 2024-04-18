import sgMail from "@sendgrid/mail";

sgMail.setApiKey(
  "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"
);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      productdata,
      name,
      city,
      address,
      email,
      telephone,
      message,
      totalprice,
    } = req.body; // Changed "firstName" to "name"

    // Assuming productdata is a string containing HTML
    let modifiedProductdata = productdata.replace(
      /<button[\s\S]*?<\/button>/g,
      ""
    );

    // Now, modifiedProductdata will contain productdata with all <button> elements removed

    const content = [
      `Name: ${name}`,
      `<br />Email: ${email}`,
      `<br />Telefon: ${telephone}`,
      `<br />Stadt: ${city}`,
      `<br />Adresse: ${address}`, // Changed "Address" to "Adresse"
      `<br />Nachricht: ${message}`,
      `<br /><br />Products : ${modifiedProductdata}`,

      `<br /><br /><h1>Total Amount : ${totalprice}`,
    ].join("\n");

    const textContent = content;
    const htmlContent = content; // Ensuring productdata is included in HTML content

    const mail = {
      to: "maazmasood001@gmail.com", // Replace with your email
      from: "Klimanrw@gmail.com", // Replace with your domain email
      subject: "Neue Nachricht aus Kontaktform Klimanrw",
      text: textContent,
      html: htmlContent,
    };

    // You can process the data further, for example, save it to a database
    // Then send a response back to the client
    try {
      await sgMail.send(mail);
      res.status(200).send("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    }
  }
}
