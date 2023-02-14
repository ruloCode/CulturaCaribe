import React from "react";
import ProfilePhoto from '../assets/profile_photo.jpg'
// Icons
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Reviews = () => {
  return (
    <div className="p-8 flex flex-col gap-8 bg-gray-100">
      <h1 className="text-[40px] text-center font-black">
        Viviendo la cultura
      </h1>
      <div className="flex justify-center gap-4">
        <span className="text-5xl text-primary">
          <RiDoubleQuotesL />
        </span>
        <p className="max-w-2xl text-center text-gray-500">
        Cultura caribe es un portal en alianza entre tres organizaciones culturales que busca difundir y proyectar actividades, procesos y proyectos culturales con enfoque poblacional.
        </p>
        <span className="text-5xl text-primary">
          <RiDoubleQuotesR />
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-8 md:gap-12">
      
         
          <img
            src={ProfilePhoto}
            className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full ring-4 ring-primary p-1 bg-white"
          />
       
        
        </div>
        <div>
          <h3 className="text-center text-[24px] font-bold">Carlos Rodriguez Moreno</h3>
          <h5 className="text-center text-[20px] text-gray-500">
            Director
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
