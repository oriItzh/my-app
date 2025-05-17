// components/Navbar.jsx
import React from "react";

export const Navbar = () => (
  <nav className="flex justify-between items-center p-4 bg-white shadow">
    <div className="text-xl font-bold">PokerApp</div>
    <div className="space-x-4">
      <a href="#" className="hover:text-blue-500">Home</a>
      <a href="#" className="hover:text-blue-500">How to Play</a>
      <a href="#" className="hover:text-blue-500">Tournaments</a>
      <a href="#" className="hover:text-blue-500">Contact</a>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Sign In</button>
    </div>
  </nav>
);