import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductSearch = ({ onProductClick }) => {
  const [products, setProducts] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [selectedWifi, setSelectedWifi] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/productData.json");
        const productsData = response.data;
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching product data: ", error);
      }
    };

    fetchData();
  }, []);

  const productsPerPage = 20;
  const filteredProducts = products
    ? products.filter(
        (product) =>
          (selectedCategories.length === 0 ||
            selectedCategories.includes(product.category)) &&
          (selectedBrands.length === 0 ||
            selectedBrands.includes(product.brand)) &&
          (selectedRooms.length === 0 ||
            selectedRooms.includes(product.room)) &&
          (selectedWifi.length === 0 || selectedWifi.includes(product.wifi))
      )
    : [];

  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const uniqueCategories = products
    ? [...new Set(products.map((product) => product.category))]
    : [];
  const uniqueBrands = products
    ? [...new Set(products.map((product) => product.brand))]
    : [];
  const uniqueRooms = products
    ? [...new Set(products.map((product) => product.room))]
    : [];

  const uniqueWifiOptions = products
    ? [...new Set(products.map((product) => product.wifi))]
    : [];

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
    setCurrentPage(1);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands((prevBrands) =>
      prevBrands.includes(brand)
        ? prevBrands.filter((b) => b !== brand)
        : [...prevBrands, brand]
    );
    setCurrentPage(1);
  };

  const handleRoomChange = (room) => {
    setSelectedRooms((prevRooms) =>
      prevRooms.includes(room)
        ? prevRooms.filter((r) => r !== room)
        : [...prevRooms, room]
    );
    setCurrentPage(1);
  };

  const handleWifiChange = (wifi) => {
    setSelectedWifi((prevWifi) =>
      prevWifi.includes(wifi)
        ? prevWifi.filter((w) => w !== wifi)
        : [...prevWifi, wifi]
    );
    setCurrentPage(1);
  };

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
    // Call the external function to handle the click
    onProductClick(productId);

    // Redirect to another page with the product ID
    window.location.href = `/product?id=${productId}`; // Update the URL as needed
  };

  return (
    <div className="flex">
      {/* Filters */}
      <div
        className="w-1/5 bg-gray-100 p-4 overflow-y-auto"
        style={{ minWidth: "150px" }}
      >
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-indigo-700 mb-2">
            🌫️<span className="hidden lg:inline">Klimaanlagen</span>
          </h1>
        </div>
        <div className="mb-4">
          <label className="font-semibold mb-2">Category:</label>
          <br />
          <br />
          {uniqueCategories.map((category) => (
            <div key={category} className="mb-2">
              <input
                type="checkbox"
                id={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="mr-2"
              />
              <label htmlFor={category}>{category}</label>
            </div>
          ))}
        </div>
        <div className="mb-4">
          <label className="font-semibold mb-2">Brand:</label>
          <br />
          <br />
          {uniqueBrands.map((brand) => (
            <div key={brand} className="mb-2">
              <input
                type="checkbox"
                id={brand}
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
                className="mr-2"
              />
              <label htmlFor={brand}>{brand}</label>
            </div>
          ))}
        </div>
        <div className="mb-4">
          <label className="font-semibold mb-2">Room:</label>
          <br />
          <br />
          {uniqueRooms.map((room) => (
            <div key={room} className="mb-2">
              <input
                type="checkbox"
                id={room}
                checked={selectedRooms.includes(room)}
                onChange={() => handleRoomChange(room)}
                className="mr-2"
              />
              <label htmlFor={room}>{room}</label>
            </div>
          ))}
        </div>
        <div>
          <label className="font-semibold mb-2">WiFi:</label>
          <br />
          <br />
          {uniqueWifiOptions.map((wifi) => (
            <div key={wifi} className="mb-2">
              <input
                type="checkbox"
                id={wifi}
                checked={selectedWifi.includes(wifi)}
                onChange={() => handleWifiChange(wifi)}
                className="mr-2"
              />
              <label htmlFor={wifi}>{wifi}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="w-3/4 p-4 overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {paginatedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <div
                className="bg-cover bg-center h-56 p-4"
                style={{
                  backgroundImage: `url(${
                    Array.isArray(product.image)
                      ? product.image[0]
                      : product.image
                  })`,
                }}
              ></div>
              <div className="p-4">
                <p className="uppercase tracking-wide text-xs text-gray-700">
                  {product.category}
                </p>

                <p className="text-gray-700 font-bold">{product.name}</p>
                <p className="text-3xl text-right text-gray-900">{`$${product.price.toFixed(
                  2
                )}`}</p>
              </div>
              <div className="flex p-4 border-t border-gray-300 text-gray-700">
                <div className="flex-1 inline-flex items-center">
                  <svg
                    className="h-6 w-6 text-gray-600 fill-current mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"></path>
                  </svg>
                  <p>
                    <span className="text-gray-900 font-bold">
                      {product.room}
                    </span>{" "}
                  </p>
                </div>
                <div className="flex-1 inline-flex items-center">
                  <svg
                    className="h-6 w-6 text-gray-600 fill-current mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  ></svg>
                  <p>
                    <span className="pl-1 text-gray-900 font-bold">
                      {product.wifi}
                    </span>{" "}
                  </p>
                </div>

                <div className="flex-1 inline-flex items-center">
                  <svg
                    className="h-6 w-6 text-gray-600 fill-current mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  ></svg>
                  <p>
                    <span className="text-black pl-1 text-l font-bold">
                      {product.brand}
                    </span>{" "}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

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
    </div>
  );
};


const ProductSearchPage = () => {
  const handleProductClick = (productId) => {
    // Custom logic for handling product click, if needed
    console.log(`Product clicked with ID: ${productId}`);
  };

  return (
    <div style={{ marginTop: "130px" }}>
      <ProductSearch onProductClick={handleProductClick} />
    </div>
  );
};

export default ProductSearchPage;
