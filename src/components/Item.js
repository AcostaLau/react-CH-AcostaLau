import React from 'react'
import { ItemList } from './ItemList'


const Productos = [
    {
        id: 1,
        nombre: 'Banana 1',
        imagen: 'https://www.apple.com/v/iphone/buy/h/images/overview/compare_iphone_13_pro__eh103ckbrwom_medium.jpg'
    },
    {
        id: 2,
        nombre: 'Banana 2',
        imagen: 'https://www.apple.com/v/iphone/buy/h/images/overview/compare_iphone_13__ciafj2xeuyaa_medium.jpg'
    },
    {
        id: 3,
        nombre: 'Banana 3',
        imagen: 'https://www.apple.com/v/iphone/buy/h/images/overview/compare_iphone_12__cylgkq31mbo2_medium.jpg'
    },
    {
        id: 4,
        nombre: 'Banana 4',
        imagen: 'https://www.apple.com/v/iphone/buy/h/images/overview/compare_iphone_se__f45s203j9r2i_medium.jpg'
    }
]

export const Item = () => {

    

return(
    <div>
        {Productos.map((producto) => {
            <ItemList resultado = {producto}/>
        })}
    </div>
    )

}

