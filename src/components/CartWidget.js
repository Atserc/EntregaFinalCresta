import React from 'react'
import imagen from "../images/icons/cart.svg"

function CartWidget() {
  return (
    <div className='carrito flex'>
        <img src={imagen} alt="carrito svg"/>
        <p>0</p>
    </div>
  )
}

export default CartWidget