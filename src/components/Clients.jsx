import React from "react";
import { Link, useLocation } from "react-router-dom";

const Clients = () => {
  return (
    <div className="bg-gray-100 p-8 flex flex-col items-center justify-center gap-8 mt-20 xl:mt-0">
      <h1 className="text-2xl font-medium text-gray-800 text-center">
        Con la confianza y el apoyo de:
      </h1>
      <div className="flex flex-col md:flex-row items-center flex-wrap gap-20">
        <Link to="/festicaribe">
          <img src="festicaribe.png" className="w-40" />
        </Link>
        <Link to="/fundam">
          <img src="fundam.png" className="w-40" />
        </Link>
        <Link to="/cecota">
          <img src="cecota.png" className="w-40" />
        </Link>
      </div>
    </div>
  );
};

export default Clients;
