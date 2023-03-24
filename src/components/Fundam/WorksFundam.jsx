import React from "react";

const Works = () => {
  return (
    <div id="aboutUs" className="p-8 xl:p-20">
      <div className="mb-8">
        <h1 className="text-[40px] font-black">
        Fundación para el Desarrollo Dramático y Artístico del Magdalena
        
        </h1>
        <p className="text-xl text-gray-500">
        Desde 1988, la Fundación para el Desarrollo Dramático y Artístico del Magdalena (FUNDAM) se ha consolidado como una de las organizaciones culturales más antiguas de Colombia, impulsando programas, procesos y proyectos artísticos. Entre sus logros destacan la creación de la Sala Roberto Linero de Castro, la operación del Teatro Santa Marta y la formación del Centro de Expresión Artística (CEDA). Además, FUNDAM ha establecido alianzas con instituciones educativas y organizaciones nacionales e internacionales para fomentar la educación artística y democratizar el acceso a la cultura en la región del Magdalena. Gracias a sus esfuerzos, numerosos jóvenes y niños han sido formados en disciplinas artísticas, y se han generado espacios de interacción y proyección artística en la subregión norte del Magdalena.        </p>
      </div>
      {/* Works */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <img
            src="./img/fundam/work_1.jpg"
            className="w-full h-[600px] object-cover rounded-3xl"
          />
          {/* <p className="text-gray-500"> Argentina, 2021</p> */}
        
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <img
              src="./img/fundam/work_2.jpg"
              className="w-full h-56 object-cover rounded-3xl"
            />
            {/* <p className="text-gray-500">Colombia - June 20, 2022</p> */}
          
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="./img/fundam/work_3.jpg"
              className="w-full h-56 object-cover rounded-3xl"
            />
            {/* <p className="text-gray-500">Venezuela - June 20, 2022</p> */}
          
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="./img/fundam/work_4.jpg"
              className="w-full h-56 object-cover rounded-3xl"
            />
            {/* <p className="text-gray-500">Mexico - June 20, 2022</p> */}
          
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="./img/fundam/work_5.jpg"
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
