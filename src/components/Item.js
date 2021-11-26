import React from 'react'
import { Card } from 'react-bootstrap'
import '../css/item.css'
import { Link } from 'react-router-dom'





// aca nos llega la data que le pasamos por ListItem
export const Item = ({data}) => {
    

    return(
        <>
            <Card style={{ width: '33rem' }}>
                {/* llamamos a la imagen a traves de data.imagen */}
                <Card.Img variant="top" src= {data.imagen} />
                <Card.Body>
                    {/* llamamos a la imagen a traves de data.nombre */}
                    <Card.Title>{data.nombre}</Card.Title>
                    {/* llamamos a la imagen a traves de data.nombre y ademas le pasamos como parametro eso para que pueda hacer la cuneta  */}
                    <div className='contenedorBotonesItem'>
                        <Link  to= {`/detalle/${data.id}`} ><button className='botonVerMas'>Ver mas</button></Link>
                    </div> 
                </Card.Body>
            </Card>
        </>
    )
}

