import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import './cart.css'

export const Cart = () => {
    const {cartList, limpiarCarrito,removerItem, sumaTotal} = useContext(CartContext)

    return (

      

      
        <div>
          <h1>Carrito</h1>
          {cartList.length
            ? <button className='removerItem' onClick = {() => limpiarCarrito()}>vaciar carrito</button>
            : <div>
                <p className="empty-cart">El carrito está vacío</p>
                <Link className="go-to-home" to="/"> Ir al inicio</Link>
            </div>
          }
          {cartList.map((itemAdded => 
          <div key={itemAdded.producto.id}>


            <h2>{itemAdded.producto.nombre}</h2>
            <p className='p-carrito'>{itemAdded.cantidad}</p>
            <button  className='removerItem' onClick = {() => removerItem(itemAdded.producto.id)}>eliminar producto</button>

            <h3>Total : {sumaTotal()}</h3>
          </div>
          
          ))}
        </div>
      )
    
}
