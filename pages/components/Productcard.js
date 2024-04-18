// components/ProductCard.js

import React from "react";

const ProductCard = ({ product }) => {
  const {
    name,
    image,
    category,
    brand,
    room,
    wifi,
    price,
    features,
    description,
  } = product;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {/* Product images */}
      <div className="grid grid-cols-1 gap-4">
        {image.map((img, index) => (
          <img key={index} src={img} alt={name} className="w-full" />
        ))}
      </div>
      {/* Product details */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base mb-2">{description}</p>
        <p className="text-gray-700 text-base mb-2">{`Category: ${category}`}</p>
        <p className="text-gray-700 text-base mb-2">{`Brand: ${brand}`}</p>
        <p className="text-gray-700 text-base mb-2">{`Room: ${room}`}</p>
        <p className="text-gray-700 text-base mb-2">{`Wifi: ${wifi}`}</p>
        <p className="text-gray-700 text-base mb-2">{`Price: $${price}`}</p>
        {/* Features */}
        <div className="flex flex-wrap">
          {features.map((feature, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
