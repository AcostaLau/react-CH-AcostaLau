import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'; 
import { Link } from 'react-router-dom';
import '../css/cartwidget.css'

export const CartWidget = () => {
    
    
    return (
        <Link to="/cart">
            <AiOutlineShoppingCart className='cartWidget' />
        </Link>
    )
}


