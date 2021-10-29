import React, {useState, useEffect} from 'react'
import  '../css/itemContainer.css'
import { Item } from './Item'



export const ItemList = () => {

    // declaramos un array vacio el cual se va a rellenar con el array de objetos una vez que la funtion getProductos sea activada
    const [productos, setProductos] = useState([])
    // usamo el useEffect para que solo se ejecute una vez sola 
    useEffect(() => {
        
    // declaramos un promise para que la function getProductos sea activada una vez que la info llega
        const getPromise = new Promise((res, rej) =>{
            res(getProductos());
        })
    
        getPromise
        .then((resultado) => console.log(resultado))
        .catch((reject) => console.log(reject))
    }, [])
    const getProductos = () =>{
        setTimeout(() =>{
            // ponemos setProductos ya que cuando getProductos sea activado el useState cambiara con este array de objetos
            setProductos([{
                id: 1,
                nombre: 'Banana 1',
                imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/160/313/products/ttt1-0f57261c4cf9edbacc16341000430372-480-0.jpeg'
            },
            {
                id: 2,
                nombre: 'Banana 2',
                imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/160/313/products/rrrrrrrrrr1-fb54b349ac3b8607bc16340995761219-480-0.jpeg'
            },
            {
                id: 3,
                nombre: 'Banana 3',
                imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/160/313/products/qqqqqqqq1-c31bc50b148f3d05fb16340994341010-480-0.jpeg'
            },
            {
                id: 4,
                nombre: 'Banana 4',
                imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/160/313/products/lll-a5921ff69d774bb1ff16340977707425-480-0.jpeg'
            }])
        }, 2000)
    }
   
// toda esta info llega a Item que es el componente que tiene la card para poder darle forma a estos objetos
    return (
        // a 'productos' que ahora contiene el array de objetos le realizamos un map.
        productos.map((product) =>{
            return(
                // a este map le pasamos el id y por data le pasamos todo el objeto.
                <Item key={product.id} data = {product}></Item>
            )
        })
    )
}