// components/HeroBanner.jsx
import React from "react";

export const HeroBanner = () => (
<section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20 text-center rounded-lg shadow-md">
  <h2 className="text-4xl font-bold mb-4">Play Poker Anytime, Anywhere</h2>
  <p className="mb-6">Join thousands of players. No downloads needed.</p>
  <div className="space-x-4">
    <button className="bg-white text-blue-800 font-semibold px-4 py-2 rounded hover:bg-gray-200">
      Play Now
    </button>
    <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-800">
      Learn How to Play
    </button>
  </div>
</section>

);