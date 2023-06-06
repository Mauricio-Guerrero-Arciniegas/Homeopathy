import React from "react";
import "./Inicio.css";

const Inicio = () => {
  return (
    <>
      <div>
        <div className="btn-wsp">
          <a
            href="https://api.whatsapp.com/send?phone=3137675461"
            className="btn-wsp"
            target="_blank"
          >
            <img
              className="icon-whatsapp"
              src="./assets/icons/whatsapp.png"
              alt=""
              width="40px"
              loading="lazy"
            />
          </a>
        </div>
      </div>
      <div className="background__img">
        <div className="inicio__textos">
          <h2 className="inicio__titulo1">Centro Medico Homeopatico</h2>
          <h3 className="inicio__titulo2">Cuidando tu salud con excelencia y dedicacion</h3>
          <img className="inicio__down" src="./assets/icons/down.svg" alt="" />
        </div>
      </div>
      <div className="inicio__container">
        <div className="inicio__columna">
          <img src="./assets/images/inicio1.jpg" alt="" />
          <p>Es un método terapéutico que utiliza sustancias naturales para
              aliviar los síntomas. Deriva de las palabras griegas homeo, que
              significa "similar", y pathos, que significa "sufrimiento" (como
              la patología de una enfermedad). La homeopatía opera según el
              principio de "lo similar cura lo similar" que se ha utilizado
              empíricamente durante más de 200 años y continúa confirmándose en
              la investigación farmacológica y los estudios clínicos. Lo que
              esto significa es que una persona que sufre síntomas puede ser
              tratada con microdosis de una sustancia capaz de producir síntomas
              similares en una persona sana. Se dice que los medicamentos
              homeopáticos estimulan las reacciones fisiológicas del cuerpo que
              restauran la salud. Esto se logra con un riesgo muy bajo de
              efectos secundarios debido al uso de microdosis.</p>
        </div>
        <div className="inicio__columna">
          <img src="./assets/images/inicio2.jpg" alt="" />
          <p>Una elección natural. Los ingredientes activos de los medicamentos
              homeopáticos están hechos de extractos diluidos de plantas,
              animales, minerales u otras sustancias crudas que se encuentran en
              la naturaleza. Para uso diario. Al igual que otros medicamentos de
              venta libre (OTC), los medicamentos homeopáticos se pueden usar
              para aliviar los síntomas de una amplia gama de afecciones de
              salud comunes, como alergias, tos, resfriados, gripe, estrés,
              dolor de artritis, dolor muscular y dentición. Seguro y confiable.
              La homeopatía se ha utilizado durante más de 200 años,
              construyendo un notable historial de seguridad y generando una
              gran cantidad de conocimientos. Los medicamentos homeopáticos no
              enmascaran los síntomas, no están contraindicados con afecciones
              preexistentes y no se sabe que interactúen con otros medicamentos
              o suplementos, lo que los convierte en una de las opciones más
              seguras para el autotratamiento. Normas rigurosas. Los
              medicamentos homeopáticos se fabrican de acuerdo con los más altos
              estándares, cumpliendo con las regulaciones de la Administración
              de Drogas y Alimentos de los EE. UU. y la Farmacopea Homeopática
              de los Estados Unidos (HPUS). Más opciones y preferencias. Los
              medicamentos homeopáticos están disponibles en una variedad de
              formas de dosificación, como geles, ungüentos, cremas, jarabes,
              gotas para los ojos, tabletas y supositorios.</p>
        </div>
      </div>
    </>
  );
};

export default Inicio;
