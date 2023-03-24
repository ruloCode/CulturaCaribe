import React from "react";
import Header from "../components/Header.jsx";
import ClientFundam from "../components/Fundam/ClientFundam";
import Works from "../components/Fundam/WorksFundam";
import Footer from "../components/Footer.jsx";

export const Fundam = () => {
  return (
    <div>
      <Header />
      <ClientFundam />
      <Works />
      <Footer />
    </div>
  );
};

export default Fundam;
