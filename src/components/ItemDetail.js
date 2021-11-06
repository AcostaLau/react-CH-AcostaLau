import React from 'react'
import { Card } from 'react-bootstrap'
import {ItemCount} from './ItemCount'
import '../css/itemDetail.css'
import { Link } from 'react-router-dom'
import {Intercambiabilidad} from './intercambiabilidad/Intercambiabilidad'


export const ItemDetail = ({producto}) => {
   
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
                                    <Intercambiabilidad/>
                                </div> 
                            </div>
                            
                        </Card.Body>
                </Card>
            </div>
)
            
    
}
