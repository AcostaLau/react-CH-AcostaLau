import { createContext, useState } from 'react'


export const CartContext = createContext();


const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]) //adentro de este array se van a almacenar los productos del carrito 
    const [cantidad , setCantidad] = useState(1)

    const agregarItem = itemAgregado => {
        const buscarItem = cartList.find(e => e.id === itemAgregado.id)

        if (buscarItem) {
            
            setCartList(cartList)
        }
        else{
            setCartList(e => [...e, itemAgregado])
        }
    }


    const removerItem = itemSacado => {
        setCartList(
            cartList.filter(e => e.id !== itemSacado)
        )
    }

    const limpiar = () => {
        setCartList([])
    }
    console.log('hola soy cartlist dedse cartContext', cartList)


    return (
        <CartContext.Provider value = {{
            cartList,
            agregarItem,
            removerItem,
            limpiar
        }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextProvider
