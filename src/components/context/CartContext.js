import { createContext, useState } from 'react'


export const CartContext = createContext();


const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]) //adentro de este array se van a almacenar los productos del carrito 


    const agregarProducto = productoEncontrado =>{
        const buscarProducto = cartList.find(e => e.id === productoEncontrado.id)
        if(buscarProducto){
            return cartList
        }else{
            setCartList([...cartList, buscarProducto])
        }       
    }

    console.log('hola soy cartlist dedse cartContext', cartList)


    return (
        <CartContext.Provider value = {{
            cartList,
            agregarProducto
        }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextProvider
