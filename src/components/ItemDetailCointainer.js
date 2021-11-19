import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getFirebase } from './firebase/getFirebase'
import { ItemDetail } from './ItemDetail'


export const ItemDetailCointainer = () => {
    const [product, setProducto] = useState([])
    const {idProducto} = useParams()

    useEffect(() => {
        
        const db = getFirebase()
        const dbQuery = db.collection('Items').doc(idProducto).get()

        dbQuery
        .then(resp => setProducto( { id: resp.id, ...resp.data() } ) )
        .catch(err => alert(`error ${err}`))

        console.log(product, 'hola  ')
        }, [])
            

    return (
        <div>
        <ItemDetail producto={product}/>
        </div>
    )
}
