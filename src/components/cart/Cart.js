import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'
import './cart.css'

export const Cart = () => {
    const {cartList, limpiarCarrito} = useContext(CartContext)
    console.log(cartList, 'vengo de cart')

    return (
        <div>
          <button onClick = {() => limpiarCarrito()}>vaciar carrito</button>
        <h1>Carrito</h1>
          {cartList.map((itemAdded => 
          <div key={itemAdded.producto.id}>
            <h2>{itemAdded.producto.nombre}</h2>
          </div>
          
          ))}
        </div>
      )
   
    
}
