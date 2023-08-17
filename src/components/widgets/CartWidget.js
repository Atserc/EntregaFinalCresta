import React from 'react'
import imagen from "../../images/icons/cart.svg"
import { NavLink } from 'react-router-dom'

function CartWidget() {
  return (
    <NavLink to="/Carrito" className='carrito flex'>
        <img src={imagen} alt="carrito svg"/>
        <p>0</p>
    </NavLink>
  )
}

export default CartWidget