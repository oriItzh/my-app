// components/Features.jsx
import React from "react";
import { FaUsers, FaTrophy, FaShieldAlt, FaMobileAlt } from "react-icons/fa";

const features = [
  { icon: <FaUsers size={30} />, title: "Play with Friends", desc: "Create private tables and invite your friends instantly." },
  { icon: <FaTrophy size={30} />, title: "Daily Tournaments", desc: "Compete in exciting tournaments every day." },
  { icon: <FaShieldAlt size={30} />, title: "Fair & Secure", desc: "Enjoy a safe and secure playing environment." },
  { icon: <FaMobileAlt size={30} />, title: "Multi-device Support", desc: "Play from desktop, tablet or mobile seamlessly." }
];

export const Features = () => (
<section className="bg-gray-50 py-16 px-6">
  <h3 className="text-3xl font-bold text-center mb-10">Why Play With Us?</h3>
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* Each feature */}
    <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
      <FaUsers className="text-blue-600 text-3xl mb-4" />
      <h4 className="font-bold mb-2">Play with Friends</h4>
      <p className="text-gray-600">Create private tables and invite your friends instantly.</p>
    </div>
    {/* ...rest */}
  </div>
</section>

);
