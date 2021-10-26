import React from 'react'
import { ItemCount } from './ItemCount'
import { Card } from 'react-bootstrap'






export const Item = ({data}) => {
    console.log(data)
    return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {data.imagen} />
                <Card.Body>
                    <Card.Title>{data.nombre}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                '<ItemCount producto= {data.nombre} valorInicial = {1} stock = {10}/>'
                </Card.Body>
            </Card>
        </div>
    )
}

