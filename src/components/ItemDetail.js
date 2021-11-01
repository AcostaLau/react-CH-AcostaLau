import React, {useState, useEffect} from 'react'

import '../css/itemDetail.css'

export const ItemDetail = () => {
const [producto, setProducto] = useState([]);

const getProducto = () =>{
    setTimeout(() =>{
        setProducto([{
            id: 6,
            nombre: 'Banana 1',
            imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/160/313/products/ttt1-0f57261c4cf9edbacc16341000430372-480-0.jpeg'}])
    }, 4000)
}


useEffect(() => {
const newPromise = new Promise((res, rej) =>{
    res(getProducto())
})

newPromise
.then((resultado) => console.log(resultado))
.catch((reject) => console.log(reject))
}, [])
    return (
        
            <ul>
            {producto.map((productos) =>{
                return(
                
                    <li className='tamañoLetra' key={productos.id}>
                        {productos.nombre}
                    </li>
                
                
                )
            })}
        </ul>
           
    )
}
