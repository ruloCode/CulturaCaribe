import React from "react";

const Works = () => {
  const handleClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdaEoF6rOKOOx5UqVq1q5E1wLMe9ICktvRPtDSe8q1D6b33Pg/viewform?usp=sf_link", "_blank");
  };
  return (
    <div id="aboutUs" className="p-8 xl:p-20">
      <div className="mb-8">
        <h1 className="text-[40px] font-black">
        Festival Internacional del Caribe
        </h1>
        <p className="text-xl text-gray-500">
        ¡Prepárate para una experiencia única en el mundo del teatro! Cada año, nuestro festival internacional reúne lo mejor del talento teatral de todo el mundo en un solo lugar. Ven y disfruta de actuaciones épicas, historias conmovedoras y producciones innovadoras que te dejarán con la boca abierta. Con una diversidad de géneros, estilos y orígenes culturales, nuestro festival ofrece una ventana al mundo del teatro global. ¡No te pierdas la oportunidad de vivir una experiencia teatral inolvidable!
        </p>
        <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        ¡Inscríbete ahora!
      </button>
      </div>
      {/* Works */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <img
            src="./img/festicaribe/work_1.jpg"
            className="w-full h-[600px] object-cover rounded-3xl"
          />
          {/* <p className="text-gray-500"> Argentina, 2021</p> */}
        
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <img
              src="./img/festicaribe/work_2.jpg"
              className="w-full h-56 object-cover rounded-3xl"
            />
            {/* <p className="text-gray-500">Colombia - June 20, 2022</p> */}
          
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="./img/festicaribe/work_3.jpg"
              className="w-full h-56 object-cover rounded-3xl"
            />
            {/* <p className="text-gray-500">Venezuela - June 20, 2022</p> */}
          
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="./img/festicaribe/work_4.jpg"
              className="w-full h-56 object-cover rounded-3xl"
            />
            {/* <p className="text-gray-500">Mexico - June 20, 2022</p> */}
          
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="./img/festicaribe/work_5.jpg"
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
