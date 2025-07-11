import React from "react";
import { User } from "lucide-react";

const Header = ({ setCategory }) => {
  const handleMenuClick = () => {
    setCategory("All");
    document.getElementById("food-display")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="bg-yellow-400 text-white px-6 py-4 flex justify-between items-center shadow fixed top-0 left-0 w-full z-50">
      <h1 className="text-2xl font-bold">SweetSpot</h1>

      <nav className="flex gap-6 items-center">
        <a href="#about" className="hover:underline">About</a>

        <button onClick={handleMenuClick} className="hover:underline">
          Menu
        </button>

        <a href="#favorites" className="hover:underline">Fav</a>

        <a href="#footer" className="hover:underline">Contact</a>

        <button className="bg-white text-yellow-500 px-4 py-1 rounded-full font-semibold hover:bg-yellow-100 transition">
          🛒 Cart
        </button>

        <button
          className="bg-white p-2 rounded-full hover:bg-yellow-100 transition"
          title="User Profile"
        >
          <User className="text-yellow-500" size={20} />
        </button>
      </nav>
    </header>
  );
};

export default Header;
