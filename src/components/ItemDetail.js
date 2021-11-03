import React from 'react'
import { Card } from 'react-bootstrap'

import '../css/itemDetail.css'

export const ItemDetail = ({producto}) => {
   
        return(
            <div>
                
                <Card style={{ width: '33rem' }}>
                        {/* llamamos a la imagen a traves de producto.imagen */}
                            <Card.Img variant="top" src= {producto.imagen} />
                        <Card.Body>
                        {/* llamamos a la imagen a traves de producto.nombre */}
                                <Card.Title>{producto.nombre}</Card.Title>
                                <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            {/* <div className='contenedorBotonesItem'>
                            <ItemCount producto= {producto.nombre} valorInicial = {1} stock = {10}/>'
                            </div>  */}
                        </Card.Body>
                </Card>
            </div>
)
            
    
}
