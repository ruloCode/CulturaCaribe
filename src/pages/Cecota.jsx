import React from "react";
import Header from "../components/Header.jsx";
import ClientCecota from "../components/Cecota/ClientCecota.jsx";
import Works from "../components/Cecota/WorksCecota.jsx";
import Footer from "../components/Footer.jsx";

export const Cecota = () => {
  return (
    <div>
      <Header />
      <ClientCecota />
      <Works />
      <Footer />
    </div>
  );
};

export default Cecota;
