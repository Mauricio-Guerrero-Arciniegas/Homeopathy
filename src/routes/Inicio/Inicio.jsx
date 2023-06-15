import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import "./Inicio.css";

const Inicio = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    ReactModal.setAppElement("#root");
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Información adicional"
        className="modal__content"
        overlayClassName="modal__overlay"
      >
        <p className="modal__p">
          La Medicina integrativa engloba la medicina convencional y la medicina
          natural, para poner a disposición del paciente todos los instrumentos
          posibles para su curación. Se trata de aprovechar el inmenso
          potencial de la medicina natural, aceptando a su vez, el enorme
          papel que la medicina convencional ha tenido en la mejora de la
          calidad de vida y en la supervivencia de la población.
        </p>
        <button className="modal__button" onClick={closeModal}>
          Cerrar
        </button>
      </ReactModal>

      <div className="background__img">
        <div className="inicio__textos">
          <div className="inicio__titulo">
            <h2 onClick={openModal}>Instituto de medicina Integrativa </h2>
          </div>
          <div>
            <img
              className="inicio__info"
              src="./assets/icons/info.svg"
              alt=""
              onClick={openModal}
            />
          </div>  
        </div>
            <h3 className="inicio__titulo2">
              Cuidando tu salud con excelencia y dedicación
            </h3>
            
          <div>
          </div>

          <img className="inicio__down" src="./assets/icons/down.svg" alt="" />
      </div>

          <h2 className="homeopatia">Homeopatía</h2>
      <div className="inicio__container">
        <div className="inicio__columna">
          <img
            className="inicio__img"
            src="./assets/images/inicio1.jpg"
            alt=""
          />
          <p className="inicio__text">
          La homeopatía es un sistema de medicina alternativa desarrollado en el siglo XVIII por Samuel Hahnemann, un médico alemán. Se basa en el principio de "similia similibus curentur", que significa "lo similar se cura con lo similar". La homeopatía sostiene que una sustancia que causa síntomas en una persona sana puede usarse en dosis muy diluidas para tratar los mismos síntomas en una persona enferma.
          <br />
          <br />
          El enfoque principal de la homeopatía implica la utilización de medicamentos homeopáticos, que son preparados a partir de sustancias naturales, como plantas, minerales o productos animales. Estos medicamentos se elaboran mediante un proceso de dilución y agitación repetida, conocido como potenciación, que según la teoría homeopática aumenta la capacidad curativa de la sustancia original y reduce la toxicidad.
          </p>
        </div>
        <h2 className="beneficios">Beneficios</h2>
        <div className="inicio__columna">
          <img
            className="inicio__img"
            src="./assets/images/inicio2.jpg"
            alt=""
          />
          <p className="inicio__text">
            Una elección natural. Los ingredientes activos de los medicamentos
            homeopáticos están hechos de extractos diluidos de plantas,
            animales, minerales u otras sustancias crudas que se encuentran en
            la naturaleza. Para uso diario. Al igual que otros medicamentos de
            venta libre (OTC), los medicamentos homeopáticos se pueden usar para
            aliviar los síntomas de una amplia gama de afecciones de salud
            comunes, como alergias, tos, resfriados, gripe, estrés, dolor de
            artritis, dolor muscular y dentición. Seguro y confiable.
            <br />
            <br />
            La homeopatía se ha utilizado durante más de 200 años, construyendo un
            notable historial de seguridad y generando una gran cantidad de
            conocimientos. Los medicamentos homeopáticos no enmascaran los
            síntomas, no están contraindicados con afecciones preexistentes y no
            se sabe que interactúen con otros medicamentos o suplementos, lo que
            los convierte en una de las opciones más seguras para el
            autotratamiento. Normas rigurosas. 
            <br />
            <br />
            Los medicamentos homeopáticos se
            fabrican de acuerdo con los más altos estándares, cumpliendo con las
            regulaciones de la Administración de Drogas y Alimentos de los EE.
            UU. y la Farmacopea Homeopática de los Estados Unidos (HPUS). Más
            opciones y preferencias. Los medicamentos homeopáticos están
            disponibles en una variedad de formas de dosificación, como geles,
            ungüentos, cremas, jarabes, gotas para los ojos, tabletas y
            supositorios.
          </p>
        </div>
      </div>
    </>
  );
};

export default Inicio;
