import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'
import './cart.css'

export const Cart = () => {
    const {cartList, limpiarCarrito,removerItem} = useContext(CartContext)

    return (
        <div>
          <button className='removerItem' onClick = {() => limpiarCarrito()}>vaciar carrito</button>
        <h1>Carrito</h1>


          {cartList.map((itemAdded => 
          <div key={itemAdded.producto.id}>


            <h2>{itemAdded.producto.nombre}</h2>
            <p className='p-carrito'>{itemAdded.cantidad}</p>
            <button  className='removerItem' onClick = {() => removerItem(itemAdded.producto.id)}>eliminar producto</button>
          </div>
          
          ))}
        </div>
      )
   
    
}
