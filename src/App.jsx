// import logo from './logo.svg';
// import Greeting from './components/Greeting';
// import { useState } from 'react';
import './App.css';
import React from "react";
import { Navbar } from "./components/Navbar";
import { HeroBanner } from "./components/HeroBanner";
import { Features } from "./components/Features";
import GameLobbyPreview from './components/GameLobbyPreview';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';


function App() {
  // const [count, setCount] = useState(0);
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <Features />
      <GameLobbyPreview />
      <Testimonials />
      <Footer />
      {/* <h1>Welcome to React</h1>
      <Greeting name="Ori" color="blue" />
      <p> This is your first React Component</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button> */}
    </div>
  );
}

export default App;
