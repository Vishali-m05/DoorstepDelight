import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white px-8 py-12 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-2">SweetSpot</h2>
          <p>Your go-to cake shop. Crafted with love & sugar.</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Company</h2>
          <ul className="space-y-1 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Contact</h2>
          <ul className="space-y-1 text-sm">
            <li>1234567890</li>
            <li>contact@sweetspot.com</li>
          </ul>
        </div>
      </div>
      <hr className="my-6 border-gray-700" />
      <p className="text-center text-sm text-gray-400">© 2024 SweetSpot. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
