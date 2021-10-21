import React from 'react'
import { Card, Button } from 'react-bootstrap'
import  '../css/itemContainer.css'
import { ItemCount } from './ItemCount'



export const ItemListContainer = ({titulo, imagen}) => {
    return (
        <div className= 'contenedor'>            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {imagen} />
                <Card.Body>
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary"><ItemCount producto= {titulo}/></Button>
                </Card.Body>
            </Card>
        </div>
    )
}
