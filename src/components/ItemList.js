import React from 'react'
import { Card } from 'react-bootstrap'
import  '../css/itemContainer.css'
import { ItemCount } from './ItemCount'

export const ItemList = (resultado) => {
    console.log(resultado)
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {resultado.imagen} />
                <Card.Body>
                    <Card.Title>{resultado.nombre}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                   ' <ItemCount producto= {resultado.nombre} valorInicial = {1} stock = {10}/>'
                </Card.Body>
            </Card>
        </div>
    )
}
