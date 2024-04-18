import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

function scrollToTop() {
  window.scrollTo({
    top: 250,
    behavior: "smooth", // Smooth scrolling animation
  });
}

const ProductSearch = ({ products }) => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedRooms, setSelectedRooms] = useState("1");
  const [roomSizes, setRoomSizes] = useState([
    { size: "35m²" },
    { size: "" },
    { size: "" },
    { size: "" },
    { size: "" },
  ]);
  const [selectedLocation, setSelectedLocation] = useState("Not Select");
  const [totalCableLength, setTotalCableLength] = useState(0);
  const [additionalOptions, setAdditionalOptions] = useState({
    painting: false,
    assemblyWithin7Days: false,
    rubberFeet: false,
    plasticFeet: false,
  });

  const locationCosts = {
    "Not Select": 0,
    floor: 100,
    "wall-up-to-2.50m": 45,
    "wall-over-2.50m": 45,
    roof: 220,
  };

  const [displayText, setDisplayText] = useState("Buy Now");

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const urlProductId = urlSearchParams.get("id");

    const fetchData = async () => {
      try {
        const response = await axios.get("/productData.json");
        const products = response.data;

        if (urlProductId) {
          const foundProduct = products.find(
            (product) => product.id.toString() === urlProductId
          );
          setSelectedProduct(foundProduct);
          setSelectedProductId(foundProduct ? foundProduct.id : null);
        }
      } catch (error) {
        console.error("Error fetching product data: ", error);
      }
    };

    fetchData();
  }, []);

  const handleImageChange = (newIndex) => {
    setCurrentImageIndex(newIndex);
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleRoomsChange = (event) => {
    const selectedRooms = event.target.value;
    setSelectedRooms(selectedRooms);
    setRoomSizes(
      Array.from({ length: parseInt(selectedRooms, 10) }).fill({
        size: "35m²",
      })
    );
  };

  const handleSelectedBrand = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleCableLengthChange = (event) => {
    setTotalCableLength(event.target.value);
  };
  const handleCheckboxChange = (option) => {
    setAdditionalOptions((prevOptions) => ({
      ...prevOptions,
      [option]: !prevOptions[option],
    }));

    // Ensure only one option is selected for rubber/plastic feet
    if (option === "rubberFeet" && additionalOptions.plasticFeet) {
      setAdditionalOptions((prevOptions) => ({
        ...prevOptions,
        plasticFeet: false,
      }));
    } else if (option === "plasticFeet" && additionalOptions.rubberFeet) {
      setAdditionalOptions((prevOptions) => ({
        ...prevOptions,
        rubberFeet: false,
      }));
    }
  };

  const handleRoomSizeChange = (event, index) => {
    const newSize = event.target.value;
    setRoomSizes((prevSizes) => {
      const newRoomSizes = [...prevSizes];
      newRoomSizes[index] = { size: newSize };
      return newRoomSizes;
    });
  };

  const handleBuyNow = () => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const checkoutData = {
      name: selectedProduct.name,
      selectedRooms: selectedRooms,
      roomSizes: roomSizes,
      selectedLocation: selectedLocation,
      totalCableLength: totalCableLength,
      additionalOptions: additionalOptions,
      totalPrice: totalPrice,
    };

    // Add the current product's checkoutData to the cartItems array
    cartItems.push(checkoutData);

    // Save updated cartItems to local storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    window.dispatchEvent(new Event("storage"));

    setDisplayText("Product added to cart :)");
  };

  const calculateCableLengthPrice = (length, rooms) => {
    const freeCableLength = rooms * 3;
    return length <= freeCableLength ? 0 : (length - freeCableLength) * 50;
  };

  const calculateTotalPrice = () => {
    return (
      selectedProduct &&
      selectedProduct.price +
        (additionalOptions.painting ? 300 : 0) +
        (additionalOptions.assemblyWithin7Days ? 100 : 0) +
        (additionalOptions.rubberFeet ? 55 : 0) +
        (additionalOptions.plasticFeet ? 25 : 0) +
        locationCosts[selectedLocation] +
        calculateCableLengthPrice(totalCableLength, selectedRooms)
    );
  };

  const totalPrice =
    selectedProduct &&
    selectedProduct.price +
      (additionalOptions.painting ? 300 : 0) +
      (additionalOptions.assemblyWithin7Days ? 100 : 0) +
      (additionalOptions.rubberFeet ? 55 : 0) +
      (additionalOptions.plasticFeet ? 25 : 0) +
      locationCosts[selectedLocation] +
      calculateCableLengthPrice(totalCableLength, selectedRooms);

  const roomSizeRows = Array.from({ length: parseInt(selectedRooms, 10) }).map(
    (_, index) => (
      <tr key={index}>
        <td className="font-bold pr-2 text-gray-600">
          Zimmer {index + 1} Größe:
        </td>
        <td className="text-center">
          <select
            value={roomSizes[index]?.size || ""}
            onChange={(event) => handleRoomSizeChange(event, index)}
            className="mt-1 block w-full rounded-full border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-center"
          >
            {/* Add your room size options here */}

            <option value="35m²">
              35m<sup>2</sup>
            </option>
            <option value="55m²">
              55m<sup>2</sup>
            </option>
            <option value="75m²">
              75m<sup>2</sup>
            </option>
            <option value="Unknown">Unknown</option>
          </select>
        </td>
      </tr>
    )
  );

  const [activeTab, setActiveTab] = useState("description");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const sct = () => {
    scrollToTop();
    // Add any other functionality you want to execute when Buy Now is clicked
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row">
        {/* Image Gallery */}

        <div
          className="w-full md:w-3/4 p-4 md:mt-20 overflow-hidden md:sticky md:top-0"
          style={{ maxHeight: "calc(100vh - 64px)", overflowY: "auto" }}
        >
          {selectedProduct && (
            <div className="relative">
              <button
                style={{ opacity: "0.5" }}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 z-10"
                onClick={() => handleImageChange(currentImageIndex - 1)}
                disabled={currentImageIndex === 0}
              >
                {"<"}
              </button>
              <center>
                <img
                  className="md:max-h-[500px] object-cover mb-4"
                  src={selectedProduct.image[currentImageIndex]}
                  alt={selectedProduct.name}
                />
              </center>
              <button
                style={{ opacity: "0.5" }}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 z-10"
                onClick={() => handleImageChange(currentImageIndex + 1)}
                disabled={
                  currentImageIndex === selectedProduct.image.length - 1
                }
              >
                {">"}
              </button>
            </div>
          )}

          {/* Thumbnail Gallery */}
          {selectedProduct && (
            <div className="flex mt-2 justify-center">
              {selectedProduct.image.map((image, index) => (
                <img
                  key={index}
                  className={`w-16 h-16 object-cover mx-1 cursor-pointer ${
                    index === currentImageIndex && "border-2 border-blue-500"
                  }`}
                  src={image}
                  alt={`Thumbnail ${index}`}
                  onClick={() => handleThumbnailClick(index)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 p-4 overflow-y-auto bg-white rounded-lg shadow-md">
          {selectedProduct && (
            <>
              <div className="relative inline-block overflow-hidden">
                <div className="absolute inset-0 bg-white transform skew-y-6"></div>
                <span
                  className="relative z-10 inline-block px-4 py-2 text-white"
                  id="s3"
                >
                  {selectedProduct.category}
                </span>
              </div>

              <h2
                id="s3-text"
                className="text-2xl font-bold mb-4 text-blue-500 "
              >
                {selectedProduct.name}
              </h2>
              <div className="border-b-2 mb-4 pb-4">
                <table
                  className="table-auto w-full"
                  style={{ borderSpacing: "0px 10px" }}
                >
                  <tbody>
                    <br />
                    <tr>
                      <td className="font-bold pr-2 text-gray-600">
                        WLAN verfügbar:
                      </td>
                      <td className="text-center">{selectedProduct.wifi}</td>
                    </tr>
                    <br />

                    <tr>
                      <td className="font-bold pr-2 text-gray-600">
                        Anzahl der Räume:
                      </td>
                      <td className="text-center">
                        <select
                          value={selectedRooms}
                          onChange={handleRoomsChange}
                          className="mt-1 block w-full rounded-full border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-center"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </td>
                    </tr>

                    {/* Room Size Dropdowns */}
                    {roomSizeRows}

                    <tr>
                      <td className="font-bold pr-2 text-gray-600">
                        Standort der Außeneinheit:
                      </td>
                      <td className="text-center">
                        <select
                          value={selectedLocation}
                          onChange={handleLocationChange}
                          className="mt-1 block w-full rounded-full border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-center"
                        >
                          <option value="Not Selected">-</option>

                          <option value="floor">Boden - 100 €</option>
                          <option value="wall-up-to-2.50m">
                            Wand (bis 2,50 Meter) - 45 €
                          </option>
                          <option value="wall-over-2.50m">
                            Mauer (über 2,50 Meter) - 45 €
                          </option>
                          <option value="roof">Dach - 220 €</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold pr-2 text-gray-600">
                        Gesamtkabellänge:
                      </td>
                      <td className="text-center">
                        <input
                          type="number"
                          placeholder="Write length in meters"
                          value={totalCableLength}
                          onChange={handleCableLengthChange}
                          className="mt-1 block w-full rounded-full border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-center"
                        />
                        <p className="text-grey-600 text-xs">
                          * Rohr 3 Meter pro Raum sind kostenlos jeder weitere
                          Meter 50 Euro
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2  " id="s3-text">
                  Zusatzoptionen:
                </h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={additionalOptions.painting}
                      onChange={() => handleCheckboxChange("painting")}
                      className="mr-2"
                    />{" "}
                    Painting (Indoor/Outdoor) - 300 €
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={additionalOptions.assemblyWithin7Days}
                      onChange={() =>
                        handleCheckboxChange("assemblyWithin7Days")
                      }
                      className="mr-2"
                    />{" "}
                    Assembly Within 7 Days - 100 €
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={additionalOptions.rubberFeet}
                      onChange={() => handleCheckboxChange("rubberFeet")}
                      className="mr-2"
                    />{" "}
                    Rubber Feet - 55 €
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={additionalOptions.plasticFeet}
                      onChange={() => handleCheckboxChange("plasticFeet")}
                      className="mr-2"
                    />{" "}
                    Plastic Feet - 25 €
                  </label>
                </div>
              </div>

              {/* Display the total price */}
              <div className="mb-4">
                <br />
                <br />
                <p className="text-gray-500 mb-2 text-md">
                  <span className="font-bold text-sm">Product Price:</span>{" "}
                  {selectedProduct.price} euros
                </p>

                <p className="text-gray-700 mb-2 text-l">
                  <span id="s3-text" className="font-bold  text-lg">
                    Total Price:
                  </span>{" "}
                  {totalPrice} euros
                </p>
              </div>

              <div>
                <p className="pl-4 pr-4 w-1/2 md:w-1/3 px-6 py-3 mt-10 rounded-full mx-auto">
                  {displayText === "Buy Now" ? (
                    ""
                  ) : (
                    <span>
                      Product Added to cart <br />
                      <Link id="s3-text" key="checkout" href="/checkout">
                        Checkout
                      </Link>
                    </span>
                  )}
                </p>

                <button
                  onClick={handleBuyNow}
                  id="s3"
                  className="pl-4 pr-4 w-1/2 md:w-1/5 text-white px-6 py-3 mt-10 rounded-full mx-auto "
                  style={{
                    display: displayText === "Buy Now" ? "block" : "none",
                  }}
                >
                  Add to cart
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 mt-12">
        <div className="flex justify-center mb-6">
          <div className="w-full md:w-1/2">
            <button
              className={`w-full mr-4 px-4 py-2  ${
                activeTab === "description"
                  ? "bg-[#2c4587] hover:bg-[#2c4587] text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-800"
              } transition-colors duration-300 ease-in-out`}
              onClick={() => handleTabChange("description")}
            >
              Description
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <button
              className={`w-full px-4 py-2  ${
                activeTab === "pdf"
                  ? "bg-[#2c4587] hover:bg-[#2c4587] text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-800"
              } transition-colors duration-300 ease-in-out`}
              onClick={() => handleTabChange("pdf")}
            >
              PDF
            </button>
          </div>
        </div>
        {activeTab === "description" && selectedProduct ? (
          <div className="bg-white rounded-md shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">
              {selectedProduct.name}
            </h2>
            <p className="text-gray-700">{selectedProduct.description}</p>
            <h3 className="text-xl font-semibold mt-6 mb-4">Features</h3>
            <ul className="list-disc text-gray-700 pl-6">
              {selectedProduct.features.map((feature, index) => (
                <li key={index} className="mb-2">
                  {feature}
                </li>
              ))}
            </ul>
            <center>
              {" "}
              <button
                onClick={sct}
                id="s3"
                className="pl-4 pr-4 w-1/5 md:w-1/12 text-white px-6 py-3 mt-3 rounded-full mx-auto text-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 18.75 7.5-7.5 7.5 7.5"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
              </button>
            </center>
          </div>
        ) : (
          <div className="bg-white rounded-md shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">PDF Section</h2>
            <iframe
              src="maaz.pdf"
              title="Embedded PDF"
              className="w-full h-screen" // Adjust width and height as needed
            ></iframe>
          </div>
        )}
      </div>

      <hr />

      <div className="py-20 bg-slate-100 sm:py-0" id="section-id">
        <div className=" md:py-28 px-6 mx-auto max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {" "}
            {/* Adjusted grid-cols-4 */}
            {/* Product 1 */}
            <div className="relative max-w-2xl mx-auto mt-8 rounded-lg overflow-hidden shadow-lg ring-1 ring-gray-200">
              <div className="ribbon-wrapper">
                <div className="ribbon">
                  <span>Inklusive Montage</span>
                </div>
              </div>
              <div className="p-6">
                <div className="relative">
                  <Image
                    className="w-full rounded-xl product_image"
                    src="/Klima-Nrw-Angebote-Mitsubishi-Split.png"
                    alt="Klima-Nrw-Angebote-Mitsubishi-Split"
                    title="Klima-Nrw-Angebote-Mitsubishi-Split"
                    width={600}
                    height={600}
                  />
                  <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>

                <div className="mt-6 text-center">
                  <p className="text-base font-semibold text-gray-600">
                    Split Klimaanlage Mitsubishi{" "}
                  </p>
                  <div className="text-xs">
                    <div className="border-t border-gray-300 my-4"></div>
                    <span> perfekt für Ihr Zimmer</span>
                  </div>

                  <div
                    className="flex items-center justify-center gap-x-2 mt-2"
                    id="s3-text"
                  >
                    <span className="text-4xl font-bold tracking-tight ">
                      1699
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      €
                    </span>
                  </div>
                </div>

                <Link
                  id="s3"
                  href="/product?id=1"
                  className="block w-full px-4 py-2 mt-5 text-sm font-semibold text-center text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
                >
                  <p className="text-white">jetzt sichern</p>
                </Link>
              </div>
            </div>
            {/* Product 2 */}
            <div className="relative max-w-2xl mx-auto mt-8 rounded-lg overflow-hidden shadow-lg ring-1 ring-gray-200">
              <div className="ribbon-wrapper">
                <div className="ribbon">
                  <span>Inklusive Montage</span>
                </div>
              </div>
              <div className="p-6">
                <div className="relative">
                  <Image
                    className="w-full rounded-xl"
                    src="/Klima-Nrw-Angebote-Etherea.webp"
                    alt="Klima-Nrw-Angebote-Etherea"
                    title="Klima-Nrw-Angebote-Etherea"
                    width={600}
                    height={600}
                  />
                  <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>

                <div className="mt-6 text-center">
                  <p className="text-base font-semibold text-gray-600">
                    {" "}
                    Etherea{" "}
                  </p>
                  <div className="text-xs">
                    <div className="border-t border-gray-300 my-4"></div>
                    <span> stilvoll mit herausragenden Funktionen</span>
                  </div>

                  <div
                    className="flex items-center justify-center gap-x-2 mt-2"
                    id="s3-text"
                  >
                    <span className="text-4xl font-bold tracking-tight ">
                      4350
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      €
                    </span>
                  </div>
                </div>

                <Link
                  id="s3"
                  href="/product?id=2"
                  className="block w-full px-4 py-2 mt-4 text-sm font-semibold text-center text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
                >
                  <p className="text-white">jetzt sichern</p>
                </Link>
              </div>
            </div>
            {/* Product 3 */}
            <div className="relative max-w-2xl mx-auto mt-8 rounded-lg overflow-hidden shadow-lg ring-1 ring-gray-200">
              <div className="ribbon-wrapper">
                <div className="ribbon">
                  <span>Inklusive Montage</span>
                </div>
              </div>
              <div className="p-6">
                <div className="relative">
                  <Image
                    className="w-full rounded-xl"
                    src="/Klima-Nrw-Angebote-Daikin.png"
                    alt="Klima-Nrw-Angebote-Daikin"
                    title="Klima-Nrw-Angebote-Daikin"
                    width={600}
                    height={600}
                  />
                  <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>

                <div className="mt-6 text-center">
                  <p className="text-base font-semibold text-gray-600">
                    Effizientes{" "}
                  </p>
                  <div className="text-xs">
                    <div className="border-t border-gray-300 my-4"></div>
                    <span> 3D-Luftstrom-Klimagerät von Daikin</span>
                  </div>

                  <div
                    className="flex items-center justify-center gap-x-2 mt-2"
                    id="s3-text"
                  >
                    <span className="text-4xl font-bold tracking-tight ">
                      2299
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      €
                    </span>
                  </div>
                </div>

                <Link
                  id="s3"
                  href="/product?id=3"
                  className="block w-full px-4 py-2 mt-4 text-sm font-semibold text-center text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
                >
                  <p className="text-white">jetzt sichern</p>
                </Link>
              </div>
            </div>
            {/* Product 4 */}
            <div className="relative max-w-2xl mx-auto mt-8 rounded-lg overflow-hidden shadow-lg ring-1 ring-gray-200">
              <div className="ribbon-wrapper">
                <div className="ribbon">
                  <span>Inklusive Montage</span>
                </div>
              </div>
              <div className="p-6">
                <div className="relative">
                  <Image
                    className="w-full rounded-xl"
                    src="/Klima-Nrw-Brauchwasserpumpe.png"
                    alt="Klima-Nrw-Brauchwasserpumpe"
                    title="Klima-Nrw-Brauchwasserpumpe"
                    width={600}
                    height={600}
                  />
                  <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>

                <div className="mt-6 text-center">
                  <p className="text-base font-semibold text-gray-600">
                    Brauchwasserpumpe{" "}
                  </p>
                  <div className="text-xs">
                    <div className="border-t border-gray-300 my-4"></div>
                    <span>Eines der feinsten</span>
                  </div>

                  <div
                    className="flex items-center justify-center gap-x-2 mt-2"
                    id="s3-text"
                  >
                    <span className="text-4xl font-bold tracking-tight ">
                      3400
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      €
                    </span>
                  </div>
                </div>

                <Link
                  id="s3"
                  href="/product?id=4"
                  className="block w-full px-4 py-2 mt-4 text-sm font-semibold text-center text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
                >
                  <p className="text-white">jetzt sichern</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductSearchPage = () => {
  return (
    <div style={{ marginTop: "130px" }}>
      <ProductSearch />
    </div>
  );
};

export default ProductSearchPage;
