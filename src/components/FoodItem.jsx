import React from "react";
import { ShoppingCart, Heart, Star } from "lucide-react";

const FoodItem = ({ name, description, price, image, isFavorite, toggleFavorite }) => {
  return (
    <div className="w-full max-w-[220px] bg-white rounded-xl shadow-md p-3 transition-all duration-300 transform hover:scale-105 mx-auto">
      <div className="relative group overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-44 object-cover rounded-lg transition-all duration-300 group-hover:ring-2 group-hover:ring-yellow-500"
        />

        <button
          onClick={() => toggleFavorite(name)}
          className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:bg-red-100 transition"
          title="Add to Wishlist"
        >
          <Heart
            size={18}
            className={isFavorite ? "text-red-500 fill-red-500" : "text-gray-400"}
          />
        </button>

        <button
          className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow hover:bg-yellow-100 transition"
          title="Add to Cart (disabled)"
        >
          <ShoppingCart size={18} className="text-yellow-500" />
        </button>
      </div>

      <div className="mt-3 text-sm text-gray-800">
        <h3 className="font-medium text-base truncate">{name}</h3>
        <div className="flex items-center text-green-600 text-sm gap-1 mt-1">
          <Star size={14} className="fill-green-500 text-white" />
          <span className="font-semibold">4.9</span>
          <span className="text-gray-500">(224 Reviews)</span>
        </div>
        <p className="text-pink-600 font-bold mt-1">{price}</p>
        <p className="text-xs text-gray-500 mt-1">
          Earliest Delivery:{" "}
          <span className="text-green-600 font-medium">In 3 hours</span>
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
