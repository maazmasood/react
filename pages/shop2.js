import React, { useState } from "react";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {paginatedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <img
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
                src={
                  Array.isArray(product.image)
                    ? product.image[0]
                    : product.image
                }
                alt={product.name}
                className="w-full h-40 object-cover rounded-t-lg mb-2"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                <table className="w-full">
                  <tbody>
                    <tr>
                      <td className="font-semibold text-gray-600">Category:</td>
                      <td className="text-gray-700">{product.category}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-gray-600">Room:</td>
                      <td className="text-gray-700">{product.room}</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-gray-600">Price:</td>
                      <td className="text-indigo-600 font-bold">{`$${product.price.toFixed(
                        2
                      )}`}</td>
                    </tr>
                  </tbody>
                </table>
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
    id: 1,
    name: "Product 1",
    image: "g2.webp",
    category: "Starter",
    brand: "Panasonic",
    room: "1 room",
    wifi: "Yes",
    price: 99.99,
  },
  {
    id: 2,
    name: "Product 2",
    image: "g2.webp",
    category: "Exklusiv",
    brand: "Dikin",
    room: "2 rooms",
    wifi: "No",
    price: 99.99,
  },
  {
    id: 3,
    name: "Product 3",
    image: "g2.webp",
    category: "Premium",
    brand: "LG",
    room: "3 rooms",
    wifi: "Yes",
    price: 99.99,
  },
  {
    id: 4,
    name: "Product 4",
    image: "g2.webp",
    category: "Starter",
    brand: "Samsung",
    room: "4 rooms",
    wifi: "No",
    price: 99.99,
  },
  {
    id: 5,
    name: "Product 5",
    image: "g2.webp",
    category: "Exklusiv",
    brand: "Panasonic",
    room: "1 room",
    wifi: "Yes",
    price: 99.99,
  },
  {
    id: 6,
    name: "Product 6",
    image: "g2.webp",
    category: "Premium",
    brand: "Dikin",
    room: "2 rooms",
    wifi: "No",
    price: 99.99,
  },
  {
    id: 7,
    name: "Product 7",
    image: "g2.webp",
    category: "Starter",
    brand: "LG",
    room: "3 rooms",
    wifi: "Yes",
    price: 99.99,
  },
  {
    id: 8,
    name: "Product 8",
    image: "g2.webp",
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
  {
    id: 11,
    name: "Product 11",
    image: "g2.webp",
    category: "Exklusiv",
    brand: "LG",
    room: "3 rooms",
    wifi: "Yes",
    price: 99.99,
  },
  {
    id: 12,
    name: "Product 12",
    image: "g2.webp",
    category: "Premium",
    brand: "Samsung",
    room: "4 rooms",
    wifi: "No",
    price: 99.99,
  },
  {
    id: 13,
    name: "Product 13",
    image: "g2.webp",
    category: "Starter",
    brand: "Panasonic",
    room: "1 room",
    wifi: "Yes",
    price: 99.99,
  },
  {
    id: 14,
    name: "Product 14",
    image: "g2.webp",
    category: "Exklusiv",
    brand: "Dikin",
    room: "2 rooms",
    wifi: "No",
    price: 99.99,
  },
  {
    id: 15,
    name: "Product 15",
    image: ["g4.webp", "g3.webp"],
    category: "Premium",
    brand: "LG",
    room: "3 rooms",
    wifi: "Yes",
    price: 99.99,
  },
  {
    id: 16,
    name: "Product 16",
    image: ["g4.webp", "g3.webp"],
    category: "Starter",
    brand: "Samsung",
    room: "4 rooms",
    wifi: "No",
    price: 99.99,
  },
  {
    id: 17,
    name: "Product 17",
    image: ["g4.webp", "g3.webp"],
    category: "Exklusiv",
    brand: "Panasonic",
    room: "1 room",
    wifi: "Yes",
    price: 99.99,
  },
  {
    id: 18,
    name: "Product 18",
    image: ["g4.webp", "g3.webp"],
    category: "Premium",
    brand: "Dikin",
    room: "2 rooms",
    wifi: "No",
    price: 99.99,
  },
  {
    id: 19,
    name: "Product 19",
    image: ["g4.webp", "g3.webp"],
    category: "Starter",
    brand: "LG",
    room: "3 rooms",
    wifi: "Yes",
    price: 99.99,
  },
  {
    id: 20,
    name: "Product 20",
    image: ["g4.webp", "g3.webp"],
    category: "Exklusiv",
    brand: "Samsung",
    room: "4 rooms",
    wifi: "No",
    price: 99.99,
  },
  {
    id: 21,
    name: "Product 21",
    image: ["g4.webp", "g3.webp"],
    category: "Premium",
    brand: "Panasonic",
    room: "1 room",
    wifi: "Yes",
    price: 99.99,
  },
  {
    id: 22,
    name: "Product 22",
    image: ["g4.webp", "g3.webp"],
    category: "Starter",
    brand: "Dikin",
    room: "2 rooms",
    wifi: "No",
    price: 99.99,
  },
  {
    id: 23,
    name: "Product 23",
    image: ["g4.webp", "g3.webp"],
    category: "Exklusiv",
    brand: "LG",
    room: "3 rooms",
    wifi: "Yes",
    price: 99.99,
  },
  {
    id: 24,
    name: "Product 24",
    image: ["g4.webp", "g3.webp"],
    category: "Premium",
    brand: "Samsung",
    room: "4 rooms",
    wifi: "No",
    price: 99.99,
  },
  {
    id: 25,
    name: "Product 25",
    image: ["g4.webp", "g3.webp"],
    category: "Starter",
    brand: "Panasonic",
    room: "1 room",
    wifi: "Yes",
    price: 99.99,
  },
  {
    id: 26,
    name: "Product 26",
    image: ["g4.webp", "g3.webp"],
    category: "Exklusiv",
    brand: "Dikin",
    room: "2 rooms",
    wifi: "No",
    price: 99.99,
  },
  {
    id: 27,
    name: "Product 27",
    image: ["g4.webp", "g3.webp"],
    category: "Premium",
    brand: "LG",
    room: "3 rooms",
    wifi: "Yes",
    price: 99.99,
  },
  {
    id: 28,
    name: "Product 28",
    image: ["g4.webp", "g3.webp"],
    category: "Starter",
    brand: "Samsung",
    room: "4 rooms",
    wifi: "No",
    price: 99.99,
  },
  {
    id: 29,
    name: "Product 29",
    image: ["g4.webp", "g3.webp"],
    category: "Exklusiv",
    brand: "Panasonic",
    room: "1 room",
    wifi: "Yes",
    price: 99.99,
  },
  {
    id: 30,
    name: "Product 30",
    image: ["g4.webp", "g3.webp"],
    category: "Premium",
    brand: "Dikin",
    room: "2 rooms",
    wifi: "No",
    price: 99.99,
  },
  {
    id: 31,
    name: "Product 31",
    image: ["g4.webp", "g3.webp"],
    category: "Starter",
    brand: "LG",
    room: "3 rooms",
    wifi: "Yes",
    price: 99.99,
  },
  {
    id: 32,
    name: "Product 32",
    image: ["g4.webp", "g3.webp"],
    category: "Exklusiv",
    brand: "Samsung",
    room: "4 rooms",
    wifi: "No",
    price: 99.99,
  },
  {
    id: 33,
    name: "Product 33",
    image: ["g4.webp", "g3.webp"],
    category: "Premium",
    brand: "Panasonic",
    room: "1 room",
    wifi: "Yes",
    price: 99.99,
  },
  {
    id: 34,
    name: "Product 34",
    image: ["g4.webp", "g3.webp"],
    category: "Starter",
    brand: "Dikin",
    room: "2 rooms",
    wifi: "No",
    price: 99.99,
  },
  {
    id: 35,
    name: "Product 35",
    image: ["g4.webp", "g3.webp"],
    category: "Exklusiv",
    brand: "LG",
    room: "3 rooms",
    wifi: "Yes",
    price: 99.99,
  },
  {
    id: 36,
    name: "Product 36",
    image: ["g4.webp", "g3.webp"],
    category: "Premium",
    brand: "Samsung",
    room: "4 rooms",
    wifi: "No",
    price: 99.99,
  },
  {
    id: 37,
    name: "Product 37",
    image: ["g4.webp", "g3.webp"],
    category: "Starter",
    brand: "Panasonic",
    room: "1 room",
    wifi: "Yes",
    price: 99.99,
  },
  {
    id: 38,
    name: "Product 38",
    image: ["g4.webp", "g3.webp"],
    category: "Exklusiv",
    brand: "Dikin",
    room: "2 rooms",
    wifi: "No",
    price: 99.99,
  },
  {
    id: 39,
    name: "Product 39",
    image: ["g4.webp", "g3.webp"],
    category: "Premium",
    brand: "LG",
    room: "3 rooms",
    wifi: "Yes",
    price: 99.99,
  },
  {
    id: 40,
    name: "Product 40",
    image: "g2.webp",
    category: "Starter",
    brand: "Samsung",
    room: "4 rooms",
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
      <ProductSearch products={products} onProductClick={handleProductClick} />
    </div>
  );
};

export default ProductSearchPage;
