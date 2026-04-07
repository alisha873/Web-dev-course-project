import React from "react";
import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";
import "./Home.css";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <footer className='home-footer'>
        <div className='home-footer__brand'>
          <h2>Study Focus</h2>
          <p>Bring structure to every study session with focus, tasks, and progress tracking.</p>
        </div>
        <div className='home-footer__links'>
          <a href='/'>Home</a>
          <a href='/focus'>Focus</a>
          <a href='/tasks'>Tasks</a>
          <a href='/dashboard'>Dashboard</a>
        </div>
      </footer>
    </>
  );
}

export default Home;