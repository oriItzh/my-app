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
<div className="container mx-auto px-4 py-8 space-y-16 text-center">
  <Navbar />
  <HeroBanner />
  <Features />
  <GameLobbyPreview />
  <Testimonials />
  <Footer />
</div>
  );
}

export default App;
