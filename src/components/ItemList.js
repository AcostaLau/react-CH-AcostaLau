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