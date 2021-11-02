import React from 'react'
import { Card } from 'react-bootstrap'

import '../css/itemDetail.css'

export const ItemDetail = ({producto}) => {

            <div>
            <Card style={{ width: '33rem' }}>
                {/* llamamos a la imagen a traves de data.imagen */}
                <Card.Img variant="top" src= {producto.imagen} />
                <Card.Body>
                    {/* llamamos a la imagen a traves de data.nombre */}
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    {/* llamamos a la imagen a traves de data.nombre y ademas le pasamos como parametro eso para que pueda hacer la cuneta  */}
                    {/* <div className='contenedorBotonesItem'>
                        <ItemCount producto= {data.nombre} valorInicial = {1} stock = {10}/>'
                        <Link  to='/detalle'><button className='botonVerMas'>Ver mas</button></Link>
                    </div>  */}
                </Card.Body>
            </Card>
        </div>
    
}
