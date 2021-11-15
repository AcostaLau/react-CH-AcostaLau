import { createContext, useState } from 'react'


export const CartContext = createContext();


const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]) //adentro de este array se van a almacenar los productos del carrito 

    const agregarItem = itemAgregado => {
        const buscarItem = cartList.find(e => e.producto.id === itemAgregado.producto.id)

        if (buscarItem) {
           buscarItem.cantidad = buscarItem.cantidad + itemAgregado.cantidad
           setCartList(cartList)
           console.log('pasa el if')
        }
        else{ 
            setCartList(previoItem => [...previoItem, itemAgregado])
            console.log('pasa el else')
        }

    }
    const removerItem = itemSacado => {
        setCartList(
            cartList.filter(e => e.producto.id !== itemSacado)
        )
    }

    const limpiarCarrito = () =>{
        setCartList([])
    }

    console.log('hola soy cartlist dedse cartContext', cartList)


    return (
        <CartContext.Provider value = {{
            cartList,
            agregarItem,
            removerItem,
            limpiarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextProvider
