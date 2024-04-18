import React, { useState, useEffect } from "react";
import { HomeIcon, WifiIcon, TagIcon } from "@heroicons/react/24/outline";

function FilterSection({
  title,
  options,
  selectedOptions,
  handleOptionChange,
}) {
  return (
    <div className="mb-4 grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
      <label className="font-semibold mb-2 col-span-2 md:col-span-1 lg:col-span-2">
        {title}:
      </label>
      {options.map((option) => (
        <div key={option} className="mb-2">
          <input
            type="checkbox"
            id={option}
            checked={selectedOptions.includes(option)}
            onChange={() => handleOptionChange(option)}
            className="mr-2"
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
}

const ProductSearch = ({ products, onProductClick }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [selectedWifi, setSelectedWifi] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const productsPerPage = 20;

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.category)) &&
      (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
      (selectedRooms.length === 0 || selectedRooms.includes(product.room)) &&
      (selectedWifi.length === 0 || selectedWifi.includes(product.wifi))
  );

  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const uniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ];
  const uniqueBrands = [...new Set(products.map((product) => product.brand))];
  const uniqueRooms = [...new Set(products.map((product) => product.room))];
  const uniqueWifiOptions = [
    ...new Set(products.map((product) => product.wifi)),
  ];

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

    window.location.href = `/product?id=${productId}`;
  };

  const [isCollapsed, setIsCollapsed] = useState(true); // Set to true by default

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)"); // Medium screen size breakpoint
    if (mediaQuery.matches) {
      setIsCollapsed(false); // Set to false if screen size is medium
    }
  }, []);

  return (
    <div className="flex flex-wrap">
      {/* Filters */}
      <div className="w-full md:w-1/4 lg:w-1/5 bg-gray-100 p-4 overflow-y-auto">
        <h1 className="text-3xl text-center block md:hidden">
          Discover the Perfect Fit
        </h1>
        <br />

        {/* Collapsible Section */}
        <div className="md:hidden">
          <button
            onClick={toggleCollapse}
            className="w-full bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg mb-4"
          >
            {isCollapsed ? "Show Filters" : "Hide Filters"}
          </button>
        </div>
        {/* Filter Options */}
        <div className={isCollapsed ? "md:hidden hidden" : "block"}>
          <FilterSection
            title="Category"
            options={uniqueCategories}
            selectedOptions={selectedCategories}
            handleOptionChange={handleCategoryChange}
          />
          <FilterSection
            title="Brand"
            options={uniqueBrands}
            selectedOptions={selectedBrands}
            handleOptionChange={handleBrandChange}
          />
          <FilterSection
            title="Room"
            options={uniqueRooms}
            selectedOptions={selectedRooms}
            handleOptionChange={handleRoomChange}
          />
          <FilterSection
            title="WiFi"
            options={uniqueWifiOptions}
            selectedOptions={selectedWifi}
            handleOptionChange={handleWifiChange}
          />
        </div>
      </div>
      <div className="w-full md:w-3/4  overflow-y-auto mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {paginatedProducts.map((product) => (
            <div key={product.id} className="bg-gray-200 p-1" id="s3">
              <div className="container mx-auto">
                <div className="flex justify-center">
                  <div className="w-full ">
                    <div className="bg-white shadow-md">
                      <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
                      <img
                        src={`${product.image}`}
                        className="w-full p-2"
                        alt={product.name}
                        style={{ height: "200px" }} // Set your fixed width and height here
                      />
                      <hr />

                      <div className="flex items-center justify-center m-4">
                        {product.wifi && <WifiIcon className="h-6 w-6 mr-2" />}

                        {product.room && (
                          <div className="rounded-full bg-gray-300 p-1 mr-2">
                            <HomeIcon className="h-6 w-6  inline " />{" "}
                            {product.room}
                          </div>
                        )}

                        {product.category && (
                          <div className="rounded-full bg-gray-300 p-1 mr-2">
                            <TagIcon className="h-6 w-6 inline " />{" "}
                            {product.category}
                          </div>
                        )}
                      </div>
                      <hr />
                      <div className="p-4">
                        <div className="text-center">
                          <h5 className="text-lg font-semibold">
                            {product.name}
                          </h5>
                          <p className="text-gray-600 mb-4">{product.brand}</p>
                        </div>
                        <hr />
                        <div className=" text-center mt-4 font-semibold">
                          <span className="text-center">
                            ${product.price.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
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

const products = [
  {
    id: 5,
    name: "Product 5",
    image: "Klima-Nrw-Carousel-5.webp",
    category: "Exklusiv",
    brand: "Panasonic",
    room: "1 room",
    wifi: "Yes",
    price: 99.99,
  },
  {
    id: 6,
    name: "Product 6",
    image: "Klima-Nrw-Angebote-Mitsubishi-Split.png",
    category: "Premium",
    brand: "Dikin",
    room: "2 rooms",
    wifi: "No",
    price: 99.99,
  },
  {
    id: 7,
    name: "Product 7",
    image: "Klima-Nrw-Angebote-Etherea.webp",
    category: "Starter",
    brand: "LG",
    room: "3 rooms",
    wifi: "Yes",
    price: 99.99,
  },
  {
    id: 8,
    name: "Product 8",
    image: "1.jpeg",
    category: "Exklusiv",
    brand: "Samsung",
    room: "4 rooms",
    wifi: "No",
    price: 99.99,
  },
  {
    id: 9,
    name: "Product 9",
    image: "g2.webp",
    category: "Premium",
    brand: "Panasonic",
    room: "1 room",
    wifi: "Yes",
    price: 99.99,
  },
  {
    id: 10,
    name: "Product 10",
    image: "g2.webp",
    category: "Starter",
    brand: "Dikin",
    room: "2 rooms",
    wifi: "No",
    price: 99.99,
  },
];

const ProductSearchPage = () => {
  const handleProductClick = (productId) => {
    // Custom logic for handling product click, if needed
    console.log(`Product clicked with ID: ${productId}`);
  };

  return (
    <div style={{ marginTop: "130px" }}>
      <ProductSearch products={products} />
    </div>
  );
};

export default ProductSearchPage;
