import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'
import './cart.css'

export const Cart = () => {
    const {cartList, limpiarCarrito, cantidad, removerItem} = useContext(CartContext)
    console.log(cantidad, 'soy cantidad vengo de cart')
    console.log(cartList, 'vengo de cart')

    return (
        <div>
          <button onClick = {() => limpiarCarrito()}>vaciar carrito</button>
        <h1>Carrito</h1>


          {cartList.map((itemAdded => 
          <div key={itemAdded.id}>


            <h2>{itemAdded.nombre}</h2>
            <p className='p-carrito'>{cantidad}</p>
            <button onClick = {() => removerItem(itemAdded.id)}>eliminar producto</button>
          </div>
          
          ))}
        </div>
      )
   
    
}
