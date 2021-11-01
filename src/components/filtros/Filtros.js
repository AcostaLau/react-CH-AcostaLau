import React from 'react'
import { Link } from 'react-router-dom'
import './filtros.css'

export const Filtros = () => {
    return (
        <div>
            <ul className='filtrosUl'>
                <li className='filtrosLi'><Link to='/'><button className='botonFiltro'> Todas las Marcas</button></Link></li>
                <li className='filtrosLi'><Link to='/producto/adidas'><button className='botonFiltro'> adidas</button></Link></li>
                <li className='filtrosLi'><Link to='/producto/nike'><button className='botonFiltro'> nike</button></Link></li>
                <li className='filtrosLi'><Link to='/producto/jordan'><button className='botonFiltro'>jordan</button></Link></li>
            </ul>
        </div>
    )
}
