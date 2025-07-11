import React from "react";

const ExploreMenu = ({ category, setCategory, menu_list }) => {
  return (
    <div className="px-6 py-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Explore our menu</h1>
      <p className="text-gray-600 max-w-2xl mb-4">
        Choose from a variety of delicious cakes, hand-crafted with love.
      </p>
      <div className="flex gap-6 overflow-x-auto no-scrollbar py-2">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className="text-center cursor-pointer flex-shrink-0"
            onClick={() => setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name))}
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={`w-20 h-20 object-cover rounded-full border-4 transition-all duration-200 ${
                category === item.menu_name ? "border-yellow-500 p-1" : "border-transparent"
              }`}
            />
            <p className="mt-2 text-sm text-gray-700">{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr className="mt-4 border-gray-200" />
    </div>
  );
};

export default ExploreMenu;
