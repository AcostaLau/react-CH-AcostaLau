import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'

export const Cart = () => {
    const {cartList} = useContext(CartContext)
    console.log(cartList, 'vengo de cart')

    return (
        <>
           {cartList.map((itemAdded => <h1>{itemAdded.nombre}</h1>))}
        </>
        ) 
    
   
    
}
