import React from "react";
import "@fontsource/parastoo";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";
import head from "../assets/head.jpg";
import join from "../assets/join.png";

const timelineData = [
  {
    year: "2021",
    title: "SweetSpot Launched",
    desc: "Started with 12 signature cake flavors in Hyderabad. Our founders baked from home kitchens to bring joy to friends, family, and first customers.",
    icon: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
    color: "bg-[#f6c90e]",
  },
  {
    year: "2022",
    title: "Express Delivery",
    desc: "Launched 3-hour cake delivery across 30+ locations. Ensured freshness, fast arrival, and hassle-free gifting experiences.",
    icon: "https://cdn-icons-png.flaticon.com/512/1159/1159633.png",
    color: "bg-[#f78fb3]",
  },
  {
    year: "2023",
    title: "Pan-India Flavors",
    desc: "Expanded to 100+ regions with diverse cake collections including regional and fusion flavors.",
    icon: "https://cdn-icons-png.flaticon.com/512/2917/2917242.png",
    color: "bg-[#63cdda]",
  },
  {
    year: "2024",
    title: "AI Cake Designer",
    desc: "Introduced India's first AI-based personalized cake design tool for real-time preview & customization.",
    icon: "https://cdn-icons-png.flaticon.com/512/706/706164.png",
    color: "bg-[#786fa6]",
  },
];

const About = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="font-parastoo bg-[#fdf4f0] text-[rgba(79,79,79,0.75)]">

      {/* Hero Section */}
      <section
        className="relative text-white py-20 px-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${head})` }}
      >
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-7xl font-bold text-white mb-6">ABOUT US</h1>
          <p className="text-2xl italic mb-8">
            “ From oven to occasion — we don’t just bake cakes, we bake stories that linger in every bite.”
          </p>
          <div className="bg-white bg-opacity-90 p-6 rounded-3xl text-[rgba(79,79,79,0.85)] shadow-lg">
            <p className="text-lg leading-relaxed">
              At <span className="text-[rgba(224,99,99,0.85)] font-semibold">SweetSpot</span>, we believe that <em>every occasion deserves a delightful dessert</em>.
              From our humble beginnings in 2021 to becoming one of India’s most loved cake delivery platforms, our journey has always been about <strong>baking smiles</strong>.
              <br /><br />
              With customizable options, regional flavors, and even AI-powered cake designing, we’re here to make your moments <strong>extra special</strong> — one slice at a time.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 px-4 bg-[#fce8e4]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <Slider {...sliderSettings}>
              {[one, two, three, four].map((img, i) => (
                <div key={i} className="px-2 flex justify-center">
                  <div className="w-[600px] h-[380px] rounded-xl shadow-md overflow-hidden">
                    <img src={img} alt={`slide-${i}`} className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="flex flex-col gap-12 pl-8 lg:pl-20 relative">
            {[
              { title: "Browse & Select", desc: "Explore our curated selection of delicious cakes and desserts for every mood and occasion." },
              { title: "Customise", desc: "Personalize your cake by choosing flavors, designs, messages, and special requests." },
              { title: "Place Order", desc: "Add your favorites to the cart and place the order in a few easy steps. Smooth and quick!" },
              { title: "Get Delivered", desc: "Sit back and relax — your freshly baked cake will be delivered right to your doorstep." },
            ].map((step, index) => (
              <div key={index} className="relative group pl-10">
                <div className="absolute left-0 top-0 flex flex-col items-center">
                  <div className="w-7 h-7 bg-[rgba(224,99,99,0.85)] text-white flex items-center justify-center rounded-full font-bold text-sm shadow-md">
                    {index + 1}
                  </div>
                  {index < 3 && <div className="w-1 h-24 bg-[rgba(224,99,99,0.3)] mt-1"></div>}
                </div>
                <div className="ml-4">
                  <h4 className="text-2xl font-semibold text-[rgba(79,79,79,0.85)] mb-1 group-hover:text-[rgba(224,99,99,0.85)] transition-all duration-300">
                    {step.title}
                  </h4>
                  <p className="text-base italic">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 px-7 bg-[#fdf4f0]">
        <h2 className="text-5xl text-center font-bold text-[rgba(79,79,79,0.66)] mb-20">Our Journey</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {timelineData.map((item, i) => (
            <div key={i} className="w-64 bg-white p-5 rounded-xl shadow-md relative" style={{ borderTop: `8px solid ${item.color?.replace("bg-[#", "#").replace("]", "")}` }}>
              <div className={`absolute -top-5 left-5 ${item.color} text-white px-3 py-1 rounded-full shadow text-sm font-semibold`}>{item.year}</div>
              <img src={item.icon} alt={item.title} className="w-10 h-10 mb-3" />
              <h4 className="text-lg font-bold text-[rgba(224,99,99,0.85)]">{item.title}</h4>
              <p className="text-sm mt-1 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#fce8e4] py-14 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Side */}
          <div className="flex-1 space-y-5">
            <h3 className="text-3xl font-semibold text-[rgba(79,79,79,0.7)]">Why Choose Us</h3>
            <ul className="space-y-3 text-lg leading-relaxed">
              <li>✨ <strong>Flexible schedules</strong> – Work when you’re at your creative best.</li>
              <li>🎓 <strong>Learning & growth</strong> – Upskill with hands-on experiences and expert mentorship.</li>
              <li>🤝 <strong>Inclusive & friendly team</strong> – We rise together like our favorite sponge cakes.</li>
            </ul>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex items-center gap-4">
            <img src={join} alt="Join Us" className="w-[220px] rounded-lg shadow-md" />
            <div className="space-y-3 text-left">
              <h3 className="text-2xl font-semibold text-[rgba(79,79,79,0.85)]">Want To Be A Part Of Us?</h3>
              <p className="text-[rgba(79,79,79,0.7)] text-base max-w-[260px]">
                Ready to bake your dreams with us? Reach out and let’s connect!
              </p>
              <a href="#footer">
                <button className="bg-[rgba(224,99,99,0.85)] text-white px-10 py-2 rounded hover:bg-[rgba(220,117,186,0.92)] transition ml-4">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
