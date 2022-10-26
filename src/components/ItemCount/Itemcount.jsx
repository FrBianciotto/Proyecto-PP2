import { useState } from "react"
import { Button } from "react-bootstrap";
import './ItemCount.css'
const ItemCount = ({ stock, initial, onAdd, handleInputType }) => {
    const [quantity, setQuantity] = useState(initial)
    function increment() {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    }
    function decrement() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    function addToCart(){
        onAdd(quantity);
        handleInputType();
    }
    return (
        <section className="itemCount">
            <div className="itemCount-cant">
                <button type="button" className="btn btn-secondary" onClick={increment}>+</button>
                <span>{quantity}</span>
                <button type="button" className="btn btn-secondary" onClick={decrement}>-</button>
            </div>
            {stock > 0 ? (<Button variant="outline-secondary" onClick={addToCart}>AÑADIR AL CARRITO</Button>) : (<h4>Lo sentimos, no hay stock de este producto</h4> )}
        </section>
    )
}

export default ItemCount