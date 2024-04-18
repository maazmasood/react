import React, { useState } from "react"; // Import your CSS file for styling

const Gallery = ({ images }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [enlargedImg, setEnlargedImg] = useState(null);

  const imagesPerPage = 20;

  const filteredImages = images.filter(
    (image) =>
      selectedTags.length === 0 ||
      selectedTags.some((tag) => image.tags.includes(tag))
  );

  const totalImages = filteredImages.length;
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  const paginatedImages = filteredImages.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  const uniqueTags = [...new Set(images.flatMap((image) => image.tags))];

  const handleTagChange = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
    setCurrentPage(1);
  };

  const handleImageClick = (image) => {
    setEnlargedImg(image);
  };

  const closeEnlargedImg = () => {
    setEnlargedImg(null);
  };

  return (
    <div className="container mx-auto p-6 border border-gray-300 rounded-md shadow-md">
      <div className="mb-8 text-center">
        <h1 className="text-xl md:text-4xl font-bold  mb-2" id="s3-text">
          📷 Bildergalerie der Firma KlimaNRW GmbH
        </h1>
        <p className="text-l md:text-xl text-gray-600">
          Entdecken Sie unsere Arbeitsbilder und filtern Sie nach Tags.🌟
        </p>
      </div>
      <div className="mb-4">
        <label className="font-semibold mb-2">Filter by Tags:</label>
        <br />
        <br />
        <div className="flex flex-wrap -mx-2">
          {uniqueTags.map((tag) => (
            <div key={tag} className="flex items-center mx-2 mb-2">
              <input
                type="checkbox"
                id={tag}
                checked={selectedTags.includes(tag)}
                onChange={() => handleTagChange(tag)}
                className="hidden"
              />
              <label htmlFor={tag} className="cursor-pointer">
                <div
                  className={`custom-checkbox ${
                    selectedTags.includes(tag) ? "checked" : ""
                  }`}
                >
                  <div className="checkbox-icon">
                    <div className="checkbox-check" />
                  </div>
                </div>
                <span className="ml-2">{tag}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap -mx-4">
        {paginatedImages.map((image) => (
          <div
            key={image.id}
            className="w-full sm:w-1/1 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 cursor-pointer"
            onClick={() => handleImageClick(image)}
          >
            <div className="overflow-hidden shadow-md">
              <img
                style={{ width: "100%", height: "300px" }}
                src={image.url}
                alt={image.description}
                className="w-full h-70 object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {enlargedImg && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <div className="max-w-3xl h-[70vh] relative bg-black rounded-md overflow-hidden shadow-lg">
            <img
              src={enlargedImg.url}
              alt={enlargedImg.description}
              className="w-full h-full object-contain"
            />
            <button
              onClick={closeEnlargedImg}
              className="absolute top-4 right-4 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 flex items-center justify-center w-8 h-8"
            >
              <span className="text-2xl font-bold">X</span>
            </button>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-white">
                {enlargedImg.description}
              </h2>
              <p className="text-gray-300">
                {/* Add any additional information here */}
              </p>
            </div>
          </div>
        </div>
      )}
      {totalPages > 1 && (
        <div className="flex justify-center mt-4">
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page + 1}
              onClick={() => setCurrentPage(page + 1)}
              className={`mx-2 p-2 border ${
                currentPage === page + 1
                  ? "bg-indigo-600 text-white"
                  : "text-indigo-600 border-gray-300"
              } rounded-md focus:outline-none`}
            >
              {page + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const images = [
  {
    id: 1,
    url: "Bild1.webp",
    description: "Montage",
    tags: ["LG", "Kondensatpumpe"],
  },
  {
    id: 2,
    url: "Bild2.webp",
    description: "Montage",
    tags: ["LG", "Kondensatpumpe"],
  },
  { id: 3, url: "Bild3.webp", description: "Montage", tags: ["Panasonic"] },
  { id: 4, url: "Bild4.webp", description: "Montage", tags: ["Panasonic"] },
  { id: 5, url: "Bild5.webp", description: "Montage", tags: ["Panasonic"] },
  {
    id: 6,
    url: "Bild6.webp",
    description: "Montage",
    tags: ["Panasonic", "Kondensatpumpe"],
  },
  { id: 7, url: "Bild7.webp", description: "Montage", tags: ["Panasonic"] },
  { id: 8, url: "Bild8.webp", description: "Montage", tags: ["Panasonic"] },
  { id: 9, url: "Bild9.webp", description: "Montage", tags: ["Panasonic"] },
  { id: 10, url: "Bild10.webp", description: "Montage", tags: ["Panasonic"] },
  {
    id: 11,
    url: "Bild11.webp",
    description: "Montage",
    tags: ["Panasonic", "Kondensatpumpe"],
  },
  { id: 12, url: "Bild12.webp", description: "Montage", tags: ["Daikin"] },
  { id: 13, url: "Bild13.webp", description: "Montage", tags: ["Daikin"] },
  { id: 14, url: "Bild14.webp", description: "Montage", tags: ["Panasonic"] },
  { id: 15, url: "Bild15.webp", description: "Montage", tags: ["Panasonic"] },
  { id: 16, url: "Bild16.webp", description: "Montage", tags: ["Diverse"] },
  { id: 17, url: "Bild17.webp", description: "Montage", tags: ["Diverse"] },
  { id: 18, url: "Bild18.webp", description: "Montage", tags: ["Mitsubishi"] },
  { id: 19, url: "Bild19.webp", description: "Montage", tags: ["Panasonic"] },
  { id: 20, url: "Bild20.webp", description: "Montage", tags: ["Panasonic"] },
  { id: 21, url: "Bild21.webp", description: "Montage", tags: ["Panasonic"] },
  { id: 22, url: "Bild22.webp", description: "Montage", tags: ["Panasonic"] },
  {
    id: 23,
    url: "Bild23.webp",
    description: "Montage",
    tags: ["Panasonic", "Kondensatpumpe", "Lackiert"],
  },
  { id: 24, url: "Bild24.webp", description: "Montage", tags: ["Panasonic"] },
  { id: 25, url: "Bild25.webp", description: "Montage", tags: ["Panasonic"] },
  { id: 26, url: "Bild26.webp", description: "Montage", tags: ["Panasonic"] },
  {
    id: 27,
    url: "Bild27.webp",
    description: "Montage",
    tags: ["Panasonic", "Truhengerät"],
  },
  { id: 28, url: "Bild28.webp", description: "Montage", tags: ["Panasonic"] },
  { id: 29, url: "Bild29.webp", description: "Montage", tags: ["Panasonic"] },
  { id: 30, url: "Bild30.webp", description: "Montage", tags: ["Panasonic"] },
  { id: 31, url: "Bild31.webp", description: "Montage", tags: ["Panasonic"] },
  { id: 32, url: "Bild32.webp", description: "Montage", tags: ["Panasonic"] },
  { id: 33, url: "Bild33.webp", description: "Montage", tags: ["Panasonic"] },
  { id: 34, url: "Bild34.webp", description: "Montage", tags: ["Panasonic"] },
  { id: 35, url: "Bild35.webp", description: "Montage", tags: ["Panasonic"] },
  { id: 36, url: "Bild36.webp", description: "Montage", tags: ["Panasonic"] },
  { id: 37, url: "Bild37.webp", description: "Montage", tags: ["Panasonic"] },
  { id: 38, url: "Bild38.webp", description: "Montage", tags: ["Panasonic"] },
  { id: 39, url: "Bild39.webp", description: "Montage", tags: ["Panasonic"] },
  { id: 40, url: "Bild40.webp", description: "Montage", tags: ["Panasonic"] },
  { id: 41, url: "Bild41.webp", description: "Montage", tags: ["Panasonic"] },
  {
    id: 42,
    url: "Bild42.webp",
    description: "Montage",
    tags: ["Panasonic", "Unterputz"],
  },
  { id: 43, url: "Bild43.webp", description: "Montage", tags: ["Panasonic"] },
  {
    id: 44,
    url: "Bild44.webp",
    description: "Montage",
    tags: ["Panasonic", "Truhengerät"],
  },
  { id: 45, url: "Bild45.webp", description: "Montage", tags: ["Panasonic"] },
  { id: 46, url: "Bild46.webp", description: "Montage", tags: ["Panasonic"] },
  { id: 47, url: "Bild47.webp", description: "Montage", tags: ["Mitsubishi"] },
  {
    id: 48,
    url: "Bild48.webp",
    description: "Montage",
    tags: ["Mitsubishi", "Kondensatpumpe"],
  },
  { id: 49, url: "Bild49.webp", description: "Montage", tags: ["Mitsubishi"] },
  // Add more images as needed
];

const App = () => {
  return (
    <div style={{ marginTop: "130px" }}>
      <Gallery images={images} />
    </div>
  );
};

export default App;
