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
  <section className="py-16 px-8 bg-white text-center">
    <h2 className="text-3xl font-bold mb-12">Why Play With Us?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <div key={index} className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
          <div className="mb-4 text-blue-600">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p>{feature.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
