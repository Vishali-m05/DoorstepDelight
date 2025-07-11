import React, { useState } from "react";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category, food_list }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (name) => {
    setFavorites((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
    );
  };

  const filtered =
    category === "All"
      ? food_list
      : food_list.filter((item) => item.category === category);

  const isFew = filtered.length <= 4;

  return (
    <div className="px-4 sm:px-6 md:px-8 mt-6" id="food-display">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Top Cakes</h2>

      {isFew ? (
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 max-w-5xl mx-auto">
          {filtered.map((item, index) => (
            <FoodItem
              key={index}
              {...item}
              isFavorite={favorites.includes(item.name)}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
          {filtered.map((item, index) => (
            <FoodItem
              key={index}
              {...item}
              isFavorite={favorites.includes(item.name)}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodDisplay;
