import { useState } from "react";
import { Button } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";

import './form.css'
const Form = () => {
    const {buy} = useCartContext();
    const [customerData, setCustomerData] = useState({});
    const [nameError, setNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [email2Error, setEmail2Error] = useState(false);

    const handleChange = (e) => {
        setCustomerData({
            ...customerData,
            [e.target.name]: e.target.value
        });
    }
    const dataManage = () => {
        setNameError(!customerData.name);
        setPhoneError(!customerData.phone);
        setEmailError(!customerData.email);
        setEmail2Error(!(customerData.email2 === customerData.email));
        if (customerData.name && customerData.phone && customerData.email && (customerData.email2 === customerData.email)) {
            buy(customerData);
        }
    }

  return (
    <div className="form">
        <p>Ingrese sus datos para enviar el pedido:</p>
            <form className="formBuy" onSubmit={buy}>
                {nameError && <span>Debe ingresar un nombre</span>}
                <input name="name" onChange={(e) => handleChange(e)} type="text" placeholder="Nombre" />
               
                {phoneError && <span>Debe ingresar un teléfono</span>}
                <input name="phone" onChange={(e) => handleChange(e)} type="tel" placeholder="Teléfono" />
                
                {emailError && <span>Debe ingresar un correo electrónico</span>}
                <input name="email" onChange={(e) => handleChange(e)} type="email" placeholder="Correo eléctronico" />
                
                {email2Error && <span>El correo electrónico no coincide</span>}
                <input name="email2" onChange={(e) => handleChange(e)} type="email" placeholder="Repita correo electrónico" />
                
                <textarea name="comment" onChange={(e) => handleChange(e)} id="" cols="30" rows="10"></textarea>
            </form>
            <Button variant="outline-secondary" onClick={dataManage}>Enviar pedido</Button>
    </div>
  )
}

export default Form