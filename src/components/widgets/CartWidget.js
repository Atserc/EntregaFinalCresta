import { useContext } from 'react'
import imagen from "../../images/icons/cart.svg"
import { contexto } from "../Context";


function CartWidget() {

  const valorDelContexto = useContext(contexto)

  return (
    <div className={valorDelContexto.dark ? 'carritoDark flex' : 'carritoLight flex' }>
        <img src={imagen} alt="carrito svg"/>
        {valorDelContexto.cantidadTotal}
    </div>
  )
}

export default CartWidget