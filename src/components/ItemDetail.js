import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import {ItemCount} from './ItemCount'
import '../css/itemDetail.css'
import {Intercambiabilidad} from './intercambiabilidad/Intercambiabilidad'
import { CartContext } from './context/CartContext'



export const ItemDetail = ({producto}) => {
        
    
        const { cartList, agregarItem, cantidadAgregada} = useContext(CartContext)
        // const [cantidad , setCantidad] = useState(1)

        const agregarCantidadAlCarrito = elemento => {
            cantidadAgregada(elemento)
        } 
        console.log('hola', cartList)
        return(
            <div className='contenedorDetalle'>
                
                <Card  className='cardDetail'>
                        <div>
                        <Card.Img className='imgDetalle' variant="top" src= {producto.imagen} />
                        </div>
                            
                        <Card.Body>
                                <div className='contenedorTitulo'>
                                <Card.Title className='nombreDetalle'>{producto.nombre}</Card.Title>
                                </div>
                                <Card.Text className='cardText'>sizes 8-10</Card.Text>


                            <div className='contenedorBotonesDetalle'>
                                <div >
                                    <ItemCount producto= {producto.nombre} valorInicial = {0} stock = {10} cantidad={agregarCantidadAlCarrito}/>'
                                </div>
                                
                                <div>
                                    <Intercambiabilidad producto = {producto} agregarItem = {agregarItem}/>
                                </div> 
                            </div>
                            
                        </Card.Body>
                </Card>
            </div>
)
            
    
}
