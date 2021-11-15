
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/count.css'


// ESTOS PARAMETROS LLEGAN DE ItemList.js
export const ItemCount = ({ valorInicial, stock,  funcion}) => {
    const [cantidad, setCantidad] = useState(valorInicial)
    const [prendido, setOn] = useState(false)

    const suma = () => {
        if(cantidad === stock){
            return cantidad
        }else{
            setCantidad(cantidad + 1)
        }
    }
    const resta = () => {
        if(cantidad === 1){
            return cantidad
        }
        else{
            setCantidad(cantidad - 1)
        }
    }

    const addToCartHandler = () =>{
        setOn(true)
        funcion(cantidad)
    }

    return (
        <div>
           

            {prendido 
            ?<div>
                <Link to="/cart"><button className='quantity-add'>Terminar compra</button></Link> 
                <Link to="/"><button className='quantity-add'>Seguir comprando</button></Link>
            </div> 
            

            : 
            <div className='contenedorBoton'>
                <button onClick={suma} className= 'suma'>+</button>
                <p>{cantidad}</p>
                <button onClick={resta} className='resta'>-</button>
                <button className="quantity-add" onClick={addToCartHandler}>Agregar al carrito</button>
            </div>
            
            }
        </div>
        
    )
}
