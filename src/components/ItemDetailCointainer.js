import React from 'react'
import { ItemDetail } from './ItemDetail'
export const ItemDetailCointainer = (producto) => {
    return (
        <div>
        <ItemDetail data={producto}/>
        </div>
    )
}
