import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/CULTURA CARIBE.svg'
// Icons
import {
  RiCheckboxBlankCircleFill,
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path ? "activa" : "";
  };

  console.log(location)
  return (
    <header
    
    className="sticky top-0 z-50 bg-white  shadow-lg py-4 px-6 flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50">

      <div className="xl:w-1/6 text-center -mt-4">
        <a href="#" className="text-2xl font-bold relative ">
         <img
                src={Logo}
                class="h-14 w-auto mt-4"
              />
        </a>
      </div>
      <nav
        className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
      >
       <Link to="/" className="">
        
    Inicio
  </Link>
  <Link to="/festicaribe" className={`${
    isActive('/festicaribe') ? "activeBorderBottom" : ""
  }`}>
    Festicaribe
  </Link>
  <Link to="/fundam" className={`${
    isActive('/fundam') ? "activeBorderBottom" : ""
  }`}>
    Fundam
  </Link>
  <Link to="/cecota" className={`${
    isActive('/cecota') ? "activeBorderBottom" : ""
  }`}>
    Cecota
  </Link>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
  );
};

export default Header;
