// components/Navbar.jsx
import React from "react";

export const Navbar = () => (
<nav className="bg-gray-900 text-white p-4 shadow-md sticky top-0 z-50">
  <div className="container mx-auto flex justify-between items-center">
    <h1 className="text-2xl font-bold">SheepBluff</h1>
    <div className="space-x-4">
      <a href="#" className="hover:text-blue-300">Home</a>
      <a href="#" className="hover:text-blue-300">How to Play</a>
      <a href="#" className="hover:text-blue-300">Tournaments</a>
      <button className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700">Sign In</button>
    </div>
  </div>
</nav>

);