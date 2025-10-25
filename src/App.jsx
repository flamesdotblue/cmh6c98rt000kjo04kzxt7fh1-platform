import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sections from "./components/Sections";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white selection:bg-[#FF3FD1] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Sections />
      </main>
      <Footer />
    </div>
  );
}
