import React from "react";
import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";
import "./Home.css";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;