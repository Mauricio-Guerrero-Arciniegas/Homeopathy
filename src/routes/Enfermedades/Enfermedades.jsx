import React, { useState } from "react";
import "./Enfermedades.css";

function App() {
  const [info, setInfo] = useState("");
  const [areButtonsVisible, setAreButtonsVisible] = useState(true);

  const handleButtonClick = (newInfo) => {
    setInfo(newInfo);
    setAreButtonsVisible(false);
  };

  const handleCloseClick = () => {
    setInfo("");
    setAreButtonsVisible(true);
  };

  return (
    <>
      <h2 className="enfermedades__titulo">Enfermedades</h2>
      <div className="contenedor-enfermedades">
        {areButtonsVisible && (
          <div className="contenedor-botones">
            <button
              className="buttons"
              onClick={() =>
                handleButtonClick(
                  <>
                    <div className="container-card">
                      <div className="card">
                        <div className="box">
                          <div className="icon">
                            <p className="descripcion-enfermedad">
                            La amigdalitis crónica representa el caso menos común en el cual las amígdalas sufren de una infección vírica o bacteriana casi permanente, la cual presenta síntomas intermitentes durante un periodo superior a seis meses.
                            </p>
                            <div className="iconBox">
                              <img
                                className="enfermedades__img"
                                src="./assets/images/amigdalitis.jpg"
                                alt="Icono de Hepatitis A"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            >
              Amigdalitis Crónica
            </button>

            <button
              className="buttons"
              onClick={() =>
                handleButtonClick(
                  <>
                    <div className="container-card">
                      <div className="card">
                        <div className="box">
                          <div className="icon">
                            <p className="descripcion-enfermedad">
                            La ansiedad es un sentimiento de miedo, temor e inquietud. Puede hacer que sude, se sienta inquieto y tenso, y tener palpitaciones. Puede ser una reacción normal al estrés.
                            </p>
                            <div className="iconBox">
                              <img
                                className="enfermedades__img"
                                src="./assets/images/ansiedad.jpg"
                                alt="Icono de Hepatitis A"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            >
              Ansiedad
            </button>

            <button
              className="buttons"
              onClick={() =>
                handleButtonClick(
                  <>
                    <div className="container-card">
                      <div className="card">
                        <div className="box">
                          <div className="icon">
                            <p className="descripcion-enfermedad">
                            La artrosis es un trastorno crónico que causa alteraciones en el cartílago y los tejidos circundantes, y se caracteriza por dolor, rigidez y pérdida de la función. La artritis causada por la afectación del cartílago articular y los tejidos circundantes se vuelve muy frecuente con el envejecimiento.
                            </p>
                            <div className="iconBox">
                              <img
                                className="enfermedades__img"
                                src="./assets/images/artrosis.jpg"
                                alt="Icono de Hepatitis A"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            >
              Artrosis
            </button>

            <button
              className="buttons"
              onClick={() =>
                handleButtonClick(
                  <>
                    <div className="container-card">
                      <div className="card">
                        <div className="box">
                          <div className="icon">
                            <p className="descripcion-enfermedad">
                            Es una enfermedad crónica que provoca que las vías respiratorias de los pulmones se hinchen y se estrechen. Esto hace que se presente dificultad para respirar como sibilancias, falta de aliento, opresión en el pecho y tos.
                            </p>
                            <div className="iconBox">
                              <img
                                className="enfermedades__img"
                                src="./assets/images/asma.jpg"
                                alt="Icono de Hepatitis A"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            >
              Asma
            </button>

            <button
              className="buttons"
              onClick={() =>
                handleButtonClick(
                  <>
                    <div className="container-card">
                      <div className="card">
                        <div className="box">
                          <div className="icon">
                            <p className="descripcion-enfermedad">
                            Afección pulmonar que se presenta con el tiempo en la que los bronquios (grandes conductos de aire que conducen a los pulmones) se inflaman y forman cicatrices. Esto hace que los bronquios produzcan grandes cantidades de moco y puede causar tos crónica y problemas respiratorios.
                            </p>
                            <div className="iconBox">
                              <img
                                className="enfermedades__img"
                                src="./assets/images/bronquitis.jpg"
                                alt="Icono de Hepatitis A"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            >
              Bronquitis Crónica
            </button>

            <button
              className="buttons"
              onClick={() =>
                handleButtonClick(
                  <>
                    <div className="container-card">
                      <div className="card">
                        <div className="box">
                          <div className="icon">
                            <p className="descripcion-enfermedad">
                            La bursitis es un trastorno doloroso que afecta las pequeñas bolsas rellenas de líquido (bolsas sinoviales) que proporcionan amortiguación a los huesos, tendones y músculos alrededor de las articulaciones. La bursitis ocurre cuando estas bolsas se inflaman.
                            </p>
                            <div className="iconBox">
                              <img
                                className="enfermedades__img"
                                src="./assets/images/bursitis.png"
                                alt="Icono de Hepatitis A"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            >
              Busritis
            </button>

            <button
              className="buttons"
              onClick={() =>
                handleButtonClick(
                  <>
                    <div className="container-card">
                      <div className="card">
                        <div className="box">
                          <div className="icon">
                            <p className="descripcion-enfermedad">
                            La ciática es un síntoma de algún problema del nervio ciático, el nervio más largo del cuerpo. Este nervio controla los músculos de la parte posterior de la rodilla y de la parte inferior de la pierna y brinda las sensaciones en la parte posterior del muslo, parte de la pierna y la planta del pie.
                            </p>
                            <div className="iconBox">
                              <img
                                className="enfermedades__img"
                                src="./assets/images/ciatica.jpg"
                                alt="Icono de Hepatitis A"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            >
              Ciática
            </button>
            
            <button
              className="buttons"
              onClick={() =>
                handleButtonClick(
                  <>
                    <div className="container-card">
                      <div className="card">
                        <div className="box">
                          <div className="icon">
                            <p className="descripcion-enfermedad">
                            El síndrome de colon irritable es un trastorno frecuente que afecta el estómago y los intestinos, que en conjunto forman el tracto gastrointestinal. Algunos de los síntomas son cólicos, dolor abdominal, hinchazón abdominal, gases y diarrea o estreñimiento (o ambos).
                            </p>
                            <div className="iconBox">
                              <img
                                className="enfermedades__img"
                                src="./assets/images/colon.jpg"
                                alt="Icono de Hepatitis A"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            >
              Colon Irritable
            </button>

            <button
              className="buttons"
              onClick={() =>
                handleButtonClick(
                  <>
                    <div className="container-card">
                      <div className="card">
                        <div className="box">
                          <div className="icon">
                            <p className="descripcion-enfermedad">
                            La depresión es una enfermedad que se caracteriza por una tristeza persistente y por la pérdida de interés en las actividades con las que normalmente se disfruta, así como por la incapacidad para llevar a cabo las actividades cotidianas, durante al menos dos semanas.
                            </p>
                            <div className="iconBox">
                              <img
                                className="enfermedades__img"
                                src="./assets/images/depresion.jpg"
                                alt="Icono de Hepatitis A"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            >
              Depresion
            </button>

            <button
              className="buttons"
              onClick={() =>
                handleButtonClick(
                  <>
                    <div className="container-card">
                      <div className="card">
                        <div className="box">
                          <div className="icon">
                            <p className="descripcion-enfermedad">
                            Enfermedad que afecta el disco intervertebral que se encuentra formado por una sustancia gelatinosa, llamada núcleo pulposo además de un anillo fibroso; se encuentra entre cada vértebra y su función es proporcionar amortiguación a la columna vertebral.
                            </p>
                            <div className="iconBox">
                              <img
                                className="enfermedades__img"
                                src="./assets/images/discopatia.jpg"
                                alt="Icono de Hepatitis A"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            >
              Discopatía Crónica
            </button>

            <button
              className="buttons"
              onClick={() =>
                handleButtonClick(
                  <>
                    <div className="container-card">
                      <div className="card">
                        <div className="box">
                          <div className="icon">
                            <p className="descripcion-enfermedad">
                            El dolor crónico es el que persiste o se repite en un período mayor a 3 meses, persiste mas de 1 mes después de la resolución de una lesión tisular aguda o acompaña una lesión que no cicatriza. Las causas incluyen trastornos crónicos
                            </p>
                            <div className="iconBox">
                              <img
                                className="enfermedades__img"
                                src="./assets/images/dolor.jpg"
                                alt="Icono de Hepatitis A"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            >
              Dolor Cronico
            </button>

            <button
              className="buttons"
              onClick={() =>
                handleButtonClick(
                  <>
                    <div className="container-card">
                      <div className="card">
                        <div className="box">
                          <div className="icon">
                            <p className="descripcion-enfermedad">
                            El dolor de espalda es una de las razones más comunes por las que las personas buscan atención médica o faltan al trabajo. El dolor de espalda es una de las principales causas de discapacidad en todo el mundo.
                            Afortunadamente, hay medidas que pueden ayudar a prevenir la mayoría de los eventos de dolor de espalda, sobre todo en el caso de las personas menores de 60 años. Si la prevención falla, un simple tratamiento en el hogar y usar el cuerpo de manera correcta a menudo curarán tu espalda en unas pocas semanas. Rara vez se requiere cirugía para tratar el dolor de espalda.
                            </p>
                            <div className="iconBox">
                              <img
                                className="enfermedades__img"
                                src="./assets/images/dolor-de-espalda.jpg"
                                alt="Icono de Hepatitis A"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            >
              Dolor de espalda
            </button>

            <button
              className="buttons"
              onClick={() =>
                handleButtonClick(
                  <>
                    <div className="container-card">
                      <div className="card">
                        <div className="box">
                          <div className="icon">
                            <p className="descripcion-enfermedad">
                            El trastorno de estrés postraumático (TEPT) es una afección de salud mental que algunas personas desarrollan tras experimentar o ver algún evento traumático. Este episodio puede poner en peligro la vida, como la guerra, un desastre natural, un accidente automovilístico o una agresión sexual.
                            </p>
                            <div className="iconBox">
                              <img
                                className="enfermedades__img"
                                src="./assets/images/dolor.jpg"
                                alt="Icono de Hepatitis A"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            >
              Dolor postraumático
            </button>

            <button
              className="buttons"
              onClick={() =>
                handleButtonClick(
                  <>
                    <div className="container-card">
                      <div className="card">
                        <div className="box">
                          <div className="icon">
                            <p className="descripcion-enfermedad">
                            La fibromialgia es una afección crónica que causa dolor en todo el cuerpo, fatiga y otros síntomas. Las personas con fibromialgia pueden ser más sensibles al dolor que aquellas que no la tienen. Esto se conoce como percepción anormal del dolor.
                            </p>
                            <div className="iconBox">
                              <img
                                className="enfermedades__img"
                                src="./assets/images/fibromialgia.jpg"
                                alt="Icono de Hepatitis A"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            >
              Fibromialgia
            </button>

            <button
              className="buttons"
              onClick={() =>
                handleButtonClick(
                  <>
                    <div className="container-card">
                      <div className="card">
                        <div className="box">
                          <div className="icon">
                            <p className="descripcion-enfermedad">
                            La gastritis crónica consiste en la inflamación inespecífica de la mucosa gástrica de evolución progresiva y larga, con una etiología múltiple que se caracteriza por presentar lesiones histológicas crónicas. Su localización principal es en el antro y en el cuerpo gástrico.
                            </p>
                            <div className="iconBox">
                              <img
                                className="enfermedades__img"
                                src="./assets/images/gastritis.jpg"
                                alt="Icono de Hepatitis A"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            >
              Gastritis Cronica
            </button>

            <button
              className="buttons"
              onClick={() =>
                handleButtonClick(
                  <>
                    <div className="container-card">
                      <div className="card">
                        <div className="box">
                          <div className="icon">
                            <p className="descripcion-enfermedad">
                            El término hombro doloroso engloba todos los problemas que puedan provocar dolor en el hombro. Las causas que pueden desencadenar una patología o lesión en el hombro pueden estar en la degeneración de los tendones por desgaste, esfuerzos físicos laborales o deportivos de forma repetitiva, y traumatismos violentos.
                            </p>
                            <div className="iconBox">
                              <img
                                className="enfermedades__img"
                                src="./assets/images/hombro.jpg"
                                alt="Icono de Hepatitis A"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            >
              Hombro Doloroso
            </button>

            <button
              className="buttons"
              onClick={() =>
                handleButtonClick(
                  <>
                    <div className="container-card">
                      <div className="card">
                        <div className="box">
                          <div className="icon">
                            <p className="descripcion-enfermedad">
                            El insomnio es un trastorno del sueño común. Si usted lo padece tiene problemas para conciliar el sueño, quedarse dormido o los dos. Como resultado dormirá poco o tendrá un sueño de poca calidad. Quizás no se sienta descansado al levantarse.
                            </p>
                            <div className="iconBox">
                              <img
                                className="enfermedades__img"
                                src="./assets/images/insomnio.jpg"
                                alt="Icono de Hepatitis A"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            >
              Insomnio
            </button>

            <button
              className="buttons"
              onClick={() =>
                handleButtonClick(
                  <>
                    <div className="container-card">
                      <div className="card">
                        <div className="box">
                          <div className="icon">
                            <p className="descripcion-enfermedad">
                            Es un tipo de dolor de cabeza que puede ocurrir con síntomas como náuseas, vómitos o sensibilidad a la luz y al sonido. En la mayoría de las personas, se siente un dolor pulsátil únicamente en un lado de la cabeza.
                            </p>
                            <div className="iconBox">
                              <img
                                className="enfermedades__img"
                                src="./assets/images/migraña.jpg"
                                alt="Icono de Hepatitis A"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            >
              Migraña
            </button>

            <button
              className="buttons"
              onClick={() =>
                handleButtonClick(
                  <>
                    <div className="container-card">
                      <div className="card">
                        <div className="box">
                          <div className="icon">
                            <p className="descripcion-enfermedad">
                            La neuralgia es un dolor agudo y espantoso que sigue la ruta de un nervio y se debe a la irritación o daño al nervio.
                            </p>
                            <div className="iconBox">
                              <img
                                className="enfermedades__img"
                                src="./assets/images/neuralgia.jpg"
                                alt="Icono de Hepatitis A"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            >
              Neuralgia
            </button>

            <button
              className="buttons"
              onClick={() =>
                handleButtonClick(
                  <>
                    <div className="container-card">
                      <div className="card">
                        <div className="box">
                          <div className="icon">
                            <p className="descripcion-enfermedad">
                            La enfermedad de Parkinson es un tipo de trastorno del movimiento. Ocurre cuando las células nerviosas (neuronas) no producen suficiente cantidad de una sustancia química importante en el cerebro conocida como dopamina.
                            </p>
                            <div className="iconBox">
                              <img
                                className="enfermedades__img"
                                src="./assets/images/parkinson.jpg"
                                alt="Icono de Hepatitis A"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            >
              Parkinson
            </button>

            <button
              className="buttons"
              onClick={() =>
                handleButtonClick(
                  <>
                    <div className="container-card">
                      <div className="card">
                        <div className="box">
                          <div className="icon">
                            <p className="descripcion-enfermedad">
                            La rinitis crónica causa obstrucción nasal y, en casos graves, costras, hemorragia frecuente y secreción nasal espesa, maloliente y llena de pus. Los descongestionantes pueden aliviar los síntomas.
                            </p>
                            <div className="iconBox">
                              <img
                                className="enfermedades__img"
                                src="./assets/images/rinitis.jpg"
                                alt="Icono de Hepatitis A"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            >
              Rinitis Crónica
            </button>

            <button
              className="buttons"
              onClick={() =>
                handleButtonClick(
                  <>
                    <div className="container-card">
                      <div className="card">
                        <div className="box">
                          <div className="icon">
                            <p className="descripcion-enfermedad">
                            La cervicalgia es el dolor que afecta a la nuca y las vértebras cervicales y que puede extenderse al cuello, la cabeza o a las extremidades superiores. Esta dolencia limita los movimientos y puede venir acompañada incluso de disfunción neurológica, aunque sólo en el 1% de los casos.
                            </p>
                            <div className="iconBox">
                              <img
                                className="enfermedades__img"
                                src="./assets/images/cervicalgia.jpg"
                                alt="Icono de Hepatitis A"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            >
              Cervicalgia
            </button>

            <button
              className="buttons"
              onClick={() =>
                handleButtonClick(
                  <>
                    <div className="container-card">
                      <div className="card">
                        <div className="box">
                          <div className="icon">
                            <p className="descripcion-enfermedad">
                            Su manguito rotador es parte de la articulación del hombro. Es un grupo de músculos y tendones que sujeta firmemente la parte superior del hueso de la parte superior del brazo en la cavidad del hombro. El manguito rotador mantiene estable el hombro cuando mueve el brazo en alguna dirección.
                            </p>
                            <div className="iconBox">
                              <img
                                className="enfermedades__img"
                                src="./assets/images/manguito_1.jpg"
                                alt="Icono de Hepatitis A"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            >
              Sindrome del manguito rotador
            </button>

            <button
              className="buttons"
              onClick={() =>
                handleButtonClick(
                  <>
                    <div className="container-card">
                      <div className="card">
                        <div className="box">
                          <div className="icon">
                            <p className="descripcion-enfermedad">
                            El túnel carpiano es una angosta abertura entre los huesos de la muñeca y el ligamento que los mantiene unidos. Un nervio, llamado nervio mediano, va desde la parte inferior del brazo a través del túnel carpiano hasta la mano. Este nervio brinda sensibilidad al pulgar y los tres primeros dedos.
                            </p>
                            <div className="iconBox">
                              <img
                                className="enfermedades__img"
                                src="./assets/images/carpiano.jpg"
                                alt="Icono de Hepatitis A"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            >
              Sindrome del tunel carpiano
            </button>

            <button
              className="buttons"
              onClick={() =>
                handleButtonClick(
                  <>
                    <div className="container-card">
                      <div className="card">
                        <div className="box">
                          <div className="icon">
                            <p className="descripcion-enfermedad">
                            Es un tipo de movimiento tembloroso involuntario. No se ha podido identificar una causa. Involuntario quiere decir que usted tiembla sin tratar de hacerlo y no puede dejar de hacerlo a voluntad.
                            </p>
                            <div className="iconBox">
                              <img
                                className="enfermedades__img"
                                src="./assets/images/temblor.jpeg"
                                alt="Icono de Hepatitis A"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            >
              Temblor esencial
            </button>

            <button
              className="buttons"
              onClick={() =>
                handleButtonClick(
                  <>
                    <div className="container-card">
                      <div className="card">
                        <div className="box">
                          <div className="icon">
                            <p className="descripcion-enfermedad">
                            Tendinitis es la inflamación severa de un tendón. La tendinitis ocurre en forma usual tras una lesión recurrente en articulaciones como la muñeca o el tobillo. Algunos tipos comunes de tendinitis son nombrados según el deporte que aumenta su riesgo de sufrirla, como el "codo de tenista".
                            </p>
                            <div className="iconBox">
                              <img
                                className="enfermedades__img"
                                src="./assets/images/tendinitis.jpeg"
                                alt="Icono de Hepatitis A"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            >
              Tendinitis
            </button>

            <button
              className="buttons"
              onClick={() =>
                handleButtonClick(
                  <>
                    <div className="container-card">
                      <div className="card">
                        <div className="box">
                          <div className="icon">
                            <p className="descripcion-enfermedad">
                            El tinnitus, también conocido como acúfeno, es la percepción de sonido que no tiene una fuente externa, por lo que otras personas no pueden escucharlo. A menudo, el tinnitus se describe como un timbre en los oídos, pero algunas personas también oyen otros tipos de sonidos como un rugido o un zumbido.
                            </p>
                            <div className="iconBox">
                              <img
                                className="enfermedades__img"
                                src="./assets/images/tinnitus.jpg"
                                alt="Icono de Hepatitis A"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            >
              Tinnitus
            </button>

            <button
              className="buttons"
              onClick={() =>
                handleButtonClick(
                  <>
                    <div className="container-card">
                      <div className="card">
                        <div className="box">
                          <div className="icon">
                            <p className="descripcion-enfermedad">
                            La tortícolis es una contracción muscular prolongada que afecta a los músculos del cuello, lo cual genera dolor y provoca que la cabeza se voltee o rote hacia un lado, en algunas ocasiones, o que sea más complicado girar la cabeza de manera natural.
                            </p>
                            <div className="iconBox">
                              <img
                                className="enfermedades__img"
                                src="./assets/images/torticolis.jpg"
                                alt="Icono de Hepatitis A"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            >
              Torticolis
            </button>

            <button
              className="buttons"
              onClick={() =>
                handleButtonClick(
                  <>
                    <div className="container-card">
                      <div className="card">
                        <div className="box">
                          <div className="icon">
                            <p className="descripcion-enfermedad">
                            El vértigo es una sensación de movimiento o giros que a menudo se describe como mareo. El vértigo no es lo mismo que sentirse aturdido. Las personas con vértigo sienten como si realmente estuvieran girando o moviéndose, o como si el mundo estuviera girando a su alrededor.
                            </p>
                            <div className="iconBox">
                              <img
                                className="enfermedades__img"
                                src="./assets/images/vertigo.jpg"
                                alt="Icono de Hepatitis A"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            >
              Vertigo
            </button>


          </div>
        )}
        {info && (
          <div>
            {info}
            <button className="cerrar" onClick={handleCloseClick}>
              Cerrar
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
