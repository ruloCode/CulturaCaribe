import React from "react";
import Logo from '../assets/CULTURA CARIBE-02.png'

// Icons
import {
  RiCheckboxBlankCircleFill,
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
  RiGithubLine,
} from "react-icons/ri";
import {
  GrYoutube
} from "react-icons/gr";


const Footer = () => {
  return (
    <footer className="bg-footer p-8 xl:p-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-8">
        {/* Logo */}
        <div className="w-1/6">
          <a
            href="#"
            className="text-2xl font-bold relative p-1 bg-footer text-white"
          >


            <img
                src={Logo}
                class="h-14 w-auto mt-4"
              />
          </a>
        </div>
        {/* Social media */}
        <nav className="flex items-center gap-4">
          <a href="https://www.instagram.com/festicaribe/ " target="_blank" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiInstagramLine />{" "}
          </a>
          <a href="https://www.facebook.com/festicaribe/?ref=pages_you_manage " target="_blank" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiFacebookLine />{" "}
          </a>
          <a href="https://www.youtube.com/channel/UCWAIPO0oGp5dU214hDj2ceA " target="_blank" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <GrYoutube />{" "}
          </a>
         
        </nav>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-bold text-white text-center md:text-left">
          Cultura Caribe
        </h3>
        <nav className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-colors"
          >
            Festicaribe
          </a>
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-color"
          >
            Fundam
          </a>
          <a
            href="#"
            className="text-gray-300 mt-4 hover:text-white transition-color"
          >
            Cecota
          </a>
         
          <button
            type="button"
            className="font-semibold py-2 px-6 bg-primary text-white rounded-xl"
          >
            Contacto
          </button>
        </nav>
      </div>
     
    </footer>
  );
};

export default Footer;
