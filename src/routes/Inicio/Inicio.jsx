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
          posibles para su curación. Se trata de no menospreciar la
          potencialidad de la medicina natural, aceptando a su vez, el enorme
          papel que la medicina convencional ha tenido en la mejora de la
          calidad de vida y en la supervivencia de la población.
        </p>
        <button className="modal__button" onClick={closeModal}>
          Cerrar
        </button>
      </ReactModal>

      <div className="background__img">
        <div className="inicio__textos">
          <h2 className="inicio__titulo1" onClick={openModal}>
            Instituto de medicina Integrativa 
          </h2>
            <img
              className="inicio__info"
              src="./assets/icons/info.svg"
              alt=""
            />
          <h3 className="inicio__titulo2">
            Cuidando tu salud con excelencia y dedicación
          </h3>

          <img className="inicio__down" src="./assets/icons/down.svg" alt="" />
        </div>
      </div>

      <div className="inicio__container">
        <div className="inicio__columna">
          <img
            className="inicio__img"
            src="./assets/images/inicio1.jpg"
            alt=""
          />

          <p className="inicio__text">
            <strong>Homeopatía.</strong> Es un método terapéutico que utiliza
            sustancias naturales para aliviar los síntomas. Deriva de las
            palabras griegas homeo, que significa "similar", y pathos, que
            significa "sufrimiento" (como la patología de una enfermedad). La
            homeopatía opera según el principio de "lo similar cura lo similar"
            que se ha utilizado empíricamente durante más de 200 años y continúa
            confirmándose en la investigación farmacológica y los estudios
            clínicos. Lo que esto significa es que una persona que sufre
            síntomas puede ser tratada con microdosis de una sustancia capaz de
            producir síntomas similares en una persona sana. Se dice que los
            medicamentos homeopáticos estimulan las reacciones fisiológicas del
            cuerpo que restauran la salud. Esto se logra con un riesgo muy bajo
            de efectos secundarios debido al uso de microdosis.
          </p>
        </div>
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
            artritis, dolor muscular y dentición. Seguro y confiable. La
            homeopatía se ha utilizado durante más de 200 años, construyendo un
            notable historial de seguridad y generando una gran cantidad de
            conocimientos. Los medicamentos homeopáticos no enmascaran los
            síntomas, no están contraindicados con afecciones preexistentes y no
            se sabe que interactúen con otros medicamentos o suplementos, lo que
            los convierte en una de las opciones más seguras para el
            autotratamiento. Normas rigurosas. Los medicamentos homeopáticos se
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
