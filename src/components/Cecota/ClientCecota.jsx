import React from "react";
import CecotaImg from '../../../public/cecota.png'

const Clients = () => {
  return (
    <div className="bg-gray-100 p-8 flex flex-col items-center justify-center gap-8 mt-20 xl:mt-0">
      <h1 className="text-2xl font-medium text-gray-800 text-center">
        Cecota
      </h1>
      <div className="flex flex-col md:flex-row items-center flex-wrap gap-20">
        <img src={CecotaImg} className="w-40" />
      </div>
    </div>
  );
};

export default Clients;
