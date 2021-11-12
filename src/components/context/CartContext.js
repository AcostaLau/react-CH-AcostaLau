import { createContext, useState } from 'react'


export const CartContext = createContext();


const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]) //adentro de este array se van a almacenar los productos del carrito 
    const [cantidad, setCantidad] = useState(0)

    const agregarItem = itemAgregado => {
        const buscarItem = cartList.find(e => e.id === itemAgregado.id)

        if (!buscarItem) {
            setCartList([...cartList, itemAgregado])
            
            console.log('pasa el if')
        }
        else{ 
            alert('duplicado')
            console.log('pasa el else')
        }

    }
    
    const cantidadAgregada = e => {
        setCantidad(e)
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
            cantidadAgregada,
            agregarItem,
            removerItem,
            limpiarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextProvider
