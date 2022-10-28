import { useCartContext } from '../../context/CartContext'

import CartList from '../../components/CartList/CartList'
import EmptyCart from '../../components/EmptyCart/EmptyCart'

const Cart = () => {
  const { cartList } = useCartContext()
  return (
    <>
      <h2 className='mt-4 mb-3'> Detalle del Carrito</h2>
      {cartList.length ? (
        <CartList/>
      ) : (
        <EmptyCart/>
      )}

    </>
  )
}

export default Cart