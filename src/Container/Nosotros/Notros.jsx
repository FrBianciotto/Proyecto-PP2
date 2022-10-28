import Iframe from "react-iframe"
import './nosotros.css'
const Nosotros = () => {
    return (
        <div className="nosotros">
            <div className="d-flex justify-content-center m-5">
                <div className="col-8 col-md-6  ">
                    <h2>Nosotros</h2>
                    <p>Somos productores de la ciudad de rosario. Nos especializamos en la elaboración artesanal de
                        fiambres, conservas y escabeches.
                    </p>
                    <p> Queremos estar en tu mesa, acompañarte en momentos especiales, cumpleaños, celebraciones. Nuestros
                        boxes y combos están pensados para que tengas un lindo detalle con un familiar, amigo o que
                        simplemente te des ese gusto que tanto te mereces.
                    </p>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <section className="comprarProductos row justify-content-center align-items-center">
                    <div className="col-lg-8">
                        <h3 className="mt-2">¡Donde encontrarnos!</h3>
                        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.128990253151!2d-60.65354118525388!3d-32.947603679265875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab15498b6551%3A0x6b03b967a372c5b8!2sMariano%20Moreno%201069%2C%20S2000DKU%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1638570214395!5m2!1ses!2sar" loading="lazy" />
                    </div>
                    <div className="col-lg-4 d-flex flex-column p-1 ">
                        <h3>O contactanos en: </h3>
                        <p><i className="bi bi-instagram"></i> instagram.com/peperone.salumeria/</p>
                        <p><i className="bi bi-facebook"></i> facebook.com/peperone.salumeria.1</p>
                        <p><i className="bi bi-whatsapp"></i>3416624422 - 3416176788</p>
                    </div>
                </section>
            </div>

        </div>

    )
}

export default Nosotros