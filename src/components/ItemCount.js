import React, { useState } from 'react'
import '../css/count.css'

export const ItemCount = ({producto}) => {

const [valor, setValor] = useState(1)

        const mostrarAgregado = () =>{
                console.log(`se agrego ${valor} de  ${producto} al carrito`)
        }


    const suma = () => {
            setValor(valor + 1)
            mostrarAgregado()
        
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
