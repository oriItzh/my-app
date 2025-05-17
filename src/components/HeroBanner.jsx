// components/HeroBanner.jsx
import React from "react";

export const HeroBanner = () => (
  <section className="relative bg-cover bg-center h-[500px] text-white flex items-center justify-center" style={{ backgroundImage: "url('/path/to/your/hero-image.jpg')" }}>
    <div className="bg-black bg-opacity-50 p-8 rounded-xl text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Play Poker Anytime, Anywhere</h1>
      <p className="text-lg md:text-xl mb-6">Join thousands of players. No downloads needed.</p>
      <div className="space-x-4">
        <button className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded text-white text-lg">Play Now</button>
        <button className="bg-transparent border border-white px-6 py-2 rounded text-white text-lg">Learn How to Play</button>
      </div>
    </div>
  </section>
);