import { createContext, useState } from 'react'
import { Cart } from '../cart/Cart';


export const CartContext = createContext();


const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]) //adentro de este array se van a almacenar los productos del carrito 
    const [cantidad , setCantidad] = useState()

    const agregarItem = itemAgregado => {
        const buscarItem = cartList.find(e => e.id === itemAgregado.id)

        if (buscarItem) {
            
            setCartList([...cartList, itemAgregado])
            
            console.log('pasa el if')
        }
        else{ 
            setCartList(cartList)    
            console.log('pasa el else')
        }

    }
    

    const removerItem = itemSacado => {
        setCartList(
            cartList.filter(e => e.id !== itemSacado)
        )
    }

    const limpiarCarrito = () =>{
        setCartList([])
    }

    console.log('hola soy cartlist dedse cartContext', cartList)


    return (
        <CartContext.Provider value = {{
            cartList,
            cantidad,
            agregarItem,
            removerItem,
            limpiarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextProvider
