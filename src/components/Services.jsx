import React from "react";
// Icons
import { RiMailFill, RiSmartphoneFill, RiMacFill } from "react-icons/ri";
import {  GiDramaMasks, GiPuppet } from "react-icons/gi";



const Services = () => {
  return (
    <div
      id="services"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 p-8 md:p-12 xl:p-20"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-[40px] font-bold">Descubre el mundo del teatro</h1>
        <p className="text-[20px] text-gray-500">
        Conviértete en un artista escénico y disfruta de actuaciones épicas en nuestro festival internacional
        </p>
        <form className="w-full">
          <div className="relative">
            <button
              type="submit"
              className="absolute font-semibold py-2 px-6 bg-primary text-white rounded-xl top-1/2 -translate-y-1/2 right-2"
            >
              Escribemos
            </button>
          
          </div>
        </form>
      </div>
      {/* Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <GiDramaMasks className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Escuela de teatro</h3>
          <p className="text-gray-500">
          Ofrecemos una amplia variedad de programas y talleres para ayudarte a desarrollar tus habilidades de actuación.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <GiPuppet className="text-4xl p-2 bg-secondary text-primary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Escuela de títeres</h3>
          <p className="text-gray-500">
          ¿Te encanta el teatro y los títeres? ¡Entonces, estás en el lugar correcto!
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default Services;
