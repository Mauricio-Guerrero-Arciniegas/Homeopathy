import React from 'react';

const Servicios = () => {
    return (
        <>
        <section className="portafolio" id="portafolio">
        <div className="contenedor">
            <h2 className="titulo">Portafolio de Servicios</h2>
            <div className="galeria-port">
                <div className="imagen-port">
                    <p>Consulta Medica Homeopática</p>
                    <img src="./assets/images/servicios1.jpg" alt="" loading="lazy"/>
                    <div className="hover-galeria">
                        <p>La homeopatía es un modelo médico clínico terapéutico que
                            utiliza sustancias obtenidas de vegetales, animales y minerales principalmente, en
                            concentraciones muy pequeñas disueltas en agua y alcohol. Los síntomas muestran el
                            esfuerzo curativo del cuerpo, en este sentido el medicamento homeopático respeta al
                            organismo y se encarga de modular o regular los padecimientos en lugar de disfrazarlos.
                        </p>
                    </div>
                </div>
                <div className="imagen-port">
                    <p>Consulta Medicina tradicional China</p>
                    <img src="./assets/images/servicios2.jpg" alt="" loading="lazy"/>
                    <div className="hover-galeria">
                        <p>La medicina tradicional china trata de recuperar el
                            equilibrio del cuerpo y la armonía entre las fuerzas naturales opuestas del ying y el
                            yang, que pueden bloquear el qi y causar enfermedad. La medicina tradicional china
                            incluye acupuntura, régimen de alimentación, terapia con hierbas, meditación, ejercicio
                            físico y masaje. También se llama medicina oriental y MTC.</p>
                    </div>
                </div>
                <div className="imagen-port">
                    <p>Terapia Neural</p>
                    <img src="./assets/images/servicios3.jpg" alt="" loading="lazy"/>
                    <div className="hover-galeria">
                        <p>La terapia neural consiste en la inyección de dosis muy bajas
                            de anestésico local en determinadas zonas del cuerpo con fines terapéuticos. Se
                            considera una forma de medicina alternativa, indicada especialmente en el tratamiento
                            del dolor y las enfermedades crónicas. Su principal valor es que no presenta efectos
                            secundarios ni suele tener complicaciones, y suele realizarse con la procaína como
                            anestésico local.</p>
                    </div>
                </div>
                <div className="imagen-port">
                    <p>Acupuntura</p>
                    <img src="./assets/images/servicios4.jpg" alt="" loading="lazy"/>
                    <div className="hover-galeria">
                        <p>La acupuntura describe una familia de procedimientos que
                            estimulan diferentes puntos del cuerpo utilizando una variedad de técnicas. La técnica
                            de acupuntura que se estudia científicamente con mayor frecuencia consiste en colocar
                            agujas metálicas sólidas, delgadas, estériles en la piel y manipularlas.</p>
                    </div>
                </div>
                
                <div className="imagen-port">
                    <p>Terapia con Sueros</p>
                    <img src="./assets/images/servicios5.jpg" alt="" loading="lazy"/>
                    <div className="hover-galeria">
                        <p>Tratamiento consistente en la administración de sueros
                            específicos que favorecen la autocuración de nuestro organismo a partir de una selección
                            de vitaminas, oligoelementos y fármacos biológicos naturales según nuestras necesidades
                            concretas: adelgazar, embellecer nuestra piel, mejorar la salud de nuestro cabello,
                            etcétera.</p>
                    </div>
                </div>
                <div className="imagen-port">
                    <p>Auriculoterapia</p>
                    <img src="./assets/images/servicios6.jpg" alt="" loading="lazy"/>
                    <div className="hover-galeria">
                        <p>La auriculoterapia es una técnica de uso de puntos en la piel
                            de la aurícula (oído externo) para diagnosticar y tratar el dolor.</p>
                    </div>
                </div>

                <div className="imagen-port">
                    <p>Electroacupuntura</p>
                    <img src="./assets/images/servicios7.jpg" alt="" loading="lazy"/>
                    <div className="hover-galeria">
                        <p>Mediante la aplicacion correcta de una corriente electrica adaptada para uso medico se potencia el efecto de la acupuntura tradicional reduciendo molestias para el paciente, numero de sesiones de tratamiento y mayor eficacia en el control del dolor cronico causado por diferentes patologias como arthrosis, artritis, fibtomialgia, enfermedad reumatica.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    );
}

export default Servicios;
