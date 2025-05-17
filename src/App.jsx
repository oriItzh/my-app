import './App.css';
import React from "react";
import { Navbar } from "./components/Navbar";
import { HeroBanner } from "./components/HeroBanner";
import { Features } from "./components/Features";
import GameLobbyPreview from './components/GameLobbyPreview';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Main content wrapper */}
      <main className="container mx-auto px-4 py-8 space-y-20">
        <HeroBanner />
        <Features />
        <GameLobbyPreview />
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
