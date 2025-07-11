import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-yellow-50 px-6 py-24 text-gray-800"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-700 mb-8 mt-4">
          WELCOME
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          At <span className="font-semibold text-pink-500">SweetSpot</span>, we believe every celebration
          deserves a centerpiece that's not just delicious, but also
          memorable. Our passionate bakers craft each cake with love,
          creativity, and the finest ingredients to bring a smile to your face.
          Whether it's a birthday, anniversary, or a late-night craving, we've
          got the perfect cake for you.
        </p>
      </div>
    </section>
  );
};

export default About;
