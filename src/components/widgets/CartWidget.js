import { useContext } from 'react'
import imagen from "../../images/icons/cart.svg"
import { NavLink } from 'react-router-dom'
import { contexto } from "../Context";


function CartWidget() {

  const valorDelContexto = useContext(contexto)

  return (
    <div className='carrito flex'>
        <img src={imagen} alt="carrito svg"/>
        {valorDelContexto.cantidadTotal}
    </div>
  )
}

export default CartWidget