import { Link } from 'react-router-dom'
import logoEmptyCart from './emptyCart.svg'
import './EmptyCart.css'
import { Button } from 'react-bootstrap'
const EmptyCart = () => {
  return (
    <div className='emptyCart'>
          <h4>Su carro está vacío.</h4>
          <img className='imgCart' src={logoEmptyCart} alt="Carrito vacío" />
          <Link to='/'>
            <Button variant='outline-secondary'>Ir a comprar</Button>
          </Link>
    </div>
  )
}

export default EmptyCart