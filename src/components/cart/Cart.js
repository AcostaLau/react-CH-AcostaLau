import React, {useContext,  useState} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { getFirebase } from '../firebase/getFirebase'
import firebase from 'firebase'
import './cart.css'

export const Cart = () => {
  const [orderId, setOrderId] = useState('')
    const [formData, setFormData] = useState({
      name:'',
      phone: '',
      email:''
    })
    const {cartList, limpiarCarrito,removerItem, sumaTotal} = useContext(CartContext)


    const generarOrden = (e) => {
      e.preventDefault()

      let orden = {};
      orden.date = firebase.firestore.Timestamp.fromDate(new Date());
      orden.buyer = formData;
      orden.total = sumaTotal();
      orden.items = cartList.map(cartItem => {
        const id = cartItem.producto.id;
        const nombre = cartItem.producto.nombre;
        const precio = cartItem.producto.precio * cartItem.cantidad;

        return {id, nombre, precio}
      })
      console.log(orden)
      const dbQuery = getFirebase()
      dbQuery.collection('orders').add(orden)
      .then(response => setOrderId(response.id))
        .catch (error => alert("Error:", error))
        .finally(() => limpiarCarrito())

    }
   
    


    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }

    console.log(formData)
    return (

      

      
        <div>
          <h1>Carrito</h1>
          {cartList.length
            ? <button className='removerItem' onClick = {() => limpiarCarrito()}>vaciar carrito</button>
            :orderId===""
            ? 
            <div>
                <p className="empty-cart">El carrito está vacío</p>
                <Link className="go-to-home" to="/"> Ir al inicio</Link>
            </div>
            : <div>
            <p className="empty-cart">¡Gracias por tu compra!</p>
            <p className="order-id">Tu código de operación es: {orderId}</p>
            <Link className="go-to-home" to="/"> Ir al inicio</Link>
            </div>
          }
          {cartList.map((itemAdded => 
          <div key={itemAdded.producto.id}>


            <h2>{itemAdded.producto.nombre}</h2>
            <p className='p-carrito'>{itemAdded.cantidad}</p>
            <button  className='removerItem' onClick = {() => removerItem(itemAdded.producto.id)}>eliminar producto</button>

            
          </div>
          
          ))}
          <h3>Total : {sumaTotal()}</h3>

          <h3>Completar datos para finalizar la compra</h3>
            <form 
            onSubmit={generarOrden}
            onChange={handleChange}
            
            >
              <input type='text' name='name' placeholder='Nombre' value={formData.name}></input>
              <input type='text' name='phone' placeholder='Telefono' value={formData.phone}></input>
              <input type='email' name='email' placeholder='Email' value={formData.email}></input>
              <button>Enviar</button>
            </form>
        </div>
      )
    
}
