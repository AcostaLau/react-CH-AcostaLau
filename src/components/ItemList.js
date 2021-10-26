import React, {useState} from 'react'
import  '../css/itemContainer.css'
import { Item } from './Item'



// const Productos = [
    
// ]

// RESULTADO VIENE DE ITEM.JS
export const ItemList = () => {
    const [productos, setProductos] = useState([])
    const getProductos = () =>{
        setTimeout(() =>{
            setProductos([{
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
            }])
        }, 2000)
    }

    const getPromise = new Promise((res, rej) =>{
        res(getProductos());
    })

    getPromise
    .then((resultado) => console.log(resultado))
    .catch((reject) => console.log(reject))

    return (
        productos.map((product) =>{
            console.log('product', product)
            return(
                <Item key={product.id} data = {product}></Item>
            )
        })
    )
}