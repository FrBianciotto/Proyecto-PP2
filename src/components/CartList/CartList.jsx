import { useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext'
import Form from '../Form/Form'

const CartList = () => {
  const[finalize, setFinalize] = useState(false)
  const { totalPrice, cartList, deleteItem, clearCart} = useCartContext()

  function handleChange(){
    setFinalize(!finalize)
  }
  return (
    <div className='col-10 m-auto'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((product) => (
            <tr key={product.id}>
              <td>#</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button className="delete-button btn btn" onClick={() => deleteItem(product.id)}>
                  <i class="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <p>Precio final: {totalPrice()}</p>
      <Button variant="outline-secondary" onClick={clearCart}>Vaciar pedido</Button>
      <Button variant="outline-secondary" onClick={handleChange}>Finalizar compra</Button>
      {finalize && <Form/>}
      
    </div>

  )
}

export default CartList