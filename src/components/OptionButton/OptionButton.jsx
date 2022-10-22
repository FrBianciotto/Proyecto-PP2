import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const OptionButton = () => {
  return (
    <div className='optionButtons'>
        <Link to='/cart'>
            <Button variant="outline-secondary">IR AL CARRITO</Button>
        </Link>
        <Link to='/'>
            <Button variant="outline-secondary">SEGUIR COMPRANDO</Button>
        </Link>
    </div>
  )
}

export default OptionButton