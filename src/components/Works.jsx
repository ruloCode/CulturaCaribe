import React from "react";

const Works = () => {
  const startDate = "15 de septiembre";
  const endDate = "23 de septiembre";
  const city = "Santa Marta";
  const country = "Colombia";
  const registrationDeadline = "28 de abril de 2023";

  const handleClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdaEoF6rOKOOx5UqVq1q5E1wLMe9ICktvRPtDSe8q1D6b33Pg/viewform?usp=sf_link", "_blank");
  };
  return (
    <div id="aboutUs" className="p-8 xl:p-20">
      <div className="mb-8">
        <h1 className="text-[40px] font-black">
        ¡Convocatoria abierta! El 34 Festival Internacional de Teatro del Caribe 
        </h1>
        <p className="text-xl text-gray-500">
        El 34 Festival Internacional de Teatro del Caribe se llevará a cabo del 15 al 23 de septiembre de 2023 en el Distrito de Santa Marta, Colombia. La organización invita a todas las compañías de artes escénicas a participar en este encuentro de intercambio y confrontación artístico.        </p>
        <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        ¡Inscríbete ahora!
      </button>
        {/* <p>
        A continuación, te compartimos toda la información necesaria para participar:

Reglamento (bases y condiciones):
La organización del 34 Festival Internacional de Teatro del Caribe invita a todas las compañías de artes escénicas a participar en este evento. Se aceptarán espectáculos en técnicas escénicas como Teatro, Performance, Danza, Música, Circo y Teatro dirigido a todo tipo de público.

Sobre el 34 Festival Internacional de Teatro del Caribe:
El evento tiene como objetivo generar una instancia de comunicación e intercambio a nivel nacional e internacional, aportando a las dinámicas culturales de nuestros territorios.

Inscripciones y requisitos:
Cada delegación deberá presentar uno o más espectáculos en cualquier estilo de las artes escénicas, ya sea en sala de gran formato, sala de pequeño formato, espacio no convencional y espacios de calle. Las obras deben tener una duración mínima de 30 minutos. La inscripción es gratuita y se realizará desde la publicación de esta convocatoria hasta el 28 de abril de 2023.

Para la selección de los espectáculos a participar:
Las instancias de selección serán dos. La primera instancia requerirá que los grupos presenten los materiales solicitados en formato digital diligenciando el formulario de Google. Mínimo 3 fotos en alta resolución y autorización del autor a través de la entidad pertinente y/o por su autor o autora (escaneado y autorizado). La segunda instancia será en junio de 2023, donde se seleccionarán los grupos para su participación en el festival.

Selección:
Podrá participar cualquier grupo que cumpla con la totalidad de los requisitos. La organización se reserva la potestad de designar o no, un comité seleccionador de los espectáculos a participar. Sus decisiones serán inapelables y se reserva el derecho de modificar algunos de los ítems sin previo aviso como así también invitar a alguna compañía sin haber concursado y postulado su espectáculo.

Del delegado o representante:
Los elencos deberán designar un delegado ante la organización. Este será responsable tanto de la emisión como de la recepción de la información que le fuese requerida además de la coordinación y aspectos organizativos del grupo en relación con el festival.

Ámbito de representación:
Los elencos deberán adaptarse a las disponibilidades de los diferentes espacios adjudicados para sus presentaciones.

Aspectos técnicos:
La organización suministrará los elementos mínimos indispensables de luz y sonido y sus respectivos técnicos de cada sala designada. Cualquier requerimiento especial necesario para la puesta en escena deberá ser provisto por la delegación participante.

Participación:
Las delegaciones que participen realizarán de una a tres funciones en el festival siendo indispensable la presentación de las piezas propuestas en el marco del evento. Los grupos seleccionados estarán disponibles para sesiones de fotos
        </p> */}
      </div>
      {/* Works */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <img
            src="work1.jpg"
            className="w-full h-[600px] object-cover rounded-3xl"
          />
          {/* <p className="text-gray-500"> Argentina, 2021</p> */}
        
        </div>

     

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <img
              src="work2.jpg"
              className="w-full h-56 object-cover rounded-3xl"
            />
            {/* <p className="text-gray-500">Colombia - June 20, 2022</p> */}
          
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="work3.jpg"
              className="w-full h-56 object-cover rounded-3xl"
            />
            {/* <p className="text-gray-500">Venezuela - June 20, 2022</p> */}
          
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="work4.jpg"
              className="w-full h-56 object-cover rounded-3xl"
            />
            {/* <p className="text-gray-500">Mexico - June 20, 2022</p> */}
          
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="work5.jpg"
              className="w-full h-56 object-cover rounded-3xl"
            />
            {/* <p className="text-gray-500">Japón - June 20, 2022</p> */}
          
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">34 Festival Internacional de Teatro del Caribe</h2>
      <p className="text-xl text-gray-500">
        La organización del 34 FESTIVAL INTERNACIONAL DE TEATRO DEL CARIBE, invita a elencos dedicados a la realización de espectáculos de las artes escénicas, a participar de dicho Festival a realizarse del {startDate} al {endDate} del año 2023 en {city}, {country}. Este evento cuenta con apoyo por parte del Ministerio de Cultura, Alcaldía Distrital de Santa Marta, así como de instituciones públicas, mixtas y privadas.
      </p>
      <br />
      <p className="text-xl text-gray-500">
        Las inscripciones son gratuitas y se realizarán hasta el {registrationDeadline}. Cada delegación podrá participar con uno o más espectáculos en cualquier estilo de las artes escénicas, bien sea en sala de gran formato, sala de pequeño formato, espacio no convencional y espacios de calle. Las obras deben ser de una duración mínima de 30 minutos.
      </p>
      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        ¡Inscríbete ahora!
      </button>
    </div>
    </div>
  );
};

export default Works;
