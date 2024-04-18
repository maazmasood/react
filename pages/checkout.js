import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Head from "next/head";

const CheckoutPage = () => {
  const [checkoutData, setCheckoutData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const productDataRef = useRef(null);
  useEffect(() => {
    // Fetch checkout data from local storage
    const storedData = localStorage.getItem("cartItems");
    if (storedData) {
      setCheckoutData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    // Calculate total amount
    let total = 0;
    checkoutData.forEach((product) => {
      total += product.totalPrice;
    });
    setTotalAmount(total);
  }, [checkoutData]);

  async function handlePlaceOrder(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = {
      productdata: productDataRef.current.innerHTML,
      name: formData.get("name"), // Change "firstName" to "name"
      city: formData.get("city"),
      address: formData.get("address"),
      email: formData.get("email"),
      telephone: formData.get("telephone"),
      message: formData.get("message"),
      totalprice: (totalAmount + totalAmount * 0.05).toFixed(0),
    };

    try {
      const response = await axios.post("/api/buy-order", data);
      console.log(response);
      localStorage.removeItem("cartItems");
      window.dispatchEvent(new Event("storage"));

      // Access "data" property of response
      form.reset();
      // Show success message or perform any other action after successful submission
    } catch (error) {
      console.error("Error sending email:", error);
      // Show error message or perform any other action in case of error
    }
  }

  const handleDeleteProduct = (index) => {
    // Remove the product from the checkout data
    const updatedCheckoutData = [...checkoutData];
    updatedCheckoutData.splice(index, 1);
    setCheckoutData(updatedCheckoutData);
    // Update local storage
    localStorage.setItem("cartItems", JSON.stringify(updatedCheckoutData));

    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="container mt-24 mx-auto py-8">
      <div className="max-w-screen-lg mx-auto bg-white rounded shadow-lg overflow-hidden">
        <div className="p-6">
          <h3 className="text-xl text-center md:text-left font-semibold mb-8">
            Seamless HVAC Solutions Await at Checkout
          </h3>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
            <div className="space-y-6 " id="product_data" ref={productDataRef}>
              {checkoutData.length > 0 ? (
                checkoutData.map((product, index) => (
                  <div
                    key={index}
                    className="border rounded-lg bg-white shadow-md"
                  >
                    <div className="p-6">
                      <h2 className="text-xl font-semibold mb-4">
                        {product.name}
                      </h2>
                      <p className="text-gray-700 mb-2">
                        <strong>No of Rooms:</strong> {product.selectedRooms}
                      </p>
                      <p className="text-gray-700 mb-2">
                        <strong>Room Sizes:</strong>{" "}
                        {product.roomSizes
                          .filter((room) => room && room.size) // Filter out empty or undefined values
                          .map((room, roomIndex, array) => (
                            <span key={roomIndex}>
                              {room.size}
                              {roomIndex !== array.length - 1 && ", "}
                            </span>
                          ))}
                      </p>

                      <p className="text-gray-700 mb-2">
                        <strong>Standort im Freien:</strong>{" "}
                        {product.selectedLocation}
                      </p>
                      <p className="text-gray-700 mb-2">
                        <strong>Total Cable Length:</strong>{" "}
                        {product.totalCableLength}
                      </p>
                      <p className="text-gray-700 mb-2">
                        <strong>Additional Options:</strong>
                      </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>
                          Painting:{" "}
                          {product.additionalOptions.painting ? "Yes" : "No"}
                        </li>
                        <li>
                          Assembly Within 7 Days:{" "}
                          {product.additionalOptions.assemblyWithin7Days
                            ? "Yes"
                            : "No"}
                        </li>
                        <li>
                          Rubber Feet:{" "}
                          {product.additionalOptions.rubberFeet ? "Yes" : "No"}
                        </li>
                        <li>
                          Plastic Feet:{" "}
                          {product.additionalOptions.plasticFeet ? "Yes" : "No"}
                        </li>
                      </ul>
                      <div className="flex justify-between items-center border-b border-gray-200 py-4">
                        <p className="text-gray-700">
                          <strong>Product Price:</strong> ${product.totalPrice}
                        </p>
                        <button
                          onClick={handleDeleteProduct}
                          className=""
                          id="s3-text"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center md:text-left text-gray-700">
                  No items in the cart.
                </p>
              )}
            </div>
            {checkoutData.length > 0 && (
              <form onSubmit={handlePlaceOrder}>
                <div className="border my-auto rounded-lg bg-white shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Contact Details
                  </h2>

                  <div className="space-y-4">
                    <div className="flex flex-col">
                      <label htmlFor="name" className="text-gray-700">
                        Name:
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        className="border rounded-lg p-2"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="city" className="text-gray-700">
                        City:
                      </label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        placeholder="New York"
                        className="border rounded-lg p-2"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="address" className="text-gray-700">
                        Address:
                      </label>
                      <input
                        id="address"
                        name="address"
                        type="text"
                        placeholder="123 Main St"
                        className="border rounded-lg p-2"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="telephone" className="text-gray-700">
                        Telephone:
                      </label>
                      <input
                        id="telephone"
                        name="telephone"
                        type="text"
                        placeholder="123-456-7890"
                        className="border rounded-lg p-2"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="email" className="text-gray-700">
                        Email:
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="example@example.com"
                        className="border rounded-lg p-2"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="guidelines" className="text-gray-700">
                        Guidelines:
                      </label>
                      <textarea
                        id="guidelines"
                        name="message"
                        placeholder="Enter shipping guidelines here..."
                        className="border rounded-lg p-2"
                      ></textarea>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <div className="text-right">
                      <p className="text-gray-700">
                        <strong>Total Amount:</strong> ${totalAmount.toFixed(2)}
                      </p>
                      <p className="text-gray-700">
                        <strong>Tax (5%):</strong> $
                        {(totalAmount * 0.05).toFixed(2)}
                      </p>
                      <p className="text-gray-700">
                        <strong>Total Amount inc Tax:</strong> $
                        {(totalAmount + totalAmount * 0.05).toFixed(0)}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center  ">
                    <button
                      type="submit"
                      id="s3"
                      className=" text-white rounded-lg py-2 m-4 px-4 w-full mt-8"
                    >
                      Place Order
                    </button>
                  </div>
                  <p className="text-gray-600 text-center mt-4">
                    *Our team will contact you for further proceedings
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
