import React from "react";

const Works = () => {
  return (
    <div id="aboutUs" className="p-8 xl:p-20">
      <div className="mb-8">
        <h1 className="text-[40px] font-black">
          Corporación Centro Colombiano del Teatro y las Artes
        </h1>
        <p className="text-xl text-gray-500">
          La Corporación Centro Colombiano del Teatro y las Artes inicia sus
          actividades en el año 2001, implementando un trabajo cultural,
          creativo y artístico, el cual para el año 2021 cumple 20 años de
          experiencia en la gestión, ejecución y realización de proyectos y
          procesos, con impacto local, nacional e Internacional.
        </p>{" "}
      </div>
      {/* Works */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <img
            src="./img/cecota/work_1.jpg"
            className="w-full h-[600px] object-cover rounded-3xl"
          />
          {/* <p className="text-gray-500"> Argentina, 2021</p> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <img
              src="./img/cecota/work_2.jpg"
              className="w-full h-56 object-cover rounded-3xl"
            />
            {/* <p className="text-gray-500">Colombia - June 20, 2022</p> */}
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="./img/cecota/work_3.jpg"
              className="w-full h-56 object-cover rounded-3xl"
            />
            {/* <p className="text-gray-500">Venezuela - June 20, 2022</p> */}
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="./img/cecota/work_4.jpg"
              className="w-full h-56 object-cover rounded-3xl"
            />
            {/* <p className="text-gray-500">Mexico - June 20, 2022</p> */}
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="./img/cecota/work_5.jpg"
              className="w-full h-56 object-cover rounded-3xl"
            />
            {/* <p className="text-gray-500">Japón - June 20, 2022</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
