import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { getFirebase } from './firebase/getFirebase';
import { Item } from './Item'
import '../css/itemList.css'

export let titulo = '';
export const ItemList = () => {

    // declaramos un array vacio el cual se va a rellenar con el array de objetos una vez que la funtion getProductos sea activada
    const [productos, setProductos] = useState([])

    const { idProducto } = useParams()
    
    // usamo el useEffect para que solo se ejecute una vez sola 
    useEffect(() => {
        
        const db = getFirebase()
        const dbQuery = idProducto ? db.collection('Items').where('categoria', '==', idProducto).get() : db.collection('Items').get()
        
        dbQuery
        .then(resp => setProductos( resp.docs.map( prod => ( { id: prod.id, ...prod.data() } ) ) ) )
        }, [idProducto])

    
// toda esta info llega a Item que es el componente que tiene la card para poder darle forma a estos objetos
    return (

        // a 'productos' que ahora contiene el array de objetos le realizamos un map.
        
        productos.map((product) =>{
            
            return(
                    <>
                        <Item key={product.id} data = {product}></Item>
                    </>
                        
                    
                // a este map le pasamos el id y por data le pasamos todo el objeto.
                
            )
        })

    )
}