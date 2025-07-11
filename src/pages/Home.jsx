// src/pages/Home.jsx
import React, { useState } from "react";
import Header from "../components/Header";
import ExploreMenu from "../components/ExploreMenu";
import FoodDisplay from "../components/FoodDisplay";
import Footer from "../components/Footer";
import About from "../components/About";
import { menu_list } from "../data/menu";
import { food_list } from "../data/food";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div className="min-h-screen bg-white">
      <Header setCategory={setCategory} />
      <div className="pt-24">
        <section id="about">
          <About />
        </section>
        <section id="food-display">
          <ExploreMenu
            category={category}
            setCategory={setCategory}
            menu_list={menu_list}
          />
          <FoodDisplay category={category} food_list={food_list} />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Home;
