import React from 'react'
import { useParams } from 'react-router'
import { ItemDetail } from './ItemDetail'
import { arrayProductos } from './ItemList'

export const ItemDetailCointainer = () => {

    const {idDetalle} = useParams()
    const producto = arrayProductos.find(producto => producto.id.toString() === idDetalle)
    return (
        <div>
        <ItemDetail producto={producto}/>
        </div>
    )
}
