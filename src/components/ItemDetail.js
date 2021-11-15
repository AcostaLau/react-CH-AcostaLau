import React, { useContext, useState } from 'react'
import { Card } from 'react-bootstrap'
import {ItemCount} from './ItemCount'
import '../css/itemDetail.css'
import { CartContext } from './context/CartContext'



export const ItemDetail = ({producto}) => {
        
    
        const { cartList, agregarItem} = useContext(CartContext)

        const [valor, setValor] = useState(1)

        
        const sumarCantidad = (cantidadAgregada) => {
            setValor(cantidadAgregada)
            agregarItem({producto, cantidad: cantidadAgregada})
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



                                <div >
                                    <ItemCount  valorInicial = {valor} stock = {10}  funcion = {sumarCantidad}/>'
                                </div>
                            
                        </Card.Body>
                </Card>
            </div>
)
            
    
}
