import React, {useContext,  useState} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { getFirebase } from '../firebase/getFirebase'
import firebase from 'firebase'
import { Card, Form, Modal } from 'react-bootstrap'
import './cart.css'
import Button from '@restart/ui/esm/Button'

export const Cart = () => {
  // MODAL
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [orderId, setOrderId] = useState('')
    const [formData, setFormData] = useState({
      name:'',
      phone: '',
      email:''
    })
    const {cartList, limpiarCarrito,removerItem, sumaTotal} = useContext(CartContext)


    const generarOrden = () => {
      // e.preventDefault()

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


    const handleOnClick = () =>{

      handleClose()
      limpiarCarrito()
      generarOrden()
      // handleChange()
    }
    console.log(formData)
    return (

      

      
        <div className='containerCart'> 

          <h1>Carrito</h1>
          {cartList.length
          
          
            ?<div className='containerFinalizarCompra'>
              <button className='removerItems' onClick = {() => handleShow()}>
            <span class="shadow"></span>
            <span class="edge"></span>
            <span class="front text"> Terminar compra
            </span>
          </button> 
           <h3>Monto total : {sumaTotal()}</h3>
            </div> 
            
            
            
            :orderId===""
            ? 
            <div className='cartVacio'>
                <p className="empty-cart">El carrito está vacío</p>
                <Link className="go-to-home" to="/"> Ir al inicio</Link>
            </div>
            : <div>
            <p className="empty-cart compraFinalizada">¡Gracias por tu compra!</p>
            <p className="order-id">Tu código de operación es: {orderId}</p>
            <Link className="go-to-home" to="/"> Ir al inicio</Link>
            </div>
          }
          {cartList.map((itemAdded => 
          <div key={itemAdded.producto.id} className='containerCartBody'>

                              <Card  className='cardDetailCart'>
                                
                                  <Card.Img className='imgDetalle' variant="top" src= {itemAdded.producto.imagen} />
                                
                            
                                <Card.Body className='containerBody'>
                                  <div>
                                    <div className='contenedorTitulo'>
                                      <Card.Title className='nombreDetalle'>{itemAdded.producto.nombre}</Card.Title>
                                    </div>
                                      <Card.Text className='cardText'>cantidad : {itemAdded.cantidad}</Card.Text>
                                      
                                      <Form.Select aria-label="Default select example" className='talles'>
                                        <option>Selecciona el talle</option>
                                        <option value="1">8</option>
                                        <option value="2">9</option>
                                        <option value="3">10</option>
                                      </Form.Select>
                                      <Card.Text className='cardText'>Coste : {itemAdded.cantidad * itemAdded.producto.precio}</Card.Text>
                                  </div>
                                  

                                <div >

                                    <button class="noselect removerItem" onClick = {() => removerItem(itemAdded.producto.id)}><span class="text">Eliminar</span><span class="icon"><svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
                                {/* <button  className='removerItem' onClick = {() => removerItem(itemAdded.producto.id)}>eliminar producto</button> */}
                                </div>
                            
                                </Card.Body>
                              </Card>

          </div>
          
          ))}
         


          {/* MODAL */}



          <Modal show={show} onHide={handleClose}>
              
              <Modal.Header closeButton>
                
                <Modal.Title className='titleForm'>Completar datos para finalizar la compra </Modal.Title>
              </Modal.Header>
            <Modal.Body>
            <form className='cartForm'
            // onSubmit={generarOrden}
            onChange={handleChange}
            
            > 
              <input type='text' name='name' placeholder='Nombre' value={formData.name} required></input>
              <input type='text' name='phone' placeholder='Telefono' value={formData.phone} required></input>
              <input type='email' name='email' placeholder='Email' value={formData.email} required></input>
              {/* <button>Enviar</button> */}
            </form>
            </Modal.Body>
            <Modal.Footer className='modalFooter'>
              <Button variant="secondary" onClick={handleClose} className='closeForm'>
                <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
                <span>Back</span>
              </Button>
              <Button variant="primary"  onClick={() =>{
                //eslint-disable-next-line
                if (formData.length = true) {
                  handleOnClick()
                }else{
                  return alert('completar fomulario')
                 
                }
              }} className='closeButton'>
                <div class="svg-wrapper-1">
                      <div class="svg-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                        </svg>
                      </div>
                    </div>
                    <span>Send</span>
              </Button>
            </Modal.Footer>
          </Modal>

          
          
            {/* <form 
            // onSubmit={generarOrden}
            // onChange={handleChange}
            
            > 
              <input type='text' name='name' placeholder='Nombre' value={formData.name}></input>
              <input type='text' name='phone' placeholder='Telefono' value={formData.phone}></input>
              <input type='email' name='email' placeholder='Email' value={formData.email}></input>
              <button>Enviar</button>
            </form> */}
        </div>
      )
    
}
