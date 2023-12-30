import React, { useState, useEffect } from "react";
import axios from "axios";

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
  const [selectedLocation, setSelectedLocation] = useState("floor");
  const [selectedBrand, setSelectedBrand] = useState("Lg");
  const [totalCableLength, setTotalCableLength] = useState(0);
  const [additionalOptions, setAdditionalOptions] = useState({
    rubberFeet: false,
    roofMount: false,
    colorOutdoorUnit: false,
    assemblyWithin7Days: false,
  });

  const [showContactForm, setShowContactForm] = useState(false);

  // State for contact form data
  const [contactFormData, setContactFormData] = useState({
    firstName: "",
    lastName: "",
    location: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleContactFormChange = (event) => {
    const { name, value } = event.target;
    setContactFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [loading, setLoading] = useState(false);
  const [orderStatus, setOrderStatus] = useState(null);

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
  };

  const handleRoomSizeChange = (event, index) => {
    const newSize = event.target.value;
    setRoomSizes((prevSizes) => {
      const newRoomSizes = [...prevSizes];
      newRoomSizes[index] = { size: newSize };
      return newRoomSizes;
    });
  };

  const handleBuyNow = async (event) => {
    setShowContactForm(true);
  };

  const handleContactFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Combine product order data and contact form data
    const requestData = {
      // ... (your existing product order data)
      panme: selectedProduct.name,
      pid: selectedProduct.id,
      selectedroomno: selectedRooms,
      roomsizes: roomSizes.map((room) => room.size),
      brand: selectedProduct.brand,
      mountlocation: selectedLocation,
      cablelength: totalCableLength,
      days: additionalOptions.assemblyWithin7Days,
      outdoorColor: additionalOptions.colorOutdoorUnit,
      roofmount: additionalOptions.roofMount,
      rubber: additionalOptions.rubberFeet,
      price: calculateTotalPrice(),

      // Contact form data
      firstName: contactFormData.firstName,
      lastName: contactFormData.lastName,
      location: contactFormData.location,
      email: contactFormData.email,
      phoneNumber: contactFormData.phoneNumber,
      message: contactFormData.message,
    };

    try {
      //const response = await axios.post("/api/buy-order", requestData);
      console.log(contactFormData);
      setOrderStatus("Order Filled! Our team will contact you soon.");
    } catch (error) {
      console.error("Error sending order, please try again! Error: ", error);
      setOrderStatus("Order Failed, Please try again!");
    } finally {
      // Reset the contact form data and hide the form
      setContactFormData({
        firstName: "",
        lastName: "",
        location: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
      setShowContactForm(false);
      setLoading(false);
    }
  };

  const calculateCableLengthPrice = (length, rooms) => {
    const freeCableLength = rooms * 3;
    return length <= freeCableLength ? 0 : (length - freeCableLength) * 50;
  };

  const calculateTotalPrice = () => {
    return (
      selectedProduct &&
      selectedProduct.price +
        (additionalOptions.rubberFeet ? 40 : 0) +
        (additionalOptions.roofMount ? 20 : 0) +
        (additionalOptions.colorOutdoorUnit ? 20 : 0) +
        (additionalOptions.assemblyWithin7Days ? 20 : 0) +
        calculateCableLengthPrice(totalCableLength, selectedRooms)
    );
  };

  const totalPrice =
    selectedProduct &&
    selectedProduct.price +
      (additionalOptions.rubberFeet ? 40 : 0) +
      (additionalOptions.roofMount ? 20 : 0) +
      (additionalOptions.colorOutdoorUnit ? 20 : 0) +
      (additionalOptions.assemblyWithin7Days ? 20 : 0) +
      calculateCableLengthPrice(totalCableLength, selectedRooms);

  const roomSizeRows = Array.from({ length: parseInt(selectedRooms, 10) }).map(
    (_, index) => (
      <tr key={index}>
        <td className="font-bold pr-2 text-gray-600">Room {index + 1} Size:</td>
        <td className="text-center">
          <select
            value={roomSizes[index]?.size || ""}
            onChange={(event) => handleRoomSizeChange(event, index)}
            className="mt-1 block w-full rounded-full border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-center"
          >
            {/* Add your room size options here */}
            <option value="35m<sup>2</sup>">
              35m<sup>2</sup>
            </option>
            <option value="55m<sup>2</sup>">
              55m<sup>2</sup>
            </option>
            <option value="75m<sup>2</sup>">
              75m<sup>2</sup>
            </option>
          </select>
        </td>
      </tr>
    )
  );

  return (
    <div className="flex flex-col md:flex-row">
      {/* Image Gallery */}
      <div
        className="w-full md:w-3/4 p-4 overflow-hidden md:sticky md:top-0"
        style={{ maxHeight: "100vh", overflowY: "hidden" }}
      >
        {selectedProduct && (
          <>
            <button
              style={{ opacity: "0.5" }}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 "
              onClick={() => handleImageChange(currentImageIndex - 1)}
              disabled={currentImageIndex === 0}
            >
              {"<"}
            </button>
            <img
              className="w-full object-cover mb-4"
              style={{ height: "500px" }}
              src={selectedProduct.image[currentImageIndex]}
              alt={selectedProduct.name}
            />
            <button
              style={{ opacity: "0.5" }}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2"
              onClick={() => handleImageChange(currentImageIndex + 1)}
              disabled={currentImageIndex === selectedProduct.image.length - 1}
            >
              {">"}
            </button>
          </>
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
            <h2 className="text-3xl font-bold mb-4 text-blue-500 ">
              {selectedProduct.name}
            </h2>
            <div className="border-b-2 mb-4 pb-4">
              <table
                className="table-auto w-full"
                style={{ borderSpacing: "0px 10px" }}
              >
                <tbody>
                  <tr>
                    <td className="text-center">
                      {" "}
                      <div className="rounded-full bg-gray-200 p-2">
                        {selectedProduct.category}
                      </div>
                    </td>
                  </tr>

                  <br />
                  <tr>
                    <td className="font-bold pr-2 text-gray-600">
                      Preferred for:
                    </td>
                    <td className="text-center">{selectedProduct.room}</td>
                  </tr>
                  <br />

                  <tr>
                    <td className="font-bold pr-2 text-gray-600">
                      WiFi Available:
                    </td>
                    <td className="text-center">{selectedProduct.wifi}</td>
                  </tr>
                  <br />

                  <tr>
                    <td className="font-bold pr-2 text-gray-600">
                      Number of Rooms:
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
                      Location of Outdoor Unit:
                    </td>
                    <td className="text-center">
                      <select
                        value={selectedLocation}
                        onChange={handleLocationChange}
                        className="mt-1 block w-full rounded-full border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-center"
                      >
                        <option value="floor">Floor</option>
                        <option value="wall-up-to-2.50m">
                          Wall (up to 2.50 meters)
                        </option>
                        <option value="wall-over-2.50m">
                          Wall (over 2.50 meters)
                        </option>
                        <option value="roof">Roof</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-bold pr-2 text-gray-600">
                      Total Cable Length:
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
              <p className="text-gray-700 mb-2 ">
                <span className="font-bold text-blue-500">Description:</span>
                <br /> <span dangerouslySetInnerHTML={{ __html: selectedProduct.description }} ></span>
              </p>
              <hr />
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-blue-500 ">
                Additional Options:
              </h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={additionalOptions.rubberFeet}
                    onChange={() => handleCheckboxChange("rubberFeet")}
                    className="mr-2"
                  />{" "}
                  Rubber Feet
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={additionalOptions.roofMount}
                    onChange={() => handleCheckboxChange("roofMount")}
                    className="mr-2"
                  />{" "}
                  Roof Mount (choose color)
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={additionalOptions.colorOutdoorUnit}
                    onChange={() => handleCheckboxChange("colorOutdoorUnit")}
                    className="mr-2"
                  />{" "}
                  Color of Outdoor Unit
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={additionalOptions.assemblyWithin7Days}
                    onChange={() => handleCheckboxChange("assemblyWithin7Days")}
                    className="mr-2"
                  />{" "}
                  Assembly Within 7 Days
                </label>
              </div>
            </div>

            {/* Display the total price */}
            <div className="mb-4">
              <br />
              <p className="text-gray-700 mb-2 text-l">
                <span className="font-bold text-blue-500 text-md">
                  Total Price:
                </span>{" "}
                {totalPrice} euros
              </p>
            </div>

            {/* Buy Button */}
            <div className="">
              {showContactForm ? (
                // Contact Form
                <form
                  onSubmit={handleContactFormSubmit}
                  onChange={handleContactFormChange}
                >
                  <div className=" max-w-xl lg:mr-0 lg:max-w-lg">
                    <div className="max-w-xl lg:mr-0 lg:max-w-lg">
                      <br />
                      <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="firstName"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                          >
                            Vorname
                          </label>
                          <div className="mt-2.5">
                            <input
                              type="text"
                              name="firstName"
                              id="first-name"
                              autoComplete="given-name"
                              className="border-b block w-full border-0 py-2 px-3.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="lastName"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                          >
                            Nachname
                          </label>
                          <div className="mt-2.5">
                            <input
                              type="text"
                              name="lastName"
                              id="last-name"
                              autoComplete="family-name"
                              className="border-b block w-full border-0 py-2 px-3.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="location"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                          >
                            Ort
                          </label>
                          <div className="mt-2.5">
                            <input
                              type="text"
                              name="location"
                              id="location"
                              autoComplete="family-name"
                              className="border-b block w-full border-0 py-2 px-3.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="email"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                          >
                            Email
                          </label>
                          <div className="mt-2.5">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              autoComplete="email"
                              className="border-b block w-full border-0 py-2 px-3.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="phoneNumber"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                          >
                            Telefon
                          </label>
                          <div className="mt-2.5">
                            <input
                              type="tel"
                              name="phoneNumber"
                              id="phoneNumber"
                              autoComplete="tel"
                              className="border-b block w-full border-0 py-2 px-3.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="message"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                          >
                            Nachricht
                          </label>
                          <div className="mt-2.5">
                            <textarea
                              name="message"
                              id="message"
                              rows={4}
                              className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-200 sm:text-sm sm:leading-6"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-8 flex justify-end">
                        <button
                          type="submit"
                          className="rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                          {loading ? "Loading..." : "Senden"}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              ) : (
                // Buy Now Button
                <button
                  onClick={handleBuyNow}
                  className="bg-blue-500 text-white px-6 py-3 rounded-full"
                >
                  Buy Now
                </button>
              )}

              {/* Order Status */}
              {orderStatus && (
                <p
                  className={
                    orderStatus ===
                    "Order Filled! Our team will contact you soon."
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {orderStatus}
                </p>
              )}
            </div>
          </>
        )}
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
