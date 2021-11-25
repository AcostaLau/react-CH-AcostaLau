import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'; 
import { Link } from 'react-router-dom';
import '../css/cartwidget.css'
import { CartContext } from './context/CartContext';

export const CartWidget = () => {
    const {cartList} = useContext(CartContext)
    
    return (
        <div>
            {cartList.length
            ? <div>
            <Link to="/cart" className='containerCartWidget'>
                <AiOutlineShoppingCart className='cartWidget' />
                <p className='cantidad'>{cartList.length}</p>
            </Link>
            </div>
            :   <Link to="/cart" className='containerCartWidget'>
                    <AiOutlineShoppingCart className='cartWidget' />
                </Link>
        }
        </div>
        
        
    )
}


