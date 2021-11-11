import React, { useState } from 'react'

import './intercambiabilidad.css'



const InputCout = () =>{
    return (<button class="fancy">
    <span class="top-key"></span>
    <p  class="">Añadir al carrito</p>
    <span class="bottom-key-1"></span>
    <span class="bottom-key-2"></span>
    </button>)
}
const ButtonCount = () =>{
    return (
        <button class="fancy">
    <span class="top-key"></span>
    <p  class="" >Finalizar Compra</p>
    <span class="bottom-key-1"></span>
    <span class="bottom-key-2"></span>
    </button>
    )
}

export const Intercambiabilidad = ({producto, agregarItem}) => {
        

        console.log(producto)
        const [InputType, setInputType] = useState('Input')

        const ultraCambio = () =>{
            setInputType('boton')
            agregarItem({producto})
        }



    return (
        <div onClick = {ultraCambio}>
            {
                InputType === 'Input' ? <InputCout/> : <ButtonCount/>
            }

        </div>
    )
}
