import React from "react";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Clients from "../components/Clients.jsx";
import Works from "../components/Works.jsx";
import Reviews from "../components/Reviews.jsx";
import Services from "../components/Services.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Clients />
      <Works />
      <Reviews />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
