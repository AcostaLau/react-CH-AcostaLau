import { createContext, useState } from 'react'


export const CartContext = createContext();


const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]) //adentro de este array se van a almacenar los productos del carrito 

    const agregarItem = itemAgregado => {
        const buscarItem = cartList.find(e => e.producto.id === itemAgregado.producto.id)

        if (buscarItem) {
           buscarItem.cantidad = buscarItem.cantidad + itemAgregado.cantidad
           setCartList(cartList)
        }
        else{ 
            setCartList(previoItem => [...previoItem, itemAgregado])

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

    const sumaTotal = () => {
        const precioAcumulado = (acum, prod) => (acum + (prod.producto.precio * prod.cantidad))
        return(cartList.reduce(precioAcumulado, 0))
    }


    return (
        <CartContext.Provider value = {{
            cartList,
            sumaTotal,
            agregarItem,
            removerItem,
            limpiarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextProvider
