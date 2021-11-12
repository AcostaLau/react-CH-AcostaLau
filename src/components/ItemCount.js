import React, { useState } from 'react'
import '../css/count.css'


// ESTOS PARAMETROS LLEGAN DE ItemList.js
export const ItemCount = ({producto, valorInicial, stock, cantidad}) => {
      
        const [valor, setValor] = useState(valorInicial)

        const mostrarAgregado = () =>{
                console.log(`se agrego ${valor} de  ${producto} al carrito`)
                cantidad(valor)
        }


    const suma = () => {
        if(valor === stock){
            return valor
        }else{
            setValor(valor + 1)
            mostrarAgregado()
        }
    }
    const resta = () => {
        if(valor === 0){
            return valor
        }
        else{
            setValor(valor - 1)
            
        }   
    }



    return (
        <div className='contenedorBoton'>
            <button onClick={suma} className= 'suma'>+</button>
            <p>{valor}</p>
            <button onClick={resta} className='resta'>-</button>
        </div>
    )
}
