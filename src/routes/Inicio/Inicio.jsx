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
          posibles para su curación. Se trata de aprovechar el inmenso potencial
          de la medicina natural, aceptando a su vez, el enorme papel que la
          medicina convencional ha tenido en la mejora de la calidad de vida y
          en la supervivencia de la población.
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

        <div></div>

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
            La homeopatía es un sistema de medicina alternativa desarrollado en
            el siglo XVIII por Samuel Hahnemann, un médico alemán. Se basa en el
            principio de "similia similibus curentur", que significa "lo similar
            se cura con lo similar". La homeopatía sostiene que una sustancia
            que causa síntomas en una persona sana puede usarse en dosis muy
            diluidas para tratar los mismos síntomas en una persona enferma.
            <br />
            <br />
            El enfoque principal de la homeopatía implica la utilización de
            medicamentos homeopáticos, que son preparados a partir de sustancias
            naturales, como plantas, minerales o productos animales. Estos
            medicamentos se elaboran mediante un proceso de dilución y agitación
            repetida, conocido como potenciación, que según la teoría
            homeopática aumenta la capacidad curativa de la sustancia original y
            reduce la toxicidad.
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
          </p>
        </div>
        <h2 className="beneficios">Terapia del dolor</h2>
        <div className="inicio__columna">
          <img
            className="inicio__img"
            src="./assets/images/terapia.jpg"
            alt=""
          />
          <p className="inicio__text">
          La terapia del dolor es una forma de tratamiento diseñada para reducir el malestar, controlar el dolor crónico y restablecer la amplitud de movimiento cuando se ha producido una lesión física. En última instancia, el objetivo de la terapia del dolor es mejorar la salud y el bienestar general del paciente.
          </p>
        </div>
        <h2 className="beneficios">Tratamiento complementario del Cáncer</h2>
        <div className="inicio__columna">
          <img
            className="inicio__img"
            src="./assets/images/tratamiento.jpg"
            alt=""
          />
          <p className="inicio__text">
          La medicina complementaria se refiere a tratamientos que se usan junto con tratamientos médicos convencionales, como el uso de acupuntura para ayudar con los efectos secundarios del tratamiento del cáncer. La medicina alternativa se usa en vez de los tratamientos médicos convencionales.
          </p>
        </div>
        <h2 className="beneficios">Enfermedades Crónicas</h2>
        <div className="inicio__columna">
          <img
            className="inicio__img"
            src="./assets/images/integrativa.jpg"
            alt=""
          />
          <p className="inicio__text">
          La Medicina integrativa permite abordar pacientes con enfermedades crónicas que hasta ese momento recibían un tratamiento meramente paliativo, en vez de curativo. El abordaje integral, combinando tratamientos convencionales con alternativas terapéuticas complementarias, potencia los resultados enormemente.
          </p>
        </div>
      </div>
    </>
  );
};

export default Inicio;
