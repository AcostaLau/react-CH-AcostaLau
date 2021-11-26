
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
            ?<div className='separoBotones'>
                <Link to="/cart" class="fancy" href="#">
                    <span class="top-key"></span>
                    <span class="text">Terminar compra</span>
                    <span class="bottom-key-1"></span>
                    <span class="bottom-key-2"></span>
                </Link>

                <Link to="/" class="fancy" href="#">
                    <span class="top-key"></span>
                    <span class="text">
                    Seguir comprando
                    </span>
                    <span class="bottom-key-1"></span>
                    <span class="bottom-key-2"></span>
                </Link>
                
            </div> 
            

            : 
            <div className='contenedorBoton'>
                <button onClick={suma} className= 'sumaYResta'>+</button>
                <p>{cantidad}</p>
                <button onClick={resta} className='sumaYResta'>-</button>
                <button class="cta">
                    <span class="hover-underline-animation" onClick={addToCartHandler}> Agregar al carrito </span>
                    <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                    <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                    </svg>
                </button>
                
            </div>
            
            }
        </div>
        
    )
}
