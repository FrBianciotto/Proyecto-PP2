import React from 'react'
import './recetas.css'
const Recetas = () => {
    return (

        <div className="container containerRecetas">
            <h2 className="tituloSecciones">Recetas</h2>
            <div className="mb-4 row justify-content-center recetas align-items-center">
                <img src="./assets/images/tallarinesConTS.jpg" alt="Tallarines con tomates secos" className="col-12 col-md-4" />
                <div className="col-12 col-md-6 mt-3">
                    <h3>Tallarines con tomates secos</h3>
                    <ol>
                        <li>Cocinar los tallarines de acuerdo a las instrucciones del envase (puede ser cualquier
                            tipo de pasta fresca o fideos secos).</li>
                        <li>Cortar los tomates (también pueden quedar en trozos grandes./assets. va en gusto)</li>
                        <li>En una sartén mezclamos el aceite de oliva con los ajos triturados y los tomates, y
                            sofreímos por unos minutos (podés usar el aceite del frasco de tomates que le da un
                            sabor espectacular).</li>
                        <li>Luego mezclamos la pasta con el sofrito de los tomates, agregamos hojas de albahaca, sal
                            y pimienta.</li>
                        <li>Servimos con un buen queso parmesano y a disfrutar! </li>
                    </ol>
                </div>
            </div>
            <div className="mb-4 row justify-content-center recetas align-items-center">
                <img src="./assets/images/carpaccio.jpg" alt="Carpaccio" className="col-12 col-md-4" />
                <div className="col-12 col-md-6 mt-3">
                    <h3>Carpaccio de Bresaola</h3>
                    <p>Si bien el carpaccio es un plato en el que la carne se masera y cocina con frío, está es una
                        opción súper sencilla y sabrosa para sorprender con una entrada original, donde utilizamos
                        la bresaola, un fiambre hecho de carne de ternera curada, con un característico color
                        púrpura y sabor muy particular.</p>

                    <ol>
                        <li>Lavamos la rúcula y la secamos con papel de cocina.</li>
                        <li>En la fuente de servir disponemos las rodajas de bresaola y encima las hojas de rúcula.
                        </li>
                        <li>Cortamos unas láminas de parmesano.</li>
                        <li>Un poco de aceite de oliva, sal y unas gotas de jugo de limón o acceto.</li>
                    </ol>
                </div>
            </div>
            <div className="mb-4 row justify-content-center recetas align-items-center">
                <img src="./assets/images/saltimbocca.jpg" alt="Saltimbocca" className="col-12 col-md-4" />
                <div className="col-12 col-md-6 mt-3">
                    <h3>Saltimbocca allá romana</h3>
                    <p>Los saltimbocca a la romana son un plato típico de la región Lacio, región donde está Roma.
                        El nombre "saltimbocca" viene de "saltare in bocca", (saltar en la boca), por ser tan rico.
                    </p>

                    <ol>
                        <li>Poner los escalopes de sobre una tabla, cubrir con un film y aplanarlos con un mazo para
                            carne (martillo de cocina o espalmador) hasta que tengan unos 5 mm de grosor.
                            Salpimentar a gusto</li>
                        <li> Encima de cada escalope poner una feta de jamón crudo cubriendo la carne y sobre ella 1
                            hoja de salvia, y sujetar todo con un palillo de dientes para mantener las capas juntas.
                        </li>
                        <li>Calentar una sartén grande a fuego medio, agregar 40 g de manteca junto con un chorrito
                            de aceite.</li>
                        <li>Poner los escalopes, con el lado de la carne sobre la sartén y cocinar hasta que el lado
                            inferior se dore. Añadir el vino blanco y dejar evaporar, luego cubrir con la tapa hasta
                            que la carne esté bien cocida.</li>
                        <li>Agregar el resto de la manteca junto con el agua en el sartén y cocinar unos minutos más
                            hasta obtener una salsa rica y brillante (rociarla sobre los escalones al servirlos).
                        </li>
                    </ol>
                </div>
                <div className="mb-4 row justify-content-center recetas align-items-center">
                    <img src="./assets/images/crujienteJC.jpg" alt="Crujiente de Jamon Crudo" className="col-12 col-md-4" />
                    <div className="col-12 col-md-6 mt-3">
                        <div className="descripcionReceta">
                            <h3>Crujiente de Jamón Crudo</h3>
                            <p> Es una muy buena opción para aderezar platos o darles un toque salado y crujiente de
                                forma original. De hecho, en algunas recetas es capaz de sustituir a esa sal gruesa
                                o en escamas que espolvoreamos por arriba.</p>

                            <ol>
                                <li>Coloca en un plato dos hojas de papel de cocina, y encima la lonja de jamón.
                                </li>
                                <li>Dobla el papel de manera que cubra la feta, y presiona con las manos para que el
                                    papel se pegue un poco a la feta.</li>
                                <li>Pone el plato en el microondas. Dependiendo del grosor de la feta, necesitará
                                    más o menos tiempo. Comienza dándole 15 segundos.</li>
                                <li> Lo sacas, rota el paquete de papel y volver a ponerlo otros 15 segundos. Así
                                    vas a repetir de a 15 segundos hasta que veas que empieza a dorarse y secarse.
                                </li>
                                <li>Tené en cuenta que primero tiende a ablandarse. Luego fuera del microondas
                                    termina de secarse</li>
                                <li>Ya está listo! Podes utilizarlo cortándolo en trozos para poner sobre tus
                                    platos, o romperlo con tus propios dedos o machacándolo en un mortero para
                                    espolvorearlo.</li>
                            </ol>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Recetas
