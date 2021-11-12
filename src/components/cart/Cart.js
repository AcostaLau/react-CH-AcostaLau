import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'
import './cart.css'

export const Cart = () => {
    const {cartList, limpiarCarrito, cantidad} = useContext(CartContext)
    console.log(cartList, 'vengo de cart')

    return (
        <div>
          <button onClick = {() => limpiarCarrito()}>vaciar carrito</button>
        <h1>Carrito</h1>


          {cartList.map((itemAdded => 
          <div key={itemAdded.id}>


            <h2>{itemAdded.nombre}</h2>
            <p className='p-carrito'>{cantidad}</p>

          </div>
          
          ))}
        </div>
      )
   
    
}
