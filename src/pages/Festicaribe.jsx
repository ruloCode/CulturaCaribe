import React from "react";
import Header from "../components/Header";
import ClientFestiCaribe from "../components/Festicaribe/ClientFestiCaribe";
import Works from "../components/Festicaribe/WorksFesticaribe";
import Footer from "../components/Footer.jsx";

export const Festicaribe = () => {
  return (
    <div>
      <Header />
      <ClientFestiCaribe />
      <Works />
      <Footer />
    </div>
  );
};

export default Festicaribe;
