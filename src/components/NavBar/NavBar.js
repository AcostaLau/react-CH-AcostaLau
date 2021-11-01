import React from 'react'
import { Link } from 'react-router-dom'
import  logo  from '../../img/logo.png'
import { CartWidget } from '../CartWidget'
import './navbar.css'


export const NavBar = () => {
    return (
        <ul className='listaUl'>
            <li className='padreLogo'><img className='logoImagen' src={logo}/></li>
            <div className='divContainer'>
                <li><Link className='tamañoTexto' to='/'>Inicio</Link></li>
                <li><Link className='tamañoWidget' to='/carrito'><CartWidget/></Link></li>
            </div>            
        </ul>
    )
}
