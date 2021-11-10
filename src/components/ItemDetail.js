import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import {ItemCount} from './ItemCount'
import '../css/itemDetail.css'
import {Intercambiabilidad} from './intercambiabilidad/Intercambiabilidad'
import { CartContext } from './context/CartContext'



export const ItemDetail = ({producto}) => {
        
    
        const {agregarProducto, cartList} = useContext(CartContext)

        const ejecutarFunction = ()=>{agregarProducto({producto})}
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
                                    <ItemCount producto= {producto.nombre} valorInicial = {1} stock = {10}/>'
                                </div>
                                
                                <div>
                                    <Intercambiabilidad productos = {producto} ejecutarFunction = {ejecutarFunction}/>
                                </div> 
                            </div>
                            
                        </Card.Body>
                </Card>
            </div>
)
            
    
}
