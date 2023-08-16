import CartWidget from './CartWidget'
import DarkLight from './DarkLight'
import { NavLink } from 'react-router-dom'

function NavBar() {
    const espaciado = "py-2 px-2" 
    return (
        <nav id="BarraNav" className="flex items-center">
            <NavLink to="/" className={espaciado}>
                Inicio
            </NavLink>
            <NavLink to="/Productos" className={espaciado}>
                Productos
            </NavLink>
            <DarkLight />
            <NavLink to="/Carrito" className={espaciado}>
                <CartWidget />
            </NavLink>
        </nav>
    )
}

export default NavBar