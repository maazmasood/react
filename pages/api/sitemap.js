const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
  // An array with your links
  const links = [
    { url: "/Service", changefreq: "daily", priority: 1 },
    { url: "/planer", changefreq: "daily", priority: 1 },
    { url: "/Galerie", changefreq: "daily", priority: 1 },
    { url: "/Ueber-uns", changefreq: "daily", priority: 1 },
    { url: "/Kontakt", changefreq: "daily", priority: 1 },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};
