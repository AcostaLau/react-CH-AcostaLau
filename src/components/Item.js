import React from 'react'
import { ItemCount } from './ItemCount'
import { Card } from 'react-bootstrap'
import '../css/item.css'




// aca nos llega la data que le pasamos por ListItem
export const Item = ({data}) => {
    console.log('verificacion de que llega la data ', data)
    return(
        <div>
            <Card style={{ width: '33rem' }}>
                {/* llamamos a la imagen a traves de data.imagen */}
                <Card.Img variant="top" src= {data.imagen} />
                <Card.Body>
                    {/* llamamos a la imagen a traves de data.nombre */}
                    <Card.Title>{data.nombre}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    {/* llamamos a la imagen a traves de data.nombre y ademas le pasamos como parametro eso para que pueda hacer la cuneta  */}
                '<ItemCount producto= {data.nombre} valorInicial = {1} stock = {10}/>'
                </Card.Body>
            </Card>
        </div>
    )
}

